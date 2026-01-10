export function Screenshots() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">Design System in Action</h2>
          <p className="max-w-2xl mx-auto text-slate-600">
            The Medshield design system ensures consistency across all screens and interactions
          </p>
        </div>

        <div className="space-y-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg border border-blue-200">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h3>Color System</h3>
                <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">Brand Cohesion</span>
              </div>
              <p className="text-slate-600">
                Primary blue (#0066CC) derived from the Medshield logo creates instant brand recognition
              </p>
            </div>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="w-full h-16 rounded-lg mb-3" style={{ backgroundColor: '#0066CC' }}></div>
                <div className="text-slate-900 text-sm font-medium">Primary</div>
                <div className="text-slate-500 text-sm">#0066CC</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="w-full h-16 rounded-lg mb-3" style={{ backgroundColor: '#f3f3f5' }}></div>
                <div className="text-slate-900 text-sm font-medium">Background</div>
                <div className="text-slate-500 text-sm">#f3f3f5</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="w-full h-16 rounded-lg mb-3" style={{ backgroundColor: '#22c55e' }}></div>
                <div className="text-slate-900 text-sm font-medium">Success</div>
                <div className="text-slate-500 text-sm">#22c55e</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="w-full h-16 rounded-lg mb-3" style={{ backgroundColor: '#d4183d' }}></div>
                <div className="text-slate-900 text-sm font-medium">Destructive</div>
                <div className="text-slate-500 text-sm">#d4183d</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="w-full h-16 rounded-lg mb-3" style={{ backgroundColor: '#717182' }}></div>
                <div className="text-slate-900 text-sm font-medium">Muted</div>
                <div className="text-slate-500 text-sm">#717182</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h3>Component Library</h3>
                <span className="px-3 py-1 bg-slate-700 text-white rounded-full text-sm">40+ Components</span>
              </div>
              <p className="text-slate-600">
                Reusable UI components ensure consistency and speed up development
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl mb-2">🃏</div>
                <div className="text-slate-900 font-medium">Cards & Panels</div>
                <div className="text-slate-500 text-sm">Content organization</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl mb-2">📊</div>
                <div className="text-slate-900 font-medium">Data Tables</div>
                <div className="text-slate-500 text-sm">Patient listings</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl mb-2">📅</div>
                <div className="text-slate-900 font-medium">Calendar Views</div>
                <div className="text-slate-500 text-sm">Appointment scheduling</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl mb-2">🏷️</div>
                <div className="text-slate-900 font-medium">Status Badges</div>
                <div className="text-slate-500 text-sm">Visual indicators</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}