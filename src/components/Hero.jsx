import { motion } from "framer-motion"
import { CheckCircle2, Sparkles, Rocket } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900"
            >
              The easiest alternative to Git & GitHub
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 text-lg text-gray-600 max-w-xl"
            >
              Meet BreezeVC — version control without the headaches. No branches, no merge hell. Just instant snapshots, human‑readable history, and one‑click rollbacks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-white bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/20 hover:opacity-95 transition font-semibold">
                <Rocket className="h-5 w-5" /> Start free
              </a>
              <a href="#demo" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 hover:bg-gray-50 transition font-medium">
                <Sparkles className="h-5 w-5 text-indigo-600" /> Watch demo
              </a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700"
            >
              {[
                "Zero-config setup",
                "Visual timeline & diffs",
                "Share changes with a link",
                "Works with any stack",
              ].map((item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" /> {item}
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-xl border border-gray-200 bg-white p-4 shadow-xl">
              <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="p-4 bg-gradient-to-br from-slate-50 to-white rounded-lg">
                <div className="grid grid-cols-12 text-xs font-mono">
                  <div className="col-span-3 pr-3 text-gray-500">Timeline</div>
                  <div className="col-span-9 space-y-2">
                    {[1,2,3,4,5].map((i) => (
                      <div key={i} className="flex items-center justify-between rounded-md border border-gray-200 bg-white/80 px-3 py-2">
                        <span className="text-gray-800">Snapshot {i}</span>
                        <span className="text-gray-400">1m ago</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 rounded-lg bg-slate-900 p-4 text-slate-100">
                  <p className="text-xs text-slate-400">diff</p>
                  <pre className="mt-2 overflow-auto text-xs leading-relaxed"><code>+ Added new auth route
- Removed legacy hook
+ Updated UI theme tokens</code></pre>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 blur-xl opacity-30" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
