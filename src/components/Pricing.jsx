export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-gray-600">Start free. Scale as your team grows.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Plan
            name="Free"
            price="$0"
            tagline="For hobby projects"
            features={["100 snapshots","Public links","Community support"]}
            cta="Start free"
          />
          <Plan
            name="Pro"
            price="$12"
            tagline="Per user / month"
            features={["Unlimited snapshots","Private links","Priority support","Audit timeline"]}
            cta="Upgrade"
            highlighted
          />
          <Plan
            name="Team"
            price="$29"
            tagline="Per user / month"
            features={["SSO + Roles","Snapshots rules","Usage analytics","SOC2 reports"]}
            cta="Contact sales"
          />
        </div>
      </div>
    </section>
  )
}

function Plan({ name, price, tagline, features, cta, highlighted }) {
  return (
    <div className={`relative rounded-2xl border ${highlighted ? 'border-indigo-600' : 'border-gray-200'} bg-white p-6 shadow-sm`}> 
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white shadow">Most popular</div>
      )}
      <div className="flex items-baseline justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          <p className="text-gray-500 text-sm mt-1">{tagline}</p>
        </div>
        <div className="text-3xl font-bold text-gray-900">{price}</div>
      </div>
      <ul className="mt-6 space-y-2 text-sm text-gray-700">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" /> {f}
          </li>
        ))}
      </ul>
      <a href="#" className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition ${highlighted ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow' : 'border border-gray-200 bg-white text-gray-900 hover:bg-gray-50'}`}>{cta}</a>
    </div>
  )}
