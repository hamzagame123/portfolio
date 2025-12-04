import { AlertTriangle, CheckCircle2, Shield, Brain, Users, Zap } from 'lucide-react';

const challenges = [
  {
    icon: Shield,
    title: 'Building Trust in Automation',
    challenge: 'Users fear AI tools will break their files or make irreversible mistakes',
    solution: 'Designed preview-before-action workflow, complete undo system, and persistent history to build confidence through transparency',
    color: 'text-teal-600'
  },
  {
    icon: Brain,
    title: 'Communicating AI Behavior',
    challenge: 'AI responses are unpredictable. How do you show users what the AI "thinks" without technical jargon?',
    solution: 'Focused on showing results, not process. Display suggested filename with visual preview so users can verify accuracy instantly',
    color: 'text-purple-600'
  },
  {
    icon: Users,
    title: 'Balancing Control vs. Automation',
    challenge: 'Too much automation feels risky; too much manual work defeats the purpose',
    solution: 'Designed hybrid approach: AI suggests, user approves. Made approval effortless with single-click actions and batch support',
    color: 'text-orange-600'
  },
  {
    icon: Zap,
    title: 'Managing Cognitive Load',
    challenge: 'Users need to verify AI accuracy while processing hundreds of files, and mental fatigue is real',
    solution: 'Three-panel layout separates concerns: history (what happened), preview (what\'s next), image (context for verification)',
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
        <h2 className="mb-4">UX Obstacles & Solutions</h2>
        <p className="max-w-2xl mx-auto text-slate-600">
          Key design challenges and how I addressed them through interaction patterns
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
                  <div className="text-lime-700 mb-1">Design Solution</div>
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