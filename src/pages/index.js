// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
        alt="Some super cute Cockapoo dog."
        src='../images/Cockapoo-Feature-Image.jpg'
        />
      </Layout>
    </main>
  )
}



export const Head = () => <Seo title="Home Page" />

export default IndexPage


