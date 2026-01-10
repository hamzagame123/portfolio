import { LayoutDashboard, Users, Calendar, Settings, Shield, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: LayoutDashboard,
    title: 'Dashboard Overview',
    description: 'At-a-glance view of today\'s appointments, recent patients, and weekly statistics',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Users,
    title: 'Patient Management',
    description: 'Comprehensive patient records with instant search, filtering, and detailed profiles',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Calendar,
    title: 'Appointment Scheduling',
    description: 'Visual calendar with time slots, status tracking, and chiropractor filtering',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Shield,
    title: 'Secure Authentication',
    description: 'Protected login flow with session management and secure routing',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50'
  },
  {
    icon: Settings,
    title: 'Settings & Preferences',
    description: 'Clinic info, user preferences, team management, and security settings',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Weekly appointment trends, patient acquisition stats, and visual charts',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  }
];

export function Features() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">Core Features</h2>
          <p className="max-w-2xl mx-auto text-slate-600">
            Essential functionality designed to solve real clinic workflow problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="group">
              <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="mb-2">{feature.title}</h3>
              <p className="text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}