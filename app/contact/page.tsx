import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Contact STCCI
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              The Sekondi-Takoradi Chamber of Commerce & Industry welcomes inquiries from prospective
              members, partners, and stakeholders. Our team is available to provide information and assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Office Information
                </h2>
                <div className="w-20 h-1 bg-blue-600 mb-6"></div>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  STCCI headquarters is located in Sekondi-Takoradi, serving member enterprises
                  throughout Ghana's Western Region and beyond.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wide text-sm">
                        Physical Address
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        7 St. Francis Street, Anaji<br />
                        Sekondi-Takoradi<br />
                        Western Region<br />
                        Ghana
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wide text-sm">
                        Telephone
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        +233 24 469 4781
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                        Monday - Friday: 8:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wide text-sm">
                        Email Addresses
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        General Inquiries: info@stcci.org.gh<br />
                        Membership: membership@stcci.org.gh
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wide text-sm">
                  Connect With Us
                </h3>
                <div className="flex space-x-3">
                  <a
                    href="http://www.facebook.com/stccigh"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Facebook"
                    aria-label="Facebook"
                    className="w-10 h-10 border border-gray-300 dark:border-slate-600 flex items-center justify-center hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://x.com/stcci_ghana"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="X (Twitter)"
                    aria-label="X (Twitter)"
                    className="w-10 h-10 border border-gray-300 dark:border-slate-600 flex items-center justify-center hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    title="LinkedIn"
                    aria-label="LinkedIn"
                    className="w-10 h-10 border border-gray-300 dark:border-slate-600 flex items-center justify-center hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    title="Instagram"
                    aria-label="Instagram"
                    className="w-10 h-10 border border-gray-300 dark:border-slate-600 flex items-center justify-center hover:border-pink-600 hover:bg-pink-50 dark:hover:bg-pink-950/20 transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 p-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Inquiry Form
              </h2>
              <div className="w-20 h-1 bg-blue-600 mb-8"></div>
              <form action="https://formsubmit.co/niikpani@yahoo.com" method="POST" className="space-y-6">
                <input type="hidden" name="_subject" value="New Contact Form Submission - STCCI Website" />
                <input type="hidden" name="_captcha" value="false" />

                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-600 focus:outline-none focus:border-blue-600 text-gray-900 dark:text-white"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-600 focus:outline-none focus:border-blue-600 text-gray-900 dark:text-white"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                    Telephone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-600 focus:outline-none focus:border-blue-600 text-gray-900 dark:text-white"
                    placeholder="+233 24 469 4781"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry_subject" className="block text-sm font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                    Inquiry Subject *
                  </label>
                  <select
                    id="inquiry_subject"
                    name="inquiry_subject"
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-600 focus:outline-none focus:border-blue-600 text-gray-900 dark:text-white"
                    required
                  >
                    <option value="">Please select</option>
                    <option value="membership">Membership Application</option>
                    <option value="programs">Program Information</option>
                    <option value="training">Training Services</option>
                    <option value="chambersmarket">ChambersMarket</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-600 focus:outline-none focus:border-blue-600 text-gray-900 dark:text-white"
                    placeholder="Provide details of your inquiry..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-4 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors uppercase tracking-wide"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Location
            </h2>
            <div className="w-20 h-1 bg-blue-600"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-6">
              STCCI is strategically located at 7 St. Francis Street, Anaji in Sekondi-Takoradi, the commercial hub of Ghana's Western Region.
            </p>
          </div>
          <div className="bg-gray-300 dark:bg-slate-800 border border-gray-400 dark:border-slate-700 h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-500 dark:text-gray-600 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                Google Maps Integration
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                7 St. Francis Street, Anaji, Sekondi-Takoradi
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
