import { Mail, Phone, MapPin, Circle, Send } from "lucide-react"

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
                    <Circle className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="currentColor" />
                  </a>
                  <a
                    href="https://x.com/stcci_ghana"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="X (Twitter)"
                    aria-label="X (Twitter)"
                    className="w-10 h-10 border border-gray-300 dark:border-slate-600 flex items-center justify-center hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors"
                  >
                    <Circle className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="currentColor" />
                  </a>
                  <a
                    href="#"
                    title="LinkedIn"
                    aria-label="LinkedIn"
                    className="w-10 h-10 border border-gray-300 dark:border-slate-600 flex items-center justify-center hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors"
                  >
                    <Circle className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="currentColor" />
                  </a>
                  <a
                    href="#"
                    title="Instagram"
                    aria-label="Instagram"
                    className="w-10 h-10 border border-gray-300 dark:border-slate-600 flex items-center justify-center hover:border-pink-600 hover:bg-pink-50 dark:hover:bg-pink-950/20 transition-colors"
                  >
                    <Circle className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="currentColor" />
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
              <form action="mailto:niikpani@yahoo.com" method="POST" encType="text/plain" className="space-y-6">

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
