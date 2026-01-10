interface ScreenshotsProps {
  mainScreenshot: string;
  settingsScreenshot: string;
}

export function Screenshots({ mainScreenshot, settingsScreenshot }: ScreenshotsProps) {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">Future Vision: Electron UI Design</h2>
          <p className="max-w-2xl mx-auto text-slate-600">
            Proposed interface design for the next iteration: a cross-platform Electron app with enhanced features
          </p>
        </div>
        
        <div className="space-y-12">
          <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8 shadow-2xl">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3>Main Interface Design</h3>
                <span className="px-3 py-1 bg-slate-700 text-white rounded-full">Design Mockup</span>
              </div>
              <p className="text-slate-600">
                Enhanced three-panel layout with visual queue management, improved preview, and integrated settings
              </p>
            </div>
            <div className="bg-slate-900 rounded-lg overflow-hidden shadow-xl">
              <img 
                src={mainScreenshot} 
                alt="Future Electron interface design showing enhanced UI with queue panel and improved styling" 
                className="w-full h-auto"
              />
            </div>
            <div className="mt-4 grid md:grid-cols-3 gap-4 text-slate-600">
              <div className="bg-white rounded-lg p-4">
                <div className="text-slate-900 mb-1">New Features</div>
                <div>Queue panel, tag presets, advanced filtering</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-slate-900 mb-1">Enhanced UX</div>
                <div>Folder watching, batch operations, custom instructions</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-slate-900 mb-1">Technology</div>
                <div>Electron + React + Tailwind CSS</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8 shadow-2xl">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3>Settings & Configuration Design</h3>
                <span className="px-3 py-1 bg-slate-700 text-white rounded-full">Design Mockup</span>
              </div>
              <p className="text-slate-600">
                Comprehensive settings for folder watching, naming conventions, custom AI instructions, and tag management
              </p>
            </div>
            <div className="bg-slate-900 rounded-lg overflow-hidden shadow-xl">
              <img 
                src={settingsScreenshot} 
                alt="Future settings interface with advanced configuration options" 
                className="w-full h-auto"
              />
            </div>
            <div className="mt-4 bg-white rounded-lg p-4">
              <div className="text-slate-900 mb-2">Migration Path</div>
              <p className="text-slate-600">
                With the working Python prototype validating the core logic and user flow, these designs represent 
                the natural evolution, adding power user features while maintaining the simple, focused experience 
                that makes the tool trustworthy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}