import { ArrowRight, Camera, UploadCloud, Undo2 } from "lucide-react"

export default function HowItWorks() {
  return (
    <section id="how" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Three steps. That’s it.</h2>
            <div className="space-y-4">
              <Step icon={<Camera className='h-5 w-5' />} title="Snapshot">
                Click once to capture your project state. We track files, env, and dependencies.
              </Step>
              <Step icon={<UploadCloud className='h-5 w-5' />} title="Sync">
                Instantly sync to the cloud. Collaborators can preview without installing anything.
              </Step>
              <Step icon={<Undo2 className='h-5 w-5' />} title="Rollback">
                Broke something? Revert to any snapshot in one click. Confidence by default.
              </Step>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">
              <div className="aspect-video rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-slate-200">
                <p className="text-sm opacity-70">breeze timeline</p>
                <div className="mt-4 space-y-3">
                  {["Init project","Add auth","Fix payments","Refactor UI"].map((s,i)=> (
                    <div key={s} className="flex items-center justify-between rounded-md border border-slate-700/60 bg-slate-800/60 px-4 py-3">
                      <span className="text-slate-100">{s}</span>
                      <ArrowRight className="h-4 w-4 text-slate-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-blue-600/10 to-indigo-600/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Step({ icon, title, children }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white/70 p-5">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm mt-1">{children}</p>
        </div>
      </div>
    </div>
  )
}
