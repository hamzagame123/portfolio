interface ScreenshotsProps {
  mainScreenshot: string;
  settingsScreenshot: string;
}

export function Screenshots({ mainScreenshot, settingsScreenshot }: ScreenshotsProps) {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">Later Interface Exploration</h2>
          <p className="max-w-2xl mx-auto text-slate-600">
            These existing screens show how the review workflow expanded into history, preview, queue, and settings. Entries and image placeholders illustrate the design.
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
                History keeps original and proposed names together. The preview supports inspection, while the queue separates incoming work.
              </p>
            </div>
            <div className="bg-slate-900 rounded-lg overflow-hidden shadow-xl">
              <img
                src={mainScreenshot}
                alt="Later interface exploration showing history, image preview, queue, Preview Mode and Apply Changes"
                className="w-full h-auto"
              />
            </div>
            <div className="mt-4 grid md:grid-cols-3 gap-4 text-slate-600">
              <div className="bg-white rounded-lg p-4">
                <div className="text-slate-900 mb-1">History & Queue</div>
                <div>Previous changes stay separate from incoming files</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-slate-900 mb-1">Review Controls</div>
                <div>Preview and Apply Changes are distinct actions</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-slate-900 mb-1">Artifact Context</div>
                <div>Later interface exploration; not the original March UI</div>
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
                Separators, casing, custom instructions, and tags let names fit an existing filing convention. Folder watching is an explored direction.
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
              <div className="text-slate-900 mb-2">Why Settings Is Separate</div>
              <p className="text-slate-600">
                I kept naming rules and automation away from the main review step. The tradeoff is discoverability: settings may be harder to find. Pictured controls show design intent, not proof that every feature was implemented or validated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
