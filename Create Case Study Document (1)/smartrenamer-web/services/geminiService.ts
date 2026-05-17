import { GoogleGenAI, Type } from "@google/genai";
import { AppSettings } from "../types";

const MAX_IMAGE_DIMENSION = 768;
const JPEG_QUALITY = 0.72;

// Helper to downscale images before Gemini. This keeps each request cheaper and smaller.
const fileToGenerativePart = async (file: File): Promise<{ inlineData: { data: string; mimeType: string } }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = async () => {
      try {
        const image = new Image();
        image.onload = () => {
          const scale = Math.min(1, MAX_IMAGE_DIMENSION / Math.max(image.width, image.height));
          const width = Math.max(1, Math.round(image.width * scale));
          const height = Math.max(1, Math.round(image.height * scale));
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const context = canvas.getContext('2d');
          if (!context) {
            reject(new Error('Could not prepare image for Gemini.'));
            return;
          }
          context.fillStyle = '#ffffff';
          context.fillRect(0, 0, width, height);
          context.drawImage(image, 0, 0, width, height);
          const dataUrl = canvas.toDataURL('image/jpeg', JPEG_QUALITY);
          resolve({
            inlineData: {
              data: dataUrl.split(',')[1],
              mimeType: 'image/jpeg',
            },
          });
        };
        image.onerror = () => reject(new Error('Could not read image.'));
        image.src = reader.result as string;
      } catch (error) {
        reject(error);
      }
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const generateFileName = async (file: File, settings: AppSettings): Promise<{ filename: string; tags: string[] }> => {
  try {
    const imagePart = await fileToGenerativePart(file);

    if (!settings.apiKey || settings.apiKey.trim() === '') {
      const response = await fetch('/api/smart-renamer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          image: {
            data: imagePart.inlineData.data,
            mimeType: imagePart.inlineData.mimeType,
          },
          settings,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'SmartRenamer API request failed');
      }
      return {
        filename: data.filename || "unnamed-file",
        tags: data.tags || []
      };
    }

    const ai = new GoogleGenAI({ apiKey: settings.apiKey });

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
        maxOutputTokens: 128,
        temperature: 0.2,
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
    throw error;
  }
};

