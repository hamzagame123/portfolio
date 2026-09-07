import { FileQuestion, Sparkles, CheckCircle2, Users, Target } from 'lucide-react';

export function Overview() {
  return (
    <section id="problem" className="max-w-7xl mx-auto px-6 py-20">
      {/* Project Brief */}
      <div className="mb-16 bg-slate-100 border-l-4 border-slate-700 rounded-r-xl p-8">
        <h3 className="mb-3">The Brief</h3>
        <p className="text-slate-700 mb-4">
          I set out to turn machine-generated image filenames into descriptions of what is actually visible. The goal was a focused desktop prototype: make images easier to recognize and retrieve without giving the model control over every file decision.
        </p>
        <div className="flex flex-wrap gap-6 mt-6">
          <div className="flex items-start gap-3">
            <Users className="w-5 h-5 text-slate-600 mt-0.5" />
            <div>
              <div className="text-slate-900">Starting audience</div>
              <div className="text-slate-600">Photographers, designers, content creators</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Target className="w-5 h-5 text-slate-600 mt-0.5" />
            <div>
              <div className="text-slate-900">Timeline</div>
              <div className="text-slate-600">4 weeks (Solo project)</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="mb-6">The filename tells me almost nothing</h2>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
            <div className="flex items-start gap-3">
              <FileQuestion className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-slate-700 mb-3">
                  My folders fill up with names like <code className="px-2 py-1 bg-slate-200 rounded">DSC_8472.jpg</code>. A camera counter identifies a file, but gives me no subject words to search when I remember the image months later.
                </p>
                <p className="text-slate-700">
                  With hundreds of images, I may remember “the office reference” or “the beach photo” without remembering a date or device. Finding it becomes a manual browsing task.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-slate-600">
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <div>
                <span className="text-slate-900">The retrieval gap:</span> machine IDs carry little information about image content
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <div>
                Descriptive names add <span className="text-slate-900">words I can recognize and search</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <div>
                Poor file naming makes <span className="text-slate-900">searching and retrieving
                  images difficult</span> months later
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
                  <span className="text-lime-700">Smart Image Renamer analyzes image content using Google's Gemini AI</span>,
                  automatically generating descriptive filenames like <code className="px-2 py-1 bg-slate-200 rounded">sunset-beach-wedding-ceremony.jpg</code>.
                </p>
                <p className="text-slate-700">
                  The desktop MVP included <span className="text-lime-700">preview, rename history, and undo/redo</span>. Later interface work explored skipping already-useful names and adapting suggestions to existing naming conventions.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-slate-600">
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-slate-900">AI-powered naming</span> proposes a description; it can misread the image
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
                <span className="text-slate-900">Review and recovery</span> in the MVP; richer customization in later explorations
              </div>
            </div>
          </div>

          {/* Design Goal Callout */}
          <div className="mt-8 bg-slate-50 rounded-xl p-8 border border-slate-200">
            <div className="text-slate-900 mb-3 text-lg font-medium">Design Goal</div>
            <p className="text-slate-600 text-lg leading-relaxed">
              Generating a name was only half the problem. I had to decide <span className="text-slate-900 font-semibold">when to automate, what to review, and how to recover</span> when a plausible suggestion is wrong. Example filenames here illustrate the intent; they are not measured results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
