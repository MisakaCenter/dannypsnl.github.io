import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SiteLink from "../components/site-link"
import { graphql } from "gatsby"

export default ({ data }) => {
  const pltAndCompiler = [
    {
      link: `https://github.com/dannypsnl/plt-research`,
      name: `plt-research`,
      description: `A collection of PLT researching`,
    },
    {
      link: `https://github.com/dannypsnl/elz`,
      name: `elz`,
      description: `A polymorphism object-oriented programming language`,
    },
    {
      link: `https://github.com/dannypsnl/little-scheme`,
      name: `little-scheme`,
      description: `A little scheme for playing SICP`,
    },
    {
      link: `https://github.com/dannypsnl/cc`,
      name: `cc`,
      description: `A little C turn into x64`,
    },
    {
      link: `https://github.com/llir/llvm`,
      name: `llir/llvm`,
      description: `Library for interacting with LLVM IR in pure Go`,
    },
  ]
  const terminal = [
    {
      link: `https://github.com/dannypsnl/xnix`,
      name: `xnix`,
      description: `A unix-like system setting`,
    },
    {
      link: `https://github.com/dannypsnl/on`,
      name: `on`,
      description: `A command line tool execute commands base on a command context to avoid duplicate typing`,
    },
  ]
  const stateManagement = [
    {
      link: `https://github.com/dannypsnl/redux`,
      name: `redux`,
      description: `redux in Go/Rust`,
    },
  ]
  const webRelated = [
    {
      link: `https://github.com/dannypsnl/rocket`,
      name: `rocket`,
      description: `A light weight Go web framework`,
    },
  ]

  const contributions = [
    { category: `PLT & Compiler`, projects: pltAndCompiler },
    { category: `Terminal`, projects: terminal },
    { category: `State Management`, projects: stateManagement },
    { category: `Web Related`, projects: webRelated },
  ]

  const notes = [
    {
      link: `https://dannypsnl.github.io/plt-research/the-little-typer-note/note.html`,
      name: `NOTE: the little typer`,
      description: `Note for a book <<The little typer>>`,
    },
    {
      link: `https://dannypsnl.github.io/plt-research/stlc/stlc.html`,
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

        <h3>Contribution</h3>
        {contributions.map(({ category, projects }) => (
          <>
            <h4>{category}</h4>
            <ul>
              {projects.map((contribution) => (
                <ProjectLi project={contribution} />
              ))}
            </ul>
          </>
        ))}

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
        marginRight: `0.2em`,
      }}
    >
      <SiteLink url={project.link}>{project.name}</SiteLink>
    </div>
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
