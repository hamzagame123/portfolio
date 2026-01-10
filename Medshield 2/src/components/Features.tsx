import { Brain, History, Shield, Zap, Settings2, FileCheck } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Naming',
    description: 'Google Gemini analyzes images and generates descriptive filenames automatically',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Zap,
    title: 'Drag & Drop',
    description: 'Simple interface: just drag files or folders in to start processing',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: History,
    title: 'Full History',
    description: 'Every rename is logged with timestamps for complete audit trail',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Shield,
    title: 'Safe Operations',
    description: 'File validation, collision detection, and graceful error handling',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50'
  },
  {
    icon: Settings2,
    title: 'Undo/Redo',
    description: 'Instantly revert any rename with full undo/redo stack support',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  },
  {
    icon: FileCheck,
    title: 'Smart Detection',
    description: 'Only renames gibberish files while preserving meaningful names',
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
            Essential functionality that makes file management effortless
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