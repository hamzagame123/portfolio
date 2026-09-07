import prototypeImage from 'figma:asset/4847f92f944cb602fcc7dbf2d6b475bc5074778c.png';

export function Overview() {
  return <section className="max-w-7xl mx-auto px-6 py-20">
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <div><h2 className="mb-4">I wanted to stop opening every image just to name it.</h2>
      <p className="text-slate-600">My folders were full of camera codes and screenshot filenames. Renaming meant opening an image, deciding what to call it, and repeating that for the next file. I started by building a Python tool to see whether AI could suggest a useful name.</p></div>
      <div className="bg-lime-50 border-l-4 border-lime-500 rounded-r-xl p-8">
        <h3 className="mb-3">Getting a name was only the first step.</h3>
        <p className="text-slate-700">I still needed to check the suggestion, decide whether to use it, and know what had changed. Those decisions became the interface: a preview, an approval step, and a history I could return to.</p>
      </div>
    </div>
    <figure className="bg-slate-100 rounded-xl p-6 border border-slate-200">
      <img src={prototypeImage} alt="Desktop prototype with rename history, file input, image preview, and Apply Changes controls" className="w-full h-auto rounded-lg" />
      <figcaption className="text-slate-600 mt-4">My desktop prototype: the image stays beside the file controls, and the previous name stays in history.</figcaption>
    </figure>
  </section>;
}
