import { AlertCircle, Shield, CheckCircle2, Users, Target } from 'lucide-react';

export function Overview() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Project Brief */}
      <div className="mb-16 bg-slate-100 border-l-4 border-slate-700 rounded-r-xl p-8">
        <h3 className="mb-3">The Brief</h3>
        <p className="text-slate-700 mb-4">
          Design and develop a web application that helps chiropractic clinics manage patient records efficiently,
          schedule appointments seamlessly, and provide a professional, trustworthy experience for clinic staff.
        </p>
        <div className="flex flex-wrap gap-6 mt-6">
          <div className="flex items-start gap-3">
            <Users className="w-5 h-5 text-slate-600 mt-0.5" />
            <div>
              <div className="text-slate-900">Target Users</div>
              <div className="text-slate-600">Chiropractors, clinic staff, receptionists</div>
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
              <AlertCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-slate-700 mb-3">
                  <span className="text-red-700">A chiropractor with 12 years of experience spends more time navigating software than with patients.</span>
                  Finding patient history takes forever, and booking an appointment shouldn't take 7 minutes.
                </p>
                <p className="text-slate-700">
                  Chiropractic clinics struggle with outdated, complex systems that waste valuable time
                  and create frustration for both staff and patients. Fragmented tools create inefficiency.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-slate-600">
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <div>
                <span className="text-slate-900">Complex interfaces</span> slow down workflow and increase cognitive load
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <div>
                <span className="text-slate-900">Scattered patient information</span> makes data retrieval time-consuming
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <div>
                <span className="text-slate-900">Manual booking processes</span> lead to scheduling conflicts and errors
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-6">My Solution</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-slate-700 mb-3">
                  <span className="text-blue-700">Medshield provides a modern, intuitive dashboard</span> with at-a-glance
                  overview of appointments, quick patient lookup, and streamlined scheduling.
                </p>
                <p className="text-slate-700">
                  The application features <span className="text-blue-700">comprehensive patient management</span> with
                  search, filtering, and detailed profiles, plus visual calendar views with color-coded status badges.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-slate-600">
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-slate-900">Patient lookup under 5 seconds</span> with instant search and filtering
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-slate-900">Appointment booking under 2 minutes</span> with visual time slots
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-slate-900">Minimal training required</span> with intuitive, familiar patterns
              </div>
            </div>
          </div>

          {/* Design Goal Callout */}
          <div className="mt-8 bg-slate-50 rounded-xl p-8 border border-slate-200">
            <div className="text-slate-900 mb-3 text-lg font-medium">Design Goal</div>
            <p className="text-slate-600 text-lg leading-relaxed">
              Create a <span className="text-slate-900 font-semibold">professional, trustworthy interface</span> that
              requires minimal training while handling complex medical data efficiently and securely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
