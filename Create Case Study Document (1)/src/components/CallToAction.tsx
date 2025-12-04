import { ExternalLink, Sparkles, Zap } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-lime-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-500/10 border border-lime-500/30 rounded-full mb-8">
          <Sparkles className="w-4 h-4 text-lime-400" />
          <span className="text-lime-400 text-sm font-medium uppercase tracking-wider">Try It Yourself</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Experience Smart Image Renamer
        </h2>
        
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          See the AI-powered renaming in action. Try the web version directly in your browser, 
          no installation required. Just drag and drop your images and watch the magic happen.
        </p>
        
        <a
          href="../smartrenamer-web/dist/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-400 hover:to-emerald-400 text-slate-900 font-bold text-lg rounded-xl shadow-2xl shadow-lime-500/25 transition-all duration-300 hover:scale-105 hover:shadow-lime-500/40"
        >
          <Zap className="w-5 h-5" />
          <span>Launch Web App</span>
          <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
        
        <p className="mt-6 text-slate-500 text-sm">
          Requires a Gemini API key. Your key is stored locally and never sent to any server.
        </p>
      </div>
    </section>
  );
}

