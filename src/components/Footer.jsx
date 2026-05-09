import React, { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 mobile:px-4 tablet:px-6 desktop:px-8 py-12 mobile:py-9 tablet:py-10 desktop:py-16">
        <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-8 mobile:gap-6 tablet:gap-8 desktop:gap-12">
          
          {/* Newsletter Section */}
          <div className="mobile:col-span-1 tablet:col-span-2 desktop:col-span-1">
            <h3 className="font-semibold mb-4 mobile:text-[15px] tablet:text-base desktop:text-lg">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-4 mobile:text-sm tablet:text-sm desktop:text-base">
              Get the latest insights and industry news delivered to your inbox.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex mobile:flex-col tablet:flex-row desktop:flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 mobile:text-xs tablet:text-sm desktop:text-sm"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors mobile:w-8 mobile:h-8 tablet:w-auto tablet:h-auto desktop:w-8 desktop:h-8 flex items-center justify-center"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
            
            {isSubscribed && (
              <p className="text-green-400 text-sm mt-2">Thanks for subscribing!</p>
            )}
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 mobile:text-sm tablet:text-base desktop:text-lg">
              Services
            </h3>
            <ul className="space-y-2 mobile:space-y-1 tablet:space-y-2 desktop:space-y-3">
              <li><a href="/services/seo" className="text-gray-300 hover:text-white transition-colors mobile:text-sm tablet:text-sm desktop:text-base">SEO</a></li>
              <li><a href="/services/content" className="text-gray-300 hover:text-white transition-colors mobile:text-sm tablet:text-sm desktop:text-base">Content Marketing</a></li>
              <li><a href="/services/social" className="text-gray-300 hover:text-white transition-colors mobile:text-sm tablet:text-sm desktop:text-base">Social Media</a></li>
              <li><a href="/services/pr" className="text-gray-300 hover:text-white transition-colors mobile:text-sm tablet:text-sm desktop:text-base">Digital PR</a></li>
              <li><a href="/services/data" className="text-gray-300 hover:text-white transition-colors mobile:text-sm tablet:text-sm desktop:text-base">Data & Analytics</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 mobile:text-sm tablet:text-base desktop:text-lg">
              Company
            </h3>
            <ul className="space-y-2 mobile:space-y-1 tablet:space-y-2 desktop:space-y-3">
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors mobile:text-sm tablet:text-sm desktop:text-base">About Us</a></li>
              <li><a href="/work" className="text-gray-300 hover:text-white transition-colors mobile:text-sm tablet:text-sm desktop:text-base">Our Work</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-white transition-colors mobile:text-sm tablet:text-sm desktop:text-base">Blog</a></li>
              <li><a href="/careers" className="text-gray-300 hover:text-white transition-colors mobile:text-sm tablet:text-sm desktop:text-base">Careers</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors mobile:text-sm tablet:text-sm desktop:text-base">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 mobile:text-sm tablet:text-base desktop:text-lg">
              Get in Touch
            </h3>
            <div className="space-y-3 mobile:space-y-2 tablet:space-y-3 desktop:space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300 mobile:text-sm tablet:text-sm desktop:text-base">Sheffield, UK</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hello@riseatse7en.com" className="text-gray-300 hover:text-white transition-colors mobile:text-sm tablet:text-sm desktop:text-base">
                  hello@riseatse7en.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+441142724700" className="text-gray-300 hover:text-white transition-colors mobile:text-sm tablet:text-sm desktop:text-base">
                  +44 114 272 4700
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 mobile:mt-4 tablet:mt-5 desktop:mt-6">
              <div className="flex gap-3">
                <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors mobile:text-xs tablet:text-sm desktop:text-sm">
                  <img src="/images/logos/social/linkedin.svg" alt="LinkedIn" className="w-4 h-4" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors mobile:text-xs tablet:text-sm desktop:text-sm">
                  <img src="/images/logos/social/twitter.svg" alt="Twitter" className="w-4 h-4" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors mobile:text-xs tablet:text-sm desktop:text-sm">
                  <img src="/images/logos/social/instagram.svg" alt="Instagram" className="w-4 h-4" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors mobile:text-xs tablet:text-sm desktop:text-sm">
                  <img src="/images/logos/social/youtube.svg" alt="YouTube" className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 mobile:px-4 tablet:px-6 desktop:px-8 py-4 mobile:py-3 tablet:py-4 desktop:py-6">
          <div className="flex mobile:flex-col tablet:flex-row desktop:flex-row justify-between items-center gap-4">
            
            {/* Logo and Wordmark */}
            <div className="flex items-center gap-4">
              <img 
                src="/images/logos/rise-at-seven-logo.svg" 
                alt="Rise at Seven" 
                className="h-6 mobile:h-5 tablet:h-6 desktop:h-8 w-auto"
              />
              <div 
                className="font-display font-bold text-white"
                style={{
                  fontSize: 'clamp(3rem, 8vw, 7.5rem)', // 48px to 120px
                  lineHeight: '1'
                }}
              >
                RISE AT SE7EN
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex mobile:flex-col tablet:flex-row desktop:flex-row gap-4 mobile:gap-2 tablet:gap-4 desktop:gap-6 text-center">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors mobile:text-xs tablet:text-xs desktop:text-sm">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors mobile:text-xs tablet:text-xs desktop:text-sm">
                Terms of Service
              </a>
              <span className="text-gray-400 mobile:text-xs tablet:text-xs desktop:text-sm">
                © 2024 Rise at Seven. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer