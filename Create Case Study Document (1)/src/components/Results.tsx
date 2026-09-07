const outcomes = [
  { title: 'Desktop prototype', text: 'IMPLEMENTED — I built Gemini naming, file input, preview, persistent history, and undo/redo around actual local renames.' },
  { title: 'Web demo', text: 'IMPLEMENTED — The browser adaptation generates names and downloads copies. Its session history does not undo filesystem changes.' },
  { title: 'Design direction', text: 'EXPLORATION — Later designs add selective naming, Accept/Regenerate, richer settings, and queue controls. These are not all desktop MVP features.' },
];

export function Results() {
  return (
    <section className="bg-slate-900 text-white py-20 print:bg-white print:text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-white print:text-slate-900">What I built and what remains to test</h2>
          <p className="max-w-2xl mx-auto text-slate-300 print:text-slate-600">I turned opaque image names into descriptive suggestions and built a workflow around real file changes. Formal usability testing is still future work; I have no measured retrieval, speed, or trust results to report.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {outcomes.map(({ title, text }) => (
            <article key={title} className="bg-slate-800 border border-slate-700 rounded-xl p-6 print:bg-white">
              <h3 className="text-lime-400 mb-3 print:text-lime-700">{title}</h3>
              <p className="text-slate-300 print:text-slate-600">{text}</p>
            </article>
          ))}
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 mb-12 print:bg-white">
          <h3 className="text-white mb-4 print:text-slate-900">The design lesson</h3>
          <p className="text-slate-300 mb-4 print:text-slate-600">Moving from desktop to web changed the meaning of a rename. On desktop, the action changes a file in place and needs a recovery path. In the web demo, the action creates a download and preserves the source file. The interface needs to explain that difference.</p>
          <p className="text-slate-300 print:text-slate-600">The biggest lesson was the boundary between a suggestion and an action. AI supplies the description; ordinary software handles state, paths, and recovery. The next question is whether those boundaries are clear in use.</p>
        </div>
        <h3 className="text-white mb-4 print:text-slate-900">The next test I would run</h3>
        <ul className="space-y-4 text-slate-300 print:text-slate-600">
          <li>Recruit people who manage image-heavy folders. Use copies of mixed camera images, screenshots, references, well-named files, and ambiguous images. Compare finding a remembered image before and after renaming, counterbalancing folder sets and order; record time-to-find and search strategy.</li>
          <li>Ask participants to review a batch, including an intentionally plausible but wrong suggestion. Record accept, edit, regenerate, and reject choices; errors missed before Apply; and whether they can explain which files will change. Test later controls in a clearly labelled interaction prototype.</li>
          <li>Have participants apply a bad rename to a disposable copy and recover it without instructions. Record completion, errors, and help needed. Use the results to improve collision handling, inline editing, and naming rules before considering background folder watching.</li>
        </ul>
      </div>
    </section>
  );
}
