import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
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
          <a href="https://github.com/dannypsnl/elz">elz</a>
        </li>
        <li>
          <a href="https://github.com/dannypsnl/little-scheme">little-scheme</a>
        </li>
        <li>
          <a href="https://github.com/dannypsnl/rocket">rocket</a>
          <b>: Light Go web framework</b>
        </li>
        <li>
          <a href="https://github.com/dannypsnl/redux">redux-go</a>
          <b>: redux in Go</b>
        </li>
      </ul>
      <h4>Contribution</h4>
      <ul>
        <li>
          <a href="https://github.com/llir/llvm">llir/llvm</a>
        </li>
      </ul>

      <h3>NOTE</h3>
      <ul>
        <li>
          <a href="https://dannypsnl.github.io/plt-researchs/the-little-typer-note/note.html">
            NOTE: the little typer
          </a>
        </li>
        <li>
          <a href="https://dannypsnl.github.io/plt-researchs/stlc/stlc.html">
            STLC
          </a>
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
