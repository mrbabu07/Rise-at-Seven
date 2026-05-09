import React, { useState, useEffect } from 'react'
import Button from './Button'
import { hasConsent, setConsent } from '../utils/cookies'

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already given consent
    if (!hasConsent() && getCookie('cookie-consent') === null) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    setConsent(true)
    setShowBanner(false)
  }

  const handleDecline = () => {
    setConsent(false)
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto p-4 mobile:p-3 tablet:p-4 desktop:p-6">
        <div className="flex flex-col mobile:flex-col tablet:flex-row desktop:flex-row items-start mobile:items-start tablet:items-center desktop:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm mobile:text-xs tablet:text-sm desktop:text-base text-gray-700">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies.
            </p>
          </div>
          
          <div className="flex gap-3 mobile:w-full tablet:w-auto desktop:w-auto">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleDecline}
              className="mobile:flex-1 tablet:flex-none desktop:flex-none"
            >
              Decline
            </Button>
            <Button 
              variant="primary" 
              size="sm" 
              onClick={handleAccept}
              className="mobile:flex-1 tablet:flex-none desktop:flex-none"
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner