import { AlertTriangle, CheckCircle2, Shield, Brain, Users, Zap } from 'lucide-react';

const challenges = [
  {
    icon: Shield,
    title: 'Review Effort',
    challenge: 'Checking every suggestion adds work to a task meant to become less repetitive',
    solution: 'Keep review before application, then test when individual approval helps and when batch review is more appropriate',
    color: 'text-teal-600'
  },
  {
    icon: Brain,
    title: 'Incorrect Suggestions',
    challenge: 'A confident-sounding filename can misdescribe the image',
    solution: 'Show the image and proposed name together; test whether someone catches an inaccurate description and regenerates it',
    color: 'text-purple-600'
  },
  {
    icon: Users,
    title: 'Settings Discoverability',
    challenge: 'Moving naming rules out of the main view makes them less visible',
    solution: 'Keep the review view focused, then test whether people can find separator, casing, and instruction controls',
    color: 'text-orange-600'
  },
  {
    icon: Zap,
    title: 'Growing Beyond One File',
    challenge: 'The queue suggests a batch workflow, but performance and review effort at scale are unmeasured',
    solution: 'Test the core sequence with a small set of files before expanding watched folders or making throughput claims',
    color: 'text-blue-600'
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
        <h2 className="mb-4">Tradeoffs I Still Need to Test</h2>
        <p className="max-w-2xl mx-auto text-slate-600">
          These are open design questions, not issues that the prototype has already proven it solves.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {challenges.map((item, index) => (
          <div key={index} className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-lime-300 transition-colors">
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
                <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-lime-700 mb-1">Design Response / Next Test</div>
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