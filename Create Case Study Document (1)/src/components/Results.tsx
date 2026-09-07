export function Results() {
  return <section className="bg-slate-900 text-white py-20 print:bg-white print:text-slate-900"><div className="max-w-7xl mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-8">
      <div><h2 className="text-white mb-4 print:text-slate-900">The task taught me what the interface needed.</h2><p className="text-slate-300 mb-4 print:text-slate-600">I started with “can AI name an image?” Building it pushed me to think about the whole sequence: what deserves attention, when a change should happen, and what someone needs to pick the work back up.</p><p className="text-slate-300 print:text-slate-600">The most useful decisions were small: keep the old name visible, separate a suggestion from an action, and let the output fit an existing way of working.</p></div>
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 print:bg-white"><h3 className="text-lime-400 mb-4 print:text-lime-700">What I still need to test</h3><p className="text-slate-300 mb-4 print:text-slate-600">I have a desktop prototype and browser adaptation. I haven’t completed user testing yet.</p><ul className="space-y-4 text-slate-300 print:text-slate-600"><li><strong>Review effort:</strong> does checking each name save work overall?</li><li><strong>Recovery:</strong> can someone catch a bad suggestion and reverse a change without help?</li><li><strong>Usefulness:</strong> are these names more helpful than thumbnails or existing search?</li></ul></div>
    </div>
  </div></section>;
}
