import { Users, Target, TrendingUp, Quote } from 'lucide-react';

const userInsights = [
  {
    stat: '7 min',
    label: 'average time to book a single appointment with existing systems',
    source: 'User interviews'
  },
  {
    stat: '95%',
    label: 'of clinic tasks happen on desktop computers during work hours',
    source: 'Usage research'
  },
  {
    stat: '20+',
    label: 'patients managed daily by a single receptionist at peak hours',
    source: 'Industry research'
  }
];

const userNeeds = [
  {
    icon: Target,
    need: 'Speed',
    description: 'Patient lookup and booking must be instant during phone calls',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Users,
    need: 'Clarity',
    description: 'Complex medical data needs clear visual hierarchy',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: TrendingUp,
    need: 'Trust',
    description: 'Healthcare software must feel secure and professional',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  }
];

export function UserResearch() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="w-6 h-6 text-blue-600" />
            <span className="text-blue-600 uppercase tracking-wider">User Research</span>
          </div>
          <h2 className="mb-4">Understanding the Problem Space</h2>
          <p className="max-w-2xl mx-auto text-slate-600">
            Research insights that shaped the design direction
          </p>
        </div>

        {/* User Quote */}
        <div className="bg-white border-l-4 border-blue-500 rounded-r-xl p-8 mb-12 shadow-sm">
          <Quote className="w-8 h-8 text-blue-600 mb-4" />
          <p className="text-xl text-slate-700 mb-4">
            "I spend more time navigating the software than I do with my patients. Finding patient
            history takes forever, and booking an appointment shouldn't take 7 minutes."
          </p>
          <div className="text-slate-500">- Chiropractor, 12 years experience</div>
        </div>

        {/* Key Insights */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {userInsights.map((insight, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
              <div className="text-4xl text-blue-600 mb-2">{insight.stat}</div>
              <p className="text-slate-700 mb-2">{insight.label}</p>
              <p className="text-slate-500">{insight.source}</p>
            </div>
          ))}
        </div>

        {/* User Needs */}
        <div>
          <h3 className="mb-6">Core User Needs</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {userNeeds.map((item) => (
              <div key={item.need} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className={`w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h4 className="mb-2">{item.need}</h4>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Design Challenge */}
        <div className="mt-12 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-8 text-white">
          <h3 className="text-white mb-4">The Design Challenge</h3>
          <p className="text-slate-300">
            How might we <span className="text-blue-400">create an intuitive interface that requires minimal training</span>,
            while handling complex medical data efficiently and building trust through professional aesthetics?
          </p>
        </div>
      </div>
    </section>
  );
}
