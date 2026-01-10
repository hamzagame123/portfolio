import { AlertTriangle, Lightbulb, TrendingUp, Code2 } from 'lucide-react';

export function TechPivot() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Lightbulb className="w-6 h-6 text-amber-500" />
          <span className="text-amber-600 uppercase tracking-wider">Design Decision</span>
        </div>
        <h2 className="mb-4">Choosing the Right Approach</h2>
        <p className="max-w-2xl mx-auto text-slate-600">
          A critical design decision: prioritizing user experience over feature complexity
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {/* Original Plan */}
        <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-slate-600" />
            </div>
            <h3>Initial Vision</h3>
          </div>
          <div className="mb-4">
            <div className="text-slate-900 mb-2">Full-featured EHR System</div>
            <p className="text-slate-600">
              A comprehensive healthcare platform with every possible feature
            </p>
          </div>
          <div className="space-y-2 text-slate-600">
            <div>✓ Complete feature set</div>
            <div>✓ Advanced analytics</div>
            <div>✓ Multi-department support</div>
          </div>
        </div>

        {/* The Problem */}
        <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-200 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <h3>The Realization</h3>
          </div>
          <div className="mb-4">
            <div className="text-red-900 mb-2">Scope Creep Risk</div>
            <p className="text-slate-700">
              Complex systems create more problems than they solve for small clinics
            </p>
          </div>
          <div className="space-y-2 text-slate-700">
            <div>✗ Overwhelming interface</div>
            <div>✗ Long learning curve</div>
            <div>✗ Features users don't need</div>
          </div>
        </div>

        {/* The Solution */}
        <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-200 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <h3>The Focus</h3>
          </div>
          <div className="mb-4">
            <div className="text-blue-900 mb-2">Patient Info + Appointments</div>
            <p className="text-slate-700">
              Focused MVP solving the core pain points exceptionally well
            </p>
          </div>
          <div className="space-y-2 text-slate-700">
            <div>✓ Clean, intuitive interface</div>
            <div>✓ Minimal learning curve</div>
            <div>✓ Core workflows perfected</div>
          </div>
        </div>
      </div>

      {/* Design Lesson */}
      <div className="bg-slate-900 border-2 border-slate-800 rounded-xl p-8 text-white print:bg-slate-50 print:border-slate-300 print:text-slate-900">
        <div className="flex items-start gap-4">
          <Lightbulb className="w-8 h-8 text-amber-400 mt-1 flex-shrink-0 print:text-amber-600" />
          <div>
            <h3 className="text-white mb-3 print:text-slate-900">Design Lesson: Scope Discipline</h3>
            <p className="text-slate-300 mb-4 print:text-slate-700">
              As a designer, I had to ask: <span className="text-white print:text-slate-900">"What are the actual daily pain points?"</span>
            </p>
            <p className="text-slate-300 mb-4 print:text-slate-700">
              The answer wasn't "more features." It was <span className="text-white print:text-slate-900">"faster patient lookup,
                simpler appointment booking, and a professional aesthetic that builds trust."</span>
            </p>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 print:bg-white print:border-slate-300">
              <p className="text-slate-200 print:text-slate-700">
                <span className="text-blue-400 print:text-blue-700">By intentionally excluding billing and clinical notes, I could focus
                  100% on making patient management and scheduling exceptional.</span> Better to do less, well, than to
                build ten half-finished features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}