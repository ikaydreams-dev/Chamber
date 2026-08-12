import Link from "next/link"
import {
  Newspaper,
  Smartphone,
  GraduationCap,
  Sparkles,
  ShoppingCart,
  Mic,
  Shield,
  Scale,
  Users,
  FolderKanban,
  BookOpen,
  Database,
  ArrowRight,
  TrendingUp,
  Award,
  Globe,
  Building2,
} from "lucide-react"

const programs = [
  {
    icon: Newspaper,
    title: "WESCCU Newsletter",
    description: "Monthly business intelligence and updates for the Western Region",
    href: "/programs/newsletter",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: Smartphone,
    title: "STCCI App",
    description: "Manage your business anywhere with our mobile platform",
    href: "/programs/app",
    color: "from-purple-500 to-purple-700",
  },
  {
    icon: GraduationCap,
    title: "Tertiary Scholars' Aid",
    description: "120 students empowered through scholarships and support",
    href: "/programs/scholars-aid",
    color: "from-green-500 to-green-700",
  },
  {
    icon: Sparkles,
    title: "Bright Start",
    description: "Nurturing young entrepreneurs and future business leaders",
    href: "/programs/bright-start",
    color: "from-yellow-500 to-yellow-700",
  },
  {
    icon: ShoppingCart,
    title: "ChambersMarket",
    description: "Ghana's largest digital business marketplace",
    href: "/programs/chambers-market",
    color: "from-orange-500 to-orange-700",
  },
  {
    icon: Mic,
    title: "STCCI Podcast",
    description: "Voices of Western Region commerce and industry",
    href: "/programs/podcast",
    color: "from-pink-500 to-pink-700",
  },
  {
    icon: Shield,
    title: "Health & Safety",
    description: "Creating safer workplaces across all industries",
    href: "/services/health-safety",
    color: "from-red-500 to-red-700",
  },
  {
    icon: Scale,
    title: "Mediation Services",
    description: "Resolve business disputes amicably and confidentially",
    href: "/services/mediation",
    color: "from-indigo-500 to-indigo-700",
  },
  {
    icon: Users,
    title: "GEISCon",
    description: "Africa's premier occupational health & safety conference",
    href: "/services/geiscon",
    color: "from-cyan-500 to-cyan-700",
  },
  {
    icon: FolderKanban,
    title: "Business Projects",
    description: "Driving economic development through strategic initiatives",
    href: "/programs/projects",
    color: "from-teal-500 to-teal-700",
  },
  {
    icon: BookOpen,
    title: "Training & Development",
    description: "50+ programs to build business capacity and skills",
    href: "/services/training",
    color: "from-violet-500 to-violet-700",
  },
  {
    icon: Database,
    title: "Information Centre",
    description: "Your business intelligence hub with market data and resources",
    href: "/services/information-centre",
    color: "from-fuchsia-500 to-fuchsia-700",
  },
]

const stats = [
  { value: "1,120+", label: "Member Enterprises" },
  { value: "120", label: "Students Supported" },
  { value: "7th Annual", label: "Safety Conference" },
  { value: "1,000+", label: "Businesses on ChambersMarket" },
]

export default function Home() {
  return (
    <div className="relative">
      {/* Programs Grid - Formal */}
      <section id="programs" className="pt-24 pb-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Sekondi-Takoradi Chamber of Commerce and Industry - STCCI
            </h2>
            <div className="w-20 h-1 bg-blue-600"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mt-6">
              STCCI offers comprehensive programs and services designed to support member enterprises
              and drive economic development in the Western Region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon
              return (
                <Link
                  key={index}
                  href={program.href}
                  className="group bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 bg-gradient-to-br ${program.color} text-white mr-4`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {program.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {program.description}
                    </p>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm">
                      Learn more
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Value Proposition - Formal */}
      <section className="py-24 bg-gray-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="border-l-4 border-blue-600 pl-6">
              <TrendingUp className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Business Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Strategic support for market access, export opportunities, and sustainable
                growth through our comprehensive business development programs.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <BookOpen className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Professional Training
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Industry-leading training and capacity building programs designed to enhance
                workforce competency and organizational excellence.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <Users className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Advocacy & Networking
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Representing member interests in policy dialogue while facilitating strategic
                partnerships and business-to-business connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Formal */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-slate-900 dark:to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Join the Leading Chamber of Commerce
              </h2>
              <p className="text-lg text-blue-50 dark:text-gray-300 mb-6">
                Become part of Ghana's premier business organization. STCCI membership provides
                access to exclusive programs, networking opportunities, and advocacy support.
              </p>
              <div className="flex items-center text-blue-100 dark:text-gray-400 mb-2">
                <div className="w-1 h-1 bg-blue-200 dark:bg-blue-400 rounded-full mr-3"></div>
                Over 1,120 member enterprises
              </div>
              <div className="flex items-center text-blue-100 dark:text-gray-400 mb-2">
                <div className="w-1 h-1 bg-blue-200 dark:bg-blue-400 rounded-full mr-3"></div>
                Established business network
              </div>
              <div className="flex items-center text-blue-100 dark:text-gray-400">
                <div className="w-1 h-1 bg-blue-200 dark:bg-blue-400 rounded-full mr-3"></div>
                International affiliations
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                href="/membership"
                className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-blue-600 text-blue-600 dark:text-white font-semibold hover:bg-blue-50 dark:hover:bg-blue-700 transition-colors"
              >
                Apply for Membership
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold hover:bg-white/10 transition-colors border border-white/30"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
