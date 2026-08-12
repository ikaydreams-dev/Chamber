import Link from "next/link"
import {
  Newspaper,
  Smartphone,
  GraduationCap,
  Sparkles,
  ShoppingCart,
  Mic,
  FolderKanban,
  ArrowRight,
} from "lucide-react"

const programs = [
  {
    icon: Newspaper,
    title: "WESCCU Newsletter",
    description: "Stay informed with monthly business intelligence, market analysis, and updates specifically for the Western Region business community.",
    features: [
      "Economic Updates & Trends",
      "Member Spotlights",
      "Policy Watch",
      "Event Calendar",
      "Market Intelligence",
    ],
    href: "/programs/newsletter",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: Smartphone,
    title: "STCCI Mobile App",
    description: "Manage your business anywhere, anytime with our comprehensive mobile platform for iOS and Android devices.",
    features: [
      "Mobile ChambersMarket",
      "Business Networking",
      "Event Management",
      "Member Services",
      "Business Resources",
    ],
    href: "/programs/app",
    color: "from-purple-500 to-purple-700",
  },
  {
    icon: GraduationCap,
    title: "Tertiary Scholars' Aid",
    description: "Supporting talented but financially disadvantaged students from coastal communities to achieve their academic dreams.",
    features: [
      "Full & Partial Scholarships",
      "Laptop Distribution",
      "Psychosocial Support",
      "Career Mentorship",
      "120 Students Supported",
    ],
    href: "/programs/scholars-aid",
    color: "from-green-500 to-green-700",
  },
  {
    icon: Sparkles,
    title: "Bright Start Program",
    description: "Nurturing the next generation of business leaders through youth entrepreneurship education and mentorship.",
    features: [
      "Business Education Workshops",
      "Mentorship Program",
      "School Business Clubs",
      "Young Entrepreneur Grants",
      "Annual Competition",
    ],
    href: "/programs/bright-start",
    color: "from-yellow-500 to-yellow-700",
  },
  {
    icon: ShoppingCart,
    title: "ChambersMarket",
    description: "Ghana's largest digital business directory and marketplace connecting thousands of businesses locally and globally.",
    features: [
      "Virtual Storefront",
      "1,000+ Businesses",
      "Mobile Apps",
      "B2B Networking",
      "Analytics Dashboard",
    ],
    href: "/programs/chambers-market",
    color: "from-orange-500 to-orange-700",
  },
  {
    icon: Mic,
    title: "STCCI Podcast",
    description: "Weekly conversations with entrepreneurs, industry experts, and change-makers shaping the Western Region economy.",
    features: [
      "Weekly Episodes",
      "Industry Insights",
      "Success Stories",
      "Expert Interviews",
      "Available on All Platforms",
    ],
    href: "/programs/podcast",
    color: "from-pink-500 to-pink-700",
  },
  {
    icon: FolderKanban,
    title: "Business Projects",
    description: "Strategic initiatives creating opportunities, infrastructure, and growth for businesses and communities.",
    features: [
      "Export Readiness Program",
      "Green Business Initiative",
      "Women in Business",
      "Digital Skills Training",
      "Business Incubation Hub",
    ],
    href: "/programs/projects",
    color: "from-teal-500 to-teal-700",
  },
]

export default function ProgramsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Programs & Initiatives
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              STCCI implements comprehensive programs designed to advance member interests,
              build capacity, and contribute to sustainable economic development in the Western Region.
            </p>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {programs.map((program, index) => {
              const Icon = program.icon
              return (
                <div
                  key={index}
                  className="border border-gray-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-500 transition-colors"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-10">
                    {/* Icon and Title */}
                    <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-slate-700 pb-8 lg:pb-0 lg:pr-8">
                      <div className={`p-4 bg-gradient-to-br ${program.color} mb-6 inline-block`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {program.title}
                      </h2>
                      <Link
                        href={program.href}
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wide hover:gap-3 transition-all"
                      >
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>

                    {/* Description and Features */}
                    <div className="lg:col-span-2 space-y-6">
                      <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        {program.description}
                      </p>

                      <div>
                        <h3 className="text-xs font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
                          Program Features
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {program.features.map((feature, fIndex) => (
                            <div
                              key={fIndex}
                              className="flex items-start space-x-3 text-gray-600 dark:text-gray-400"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-600 mt-2 flex-shrink-0" />
                              <span className="leading-relaxed">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 dark:from-slate-950 dark:to-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-white mb-6">
              Access These Programs Through STCCI Membership
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Members receive priority access to all programs, exclusive benefits, and ongoing support
              for business development and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/membership"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
              >
                Membership Information
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
