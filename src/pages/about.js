import * as React from 'react'
import Layout from '../components/layout'



const AboutPage = () => {
  return (
    <main>
        <Layout pageTitle="About Me">
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </Layout>
    </main>
  )
}

export const Head = () => (
    <>
      <title>About Me</title>
      <meta name="description" content="This is a personal project that aims to help me understand how react works" />
    </>
  )

  export default AboutPage