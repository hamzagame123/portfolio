const outcomes = [
  { title: 'Desktop prototype', text: 'A Python prototype brings image preview, rename controls, and history into one interface.' },
  { title: 'Web demo', text: 'The browser version generates names and downloads renamed copies. It does not rename the original files on disk.' },
  { title: 'Design direction', text: 'Review before action and visible recovery guide the interaction. Their effect on user confidence has not been measured.' },
];

export function Results() {
  return (
    <section className="bg-slate-900 text-white py-20 print:bg-white print:text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-white print:text-slate-900">What I built and what remains to test</h2>
          <p className="max-w-2xl mx-auto text-slate-300 print:text-slate-600">The outcome is a working prototype and a browser adaptation. The next evaluation will examine task completion, errors, and confidence in the suggested names.</p>
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
          <p className="text-slate-300 print:text-slate-600">Building the interaction helped me work through those states. It does not tell me whether people find the tool easier or more trustworthy. That requires observing real use.</p>
        </div>
        <h3 className="text-white mb-4 print:text-slate-900">Next steps</h3>
        <ul className="space-y-4 text-slate-300 print:text-slate-600">
          <li>Test finding, reviewing, and downloading images with photographers and designers. Record completion, errors, and points where help is needed.</li>
          <li>Test incorrect AI suggestions and recovery before claiming the workflow builds trust.</li>
          <li>Explore desktop folder watching and richer batch controls after testing the core flow. These remain planned enhancements.</li>
        </ul>
      </div>
    </section>
  );
}
