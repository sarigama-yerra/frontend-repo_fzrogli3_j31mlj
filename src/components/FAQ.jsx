const faqs = [
  {
    q: "Is this compatible with my existing Git repos?",
    a: "Yes. Import in seconds and continue working without Git installed.",
  },
  {
    q: "How is this different from Git?",
    a: "Snapshots replace commits and branches with a visual, linear history that’s easier to manage.",
  },
  { q: "Do you have a free plan?", a: "Absolutely. Get started with generous limits." },
  { q: "Can I self-host?", a: "Enterprise customers can request a private deployment." },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 text-center">Frequently asked questions</h2>
        <div className="mt-10 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group px-6 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-left text-lg font-medium text-gray-900">
                {q}
                <span className="ml-4 text-gray-400 transition group-open:rotate-180">⌃</span>
              </summary>
              <p className="pb-4 text-gray-600">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
