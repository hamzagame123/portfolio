import { ExternalLink, Shield, Zap } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="relative overflow-hidden py-32 print:hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}>
      {/* Animated background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #0066CC 0%, transparent 70%)',
            animation: 'pulse 4s ease-in-out infinite'
          }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)',
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
            background: 'rgba(0, 102, 204, 0.15)',
            border: '1px solid rgba(0, 102, 204, 0.4)',
            boxShadow: '0 0 20px rgba(0, 102, 204, 0.2)'
          }}
        >
          <Shield className="w-4 h-4" style={{ color: '#60a5fa' }} />
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#60a5fa' }}>
            Try It Yourself
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-4xl md:text-6xl font-bold mb-8 tracking-tight"
          style={{ color: '#f8fafc' }}
        >
          Experience Medshield
        </h2>

        {/* Description */}
        <p
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{ color: '#94a3b8' }}
        >
          See the clinic management system in action. Explore the interactive prototype directly in your browser.
          Click "Sign in" (no credentials needed) to navigate through the complete patient and appointment workflow.
        </p>

        {/* CTA Button */}
        <a
          href="../../Medshield%20Web%20App%20Design/build/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-10 py-5 font-bold text-lg rounded-2xl transition-all duration-300 hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #0066CC 0%, #0ea5e9 100%)',
            color: '#ffffff',
            boxShadow: '0 20px 40px rgba(0, 102, 204, 0.3), 0 0 0 1px rgba(0, 102, 204, 0.5)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 102, 204, 0.4), 0 0 0 1px rgba(0, 102, 204, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 102, 204, 0.3), 0 0 0 1px rgba(0, 102, 204, 0.5)';
          }}
        >
          <Zap className="w-6 h-6" />
          <span>Launch Prototype</span>
          <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
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
