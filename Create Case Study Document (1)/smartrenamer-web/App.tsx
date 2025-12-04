import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  Settings, Folder, FileText, Eye, Check, Play, RotateCcw,
  RotateCw, Trash, Search, UploadCloud, Download, X,
  Loader2, FileIcon, Image as ImageIcon, CheckSquare, Square
} from 'lucide-react';
import SettingsModal from './components/SettingsModal';
import { FileRecord, AppSettings, DEFAULT_SETTINGS, EMBEDDED_GEMINI_API_KEY } from './types';
import { generateFileName } from './services/geminiService';

const App: React.FC = () => {
  // -- State --
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settings, setSettings] = useState<AppSettings>(() => {
    const saved = localStorage.getItem('smartrenamer_settings');
    const initial = saved ? JSON.parse(saved) : { ...DEFAULT_SETTINGS };
    if (!initial.apiKey) {
      initial.apiKey = EMBEDDED_GEMINI_API_KEY;
    }
    return initial;
  });

  useEffect(() => {
    localStorage.setItem('smartrenamer_settings', JSON.stringify(settings));
  }, [settings]);

  const [files, setFiles] = useState<FileRecord[]>([]);
  const [selectedFileId, setSelectedFileId] = useState<string | null>(null);
  const [selection, setSelection] = useState<Set<string>>(new Set());

  const [searchQuery, setSearchQuery] = useState('');
  const [activeTagFilter, setActiveTagFilter] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);

  // Refs
  const fileInputRef = useRef<HTMLInputElement>(null);
  const folderInputRef = useRef<HTMLInputElement>(null);

  // -- Derived Lists --
  const queue = files.filter(f => f.status === 'queued' || f.status === 'processing');

  const history = files.filter(f => f.status === 'completed' || f.status === 'error').sort((a, b) => b.timestamp - a.timestamp);

  const filteredHistory = history.filter(f => {
    const matchesSearch =
      f.originalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (f.newName && f.newName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      f.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTag = activeTagFilter ? f.tags.includes(activeTagFilter) : true;

    return matchesSearch && matchesTag;
  });

  const selectedFile = files.find(f => f.id === selectedFileId) || (history.length > 0 ? history[0] : null);

  // -- Actions --

  const processFiles = async (recordsToProcess: FileRecord[]) => {
    // First update status to processing
    setFiles(prev => prev.map(f =>
      recordsToProcess.find(r => r.id === f.id)
        ? { ...f, status: 'processing' }
        : f
    ));

    // Process sequentially to be nice to the browser and API
    for (const record of recordsToProcess) {
      try {
        const result = await generateFileName(record.file, settings);

        setFiles(prev => prev.map(f => {
          if (f.id === record.id) {
            const extension = f.originalName.split('.').pop();
            return {
              ...f,
              status: 'completed',
              newName: `${result.filename}.${extension}`,
              tags: result.tags
            };
          }
          return f;
        }));
      } catch (err) {
        console.error(err);
        setFiles(prev => prev.map(f => f.id === record.id ? { ...f, status: 'error', errorMsg: "Failed to rename" } : f));
      }
    }
  };

  const handleFilesAdded = (fileList: FileList | null) => {
    if (!fileList) return;

    const newRecords: FileRecord[] = Array.from(fileList)
      .filter(f => f.type.startsWith('image/'))
      .map(f => ({
        id: Math.random().toString(36).substring(7),
        file: f,
        originalName: f.name,
        tags: [],
        status: 'queued',
        thumbnailUrl: URL.createObjectURL(f),
        timestamp: Date.now(),
        selected: false
      }));

    if (newRecords.length > 0) {
      setFiles(prev => [...newRecords, ...prev]);
      setSelectedFileId(newRecords[0].id);

      if (settings.autoProcess) {
        processFiles(newRecords);
      }
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    handleFilesAdded(e.dataTransfer.files);
  };

  // -- Web Service Specific Logic --

  const downloadFile = (record: FileRecord) => {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(record.file);
    link.download = record.newName || record.originalName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadSelected = () => {
    const itemsToDownload = history.filter(f => selection.has(f.id));
    if (itemsToDownload.length === 0) return;

    if (itemsToDownload.length > 5 && !window.confirm(`Download ${itemsToDownload.length} files? This might prompt your browser multiple times.`)) {
      return;
    }

    itemsToDownload.forEach((file, index) => {
      setTimeout(() => downloadFile(file), index * 200);
    });
  };

  const toggleSelection = (id: string) => {
    const newSet = new Set(selection);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelection(newSet);
  };

  const toggleSelectAll = () => {
    if (selection.size === filteredHistory.length && filteredHistory.length > 0) {
      setSelection(new Set());
    } else {
      setSelection(new Set(filteredHistory.map(f => f.id)));
    }
  };

  const clearHistory = () => {
    if (window.confirm("Are you sure you want to clear all history?")) {
      setFiles(prev => prev.filter(f => f.status !== 'completed' && f.status !== 'error'));
      setSelection(new Set());
      setSelectedFileId(null);
    }
  };

  // -- UI Components --

  return (
    <div className="min-h-screen bg-[#121212] text-slate-300 font-sans flex flex-col overflow-hidden">
      <SettingsModal
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        settings={settings}
        onUpdateSettings={setSettings}
      />

      {/* Top Navigation Bar */}
      <header className="h-16 bg-[#18181b] border-b border-slate-800 flex items-center px-6 justify-between shrink-0 z-10">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-lime-400 to-lime-600 rounded-lg flex items-center justify-center shadow-lg shadow-lime-500/20">
              <FileText className="w-5 h-5 text-slate-900" />
            </div>
            <h1 className="font-bold text-lg text-slate-100 tracking-tight">Smart<span className="text-lime-400">Renamer</span></h1>
          </div>

          <div className="h-6 w-px bg-slate-800" />

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSettingsOpen(true)}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-3 py-2 rounded-lg font-medium text-sm transition-all flex items-center gap-2 border border-slate-700 hover:border-slate-600"
            >
              <Settings className="w-4 h-4" /> Settings
            </button>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-3 py-2 rounded-lg font-medium text-sm transition-all flex items-center gap-2 border border-slate-700 hover:border-slate-600"
            >
              <FileText className="w-4 h-4" /> Select Files
            </button>
            <input type="file" ref={fileInputRef} className="hidden" multiple accept="image/*" onChange={(e) => handleFilesAdded(e.target.files)} />

            <button
              onClick={() => folderInputRef.current?.click()}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-3 py-2 rounded-lg font-medium text-sm transition-all flex items-center gap-2 border border-slate-700 hover:border-slate-600"
            >
              <Folder className="w-4 h-4" /> Select Folder
            </button>
            <input type="file" ref={folderInputRef} className="hidden" webkitdirectory="" onChange={(e) => handleFilesAdded(e.target.files)} />
          </div>
        </div>

        <div className="flex items-center gap-2">
          {selection.size > 0 && (
            <button
              onClick={downloadSelected}
              className="bg-lime-500 hover:bg-lime-400 text-slate-900 px-4 py-2 rounded-lg font-bold text-sm transition-all flex items-center gap-2 shadow-lg shadow-lime-900/20 animate-in fade-in slide-in-from-right-4"
            >
              <Download className="w-4 h-4" /> Download Selected ({selection.size})
            </button>
          )}
        </div>
      </header>

      {/* Main Workspace */}
      <div className="flex flex-1 overflow-hidden">

        {/* LEFT PANEL: HISTORY */}
        <aside className="w-[400px] bg-[#151518] border-r border-slate-800 flex flex-col shrink-0 z-0">
          {/* Search & Filter Header */}
          <div className="p-4 border-b border-slate-800 bg-[#18181b]/50 backdrop-blur space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                History
                <span className="bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded-full text-[10px]">{filteredHistory.length}</span>
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={toggleSelectAll}
                  className="text-xs text-slate-400 hover:text-lime-400 transition-colors flex items-center gap-1"
                >
                  {selection.size === filteredHistory.length && filteredHistory.length > 0 ? <CheckSquare className="w-3 h-3" /> : <Square className="w-3 h-3" />}
                  {selection.size === filteredHistory.length && filteredHistory.length > 0 ? 'Deselect All' : 'Select All'}
                </button>
                <button onClick={clearHistory} className="text-xs text-red-400 hover:text-red-300 transition-colors">Clear</button>
              </div>
            </div>

            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-lime-400 transition-colors" />
              <input
                type="text"
                placeholder="Search files..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0f0f10] border border-slate-700 rounded-lg py-2 pl-9 pr-3 text-sm text-slate-200 focus:border-lime-500 focus:ring-1 focus:ring-lime-500 outline-none transition-all placeholder-slate-600"
              />
            </div>

            {activeTagFilter && (
              <div className="flex items-center justify-between bg-lime-500/10 border border-lime-500/20 px-2 py-1.5 rounded text-xs text-lime-300">
                <span>Filtering by: <strong>#{activeTagFilter}</strong></span>
                <button onClick={() => setActiveTagFilter(null)} className="hover:bg-lime-500/20 p-0.5 rounded"><X className="w-3 h-3" /></button>
              </div>
            )}
          </div>

          {/* History List */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar">
            {filteredHistory.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-slate-600 p-8 text-center">
                <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-4">
                  <RotateCcw className="w-6 h-6 opacity-50" />
                </div>
                <p className="text-sm font-medium mb-1">No history found</p>
                <p className="text-xs text-slate-500">Processed files will appear here.</p>
              </div>
            )}

            {filteredHistory.map((file) => (
              <div
                key={file.id}
                onClick={() => setSelectedFileId(file.id)}
                className={`group relative p-2 rounded-lg border transition-all cursor-pointer flex gap-3 items-start hover:bg-[#1e1e24] ${selectedFileId === file.id ? 'bg-[#1e1e24] border-slate-600' : 'bg-transparent border-transparent hover:border-slate-700/50'}`}
              >
                {/* Selection Checkbox */}
                <div className="pt-2 pl-1" onClick={(e) => { e.stopPropagation(); toggleSelection(file.id); }}>
                  <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selection.has(file.id) ? 'bg-lime-500 border-lime-500' : 'border-slate-600 hover:border-lime-400 bg-slate-800/50'}`}>
                    {selection.has(file.id) && <Check className="w-3 h-3 text-slate-900" />}
                  </div>
                </div>

                {/* Thumbnail */}
                <div className="w-16 h-16 rounded bg-black/40 border border-slate-800 overflow-hidden shrink-0 relative">
                  <img src={file.thumbnailUrl} alt="" className="w-full h-full object-cover" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="flex justify-between items-start">
                    <div className={`text-sm font-bold truncate pr-2 ${selectedFileId === file.id ? 'text-white' : 'text-slate-300'}`}>
                      {file.newName}
                    </div>
                    {/* Quick Download Button */}
                    <button
                      onClick={(e) => { e.stopPropagation(); downloadFile(file); }}
                      className="text-slate-500 hover:text-lime-400 p-1 rounded hover:bg-slate-700 transition-colors opacity-0 group-hover:opacity-100"
                      title="Download"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="text-xs text-slate-500 truncate mb-1.5" title={file.originalName}>
                    {file.originalName}
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {file.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        onClick={(e) => { e.stopPropagation(); setActiveTagFilter(tag); }}
                        className="text-[10px] px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-400 hover:text-lime-300 hover:border-lime-500/30 hover:bg-lime-500/10 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* CENTER: PREVIEW */}
        <main className="flex-1 bg-[#0e0e10] flex flex-col relative min-w-[400px]">
          {selectedFile ? (
            <>
              <div className="flex-1 p-8 flex flex-col items-center justify-center overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={selectedFile.thumbnailUrl}
                    alt="Preview"
                    className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
                  />
                </div>
              </div>

              {/* Bottom Bar for Selected File */}
              <div className="h-auto min-h-[140px] bg-[#18181b] border-t border-slate-800 p-6 flex items-start justify-between gap-6 shrink-0">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Generated Name</span>
                    {selectedFile.status === 'completed' && <Check className="w-3 h-3 text-lime-500" />}
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <input
                        type="text"
                        value={selectedFile.newName || "Generating..."}
                        readOnly
                        className="w-full bg-[#0f0f10] border border-slate-700 rounded text-xl font-mono text-lime-400 px-3 py-2 focus:outline-none focus:border-lime-500"
                      />
                    </div>
                    <button
                      onClick={() => downloadFile(selectedFile)}
                      className="bg-lime-500 hover:bg-lime-400 text-slate-900 px-6 rounded font-bold flex items-center gap-2 transition-colors shadow-lg shadow-lime-900/20"
                    >
                      <Download className="w-4 h-4" /> Download
                    </button>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">Tags:</span>
                    {selectedFile.tags.map(tag => (
                      <span key={tag} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700">#{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="w-64 border-l border-slate-800 pl-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Metadata</div>
                    <div className="space-y-2 text-xs text-slate-400">
                      <div className="flex justify-between"><span>Original:</span> <span className="truncate w-32 text-right" title={selectedFile.originalName}>{selectedFile.originalName}</span></div>
                      <div className="flex justify-between"><span>Size:</span> <span>{(selectedFile.file.size / 1024).toFixed(1)} KB</span></div>
                      <div className="flex justify-between"><span>Type:</span> <span>{selectedFile.file.type.split('/')[1].toUpperCase()}</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-slate-600">
              <div className="w-24 h-24 rounded-2xl bg-[#18181b] flex items-center justify-center mb-6 border border-slate-800">
                <ImageIcon className="w-10 h-10 opacity-20" />
              </div>
              <h2 className="text-xl font-medium text-slate-400 mb-2">No Image Selected</h2>
              <p className="text-slate-500 max-w-xs text-center">Select an image from the history or queue to preview and download.</p>
            </div>
          )}
        </main>

        {/* RIGHT PANEL: QUEUE */}
        <aside className="w-[320px] bg-[#151518] border-l border-slate-800 flex flex-col shrink-0 z-0">
          <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-[#18181b]/50 backdrop-blur">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
              Queue
              {queue.length > 0 && <span className="bg-lime-500/20 text-lime-400 px-1.5 py-0.5 rounded-full text-[10px] border border-lime-500/20">{queue.length}</span>}
            </h3>

            {!settings.autoProcess && queue.length > 0 && (
              <button
                onClick={() => processFiles(queue.filter(f => f.status === 'queued'))}
                className="text-xs bg-lime-500 text-slate-900 px-2 py-1 rounded font-bold flex items-center gap-1 hover:bg-lime-400"
              >
                <Play className="w-3 h-3" /> Start
              </button>
            )}
          </div>

          <div className="flex-1 overflow-y-auto p-2 space-y-2 custom-scrollbar bg-black/20">
            {queue.length === 0 && (
              <div className="h-32 flex flex-col items-center justify-center text-slate-600 mt-10">
                <p className="text-xs">Queue is empty</p>
              </div>
            )}

            {queue.map(file => (
              <div key={file.id} className="bg-slate-800/40 border border-slate-700/50 rounded p-3 flex gap-3 items-center">
                <div className="w-10 h-10 rounded bg-black/50 overflow-hidden relative shrink-0">
                  <img src={file.thumbnailUrl} alt="" className="w-full h-full object-cover opacity-60" />
                  {file.status === 'processing' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <Loader2 className="w-5 h-5 text-lime-500 animate-spin" />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-slate-300 truncate mb-1">{file.originalName}</div>
                  <div className="flex items-center gap-1.5">
                    <div className={`w-1.5 h-1.5 rounded-full ${file.status === 'processing' ? 'bg-lime-500 animate-pulse' : 'bg-slate-500'}`}></div>
                    <span className="text-[10px] text-slate-500 uppercase font-bold">{file.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Drag & Drop Zone */}
          <div
            className={`h-48 m-4 border-2 border-dashed rounded-xl flex flex-col items-center justify-center transition-all relative overflow-hidden ${dragOver ? 'border-lime-500 bg-lime-500/10' : 'border-slate-700 bg-slate-800/30 hover:border-slate-600 hover:bg-slate-800/50'}`}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={onDrop}
          >
            <div className="pointer-events-none flex flex-col items-center z-10">
              <div className={`p-3 rounded-full mb-3 transition-colors ${dragOver ? 'bg-lime-500 text-slate-900' : 'bg-slate-700 text-slate-400'}`}>
                <UploadCloud className="w-6 h-6" />
              </div>
              <p className="text-slate-300 font-medium text-sm">Drag files here</p>
              <p className="text-slate-500 text-xs mt-1">or click "Select Files" above</p>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default App;
