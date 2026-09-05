const assumptions = [
  { title: 'Finding images', text: 'Descriptive filenames may make an image easier to identify without opening it. This needs testing against thumbnail browsing and existing search tools.' },
  { title: 'Reviewing suggestions', text: 'Showing the image beside the proposed name gives people a way to catch an inaccurate AI description before using it.' },
  { title: 'Recovering from mistakes', text: 'The desktop design includes rename history and undo. The web demo downloads a renamed copy, leaving the original untouched.' },
];

export function UserResearch() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-blue-600 uppercase tracking-wider">Problem framing</span>
          <h2 className="mb-4">Assumptions behind the prototype</h2>
          <p className="max-w-2xl mx-auto text-slate-600">
            This is a self-directed design and build project. These are hypotheses that guided the interface,
            not findings from a completed user study. Usability testing with photographers and designers remains a next step.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {assumptions.map(({ title, text }) => (
            <article key={title} className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="mb-3">{title}</h3>
              <p className="text-slate-600">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 bg-slate-800 rounded-xl p-8 text-white">
          <h3 className="text-white mb-4">The question to test</h3>
          <p className="text-slate-300">Can people review an AI filename, catch an incorrect suggestion, and recover from a mistake without help? The prototype makes that sequence available for testing.</p>
        </div>
      </div>
    </section>
  );
}
