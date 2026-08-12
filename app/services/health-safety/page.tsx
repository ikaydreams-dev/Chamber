import { Shield, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function HealthSafetyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Programs
        </Link>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Health & Safety Services
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Creating safer workplaces across all industries
          </p>

          <div className="inline-block bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 px-6 py-3 mb-8">
            <span className="text-sm font-semibold text-blue-900 dark:text-blue-200 uppercase tracking-wide">
              Coming Soon
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We're preparing this page with comprehensive information about our health and safety services.
            Check back soon for updates.
          </p>
        </div>
      </div>
    </div>
  )
}
