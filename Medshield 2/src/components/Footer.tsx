import { Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-400">
            <p>&copy; 2025 Medshield Case Study</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/hamza-galbete-123924241"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:Hamzagalbete99@gmail.com"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500">
          <p>This case study demonstrates UX/UI design capabilities including healthcare application design, design system creation, and interactive prototyping.</p>
        </div>
      </div>
    </footer>
  );
}
