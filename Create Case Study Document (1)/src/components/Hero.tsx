import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white print:bg-white print:text-slate-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI2ODQ3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center opacity-10 print:hidden"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-6 h-6 text-lime-400 print:text-lime-600" />
          <span className="text-lime-400 uppercase tracking-wider print:text-lime-700">UX Case Study</span>
        </div>

        <h1 className="max-w-4xl mb-6 print:text-slate-900">
          Smart Image Renamer
        </h1>

        <div className="flex items-center gap-3 mb-8">
          <Zap className="w-6 h-6 text-lime-400 print:text-lime-600" />
          <p className="text-xl text-lime-400 print:text-lime-700">
            From a repetitive file task to a review workflow
          </p>
        </div>

        <p className="max-w-2xl text-slate-300 mb-8 print:text-slate-700">
          I built a tool to suggest useful image filenames, then designed the steps for checking a suggestion, applying it, and recovering from a mistake.
        </p>

        <div className="flex flex-wrap gap-6 mb-12">
          <div>
            <div className="text-slate-400 mb-1 print:text-slate-600">Role</div>
            <div className="print:text-slate-900">Workflow, UI & AI-assisted build</div>
          </div>
          <div>
            <div className="text-slate-400 mb-1 print:text-slate-600">Project</div>
            <div className="print:text-slate-900">Self-directed prototype</div>
          </div>
          <div>
            <div className="text-slate-400 mb-1 print:text-slate-600">Deliverable</div>
            <div className="print:text-slate-900">Desktop prototype + web adaptation</div>
          </div>
          <div>
            <div className="text-slate-400 mb-1 print:text-slate-600">Focus</div>
            <div className="text-lime-400 print:text-lime-700">Review, Control, Recovery</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {['UX Design', 'Product Design', 'Interaction Design', 'Prototyping', 'Problem Framing'].map((skill) => (
            <span key={skill} className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full print:bg-slate-100 print:border-slate-300 print:text-slate-900">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
