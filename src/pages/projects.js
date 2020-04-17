import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SiteLink from "../components/site-link"
import GitHubButton from "react-github-btn"
import { graphql } from "gatsby"

export default ({ data }) => {
  const code_projects = [
    {
      isRepo: true,
      link: `https://github.com/dannypsnl/plt-research`,
      name: `plt-research`,
      description: `A collection of PLT researching`,
    },
    {
      isRepo: true,
      link: `https://github.com/dannypsnl/xnix`,
      name: `xnix`,
      description: `A unix-like system setting`,
    },
    {
      isRepo: true,
      link: `https://github.com/dannypsnl/elz`,
      name: `elz`,
      description: `A polymorphism object-oriented programming language`,
    },
    {
      isRepo: true,
      link: `https://github.com/dannypsnl/little-scheme`,
      name: `little-scheme`,
      description: `A little scheme for playing SICP`,
    },
    {
      isRepo: true,
      link: `https://github.com/dannypsnl/redux`,
      name: `redux`,
      description: `redux in Go/Rust`,
    },
    {
      isRepo: true,
      link: `https://github.com/dannypsnl/rocket`,
      name: `rocket`,
      description: `A light weight Go web framework`,
    },
    {
      isRepo: true,
      link: `https://github.com/dannypsnl/on`,
      name: `on`,
      description: `A command line tool execute commands base on a command context to avoid duplicate typing`,
    },
  ]

  const contributions = [
    {
      isRepo: true,
      link: `https://github.com/llir/llvm`,
      name: `llir/llvm`,
      description: `Library for interacting with LLVM IR in pure Go`,
    },
  ]

  const notes = [
    {
      link: `https://dannypsnl.github.io/plt-researchs/the-little-typer-note/note.html`,
      name: `NOTE: the little typer`,
      description: `Note for a book <<The little typer>>`,
    },
    {
      link: `https://dannypsnl.github.io/plt-researchs/stlc/stlc.html`,
      name: `STLC`,
      description: `Simply typed lambda calculus formula`,
    },
  ]

  return (
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
          {code_projects.map((project) => (
            <ProjectLi project={project} />
          ))}
        </ul>
        <h4>Contribution</h4>
        <ul>
          {contributions.map((contribution) => (
            <ProjectLi project={contribution} />
          ))}
        </ul>

        <h3>NOTE</h3>
        <ul>
          {notes.map((note) => (
            <ProjectLi project={note} />
          ))}
        </ul>
      </div>
    </Layout>
  )
}

const ProjectLi = ({ project }) => (
  <li>
    <div
      style={{
        display: `inline`,
        marginRight: `0.3em`,
      }}
    >
      <SiteLink url={project.link}>{project.name}</SiteLink>
    </div>
    {project.isRepo ? (
      <div
        style={{
          display: `inline`,
          marginRight: `0.3em`,
        }}
      >
        <GitHubButton
          href={project.link}
          data-icon="octicon-star"
          data-show-count="true"
          aria-label="Star ntkme/github-buttons on GitHub"
        >
          Star
        </GitHubButton>
      </div>
    ) : null}
    :
    <em
      style={{
        marginLeft: `0.3em`,
        fontSize: `0.9em`,
      }}
    >
      {project.description}
    </em>
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
