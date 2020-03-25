import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1
      css={css`
        display: inline-block;
        border-bottom: 1px solid;
      `}
    >
      Dan's Blog
    </h1>
    <div>Programming Language Theory . System Programming</div>
    <p />
    <div>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            css={css`
              text-decoration: none;
              color: inherit;
            `}
          >
            <h3>
              {node.frontmatter.title}
              <span>
                — {node.timeToRead}
                {" min read "} {nameToYYYYMMDD(node.parent.name)}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
  </Layout>
)

const nameToYYYYMMDD = name =>
  name
    .split(`-`)
    .slice(0, 3)
    .join(`-`)

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
