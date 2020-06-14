import React from "react"
import { graphql} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reuseable/HeroSection'
import InfoBlock from '../components/Reuseable/InfoBlock'
import Dualinfolock from '../components/Reuseable/Dualinfoblock'
import TeamPhotoSection from '../components/About/TeamPhotoSection'

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img = {data.img.childImageSharp.fluid}
      title = 'About LearnCodeOnline.'
      subtitle = ''
      heroClass = 'about-background'
    />
    <Dualinfolock heading = 'A message from CEO'></Dualinfolock>
    <InfoBlock heading = "About Vision"></InfoBlock>
    <TeamPhotoSection />
  </Layout>
)

export const query = graphql`
    {
        img: file(relativePath: { eq: "about.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }       
`

export default AboutPage
