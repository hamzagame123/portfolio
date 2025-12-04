import { AlertTriangle, Lightbulb, TrendingUp, Code2 } from 'lucide-react';

export function TechPivot() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Lightbulb className="w-6 h-6 text-amber-500" />
          <span className="text-amber-600 uppercase tracking-wider">Design Constraint</span>
        </div>
        <h2 className="mb-4">Choosing the Right Tool for the MVP</h2>
        <p className="max-w-2xl mx-auto text-slate-600">
          A critical design decision: prioritizing speed-to-validation over long-term scalability
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
            <div className="text-slate-900 mb-2">Electron + React + Tailwind</div>
            <p className="text-slate-600">
              A polished, cross-platform app with modern web technologies
            </p>
          </div>
          <div className="space-y-2 text-slate-600">
            <div>✓ Production-ready</div>
            <div>✓ Beautiful UI</div>
            <div>✓ Distributable</div>
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
            <div className="text-red-900 mb-2">Wrong Tool for MVP Goals</div>
            <p className="text-slate-700">
              I needed to validate the concept and user flow, not build for distribution
            </p>
          </div>
          <div className="space-y-2 text-slate-700">
            <div>✗ Slow iteration cycles</div>
            <div>✗ Framework overhead</div>
            <div>✗ Premature optimization</div>
          </div>
        </div>

        {/* The Solution */}
        <div className="bg-lime-50 border-2 border-lime-300 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-lime-200 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-lime-600" />
            </div>
            <h3>The Pivot</h3>
          </div>
          <div className="mb-4">
            <div className="text-lime-900 mb-2">Python + CustomTkinter</div>
            <p className="text-slate-700">
              Fast prototyping to test UX hypothesis and validate AI integration
            </p>
          </div>
          <div className="space-y-2 text-slate-700">
            <div>✓ Rapid iteration</div>
            <div>✓ Focus on UX</div>
            <div>✓ Working MVP in weeks</div>
          </div>
        </div>
      </div>

      {/* Design Lesson */}
      <div className="bg-slate-900 border-2 border-slate-800 rounded-xl p-8 text-white print:bg-slate-50 print:border-slate-300 print:text-slate-900">
        <div className="flex items-start gap-4">
          <Lightbulb className="w-8 h-8 text-amber-400 mt-1 flex-shrink-0 print:text-amber-600" />
          <div>
            <h3 className="text-white mb-3 print:text-slate-900">Design Lesson: Match Tools to Goals</h3>
            <p className="text-slate-300 mb-4 print:text-slate-700">
              As a designer, I had to ask: <span className="text-white print:text-slate-900">"What am I trying to learn from this MVP?"</span>
            </p>
            <p className="text-slate-300 mb-4 print:text-slate-700">
              The answer wasn't "Can I build a distributable app?" It was <span className="text-white print:text-slate-900">"Will users 
              trust an AI to rename their files, and what UX patterns build that trust?"</span>
            </p>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 print:bg-white print:border-slate-300">
              <p className="text-slate-200 print:text-slate-700">
                <span className="text-lime-400 print:text-lime-700">Choosing Python let me spend 80% of my time on UX design and validation, 
                not tooling.</span> I could iterate on the interaction model, test different layouts, and refine the 
                trust-building mechanisms. Once those design patterns are validated, they can be implemented in any framework.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}