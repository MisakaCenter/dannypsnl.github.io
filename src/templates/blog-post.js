import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Disqus } from "gatsby-plugin-disqus"

export default ({ data }) => {
  const post = data.markdownRemark
  const disqusConfig = {
    url: `${data.site.siteMetadata.siteUrl + post.slug}`,
    identifier: post.id,
    title: post.title,
  }
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Disqus config={disqusConfig} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
