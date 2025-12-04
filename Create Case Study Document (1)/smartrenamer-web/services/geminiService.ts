import { GoogleGenAI, Type } from "@google/genai";
import { AppSettings } from "../types";

// Helper to convert file to Base64
const fileToGenerativePart = async (file: File): Promise<{ inlineData: { data: string; mimeType: string } }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      const base64Content = base64String.split(',')[1];
      resolve({
        inlineData: {
          data: base64Content,
          mimeType: file.type,
        },
      });
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const generateFileName = async (file: File, settings: AppSettings): Promise<{ filename: string; tags: string[] }> => {
  try {
    const apiKey = settings.apiKey;
    if (!apiKey) {
      throw new Error("API Key not found. Please add your API Key in Settings.");
    }
    const ai = new GoogleGenAI({ apiKey });

    const imagePart = await fileToGenerativePart(file);

    let separatorChar = '-';
    switch (settings.separator) {
      case 'underscore': separatorChar = '_'; break;
      case 'space': separatorChar = ' '; break;
      case 'none': separatorChar = ''; break;
    }

    const prompt = `
      Analyze this image and generate a descriptive filename and 3 relevant tags.
      
      Naming Rules:
      1. Use only alphanumeric characters and the separator character.
      2. Separator: Use '${settings.separator}' (character: '${separatorChar}') between words.
      3. Casing: ${settings.casing}.
      4. Extension: Do not include the file extension in the filename field.
      5. Tone/Style: ${settings.customInstructions || "Descriptive, concise, professional"}.
      
      If the image contains text that looks like a document title, prioritize that.
      If it's a photo, describe the main subject (e.g., 'sunset-beach', 'office-meeting').
    `;

    const responseSchema = {
      type: Type.OBJECT,
      properties: {
        filename: { type: Type.STRING, description: "The generated filename without extension" },
        tags: { type: Type.ARRAY, items: { type: Type.STRING }, description: "3 relevant short tags" }
      },
      required: ["filename", "tags"]
    };

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: {
        parts: [imagePart, { text: prompt }]
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      }
    });

    const jsonText = response.text || "{}";
    const data = JSON.parse(jsonText);

    return {
      filename: data.filename || "unnamed-file",
      tags: data.tags || []
    };

  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      filename: `error-${Date.now()}`,
      tags: ["error"]
    };
  }
};
