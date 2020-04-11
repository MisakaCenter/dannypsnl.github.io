import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Disqus } from "gatsby-plugin-disqus"
import SiteLink from "../components/site-link"

import "../styles/code-block-hightlight.css"

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
        <FooterSection>
          author:{" "}
          <SiteLink url={`https://github.com/dannypsnl`}>dannypsnl</SiteLink>
        </FooterSection>
        <FooterSection>
          category:
          {post.frontmatter.categories.map((category) => (
            <ShowTag>{category}</ShowTag>
          ))}
        </FooterSection>
        <FooterSection>
          tag:
          {post.frontmatter.tags.map((tag) => (
            <ShowTag>{tag}</ShowTag>
          ))}
        </FooterSection>
        <SiteLink
          className="bmc-button"
          url="https://www.buymeacoffee.com/zclIv4D"
        >
          <img
            src="https://cdn.buymeacoffee.com/buttons/default-white.png"
            alt="Buy Me A Coffee"
            style={{
              height: `51px`,
              width: `217px`,
              marginTop: `1em`,
              marginBottom: `0`,
            }}
          />
        </SiteLink>
        <Disqus config={disqusConfig} />
      </div>
    </Layout>
  )
}

const FooterSection = ({ children }) => (
  <p
    style={{
      marginBottom: `0`,
    }}
  >
    {children}
  </p>
)

const ShowTag = ({ children }) => (
  <em
    style={{
      margin: `0.2em`,
      padding: `0.1em`,
      color: `#aba4a4`,
      border: `solid 0.3px`,
      textAlign: `center`,
    }}
  >
    {children}
  </em>
)

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
        categories
        tags
      }
    }
  }
`
