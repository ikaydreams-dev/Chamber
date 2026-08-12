import Link from "next/link"
import { Mail, Phone, MapPin, Circle } from "lucide-react"

const programs = [
  { name: "WESCCU Newsletter", href: "/programs/newsletter" },
  { name: "STCCI App", href: "/programs/app" },
  { name: "Tertiary Scholars' Aid", href: "/programs/scholars-aid" },
  { name: "Bright Start", href: "/programs/bright-start" },
  { name: "ChambersMarket", href: "/programs/chambers-market" },
  { name: "STCCI Podcast", href: "/programs/podcast" },
]

const services = [
  { name: "Health & Safety", href: "/services/health-safety" },
  { name: "Mediation", href: "/services/mediation" },
  { name: "GEISCon Conference", href: "/services/geiscon" },
  { name: "Training", href: "/services/training" },
  { name: "Information Centre", href: "/services/information-centre" },
]

export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">ST</span>
              </div>
              <div>
                <div className="font-bold text-lg text-white">STCCI</div>
                <div className="text-xs text-gray-400">Est. 19th Century</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              The premier chamber of commerce serving Ghana's Western Region, dedicated to advancing
              business interests and economic development.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com/STCCIGh" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-blue-500 hover:bg-blue-500/10 transition-colors" title="Facebook" aria-label="Facebook">
                <Circle className="w-4 h-4 text-gray-400" fill="currentColor" />
              </a>
              <a href="https://twitter.com/STCCI_Ghana" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-blue-400 hover:bg-blue-400/10 transition-colors" title="Twitter" aria-label="Twitter">
                <Circle className="w-4 h-4 text-gray-400" fill="currentColor" />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-blue-600 hover:bg-blue-600/10 transition-colors" title="LinkedIn" aria-label="LinkedIn">
                <Circle className="w-4 h-4 text-gray-400" fill="currentColor" />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-pink-500 hover:bg-pink-500/10 transition-colors" title="Instagram" aria-label="Instagram">
                <Circle className="w-4 h-4 text-gray-400" fill="currentColor" />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Programs</h3>
            <ul className="space-y-2.5">
              {programs.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Services</h3>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400 leading-relaxed">
                  Sekondi-Takoradi<br />Western Region, Ghana
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <span className="text-sm text-gray-400">+233 XXX XXX XXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <span className="text-sm text-gray-400">info@stcci.org.gh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Sekondi-Takoradi Chamber of Commerce & Industry. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
