import React from "react"
import { graphql} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reuseable/HeroSection'
import InfoBlock from '../components/Reuseable/InfoBlock'
import Dualinfolock from '../components/Reuseable/Dualinfoblock'
import CourseCart from '../components/Cart/CourseCart'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img = {data.img.childImageSharp.fluid}
      title = 'I write code.'
      subtitle = 'Pranjal Soni'
      heroClass = 'hero-background'
    />
    <InfoBlock heading = "About Us"></InfoBlock>
    <CourseCart courses = {data.courses}/>
    <Dualinfolock heading = 'Our Team'></Dualinfolock>
  </Layout>
)

export const query = graphql`
    {
        img: file(relativePath: { eq: "heromain.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        courses:allContentfulCourses{
          edges {
            node {
              id
              title
              category
              description {
                description
              }
              price
              image{
                fixed(width:200,height:120){
                  ...GatsbyContentfulFixed_tracedSVG
                }
              }
            }
          }
        }
      }       
`

export default IndexPage
