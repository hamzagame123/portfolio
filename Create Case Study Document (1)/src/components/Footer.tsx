import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-400">
            <p>&copy; 2025 Smart Image Renamer Case Study</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/hamzagame123/image-renamer-pro"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/hamza-galbete-123924241"
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
          <p>Designed and built by Hamza Galbete. Explore the prototype, read the implementation, or get in touch.</p>
        </div>
      </div>
    </footer>
  );
}
