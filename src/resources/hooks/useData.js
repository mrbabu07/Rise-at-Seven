import { useState, useEffect } from 'react'
import servicesData from '../data/services.json'
import caseStudiesData from '../data/caseStudies.json'
import clientsData from '../data/clients.json'
import blogData from '../data/blog.json'
import teamData from '../data/team.json'
import locationsData from '../data/locations.json'
import navigationData from '../data/navigation.json'
import footerData from '../data/footer.json'
import contentData from '../data/content.json'
import internationalData from '../data/international.json'

/**
 * Custom hook for accessing all application data
 * Centralizes data management and provides easy access to resources
 */
export const useData = () => {
  const [data, setData] = useState({
    services: servicesData.coreServices,
    caseStudies: caseStudiesData.featuredWork,
    clients: clientsData.clients,
    blogPosts: blogData.blogPosts,
    team: teamData.teamMembers,
    teamStats: teamData.stats,
    locations: locationsData.offices,
    navigation: navigationData.mainNav,
    footer: footerData,
    content: contentData,
    international: internationalData.regions,
  })

  // Get service by slug
  const getServiceBySlug = (slug) => {
    return data.services.find(s => s.slug === slug)
  }

  // Get case study by slug
  const getCaseStudyBySlug = (slug) => {
    return data.caseStudies.find(c => c.link.includes(slug))
  }

  // Get client by name
  const getClientByName = (name) => {
    return data.clients.find(c => c.name === name)
  }

  // Get blog post by slug
  const getBlogPostBySlug = (slug) => {
    return data.blogPosts.find(b => b.slug === slug)
  }

  // Get team member by name
  const getTeamMemberByName = (name) => {
    return data.team.find(t => t.name === name)
  }

  // Get location by city
  const getLocationByCity = (city) => {
    return data.locations.find(l => l.city === city)
  }

  // Get international region by slug
  const getInternationalBySlug = (slug) => {
    return data.international.find(r => r.slug === slug)
  }

  return {
    ...data,
    getServiceBySlug,
    getCaseStudyBySlug,
    getClientByName,
    getBlogPostBySlug,
    getTeamMemberByName,
    getLocationByCity,
    getInternationalBySlug,
  }
}
