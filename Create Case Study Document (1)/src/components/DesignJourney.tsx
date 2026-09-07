import mainImage from 'figma:asset/cd6b5bfc39fc369b349f1604a7d6dbe3e73cfb7a.png';
import settingsImage from 'figma:asset/7776b2e3d5c09fa5c797f97d8effe7a1e48169c1.png';

const reviewDecisions = [
  {title: 'Let me check it before it changes anything.', why: 'A convincing filename can still describe the wrong thing. I separated generating a suggestion from applying it, and put the image beside the original and proposed names.', change: 'Preview → accept or regenerate → apply. Each action has a different job.'},
  {title: 'Keep track of what happened, not just what is next.', why: 'Once a file is renamed, its old name is easy to lose. I kept both names in searchable history and included Undo / Redo. The queue gives incoming files their own place.', change: 'History, preview, and queue separate past changes, the current decision, and incoming work.'},
];
const namingDecisions = [
  {title: 'Leave useful names alone.', why: 'If I had already named a file, generating another name added work. I added an option to skip normal names, using a heuristic to identify camera codes and other unhelpful filenames.', change: 'Automation is selective. The heuristic still needs testing for names it incorrectly skips or flags.'},
  {title: 'Fit my filing habits instead of replacing them.', why: 'A good description still needs to fit the way files are organized. I separated the meaning of a name from its casing, separator, tags, and custom instructions.', change: 'Naming rules live in Settings so they are available without competing with the review step.'},
];
function Decisions({items}: {items: typeof reviewDecisions}) {
  return <div className="grid md:grid-cols-2 gap-8 mb-8">{items.map(item => <article key={item.title} className="bg-slate-50 rounded-xl p-8 border-2 border-slate-200">
    <h3 className="mb-4">{item.title}</h3><p className="text-slate-700 mb-4">{item.why}</p>
    <p className="text-slate-700 border-l-4 border-lime-400 pl-4"><strong>In the interface:</strong> {item.change}</p>
  </article>)}</div>;
}
export function DesignJourney() {
  return <section className="bg-white py-20"><div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-12"><h2 className="mb-4">Four decisions shaped the workflow.</h2><p className="max-w-2xl mx-auto text-slate-600">I worked outward from the task: what needs my attention, what can happen automatically, and what I need to see before moving on.</p></div>
    <Decisions items={reviewDecisions} />
    <figure className="bg-slate-100 rounded-xl p-6 mb-12 border border-slate-200"><img src={mainImage} alt="Interface design with separate History, Image Preview, and Queue panels, plus Preview Mode and Apply Changes" className="w-full h-auto rounded-lg" loading="lazy"/><figcaption className="text-slate-600 mt-4">My interface exploration brings those controls together. The sample entries and image placeholders illustrate the layout.</figcaption></figure>
    <Decisions items={namingDecisions} />
    <figure className="bg-slate-100 rounded-xl p-6 border border-slate-200"><img src={settingsImage} alt="Settings design showing skip normal filenames, separator, casing, custom instructions, and tag presets" className="w-full h-auto rounded-lg" loading="lazy"/><figcaption className="text-slate-600 mt-4">Naming and automation settings. Folder watching is an explored direction, not a finished feature.</figcaption></figure>
  </div></section>;
}
