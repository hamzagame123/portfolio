import webImage from 'figma:asset/8581fc19e4d378cabcb3f1ebd14ab4d2dd2fe929.png';

export function WebApp() {
  return <section className="max-w-7xl mx-auto px-6 py-20">
    <div className="grid md:grid-cols-2 gap-8 mb-8"><div><h2 className="mb-4">Taking it to the browser changed what “rename” meant.</h2><p className="text-slate-600">I carried the history, preview, and queue into a web version, using Gemini to analyze images. But the final action had a different outcome, so the interface needed to explain it.</p></div>
    <div className="bg-white rounded-xl p-6 border border-slate-200"><h3 className="mb-3">One workflow, two outcomes</h3><p className="text-slate-700 mb-4"><strong>Desktop:</strong> change the file in place, with its previous name available for recovery.</p><p className="text-slate-700"><strong>Browser:</strong> download a renamed copy and keep the original. Completion needs to make clear that a new file was created.</p></div></div>
    <figure className="bg-slate-100 rounded-xl p-6 border border-slate-200"><img src={webImage} alt="Browser version showing History, image preview, and Queue in the empty state" className="w-full h-auto rounded-lg" loading="lazy"/><figcaption className="text-slate-600 mt-4">The browser version keeps the same organization while changing the final file action.</figcaption></figure>
  </section>;
}
