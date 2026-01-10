import { ArrowRight, X, Check } from 'lucide-react';

const examples = [
  {
    before: 'Complex navigation menus',
    after: 'Simple sidebar with clear icons',
    context: 'Outdated system'
  },
  {
    before: '7 clicks to book appointment',
    after: '3 clicks with visual calendar',
    context: 'Manual process'
  },
  {
    before: 'Scattered patient information',
    after: 'Unified patient profile card',
    context: 'Fragmented data'
  },
  {
    before: 'Generic enterprise styling',
    after: 'Professional blue healthcare theme',
    context: 'No brand identity'
  }
];

export function BeforeAfter() {
  return (
    <section className="bg-slate-900 py-20 print:bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-white print:text-slate-900">Before & After</h2>
          <p className="max-w-2xl mx-auto text-slate-300 print:text-slate-600">
            See how thoughtful design transforms clinic workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {examples.map((example, index) => (
            <div key={index} className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors print:bg-white print:border-slate-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <X className="w-4 h-4 text-red-400 print:text-red-600" />
                    <span className="text-slate-400 print:text-slate-600">Before</span>
                  </div>
                  <div className="text-red-400 break-all print:text-red-700">{example.before}</div>
                  <div className="text-slate-500 mt-1 print:text-slate-600">({example.context})</div>
                </div>

                <ArrowRight className="w-6 h-6 text-blue-400 flex-shrink-0 print:text-blue-600" />

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="w-4 h-4 text-blue-400 print:text-blue-600" />
                    <span className="text-slate-400 print:text-slate-600">After</span>
                  </div>
                  <div className="text-blue-400 break-all print:text-blue-700">{example.after}</div>
                  <div className="text-slate-500 mt-1 print:text-slate-600">(Medshield design)</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 border border-blue-500/30 rounded-full print:bg-blue-50 print:border-blue-300">
            <Check className="w-5 h-5 text-blue-400 print:text-blue-600" />
            <span className="text-blue-400 print:text-blue-700">Clean, efficient, professional healthcare interface</span>
          </div>
        </div>
      </div>
    </section>
  );
}