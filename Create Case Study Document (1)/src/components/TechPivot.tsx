import { AlertTriangle, Lightbulb, TrendingUp, Code2 } from 'lucide-react';

export function TechPivot() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Lightbulb className="w-6 h-6 text-amber-500" />
          <span className="text-amber-600 uppercase tracking-wider">Project Evolution</span>
        </div>
        <h2 className="mb-4">From Naming an Image to Managing a Change</h2>
        <p className="max-w-2xl mx-auto text-slate-600">
          What began as an image-to-name experiment developed into a review workflow, then a browser adaptation.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {/* Original Plan */}
        <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-slate-600" />
            </div>
            <h3>Earliest Known Stage</h3>
          </div>
          <div className="mb-4">
            <div className="text-slate-900 mb-2">March 2025 · Python tool</div>
            <p className="text-slate-600">
              The earliest recovered material points to a functional Python renamer: test whether an image could produce a useful name.
            </p>
          </div>
          <div className="space-y-2 text-slate-600">
            <div>Image-to-name experiment</div>
            <div>Personal file workflow</div>
            <div>Date partly reconstructed</div>
          </div>
        </div>

        {/* The Problem */}
        <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-200 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <h3>Later Interface Snapshot</h3>
          </div>
          <div className="mb-4">
            <div className="text-red-900 mb-2">September 2025 · Next.js artifact</div>
            <p className="text-slate-700">
              A preserved interface brings review, history, and settings together. That structure existed before the recorded Codex session to make it run.
            </p>
          </div>
          <div className="space-y-2 text-slate-700">
            <div>Preview before application</div>
            <div>Original and proposed names</div>
            <div>History and recovery controls</div>
          </div>
        </div>

        {/* The Solution */}
        <div className="bg-lime-50 border-2 border-lime-300 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-lime-200 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-lime-600" />
            </div>
            <h3>Browser Adaptation</h3>
          </div>
          <div className="mb-4">
            <div className="text-lime-900 mb-2">Later web version · Gemini</div>
            <p className="text-slate-700">
              The workflow moves into a browser, where the result is a renamed download rather than an in-place file change.
            </p>
          </div>
          <div className="space-y-2 text-slate-700">
            <div>Image analysis with Gemini</div>
            <div>History, preview, and queue</div>
            <div>Downloads renamed copies</div>
          </div>
        </div>
      </div>

      {/* Design Lesson */}
      <div className="bg-slate-900 border-2 border-slate-800 rounded-xl p-8 text-white print:bg-slate-50 print:border-slate-300 print:text-slate-900">
        <div className="flex items-start gap-4">
          <Lightbulb className="w-8 h-8 text-amber-400 mt-1 flex-shrink-0 print:text-amber-600" />
          <div>
            <h3 className="text-white mb-3 print:text-slate-900">The Question Changed</h3>
            <p className="text-slate-300 mb-4 print:text-slate-700">
              I began by asking: <span className="text-white print:text-slate-900">"Can an image model suggest a useful filename?"</span>
            </p>
            <p className="text-slate-300 mb-4 print:text-slate-700">
              The product question became: <span className="text-white print:text-slate-900">"How can AI act on real files while keeping the person in control?"</span>
            </p>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 print:bg-white print:border-slate-300">
              <p className="text-slate-200 print:text-slate-700">
                The chronology is reconstructed from project files and editor history. The exact March UI source and original coding model were not recovered. The later snapshots document the interaction model; Gemini’s role in image analysis is separate from authorship of that model.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
