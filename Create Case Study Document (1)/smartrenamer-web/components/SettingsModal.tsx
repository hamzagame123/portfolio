import React from 'react';
import { X, Folder, Plus, Trash2, Info } from 'lucide-react';
import { AppSettings, SeparatorType, CasingType } from '../types';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AppSettings;
  onUpdateSettings: (newSettings: AppSettings) => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, settings, onUpdateSettings }) => {
  if (!isOpen) return null;

  const toggleBool = (key: keyof AppSettings) => {
    onUpdateSettings({ ...settings, [key]: !settings[key] });
  };

  const setSeparator = (val: SeparatorType) => onUpdateSettings({ ...settings, separator: val });
  const setCasing = (val: CasingType) => onUpdateSettings({ ...settings, casing: val });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      <div className="w-full max-w-3xl bg-[#1e1e24] rounded-2xl border border-slate-700 shadow-2xl text-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-700 bg-[#18181b]">
          <div>
            <h2 className="text-xl font-bold text-lime-400">Settings</h2>
            <p className="text-xs text-slate-500 mt-1">Configure AI naming conventions and behavior</p>
          </div>
          <button onClick={onClose} className="hover:bg-slate-700 p-2 rounded-full transition-colors">
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        {/* Body */}
        <div className="p-8 overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">

            {/* Left Column */}
            <div className="space-y-8">
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">API Configuration</h3>
                <div className="bg-[#15151a] border border-slate-700/80 rounded-xl p-4">
                  <p className="text-sm text-slate-200 font-medium">Gemini access is already configured.</p>
                  <p className="text-xs text-slate-500 mt-2">This build ships with Hamza's API key so you can start renaming images immediately.</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Automation</h3>

                <label className="flex items-start space-x-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      checked={settings.autoProcess}
                      onChange={() => toggleBool('autoProcess')}
                      className="peer sr-only"
                    />
                    <div className="w-10 h-6 bg-slate-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-lime-500"></div>
                  </div>
                  <div>
                    <span className="text-slate-200 font-medium block group-hover:text-lime-400 transition-colors">Auto-process new files</span>
                    <span className="text-slate-500 text-xs">Automatically start AI renaming when files are dropped</span>
                  </div>
                </label>

                <label className="flex items-start space-x-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      checked={settings.skipNormalNames}
                      onChange={() => toggleBool('skipNormalNames')}
                      className="peer sr-only"
                    />
                    <div className="w-10 h-6 bg-slate-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-lime-500"></div>
                  </div>
                  <div>
                    <span className="text-slate-200 font-medium block group-hover:text-lime-400 transition-colors">Skip human-readable names</span>
                    <span className="text-slate-500 text-xs">Only rename files like 'IMG_2934.jpg' or 'Screenshot...'</span>
                  </div>
                </label>

                <label className="flex items-start space-x-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      checked={settings.enableTagging}
                      onChange={() => toggleBool('enableTagging')}
                      className="peer sr-only"
                    />
                    <div className="w-10 h-6 bg-slate-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-lime-500"></div>
                  </div>
                  <div>
                    <span className="text-slate-200 font-medium block group-hover:text-lime-400 transition-colors">Enable tagging</span>
                    <span className="text-slate-500 text-xs">Generate searchable tags for each file</span>
                  </div>
                </label>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Watched Folders</h3>
                  <span className="text-[10px] bg-slate-700 text-slate-400 px-2 py-0.5 rounded-full">Desktop App Only</span>
                </div>
                <div className="p-3 bg-slate-800/50 rounded border border-slate-700/50 mb-3">
                  <p className="text-xs text-slate-500 flex gap-2">
                    <Info className="w-4 h-4 shrink-0" />
                    Browser security prevents automatic background folder watching. Drag and drop folders to process them manually.
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap opacity-60">
                  {settings.folders.map((f) => (
                    <div key={f} className="flex items-center bg-slate-800 text-slate-400 border border-slate-700 px-3 py-1.5 rounded-md text-sm">
                      <Folder className="w-3.5 h-3.5 mr-2" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Naming Convention</h3>

              <div>
                <div className="text-slate-300 text-sm mb-3 font-medium">Separator</div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'dash', label: 'Dash (-)' },
                    { id: 'underscore', label: 'Underscore (_)' },
                    { id: 'space', label: 'Space ( )' },
                    { id: 'none', label: 'None' }
                  ].map((opt) => (
                    <label key={opt.id} className={`flex items-center space-x-3 cursor-pointer p-3 rounded-lg border transition-all ${settings.separator === opt.id ? 'bg-lime-500/10 border-lime-500/50' : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'}`}>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${settings.separator === opt.id ? 'border-lime-500' : 'border-slate-600'}`}>
                        {settings.separator === opt.id && <div className="w-2 h-2 rounded-full bg-lime-500" />}
                      </div>
                      <input
                        type="radio"
                        name="separator"
                        className="hidden"
                        checked={settings.separator === opt.id}
                        onChange={() => setSeparator(opt.id as SeparatorType)}
                      />
                      <span className={`text-sm ${settings.separator === opt.id ? 'text-white' : 'text-slate-400'}`}>{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-slate-300 text-sm mb-3 font-medium">Casing</div>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { id: 'lowercase', label: 'lowercase (example-file.jpg)' },
                    { id: 'capitalized', label: 'Title Case (Example-File.jpg)' },
                    { id: 'uppercase', label: 'UPPERCASE (EXAMPLE-FILE.JPG)' },
                  ].map((opt) => (
                    <label key={opt.id} className={`flex items-center space-x-3 cursor-pointer p-3 rounded-lg border transition-all ${settings.casing === opt.id ? 'bg-lime-500/10 border-lime-500/50' : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'}`}>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${settings.casing === opt.id ? 'border-lime-500' : 'border-slate-600'}`}>
                        {settings.casing === opt.id && <div className="w-2 h-2 rounded-full bg-lime-500" />}
                      </div>
                      <input
                        type="radio"
                        name="casing"
                        className="hidden"
                        checked={settings.casing === opt.id}
                        onChange={() => setCasing(opt.id as CasingType)}
                      />
                      <span className={`text-sm ${settings.casing === opt.id ? 'text-white' : 'text-slate-400'}`}>{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Full Width */}
            <div className="col-span-1 md:col-span-2 pt-4 border-t border-slate-700">
              <div className="text-slate-300 text-sm mb-2 font-medium">AI Instructions</div>
              <textarea
                value={settings.customInstructions}
                onChange={(e) => onUpdateSettings({ ...settings, customInstructions: e.target.value })}
                placeholder="e.g., 'Use formal business language', 'Include color in the name', 'Avoid using the word screenshot'"
                className="w-full h-24 bg-[#121212] border border-slate-600 rounded-lg p-4 text-slate-200 placeholder-slate-600 focus:border-lime-500 focus:ring-1 focus:ring-lime-500 outline-none resize-none text-sm transition-colors"
              />
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-700 flex justify-between items-center bg-[#18181b]">
          <button className="text-slate-500 text-sm hover:text-white transition-colors">
            Reset to Defaults
          </button>
          <button onClick={onClose} className="bg-lime-500 hover:bg-lime-400 text-slate-900 font-bold px-6 py-2.5 rounded-lg transition-colors shadow-lg shadow-lime-500/20">
            Done
          </button>
        </div>

      </div>
    </div>
  );
};

export default SettingsModal;