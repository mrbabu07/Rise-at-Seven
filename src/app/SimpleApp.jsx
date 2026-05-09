import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ClientCarousel from '../components/ClientCarousel'
import Manifesto from '../components/Manifesto'
import FeaturedWork from '../components/FeaturedWork'
import Services from '../components/Services'
import ChasingConsumers from '../components/ChasingConsumers'
import Legacy from '../components/Legacy'
import News from '../components/News'

export function SimpleApp() {
  return (
    <Layout>
      <Hero />
      <ClientCarousel />
      <Manifesto />
      <FeaturedWork />
      <Services />
      <ChasingConsumers />
      <Legacy />
      <News />
    </Layout>
  )
}