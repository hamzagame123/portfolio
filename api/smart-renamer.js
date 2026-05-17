function buildPrompt(settings = {}) {
  const separatorMap = {
    underscore: '_',
    space: ' ',
    none: '',
    dash: '-',
  };
  const separator = settings.separator || 'dash';
  const separatorChar = separatorMap[separator] ?? '-';
  const casing = settings.casing || 'lowercase';
  const customInstructions = settings.customInstructions || 'Descriptive, concise, professional';

  return `
Analyze this image and generate a concise descriptive filename plus exactly 3 relevant tags.

Return JSON only:
{"filename":"descriptive-name","tags":["tag-one","tag-two","tag-three"]}

Rules:
1. Use only alphanumeric characters and the separator character.
2. Separator: '${separatorChar}'.
3. Casing: ${casing}.
4. Do not include the file extension.
5. Style: ${customInstructions}.
`;
}

function cleanJsonText(text) {
  const cleaned = String(text || '{}')
    .replace(/^```json\s*/i, '')
    .replace(/^```\s*/i, '')
    .replace(/\s*```$/i, '')
    .trim();
  const objectMatch = cleaned.match(/\{[\s\S]*\}/);
  return objectMatch ? objectMatch[0] : cleaned;
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    return response.status(500).json({ error: 'Gemini API key is not configured.' });
  }

  try {
    const { image, settings } = request.body || {};
    if (!image?.data || !image?.mimeType) {
      return response.status(400).json({ error: 'Missing image data.' });
    }

    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${encodeURIComponent(apiKey)}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  inline_data: {
                    data: image.data,
                    mime_type: image.mimeType,
                  },
                },
                { text: buildPrompt(settings) },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.2,
            maxOutputTokens: 128,
            responseMimeType: 'application/json',
            responseSchema: {
              type: 'OBJECT',
              properties: {
                filename: { type: 'STRING' },
                tags: {
                  type: 'ARRAY',
                  items: { type: 'STRING' },
                },
              },
              required: ['filename', 'tags'],
            },
          },
        }),
      }
    );

    const payload = await geminiResponse.json();
    if (!geminiResponse.ok) {
      return response.status(geminiResponse.status).json({
        error: payload?.error?.message || 'Gemini request failed.',
      });
    }

    const text = payload?.candidates?.[0]?.content?.parts?.[0]?.text;
    const parsed = JSON.parse(cleanJsonText(text));

    return response.status(200).json({
      filename: parsed.filename || 'unnamed-file',
      tags: Array.isArray(parsed.tags) ? parsed.tags.slice(0, 3) : [],
    });
  } catch (error) {
    return response.status(500).json({
      error: error instanceof Error ? error.message : 'SmartRenamer failed.',
    });
  }
}
