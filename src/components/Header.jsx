import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      {/* Announcement Bar */}
      <div className="bg-gray-900 text-white text-center py-2 mobile:h-8 tablet:h-8 desktop:h-9">
        <p className="text-xs mobile:text-[11px] tablet:text-xs desktop:text-sm font-medium">
          🎉 We're hiring! Join our award-winning team
        </p>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 mobile:px-4 tablet:px-6 desktop:px-8">
          <div className="flex items-center justify-between mobile:h-[70px] tablet:h-20 desktop:h-24">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <img 
                  src="/images/logos/rise-at-seven-logo.svg" 
                  alt="Rise at Seven" 
                  className="mobile:h-6 tablet:h-7 desktop:h-8 w-auto"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden desktop:flex items-center space-x-8">
              <a href="/services" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Services
              </a>
              <a href="/work" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Work
              </a>
              <a href="/about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                About
              </a>
              <a href="/blog" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Blog
              </a>
              <a href="/contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Contact
              </a>
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden desktop:flex">
              <a 
                href="/contact" 
                className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="desktop:hidden flex items-center justify-center w-11 h-11 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1' : ''
                }`}></span>
                <span className={`block w-5 h-0.5 bg-gray-700 mt-1 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block w-5 h-0.5 bg-gray-700 mt-1 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`desktop:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="px-4 py-6 bg-white border-t border-gray-100">
            <div className="space-y-4">
              <a 
                href="/services" 
                className="block text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="/work" 
                className="block text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </a>
              <a 
                href="/about" 
                className="block text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="/blog" 
                className="block text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
              <a 
                href="/contact" 
                className="block text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-4 border-t border-gray-100">
                <a 
                  href="/contact" 
                  className="block bg-gray-900 text-white text-center px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header