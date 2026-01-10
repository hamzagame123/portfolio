import webAppMain from 'figma:asset/8581fc19e4d378cabcb3f1ebd14ab4d2dd2fe929.png';
import webAppSettings from 'figma:asset/f66ef3aa6ca5bf9968379e7e5625153903e59d26.png';
import { useState } from 'react';
import { X } from 'lucide-react';

export function WebApp() {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 bg-neutral-100">
      <div className="mb-12">
        <h2 className="text-emerald-600 mb-4">Web App: Designing for Browser Constraints</h2>
        <p className="text-neutral-600 max-w-3xl">
          To make the tool accessible without installation barriers, I created a web version that maintains the core 
          renaming workflow while adapting to browser security limitations. This required rethinking the file handling 
          paradigm from direct filesystem access to a download-based model.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <div>
            <h3 className="text-neutral-900 mb-3">Platform Adaptation Strategy</h3>
            <p className="text-neutral-600 mb-4">
              Browser security models prevent direct filesystem manipulation, so the web app uses a different approach:
            </p>
            <ul className="space-y-3 text-neutral-700">
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 mt-1">↓</span>
                <span><strong>Upload & Process:</strong> Users drag and drop files into the browser interface</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 mt-1">✓</span>
                <span><strong>AI Analysis:</strong> Files are processed with the same Gemini API integration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 mt-1">↓</span>
                <span><strong>Download Renamed:</strong> Users download a renamed copy rather than modifying originals in place</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <h4 className="text-amber-900 mb-2">Key Constraint</h4>
            <p className="text-neutral-700 text-sm">
              <strong>No Filesystem Access:</strong> The web app cannot modify files in place or watch folders for changes. 
              Features like "Watched Folders" and bash script generation are desktop-only capabilities.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200">
          <img 
            src={webAppMain} 
            alt="Web app main interface showing history panel, preview area, and drag-and-drop queue"
            className="w-full h-auto rounded cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setFullscreenImage(webAppMain)}
          />
          <p className="text-neutral-500 text-sm mt-3 text-center">
            Main interface with history, preview, and queue panels
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200 order-2 lg:order-1">
          <img 
            src={webAppSettings} 
            alt="Settings modal showing API configuration, naming conventions, and automation options"
            className="w-full h-auto rounded cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setFullscreenImage(webAppSettings)}
          />
          <p className="text-neutral-500 text-sm mt-3 text-center">
            Settings panel maintaining parity with desktop features (except filesystem-dependent options)
          </p>
        </div>

        <div className="space-y-6 order-1 lg:order-2">
          <div>
            <h3 className="text-neutral-900 mb-3">UX Decisions for Web</h3>
            <ul className="space-y-3 text-neutral-700">
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 mt-1">•</span>
                <span><strong>Graceful Degradation:</strong> Disabled "Watched Folders" with clear "Desktop App Only" label rather than hiding it entirely</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 mt-1">•</span>
                <span><strong>Maintained Mental Model:</strong> Same three-panel layout (History, Preview, Queue) to preserve familiarity across platforms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 mt-1">•</span>
                <span><strong>Zero Installation Friction:</strong> No download required, users can try the tool immediately in their browser</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 mt-1">•</span>
                <span><strong>API Key Transparency:</strong> Clear labeling that keys are "stored locally" to address privacy concerns</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 border border-neutral-200">
        <h3 className="text-neutral-900 mb-6">Desktop vs Web: Design Trade-offs</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="text-left py-3 pr-6 text-neutral-600">Feature</th>
                <th className="text-left py-3 px-6 text-neutral-600">Desktop App</th>
                <th className="text-left py-3 pl-6 text-neutral-600">Web App</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700">
              <tr className="border-b border-neutral-100">
                <td className="py-4 pr-6">File Modification</td>
                <td className="py-4 px-6">✓ Direct in-place renaming</td>
                <td className="py-4 pl-6">○ Download renamed copies</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="py-4 pr-6">Folder Watching</td>
                <td className="py-4 px-6">✓ Automated background processing</td>
                <td className="py-4 pl-6">✗ Not possible (browser security)</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="py-4 pr-6">Installation</td>
                <td className="py-4 px-6">○ Requires download & setup</td>
                <td className="py-4 pl-6">✓ Instant access via browser</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="py-4 pr-6">AI Renaming</td>
                <td className="py-4 px-6">✓ Full feature parity</td>
                <td className="py-4 pl-6">✓ Full feature parity</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="py-4 pr-6">Settings & Config</td>
                <td className="py-4 px-6">✓ All options available</td>
                <td className="py-4 pl-6">✓ All except filesystem features</td>
              </tr>
              <tr>
                <td className="py-4 pr-6">Batch Processing</td>
                <td className="py-4 px-6">✓ Unlimited local files</td>
                <td className="py-4 pl-6">○ Limited by browser memory</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-lg p-6">
        <h4 className="text-emerald-900 mb-3">Design Philosophy</h4>
        <p className="text-neutral-700">
          Rather than creating two completely different experiences, the web version maintains visual and interaction 
          consistency with the desktop app. This allows users to move between platforms without relearning the interface, 
          while clearly communicating platform-specific limitations through contextual UI (like the "Desktop App Only" badge). 
          The goal was <strong>cross-platform familiarity with honest constraint communication</strong>.
        </p>
      </div>

      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setFullscreenImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-neutral-300 transition-colors"
            onClick={() => setFullscreenImage(null)}
            aria-label="Close fullscreen"
          >
            <X size={32} />
          </button>
          <img 
            src={fullscreenImage} 
            alt="Fullscreen view"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}