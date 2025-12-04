import { TrendingUp, Target, Award, Lightbulb, ArrowUpRight, Palette } from 'lucide-react';

const outcomes = [
  {
    icon: Target,
    metric: '4 weeks',
    label: 'Concept to Working MVP',
    description: 'Designed and validated core UX patterns in a focused sprint',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Award,
    metric: '100%',
    label: 'Reversible Actions',
    description: 'Every rename can be undone. Trust built through design',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: TrendingUp,
    metric: '3 Panels',
    label: 'Information Hierarchy',
    description: 'Clear separation reduces cognitive load when processing files',
    color: 'text-lime-600',
    bgColor: 'bg-lime-50'
  },
  {
    icon: Palette,
    metric: 'MVP',
    label: 'Validated Core Flow',
    description: 'Proven interaction model ready for future iterations',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  }
];

const designLearnings = [
  {
    title: 'Trust Isn\'t Just a Feature',
    insight: 'Preview mode, undo functionality, and history tracking aren\'t optional. They\'re trust-building mechanisms that make users comfortable with AI automation. Without them, the tool is unusable regardless of technical capability.'
  },
  {
    title: 'Design for Skepticism',
    insight: 'Users don\'t trust AI by default. Every design decision had to answer: "How does this prove the tool is safe?" Showing exactly what will change before it happens is more important than speed or convenience.'
  },
  {
    title: 'MVP Means Validated Patterns, Not Feature Count',
    insight: 'I learned it\'s better to perfect one workflow (drag → preview → rename → undo) than to half-build ten features. The validated UX patterns now provide a foundation for any future additions.'
  },
  {
    title: 'Visual Design Signals Quality',
    insight: 'Users judge reliability by aesthetics. The same functionality in a polished dark interface was perceived as more trustworthy than in basic UI. Professional visuals aren\'t vanity; they communicate competence.'
  },
  {
    title: 'Simplicity Requires Deep Understanding',
    insight: 'The "simple" drag-and-drop workflow only feels effortless because of invisible complexity: file validation, error handling, state management, visual feedback. True simplicity comes from hiding necessary complexity, not removing it.'
  }
];

const futureEnhancements = [
  {
    title: 'User Testing',
    description: 'Validate assumptions with real photographers and designers to identify pain points I missed',
    priority: 'High'
  },
  {
    title: 'Batch Operations UI',
    description: 'Design queue management interface for processing large directories with progress tracking',
    priority: 'High'
  },
  {
    title: 'Customization Options',
    description: 'Allow users to define naming styles, filename patterns, and AI instruction templates',
    priority: 'Medium'
  },
  {
    title: 'Folder Watching',
    description: 'Design passive monitoring mode for automatic renaming of new files as they appear',
    priority: 'Medium'
  }
];

export function Results() {
  return (
    <section className="bg-slate-900 text-white py-20 print:bg-white print:text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-white print:text-slate-900">Results & Learnings</h2>
          <p className="max-w-2xl mx-auto text-slate-300 print:text-slate-600">
            What I accomplished and what I learned as a designer
          </p>
        </div>
        
        {/* Outcomes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {outcomes.map((outcome) => (
            <div key={outcome.label} className="bg-slate-800 border border-slate-700 rounded-xl p-6 print:bg-white print:border-slate-300">
              <div className={`w-12 h-12 ${outcome.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <outcome.icon className={`w-6 h-6 ${outcome.color}`} />
              </div>
              <div className="text-3xl mb-2 print:text-slate-900">{outcome.metric}</div>
              <div className="text-lime-400 mb-2 print:text-lime-700">{outcome.label}</div>
              <p className="text-slate-300 print:text-slate-600">{outcome.description}</p>
            </div>
          ))}
        </div>
        
        {/* Design Learnings */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Lightbulb className="w-6 h-6 text-amber-400 print:text-amber-600" />
            <h3 className="text-white print:text-slate-900">Design Learnings</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {designLearnings.map((learning, index) => (
              <div key={index} className="bg-slate-800 border border-slate-700 rounded-lg p-6 print:bg-slate-50 print:border-slate-300">
                <h4 className="text-lime-400 mb-3 print:text-lime-700">{learning.title}</h4>
                <p className="text-slate-300 print:text-slate-700">{learning.insight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reflection */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 mb-16 print:bg-slate-50 print:border-slate-300">
          <h3 className="mb-4 text-white print:text-slate-900">Reflection</h3>
          <div className="space-y-4 text-slate-300 print:text-slate-700">
            <p>
              <span className="text-white print:text-slate-900">This project taught me that great UX design is about building trust, not just solving problems.</span> When 
              users hand over control of their files to an AI, they need constant reassurance. Every design decision, from the 
              preview panel to the undo button to the rename history, serves to build that trust.
            </p>
            <p>
              The most surprising insight was how much <span className="text-white print:text-slate-900">visual design impacts perceived reliability</span>. The 
              exact same functionality presented with professional aesthetics was perceived as more trustworthy. This taught me 
              that polish isn't superficial. It's a signal of quality and care.
            </p>
            <p>
              If I were to start over, I would <span className="text-white print:text-slate-900">involve users earlier in the design process</span>. While I 
              iterated based on research and design principles, formal user testing with photographers and designers would have 
              revealed pain points faster and validated design decisions with real evidence instead of assumptions.
            </p>
          </div>
        </div>

        {/* Next Steps */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <ArrowUpRight className="w-6 h-6 text-lime-400 print:text-lime-600" />
            <h3 className="text-white print:text-slate-900">Next Design Iterations</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {futureEnhancements.map((step, index) => (
              <div key={index} className="bg-lime-900/30 border border-lime-500/30 rounded-lg p-6 print:bg-lime-50 print:border-lime-300">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lime-400 print:text-lime-700">{step.title}</h4>
                  <span className="px-2 py-1 bg-lime-500/20 text-lime-300 rounded text-sm print:bg-lime-200 print:text-lime-800">{step.priority}</span>
                </div>
                <p className="text-slate-300 print:text-slate-700">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-slate-400 print:text-slate-600">
              The validated MVP provides a foundation for these enhancements. Each addition would be designed 
              with the same principles: trust, transparency, control, and simplicity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}