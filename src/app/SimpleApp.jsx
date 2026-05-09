import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ClientCarousel from '../components/ClientCarousel'
import Manifesto from '../components/Manifesto'
import FeaturedWork from '../components/FeaturedWork'
import Services from '../components/Services'

export function SimpleApp() {
  return (
    <Layout>
      <Hero />
      <ClientCarousel />
      <Manifesto />
      <FeaturedWork />
      <Services />
    </Layout>
  )
}