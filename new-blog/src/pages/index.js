import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import BlogPost from "../components/blogPost"
import Img from "gatsby-image"

const IndexPage = ({ data }) => {
  const edges = data.allMarkdownRemark.edges.sort(
    (a, b) => nameToDate(b.node.parent.name) - nameToDate(a.node.parent.name)
  )
  return (
    <Layout>
      <SEO
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
      />
      <div>
        <h4 style={{ textAlign: `center` }}>
          {data.allMarkdownRemark.totalCount} Posts
        </h4>
        {edges.map(({ node }) => (
          <div key={node.id}>
            <BlogPost
              blogURL={node.fields.slug}
              title={node.frontmatter.title}
              timeToRead={node.timeToRead}
              fileName={node.parent.name}
              excerpt={node.excerpt}
              image={
                node.frontmatter.image &&
                node.frontmatter.image.childImageSharp ? (
                  <Img fixed={node.frontmatter.image.childImageSharp.fixed} />
                ) : null
              }
            />
          </div>
        ))}
      </div>
    </Layout>
  )
}

const nameToDate = (name) => Date.parse(nameToYYYYMMDD(name))
const nameToYYYYMMDD = (name) => name.split(`-`).slice(0, 3).join(`-`)

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          excerpt
          timeToRead
          frontmatter {
            title
            image {
              id
              childImageSharp {
                fixed(width: 180, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          fields {
            slug
          }
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  }
`
