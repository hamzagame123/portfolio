import userJourneyImage from 'figma:asset/eec62c07ba4d1bd65a92736bf8135aa91a09f22d.png';

export function UserJourney() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h2 className="text-emerald-600 mb-4">User Journey</h2>
        <p className="text-neutral-600 max-w-3xl">
          The Smart Image Renamer follows a five-stage journey designed to balance automation with user control. 
          Each step was carefully crafted to build trust while minimizing friction in the renaming workflow.
        </p>
      </div>

      <div className="bg-white rounded-lg p-8 shadow-sm border border-neutral-200">
        <img 
          src={userJourneyImage} 
          alt="User Journey: Five stages from Intake to Execution showing the complete workflow of the Smart Image Renamer"
          className="w-full h-auto"
        />
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="space-y-2">
          <div className="text-emerald-600 text-sm uppercase tracking-wide">Stage 1</div>
          <h3 className="text-neutral-900">Intake & Connection</h3>
          <p className="text-neutral-600 text-sm">
            User drags a folder containing images with generic filenames into the application queue.
          </p>
        </div>

        <div className="space-y-2">
          <div className="text-emerald-600 text-sm uppercase tracking-wide">Stage 2</div>
          <h3 className="text-neutral-900">Intent & Configuration</h3>
          <p className="text-neutral-600 text-sm">
            User configures naming conventions, sets custom tags, and defines folder organization preferences.
          </p>
        </div>

        <div className="space-y-2">
          <div className="text-emerald-600 text-sm uppercase tracking-wide">Stage 3</div>
          <h3 className="text-neutral-900">AI Analysis & Proposal</h3>
          <p className="text-neutral-600 text-sm">
            AI analyzes each image and proposes descriptive filenames based on visual content and user settings.
          </p>
        </div>

        <div className="space-y-2">
          <div className="text-emerald-600 text-sm uppercase tracking-wide">Stage 4</div>
          <h3 className="text-neutral-900">Trust & Review Loop</h3>
          <p className="text-neutral-600 text-sm">
            User reviews AI suggestions, edits tags as needed, and approves changes before they're applied.
          </p>
        </div>

        <div className="space-y-2">
          <div className="text-emerald-600 text-sm uppercase tracking-wide">Stage 5</div>
          <h3 className="text-neutral-900">Execution & Relief</h3>
          <p className="text-neutral-600 text-sm">
            Files are renamed successfully, history is logged, and user experiences relief from the tedious task.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-emerald-50 border border-emerald-200 rounded-lg p-6">
        <h4 className="text-emerald-900 mb-3">Journey Design Insights</h4>
        <ul className="space-y-2 text-neutral-700">
          <li className="flex items-start gap-3">
            <span className="text-emerald-600 mt-1">•</span>
            <span><strong>Trust Building:</strong> Stage 4's review loop is critical because users need to verify AI decisions before committing to file changes.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-600 mt-1">•</span>
            <span><strong>Progressive Disclosure:</strong> Configuration options are tucked away in Stage 2, preventing overwhelm at the entry point.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-600 mt-1">•</span>
            <span><strong>Emotional Arc:</strong> The journey maps to user emotions: from frustration with messy files, through cautious optimism, to final relief.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
