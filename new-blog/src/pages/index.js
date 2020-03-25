import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const edges = data.allMarkdownRemark.edges.sort(
    (a, b) => nameToDate(b.node.parent.name) - nameToDate(a.node.parent.name)
  )
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              style={{
                color: `#99197b`,
              }}
            >
              <h3>{node.frontmatter.title}</h3>
            </Link>
            <span>
              {node.timeToRead} {" min read • "}
              {nameToYYYYMMDD(node.parent.name)}
            </span>
            <p>{node.excerpt}</p>
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
