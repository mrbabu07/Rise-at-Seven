import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../constants/routes'

/**
 * Custom hook for navigation functionality
 * Provides easy access to all routes and navigation methods
 */
export const useNavigation = () => {
  const navigate = useNavigate()

  const goToHome = useCallback(() => navigate(ROUTES.HOME), [navigate])
  const goToServices = useCallback(() => navigate(ROUTES.SERVICES), [navigate])
  const goToWork = useCallback(() => navigate(ROUTES.WORK), [navigate])
  const goToAbout = useCallback(() => navigate(ROUTES.ABOUT), [navigate])
  const goToBlog = useCallback(() => navigate(ROUTES.BLOG), [navigate])
  const goToContact = useCallback(() => navigate(ROUTES.CONTACT), [navigate])

  const goToService = useCallback((serviceSlug) => {
    const serviceRoutes = {
      'strategy-growth': ROUTES.SERVICE_STRATEGY,
      'onsite-seo': ROUTES.SERVICE_SEO,
      'content-experience': ROUTES.SERVICE_CONTENT,
      'b2b-marketing': ROUTES.SERVICE_B2B,
      'digital-pr': ROUTES.SERVICE_PR,
      'social': ROUTES.SERVICE_SOCIAL,
      'data-insights': ROUTES.SERVICE_DATA,
      'social-seo-tiktok-youtube': ROUTES.SERVICE_SOCIAL_SEO,
    }
    navigate(serviceRoutes[serviceSlug] || ROUTES.SERVICES)
  }, [navigate])

  const goToWorkCase = useCallback((caseSlug) => {
    const caseRoutes = {
      'sixt': ROUTES.WORK_SIXT,
      'dojo': ROUTES.WORK_DOJO,
      'magnet-trade-b2b': ROUTES.WORK_MAGNET,
      'esim-case-study': ROUTES.WORK_ESIM,
      'jd-sports': ROUTES.WORK_JD,
      'parkdean-resorts-easter-breaks': ROUTES.WORK_PARKDEAN,
      'pooky': ROUTES.WORK_POOKY,
      'revolution-beauty': ROUTES.WORK_REVOLUTION,
      'lloyds-pharmacy': ROUTES.WORK_LLOYDS,
      'prettylittlething': ROUTES.WORK_PLT,
    }
    navigate(caseRoutes[caseSlug] || ROUTES.WORK)
  }, [navigate])

  return {
    navigate,
    goToHome,
    goToServices,
    goToWork,
    goToAbout,
    goToBlog,
    goToContact,
    goToService,
    goToWorkCase,
    ROUTES,
  }
}
