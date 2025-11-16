import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(50%_50%_at_50%_0%,rgba(99,102,241,0.10),rgba(255,255,255,0)_60%)]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <CTA />
        <FAQ />
      </main>
      <footer className="border-t border-gray-200/70 bg-white/70 backdrop-blur py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600" />
            <span className="text-sm font-semibold">BreezeVC</span>
          </div>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} BreezeVC, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
            <a href="/test" className="hover:text-gray-900">System check</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
