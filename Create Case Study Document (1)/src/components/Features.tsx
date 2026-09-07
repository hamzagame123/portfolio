import { Brain, History, Shield, Zap, Settings2, FileCheck } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Naming',
    description: 'The web version uses Gemini to propose descriptive names for review',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Zap,
    title: 'Drag & Drop',
    description: 'File and folder selection explore one-off input and an ongoing folder workflow',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: History,
    title: 'Full History',
    description: 'History shows original and proposed names, tags, and timestamps',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Shield,
    title: 'Preview Before Applying',
    description: 'Separate preview and apply controls make the proposed change explicit',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50'
  },
  {
    icon: Settings2,
    title: 'Undo/Redo',
    description: 'Visible reversal controls make recoverability part of the desktop design',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  },
  {
    icon: FileCheck,
    title: 'Selective Naming',
    description: 'A heuristic targets unhelpful names; its reliability has not been validated',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  }
];

export function Features() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">Controls That Support the Workflow</h2>
          <p className="max-w-2xl mx-auto text-slate-600">
            A summary of the prototype and interface direction; behavior and scope differ between desktop and web.
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