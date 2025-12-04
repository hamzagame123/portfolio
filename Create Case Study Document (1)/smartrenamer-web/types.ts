export interface FileRecord {
  id: string;
  file: File;
  originalName: string;
  newName?: string;
  tags: string[];
  status: 'queued' | 'processing' | 'completed' | 'error';
  thumbnailUrl: string;
  timestamp: number;
  selected?: boolean;
  errorMsg?: string;
}

export type SeparatorType = 'dash' | 'underscore' | 'space' | 'none';
export type CasingType = 'uppercase' | 'lowercase' | 'capitalized';

export interface AppSettings {
  autoProcess: boolean; // Replaces "watchFolders" for web
  skipNormalNames: boolean;
  enableTagging: boolean;
  separator: SeparatorType;
  casing: CasingType;
  customInstructions: string;
  folders: string[]; // Kept for UI compatibility, though strictly web apps handle folders differently
  apiKey: string;
}

export const EMBEDDED_GEMINI_API_KEY = 'AIzaSyBtDYx08bA6GPGYp_RpEwSM-_ePeyd-T28';

export const DEFAULT_SETTINGS: AppSettings = {
  autoProcess: true,
  skipNormalNames: false,
  enableTagging: true,
  separator: 'dash',
  casing: 'lowercase',
  customInstructions: '',
  folders: ['Downloads', 'Pictures/Screenshots'],
  apiKey: EMBEDDED_GEMINI_API_KEY
};
