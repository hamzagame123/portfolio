import { ImageWithFallback } from './figma/ImageWithFallback';
import { Shield, Stethoscope } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white print:bg-white print:text-slate-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8fHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY2xpbmljfGVufDB8fHx8MTc2MjY4NDczNnww&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center opacity-10 print:hidden"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32">
        <div className="flex items-center gap-2 mb-6">
          <Shield className="w-6 h-6 text-blue-400 print:text-blue-600" />
          <span className="text-blue-400 uppercase tracking-wider print:text-blue-700">UX Case Study</span>
        </div>

        <h1 className="max-w-4xl mb-6 print:text-slate-900">
          Medshield
        </h1>

        <div className="flex items-center gap-3 mb-8">
          <Stethoscope className="w-6 h-6 text-blue-400 print:text-blue-600" />
          <p className="text-xl text-blue-400 print:text-blue-700">
            Designing a Modern Chiropractic Clinic Management System
          </p>
        </div>

        <p className="max-w-2xl text-slate-300 mb-8 print:text-slate-700">
          How I designed a secure, efficient web application for chiropractic clinics to manage patient information
          and appointments, building trust through professional design and intuitive workflows.
        </p>

        <div className="flex flex-wrap gap-6 mb-12">
          <div>
            <div className="text-slate-400 mb-1 print:text-slate-600">Role</div>
            <div className="print:text-slate-900">UX/Product Designer</div>
          </div>
          <div>
            <div className="text-slate-400 mb-1 print:text-slate-600">Timeline</div>
            <div className="print:text-slate-900">4 weeks (Solo project)</div>
          </div>
          <div>
            <div className="text-slate-400 mb-1 print:text-slate-600">Deliverable</div>
            <div className="print:text-slate-900">Functional Web App</div>
          </div>
          <div>
            <div className="text-slate-400 mb-1 print:text-slate-600">Focus</div>
            <div className="text-blue-400 print:text-blue-700">Trust, Efficiency, Professionalism</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {['UX Design', 'Product Design', 'Web Application', 'Healthcare', 'Prototyping'].map((skill) => (
            <span key={skill} className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full print:bg-slate-100 print:border-slate-300 print:text-slate-900">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}