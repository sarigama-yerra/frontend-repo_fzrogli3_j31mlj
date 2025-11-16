export default function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-indigo-600 to-blue-600 p-10 text-white shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_35%)]" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Skip Git. Ship faster.</h2>
            <p className="mt-3 max-w-2xl text-white/80">Join thousands of developers replacing Git + GitHub with a streamlined, visual workflow.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow hover:opacity-95 transition">Create your workspace</a>
              <a href="#pricing" className="inline-flex items-center justify-center rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">See pricing</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
