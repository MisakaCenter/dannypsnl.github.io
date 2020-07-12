import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SiteLink from "../components/site-link"
import { graphql } from "gatsby"

export default ({ data }) => {
  const sites = [
    {
      link: `http://dev.stephendiehl.com/hask/`,
      name: `WHAT I WISH I KNEW WHEN LEARNING HASKELL`,
    },
    {
      link: `https://people.inf.elte.hu/divip/AgdaTutorial/Symbols.html`,
      name: `Agda symbols`,
    },
    {
      link: `https://coq.inria.fr/`,
      name: `Coq proof assistant`,
    },
    {
      link: `https://homes.cs.washington.edu/~emina/doc/rosette.pldi14.pdf`,
      name: `Rosette`,
    },
  ]

  return (
    <Layout pageTitle={`Recommend`}>
      <SEO title={`Recommend`} description={data.site.siteMetadata.title} />
      <div>
        <ul>{sites.map((project) => ProjectLi({ project }))}</ul>
      </div>
    </Layout>
  )
}

const ProjectLi = ({ project }) => (
  <li>
    <div
      style={{
        display: `inline`,
        marginRight: `0.2em`,
      }}
    >
      <SiteLink url={project.link}>{project.name}</SiteLink>
    </div>
  </li>
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
