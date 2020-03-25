import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import BlogPost from "../components/blogPost"

import "katex/dist/katex.min.css"

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
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {edges.map(({ node }) => (
          <div key={node.id}>
            <BlogPost
              blogURL={node.fields.slug}
              title={node.frontmatter.title}
              timeToRead={node.timeToRead}
              fileName={node.parent.name}
              excerpt={node.excerpt}
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
              path
              thumbnail
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
