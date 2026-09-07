import { FileQuestion, Sparkles, CheckCircle2, Users, Target } from 'lucide-react';

export function Overview() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Project Brief */}
      <div className="mb-16 bg-slate-100 border-l-4 border-slate-700 rounded-r-xl p-8">
        <h3 className="mb-3">The Brief</h3>
        <p className="text-slate-700 mb-4">
          Explore whether image recognition could make renaming less repetitive, then design the steps between receiving a suggestion and changing a file. My contribution was shaping the workflow, interface, and naming controls, with AI-assisted implementation.
        </p>
        <div className="flex flex-wrap gap-6 mt-6">
          <div className="flex items-start gap-3">
            <Users className="w-5 h-5 text-slate-600 mt-0.5" />
            <div>
              <div className="text-slate-900">Intended Audience</div>
              <div className="text-slate-600">Photographers, designers, content creators</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Target className="w-5 h-5 text-slate-600 mt-0.5" />
            <div>
              <div className="text-slate-900">Project Status</div>
              <div className="text-slate-600">Prototype; user testing remains to be done</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="mb-6">The Problem</h2>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
            <div className="flex items-start gap-3">
              <FileQuestion className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-slate-700 mb-3">
                  The task started with files named <code className="px-2 py-1 bg-slate-200 rounded">DSC_8472.jpg</code>. The filename tells you little about the image. Opening images one by one to decide on a name was the repetitive task I wanted to improve.
                </p>
                <p className="text-slate-700">
                  I explored whether AI-generated descriptions could make files easier to recognize while
                  keeping the person in control of the final name.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-slate-600">
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <div>
                <span className="text-slate-900">The starting assumption:</span> descriptive names may help people identify images
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <div>
                The repeated work: <span className="text-slate-900">open an image, describe it, and rename the file</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <div>
                The question to test: <span className="text-slate-900">are descriptive names more useful than thumbnails or existing search?</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-6">My Solution</h2>
          <div className="bg-lime-50 border-l-4 border-lime-500 p-6 rounded-r-lg mb-6">
            <div className="flex items-start gap-3">
              <Sparkles className="w-6 h-6 text-lime-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-slate-700 mb-3">
                  <span className="text-lime-700">The later web version uses Gemini to suggest names from image content</span>,
                  with a result such as <code className="px-2 py-1 bg-slate-200 rounded">sunset-beach-wedding-ceremony.jpg</code>.
                </p>
                <p className="text-slate-700">
                  The recovered interface separates <span className="text-lime-700">suggestion from application</span>. Preview, approval, and history make the proposed change visible. A filename heuristic explores skipping already-useful names; its reliability still needs testing.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-slate-600">
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-slate-900">AI-powered naming</span> proposes a description for review
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-slate-900">Image preview</span> lets people compare the suggestion
                with the source image
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-slate-900">Controls for review and recovery</span> through preview, undo, and naming settings
              </div>
            </div>
          </div>

          {/* Design Goal Callout */}
          <div className="mt-8 bg-slate-50 rounded-xl p-8 border border-slate-200">
            <div className="text-slate-900 mb-3 text-lg font-medium">Design Goal</div>
            <p className="text-slate-600 text-lg leading-relaxed">
              Make the suggestion <span className="text-slate-900 font-semibold">inspectable, controllable, and reversible</span> before it acts on a person’s files.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
