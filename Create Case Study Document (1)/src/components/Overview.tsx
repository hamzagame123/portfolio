import { FileQuestion, Sparkles, CheckCircle2, Users, Target } from 'lucide-react';

export function Overview() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Project Brief */}
      <div className="mb-16 bg-slate-100 border-l-4 border-slate-700 rounded-r-xl p-8">
        <h3 className="mb-3">The Brief</h3>
        <p className="text-slate-700 mb-4">
          Design and develop a cross-platform desktop application that uses AI to automatically rename 
          image files with descriptive, human-readable names, eliminating the chaos of cryptic filenames 
          while maintaining user control and file organization.
        </p>
        <div className="flex flex-wrap gap-6 mt-6">
          <div className="flex items-start gap-3">
            <Users className="w-5 h-5 text-slate-600 mt-0.5" />
            <div>
              <div className="text-slate-900">Target Users</div>
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
          <h2 className="mb-6">The Problem</h2>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
            <div className="flex items-start gap-3">
              <FileQuestion className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-slate-700 mb-3">
                  <span className="text-red-700">A wedding photographer returns from a shoot with 847 images</span> 
                  , all named variations of <code className="px-2 py-1 bg-slate-200 rounded">DSC_8472.jpg</code>. 
                  Three months later, finding "the shot with the sunset" becomes a 20-minute search.
                </p>
                <p className="text-slate-700">
                  This scenario repeats daily for creative professionals managing thousands of images. Manual 
                  renaming is tedious and inconsistent. Existing tools either lack intelligence or require 
                  complex batch renaming rules.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 text-slate-600">
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <div>
                <span className="text-slate-900">73% of creative professionals</span> report spending 
                significant time organizing files
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <div>
                Manual renaming is <span className="text-slate-900">time-consuming, 
                inconsistent, and error-prone</span>
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
                  The application <span className="text-lime-700">intelligently detects gibberish filenames</span> and 
                  only renames those, preserving already-meaningful names. Users maintain full control with preview 
                  mode, undo functionality, and complete rename history.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 text-slate-600">
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-slate-900">Instant AI-powered analysis</span> understands image 
                content and context
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-slate-900">Automatic folder watching</span> renames new files 
                as they appear
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-slate-900">Complete control</span> with preview, undo, and 
                customization options
              </div>
            </div>
          </div>

      </div>
      </div>

      {/* Design Goal Callout */}
      <div className="mt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.15),transparent_50%)] rounded-2xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(132,204,22,0.1),transparent_50%)] rounded-2xl"></div>
        
        <div className="relative py-16 px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <svg className="w-5 h-5 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-medium text-white/90 tracking-wide uppercase">Design Goal</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight max-w-3xl mx-auto leading-tight">
            Make AI-powered file management feel{' '}
            <span className="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
              trustworthy, transparent, and effortless
            </span>
          </h3>
          
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Transforming a tedious task into a seamless experience.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/10">
              <svg className="w-5 h-5 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white/90 font-medium">Trustworthy</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/10">
              <svg className="w-5 h-5 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="text-white/90 font-medium">Transparent</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/10">
              <svg className="w-5 h-5 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-white/90 font-medium">Effortless</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}