import React from 'react'
import Layout from '../components/layout'
import HeroImage from '../components/hero'

const NotFoundPage = ({ location }) => (
  <Layout pathname={location.pathname}>
    <HeroImage />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
