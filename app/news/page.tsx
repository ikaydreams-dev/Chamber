"use client"

import { Newspaper, Calendar, ExternalLink, Shield, ShoppingCart, Building2, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const newsItems = [
  {
    title: "STCCI Launches Ghana's Biggest Digital Directory and Online Marketplace",
    date: "August 2021",
    category: "Digital Innovation",
    icon: ShoppingCart,
    description: "The Sekondi-Takoradi Chamber of Commerce and Industry (STCCI) launched ChambersMarket, Ghana's biggest digital directory and online marketplace. The platform enables businesses to access a vast network of potential traders and buyers in Ghana, Africa, and across the globe.",
    highlights: [
      "Available on web (www.chambersmarket.com) and mobile app (iOS & Android)",
      "Enables businesses to own virtual stores and operate at convenience",
      "Provides comprehensive sales and promo services",
      "Developed with support from Hamburg Chamber of Commerce",
    ],
    link: "https://newsghana.com.gh/stcci-launches-ghanas-biggest-digital-directory-and-online-marketplace/",
  },
  {
    title: "Ghana Industry Safety Conference (GHISCON)",
    date: "Annual Event",
    category: "Health & Safety",
    icon: Shield,
    description: "STCCI organizes the annual Ghana Industry Safety Conference (GHISCON) in Takoradi, Western Region. The conference provides a platform for stakeholders to discuss occupational health, safety, and environmental issues.",
    highlights: [
      "Focus on industry new trends and best practices",
      "Partnership with Ghana's Ministry of Employment & Labour Relations",
      "Collaboration with International Labour Organization (ILO)",
      "Addresses climate change and occupational health and safety",
    ],
    link: "https://www.ghanaweb.com/GhanaHomePage/business/STCCI-holds-2019-Ghana-Industry-Safety-Conference-in-Western-Region-784238",
  },
  {
    title: "STCCI Returns to Autonomous Status",
    date: "June 2014",
    category: "Organizational Development",
    icon: Building2,
    description: "After being amalgamated with three other independent chambers into one national chamber in November 1961, STCCI opted to return to its autonomous status in June 2014, allowing for more focused service to Western Region businesses.",
    highlights: [
      "Traces roots to the colonial era of the 19th Century",
      "Originally served European firms trading in gold, timber, and minerals",
      "Now serves both public and private sector businesses",
      "Focus on SMEs and industries in Western Region",
    ],
    link: "https://www.businessghana.com/site/directory/chamber-of-commerce/440376/Sekondi-Takoradi-Chamber-of-Commerce-Industry",
  },
]

export default function NewsPage() {
  const [iframeUrl, setIframeUrl] = useState<string | null>(null)

  const openIframe = (url: string) => {
    setIframeUrl(url)
  }

  const closeIframe = () => {
    setIframeUrl(null)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 mb-6">
              <Newspaper className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              News & Updates
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Stay informed with the latest news, events, and developments from the Sekondi-Takoradi Chamber of Commerce & Industry.
            </p>
          </div>
        </div>
      </section>

      {/* News Items */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {newsItems.map((item, index) => {
              const Icon = item.icon
              return (
                <article
                  key={index}
                  className="bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 overflow-hidden hover:border-blue-600 dark:hover:border-blue-500 transition-all"
                >
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-950/50 border border-blue-300 dark:border-blue-800/30 text-xs font-semibold text-blue-900 dark:text-blue-200 uppercase tracking-wide">
                            {item.category}
                          </span>
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <Calendar className="w-4 h-4 mr-2" />
                            {item.date}
                          </div>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                          {item.title}
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="mb-6">
                          <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                            Key Highlights
                          </h3>
                          <ul className="space-y-2">
                            {item.highlights.map((highlight, hIndex) => (
                              <li key={hIndex} className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                  {highlight}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button
                          onClick={() => openIframe(item.link)}
                          className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                        >
                          Read Full Article
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-slate-900 dark:to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-blue-50 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news, events, and opportunities from STCCI.
          </p>
          <Link
            href="/programs/newsletter"
            className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-blue-600 text-blue-600 dark:text-white font-semibold hover:bg-blue-50 dark:hover:bg-blue-700 transition-colors"
          >
            Subscribe to WESCCU Newsletter
          </Link>
        </div>
      </section>

      {/* Iframe Modal */}
      {iframeUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full h-full max-w-7xl bg-white dark:bg-slate-900 shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Article</h3>
              <button
                onClick={closeIframe}
                className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
            <iframe
              src={iframeUrl}
              className="flex-1 w-full border-0"
              title="Article Content"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            />
          </div>
        </div>
      )}
    </div>
  )
}
