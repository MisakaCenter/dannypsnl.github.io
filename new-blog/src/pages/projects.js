import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SiteLink from "../components/site-link"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <SEO title={`Projects`} description={data.site.siteMetadata.title} />
    <div>
      <h1
        style={{
          textAlign: `center`,
        }}
      >
        Projects
      </h1>

      <h3>Code</h3>
      <ul>
        <li>
          <SiteLink url={`https://github.com/dannypsnl/elz`}>elz</SiteLink>
        </li>
        <li>
          <SiteLink url={`https://github.com/dannypsnl/little-scheme`}>
            little-scheme
          </SiteLink>
        </li>
        <li>
          <SiteLink url={`https://github.com/dannypsnl/rocket`}>
            rocket
          </SiteLink>
          <b>: Light Go web framework</b>
        </li>
        <li>
          <SiteLink url={`https://github.com/dannypsnl/redux`}>
            redux-go
          </SiteLink>
          <b>: redux in Go</b>
        </li>
      </ul>
      <h4>Contribution</h4>
      <ul>
        <li>
          <SiteLink url={`https://github.com/llir/llvm`}>llir/llvm</SiteLink>
        </li>
      </ul>

      <h3>NOTE</h3>
      <ul>
        <li>
          <SiteLink
            url={`https://dannypsnl.github.io/plt-researchs/the-little-typer-note/note.html`}
          >
            NOTE: the little typer
          </SiteLink>
        </li>
        <li>
          <SiteLink
            url={`https://dannypsnl.github.io/plt-researchs/stlc/stlc.html`}
          >
            STLC
          </SiteLink>
        </li>
      </ul>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
