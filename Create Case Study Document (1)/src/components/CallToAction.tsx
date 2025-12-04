import { ExternalLink, Sparkles, Zap } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="relative overflow-hidden py-32 print:hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}>
      {/* Animated background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ 
            background: 'radial-gradient(circle, #84cc16 0%, transparent 70%)',
            animation: 'pulse 4s ease-in-out infinite'
          }} 
        />
        <div 
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full opacity-15"
          style={{ 
            background: 'radial-gradient(circle, #22c55e 0%, transparent 70%)',
            animation: 'pulse 4s ease-in-out infinite 2s'
          }} 
        />
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div 
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-10"
          style={{ 
            background: 'rgba(132, 204, 22, 0.15)', 
            border: '1px solid rgba(132, 204, 22, 0.4)',
            boxShadow: '0 0 20px rgba(132, 204, 22, 0.2)'
          }}
        >
          <Sparkles className="w-4 h-4" style={{ color: '#a3e635' }} />
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#a3e635' }}>
            Try It Yourself
          </span>
        </div>
        
        {/* Heading */}
        <h2 
          className="text-4xl md:text-6xl font-bold mb-8 tracking-tight"
          style={{ color: '#f8fafc' }}
        >
          Experience Smart Image Renamer
        </h2>
        
        {/* Description */}
        <p 
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{ color: '#94a3b8' }}
        >
          See the AI-powered renaming in action. Try the web version directly in your browser, 
          no installation required. Just drag and drop your images and watch the magic happen.
        </p>
        
        {/* CTA Button */}
        <a
          href="../smartrenamer-web/dist/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-10 py-5 font-bold text-lg rounded-2xl transition-all duration-300 hover:scale-105"
          style={{ 
            background: 'linear-gradient(135deg, #84cc16 0%, #22c55e 100%)',
            color: '#0f172a',
            boxShadow: '0 20px 40px rgba(132, 204, 22, 0.3), 0 0 0 1px rgba(132, 204, 22, 0.5)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 25px 50px rgba(132, 204, 22, 0.4), 0 0 0 1px rgba(132, 204, 22, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(132, 204, 22, 0.3), 0 0 0 1px rgba(132, 204, 22, 0.5)';
          }}
        >
          <Zap className="w-6 h-6" />
          <span>Launch Web App</span>
          <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
        
        {/* Note */}
        <p className="mt-8 text-sm" style={{ color: '#64748b' }}>
          Requires a Gemini API key. Your key is stored locally and never sent to any server.
        </p>
      </div>
      
      {/* Add keyframes for pulse animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}

