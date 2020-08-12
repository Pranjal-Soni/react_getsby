import React from "react"
import { graphql} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reuseable/HeroSection'
import InfoBlock from '../components/Reuseable/InfoBlock'
import Contact from '../components/Contact/contact'

const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img = {data.img.childImageSharp.fluid}
      title = 'Contact Us'
      subtitle = ''
      heroClass = 'about-background'
    />
    <InfoBlock heading = "How can we help ?"></InfoBlock>
    <Contact />
  </Layout>
)

export const query = graphql`
    {
        img: file(relativePath: { eq: "contact.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }       
`

export default ContactPage
