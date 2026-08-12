import Link from "next/link"
import {
  Check,
  Users,
  TrendingUp,
  BookOpen,
  ShoppingCart,
  Award,
  MessageSquare,
  ArrowRight,
  Building2,
  Briefcase,
  User,
} from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Advocacy & Representation",
    description: "Voice your concerns to government and regulatory bodies",
  },
  {
    icon: TrendingUp,
    title: "Business Development",
    description: "Access markets through ChambersMarket and export programs",
  },
  {
    icon: BookOpen,
    title: "Training & Capacity Building",
    description: "20% discount on all training programs",
  },
  {
    icon: ShoppingCart,
    title: "Free ChambersMarket Listing",
    description: "Get your business listed on Ghana's largest digital marketplace",
  },
  {
    icon: Award,
    title: "Networking Opportunities",
    description: "Connect with 1,120+ member enterprises",
  },
  {
    icon: MessageSquare,
    title: "Business Advisory Support",
    description: "Access expert guidance and mediation services",
  },
]

const membershipPlans = [
  {
    name: "Micro/Small Business",
    icon: User,
    price: "GH₵500",
    period: "per year",
    description: "Perfect for startups and small enterprises",
    features: [
      "All standard benefits",
      "Free ChambersMarket listing",
      "20% discount on training",
      "Networking events access",
      "Newsletter subscription",
      "Certificate of membership",
    ],
    highlighted: false,
  },
  {
    name: "Medium Business",
    icon: Briefcase,
    price: "GH₵1,000",
    period: "per year",
    description: "Ideal for growing businesses",
    features: [
      "All small business benefits",
      "Priority support",
      "Featured ChambersMarket placement",
      "Training discount upgrades",
      "Council voting rights",
      "Business advisory sessions",
    ],
    highlighted: true,
  },
  {
    name: "Large Business/Corporate",
    icon: Building2,
    price: "GH₵2,500",
    period: "per year",
    description: "For established corporations",
    features: [
      "All medium business benefits",
      "Dedicated account manager",
      "Premium ChambersMarket package",
      "Custom training programs",
      "Partnership opportunities",
      "Board representation eligibility",
    ],
    highlighted: false,
  },
]

export default function MembershipPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-blue-950/50 border border-blue-800/30 px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-200 uppercase tracking-wider">
                Over 1,120 Member Enterprises
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              STCCI Membership
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Join the premier business organization in Ghana's Western Region and gain access to
              comprehensive resources, strategic partnerships, and advocacy support designed to advance
              your commercial and industrial interests.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              Apply for Membership
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Member Benefits & Services
            </h2>
            <div className="w-20 h-1 bg-blue-600"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mt-6">
              STCCI membership provides comprehensive support for business development, advocacy,
              and strategic growth through exclusive programs and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 p-8 hover:border-blue-600 dark:hover:border-blue-500 transition-colors"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-600 text-white mr-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Membership Categories
            </h2>
            <div className="w-20 h-1 bg-blue-600"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mt-6">
              Annual membership fees are structured according to enterprise size and business category.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipPlans.map((plan, index) => {
              const Icon = plan.icon
              return (
                <div
                  key={index}
                  className={`relative bg-white dark:bg-slate-900 border-2 ${
                    plan.highlighted
                      ? "border-blue-600"
                      : "border-gray-200 dark:border-slate-700"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute top-0 left-0 right-0">
                      <div className="bg-blue-600 text-white text-xs font-bold py-2 text-center uppercase tracking-wider">
                        Recommended
                      </div>
                    </div>
                  )}
                  <div className={`p-8 ${plan.highlighted ? "pt-14" : ""}`}>
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-blue-600 text-white mr-4">
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {plan.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {plan.description}
                        </p>
                      </div>
                    </div>
                    <div className="mb-8 pb-8 border-b border-gray-200 dark:border-slate-700">
                      <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">
                        {plan.price}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                        {plan.period}
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className={`block text-center px-6 py-3 font-semibold transition-colors uppercase tracking-wide text-sm ${
                        plan.highlighted
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-slate-100 dark:bg-slate-800 text-gray-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
                      }`}
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12">
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Professional/Individual Membership:</strong> Available at GH₵300 per annum for professionals
                and consultants.{" "}
                <Link href="/contact" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                  Contact our membership team
                </Link>{" "}
                for eligibility requirements and application procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 dark:from-slate-950 dark:to-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Begin Your Membership Application
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Membership in STCCI provides your enterprise with strategic advantages, professional development
                opportunities, and a powerful collective voice in shaping the business environment of Ghana's
                Western Region.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <div className="w-1.5 h-1.5 bg-blue-400 mr-3"></div>
                  Immediate access to member programs and services
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-1.5 h-1.5 bg-blue-400 mr-3"></div>
                  Representation in policy dialogue and advocacy
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-1.5 h-1.5 bg-blue-400 mr-3"></div>
                  Connection to extensive business network
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors uppercase tracking-wide"
              >
                Submit Application
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold hover:bg-white/10 transition-colors border border-white/30 uppercase tracking-wide"
              >
                About STCCI
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
