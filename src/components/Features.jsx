import { ShieldCheck, Link2, TimerReset, GitBranch, Workflow, Globe } from "lucide-react"

const features = [
  {
    icon: TimerReset,
    title: "Instant snapshots",
    desc: "Capture your project state with a click. No staging, no commit messages required.",
  },
  {
    icon: Link2,
    title: "Share with a link",
    desc: "Preview any snapshot in the cloud and share it with your team instantly.",
  },
  {
    icon: Workflow,
    title: "No branches",
    desc: "A linear, visual history replaces branching complexity and merge conflicts.",
  },
  {
    icon: ShieldCheck,
    title: "Safe by default",
    desc: "Every change is reversible. Roll back confidently in one click.",
  },
  {
    icon: GitBranch,
    title: "Bring your repo",
    desc: "Import from Git in seconds or start fresh. Keep what you love, skip what you don’t.",
  },
  {
    icon: Globe,
    title: "Works anywhere",
    desc: "Compatible with every language, framework, and cloud provider.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-x-0 -top-10 mx-auto h-20 max-w-5xl rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 blur-2xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Everything you need, nothing you don’t</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Modern version control designed for humans. Focus on building, not babysitting branches.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-gray-200 bg-white/60 p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow group-hover:scale-105 transition">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
