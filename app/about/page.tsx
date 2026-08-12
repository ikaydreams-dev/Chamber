import { Award, Target, Heart, Handshake, Lightbulb, Leaf, Users, TrendingUp, Globe } from "lucide-react"

const values = [
  {
    icon: Handshake,
    title: "Integrity",
    description: "We operate with honesty, transparency, and accountability",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest standards in all we do",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new ideas and technologies to serve our members better",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We build partnerships for collective impact",
  },
  {
    icon: Heart,
    title: "Inclusivity",
    description: "We welcome businesses of all sizes, sectors, and backgrounds",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We promote environmentally and socially responsible business practices",
  },
]

const milestones = [
  {
    year: "19th Century",
    title: "Founded",
    description: "STCCI traces its roots to the colonial era, serving European firms trading in gold, timber, and minerals",
  },
  {
    year: "1961",
    title: "National Amalgamation",
    description: "Merged with three other chambers into one national chamber",
  },
  {
    year: "2014",
    title: "Independence Restored",
    description: "Returned to autonomous status to better serve Western Region businesses",
  },
  {
    year: "2021",
    title: "Digital Transformation",
    description: "Launched ChambersMarket, Ghana's biggest digital business marketplace",
  },
]

const stats = [
  { value: "1,120+", label: "Member Enterprises", icon: Users },
  { value: "2,500+", label: "Businesses Supported", icon: TrendingUp },
  { value: "1,500+", label: "People Trained", icon: Award },
  { value: "15+", label: "International Partners", icon: Globe },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-blue-950/50 border border-blue-800/30 px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-200 uppercase tracking-wider">
                Established 19th Century
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About STCCI
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              The Sekondi-Takoradi Chamber of Commerce & Industry stands as the premier business organization
              in Ghana's Western Region, with a distinguished history spanning over a century of service
              to the commercial and industrial community.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="border-l-4 border-blue-600 pl-6">
                  <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-slate-900 border-l-4 border-blue-600 p-10">
              <Target className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                To be the leading voice of business in Ghana, championing economic development,
                innovation, and prosperity for all stakeholders in the commercial and industrial sectors.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 border-l-4 border-blue-600 p-10">
              <Heart className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                To serve and promote the commercial and industrial interests of our members and
                the broader business community through advocacy, capacity building, strategic networking,
                and innovative programs that drive sustainable economic growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Core Values
            </h2>
            <div className="w-20 h-1 bg-blue-600"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mt-6">
              Our values define our organizational culture and guide our commitment to excellence
              in serving the business community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 p-8 hover:border-blue-600 dark:hover:border-blue-500 transition-colors"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-600 text-white mr-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Historical Milestones
            </h2>
            <div className="w-20 h-1 bg-blue-600"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mt-6">
              Over a century of dedicated service to Ghana's commercial and industrial community.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-blue-600 hidden lg:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-20 lg:pl-24">
                  <div className="absolute left-0 lg:left-2 top-0">
                    <div className="w-16 h-16 bg-blue-600 flex items-center justify-center">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 p-8">
                    <div className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wider">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
