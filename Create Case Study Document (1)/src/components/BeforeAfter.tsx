import { ArrowRight, X, Check } from 'lucide-react';

const examples = [
  {
    before: 'IMG_20250324_889123.jpg',
    after: 'golden_gate_bridge_sunset.jpg',
    context: 'Camera default'
  },
  {
    before: 'GC6a9XkA3fQ9.jpg',
    after: 'chocolate_cake_closeup.jpg',
    context: 'Download code'
  },
  {
    before: 'DSC_8472.jpg',
    after: 'wedding_ceremony_beach.jpg',
    context: 'DSLR sequential'
  },
  {
    before: '20250115_173422.jpg',
    after: 'modern_office_workspace.jpg',
    context: 'Timestamp'
  }
];

export function BeforeAfter() {
  return (
    <section className="bg-slate-900 py-20 print:bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-white print:text-slate-900">Before & After</h2>
          <p className="max-w-2xl mx-auto text-slate-300 print:text-slate-600">
            See how AI transforms meaningless filenames into descriptive, searchable names
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {examples.map((example, index) => (
            <div key={index} className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-lime-500/50 transition-colors print:bg-white print:border-slate-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <X className="w-4 h-4 text-red-400 print:text-red-600" />
                    <span className="text-slate-400 print:text-slate-600">Before</span>
                  </div>
                  <code className="text-red-400 break-all print:text-red-700">{example.before}</code>
                  <div className="text-slate-500 mt-1 print:text-slate-600">({example.context})</div>
                </div>
                
                <ArrowRight className="w-6 h-6 text-lime-400 flex-shrink-0 print:text-lime-600" />
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="w-4 h-4 text-lime-400 print:text-lime-600" />
                    <span className="text-slate-400 print:text-slate-600">After</span>
                  </div>
                  <code className="text-lime-400 break-all print:text-lime-700">{example.after}</code>
                  <div className="text-slate-500 mt-1 print:text-slate-600">(AI-generated)</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-lime-500/10 border border-lime-500/30 rounded-full print:bg-lime-50 print:border-lime-300">
            <Check className="w-5 h-5 text-lime-400 print:text-lime-600" />
            <span className="text-lime-400 print:text-lime-700">All names are filename-safe, concise, and immediately understandable</span>
          </div>
        </div>
      </div>
    </section>
  );
}