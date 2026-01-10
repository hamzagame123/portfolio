import { AlertTriangle, CheckCircle2, Shield, Calendar, Users, Search } from 'lucide-react';

const challenges = [
  {
    icon: Shield,
    title: 'Building Trust in Healthcare Software',
    challenge: 'Healthcare software must feel secure and professional. Users need to trust the system with sensitive patient data.',
    solution: 'Designed a clean, modern interface with professional blue color scheme derived from the logo. Consistent patterns and clear visual hierarchy signal quality and reliability.',
    color: 'text-blue-600'
  },
  {
    icon: Calendar,
    title: 'Scheduling Complexity',
    challenge: 'Multiple chiropractors, various appointment types, and time conflicts create booking complexity.',
    solution: 'Visual time slot grid with color-coded status badges, chiropractor filters, and clear "available" indicators make scheduling intuitive at a glance.',
    color: 'text-purple-600'
  },
  {
    icon: Users,
    title: 'Information Overload',
    challenge: 'Medical data is complex. Too much information on screen creates cognitive overload for busy staff.',
    solution: 'Card-based layout with clear hierarchy, progressive disclosure of details, and generous whitespace. Dashboard shows only what\'s needed for immediate tasks.',
    color: 'text-orange-600'
  },
  {
    icon: Search,
    title: 'Speed Under Pressure',
    challenge: 'Staff handle phone calls and walk-ins simultaneously. Patient lookup must be instant.',
    solution: 'Global search with instant results, recent patients list on dashboard, and minimal clicks to access full patient profiles.',
    color: 'text-teal-600'
  }
];

export function Challenges() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <AlertTriangle className="w-6 h-6 text-amber-600" />
          <span className="text-amber-600 uppercase tracking-wider">Design Challenges</span>
        </div>
        <h2 className="mb-4">UX Obstacles & Solutions</h2>
        <p className="max-w-2xl mx-auto text-slate-600">
          Key design challenges and how I addressed them through interaction patterns
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {challenges.map((item, index) => (
          <div key={index} className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center`}>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <h3>{item.title}</h3>
            </div>

            <div className="space-y-3">
              <div className="flex gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-red-700 mb-1">Challenge</div>
                  <p className="text-slate-700">{item.challenge}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-blue-700 mb-1">Design Solution</div>
                  <p className="text-slate-700">{item.solution}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}