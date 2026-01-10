import { useState } from 'react';
import { X, Monitor, ExternalLink } from 'lucide-react';

export function WebApp() {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 bg-neutral-100">
      <div className="mb-12">
        <h2 className="text-blue-600 mb-4">Interactive Prototype: Experience the App</h2>
        <p className="text-neutral-600 max-w-3xl">
          Fully functional prototype built with React and TypeScript. Click "Sign in" (no credentials needed)
          to explore the complete patient and appointment management flow.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <div>
            <h3 className="text-neutral-900 mb-3">Key Screens to Explore</h3>
            <ul className="space-y-3 text-neutral-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">01</span>
                <span><strong>Dashboard:</strong> At-a-glance daily overview with appointments and stats</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">02</span>
                <span><strong>Patients:</strong> Search, filter, and view comprehensive patient records</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">03</span>
                <span><strong>Patient Profile:</strong> Full patient details with appointment history</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">04</span>
                <span><strong>Appointments:</strong> Visual calendar with color-coded status</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">05</span>
                <span><strong>Schedule:</strong> Time slot management and booking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">06</span>
                <span><strong>Settings:</strong> Clinic preferences and configuration</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h4 className="text-blue-900 mb-2">Design Highlights</h4>
            <p className="text-neutral-700 text-sm">
              <strong>Logo-Driven Design System:</strong> The primary blue (#0066CC) derived from the Medshield logo
              creates instant brand cohesion. Card-based layouts, consistent typography, and generous whitespace
              build a professional healthcare aesthetic.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200">
          <div className="flex items-center gap-2 mb-4">
            <Monitor className="w-5 h-5 text-blue-600" />
            <span className="text-neutral-700 font-medium">Desktop-First Design</span>
          </div>
          <p className="text-neutral-600 mb-4 text-sm">
            Research showed 95% of tasks happen on desktop computers. The interface is optimized for
            large screens with sidebar navigation and multi-column layouts.
          </p>
          <div className="bg-slate-900 rounded-lg p-4 text-center">
            <p className="text-slate-300 mb-3">View the interactive prototype:</p>
            <a
              href="../../Medshield%20Web%20App%20Design/build/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <span>Launch Prototype</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 border border-neutral-200">
        <h3 className="text-neutral-900 mb-6">40+ UI Components</h3>
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          <div className="bg-slate-50 rounded-lg p-4">
            <div className="text-blue-600 mb-2">🃏</div>
            <span className="text-neutral-700">Cards & Panels</span>
          </div>
          <div className="bg-slate-50 rounded-lg p-4">
            <div className="text-blue-600 mb-2">📊</div>
            <span className="text-neutral-700">Data Tables</span>
          </div>
          <div className="bg-slate-50 rounded-lg p-4">
            <div className="text-blue-600 mb-2">📅</div>
            <span className="text-neutral-700">Calendar Views</span>
          </div>
          <div className="bg-slate-50 rounded-lg p-4">
            <div className="text-blue-600 mb-2">🏷️</div>
            <span className="text-neutral-700">Status Badges</span>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h4 className="text-blue-900 mb-3">Design Philosophy</h4>
        <p className="text-neutral-700">
          The prototype demonstrates that <strong>professional aesthetics signal quality</strong>. In healthcare,
          trust is paramount, and the visual design directly impacts perceived reliability. The same functionality
          in a polished interface is perceived as more trustworthy than in basic UI.
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