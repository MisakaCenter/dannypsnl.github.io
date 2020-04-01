import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import SiteLink from "../components/site-link"
import { graphql } from "gatsby"

export default ({ data }) => {
  const projects = [
    {
      name: `elz`,
      description: `A programming language I design and implement. Focus on introduce high-level type theory into object-oriented language. Learn type theory and LLVM IR a lot`,
    },
    {
      name: `little-scheme`,
      description: `An interpreter of scheme language write in Haskell`,
    },
    {
      name: `redux`,
      description: `Go version redux for run. Learn how to use reflection in Go`,
    },
    {
      name: `rocket`,
      description: `A lightweight web framework for Go. Using the trie tree to handle HTTP request and reflect return value to make the response`,
    },
    {
      name: `plt-researchs`,
      description: `Collections of the implementation for researching related topics in programming language theory area`,
    },
  ]
  const contributions = [
    {
      name: `llir/llvm`,
      description: `Library for interacting with LLVM IR in pure Go`,
    },
    {
      name: `intel-go/nff-go`,
      description: `A set of libraries for creating and deploying cloud-native Network Functions`,
    },
  ]
  return (
    <Layout>
      <SEO title={`Resume`} description={data.site.siteMetadata.title} />
      <div>
        <div>
          <h2>林子篆(Danny)</h2>
          <div>System Software Engineer</div>
          <div>@Taipei, Taiwan</div>
          <div>
            Github: <SiteLink url={`https://github.com/dannypsnl`} />
          </div>
          <div>
            Linkedin:{" "}
            <SiteLink
              url={`https://www.linkedin.com/in/%E5%AD%90%E7%AF%86-%E6%9E%97-2a8118138/`}
            />
          </div>
          <div>
            Blog: <SiteLink url={`https://dannypsnl.github.io/`} />
          </div>
          <div>email: dannypsnl@gmail.com</div>
        </div>
        <div
          style={{
            marginTop: `1em`,
          }}
        >
          <Section>Overview</Section>
          <p>
            2+ years of development work experience, including networking,
            compiler, and web application. In-depth knowledge of Kubernetes and
            Container networking. Solid programming skill in Functional
            Programming(Haskell, Racket, Scala and OCaml), Object-oriented
            Programming(Rust, Go, C++ and TypeScript). A programming language
            theory lover, therefore, also know some proof assistant(Agda, Coq).
          </p>
        </div>
        <div>
          <Section>Projects</Section>
          <ul>
            {projects.map((project) => (
              <li>
                {project.name}: {project.description}.
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Section>Contributions</Section>
          <ul>
            {contributions.map((contribution) => (
              <li>
                {contribution.name}: {contribution.description}.
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Section>Work Experience</Section>
          <div>
            <b>Glasnostic(system software engineer)</b>{" "}
            <SiteLink url={`https://glasnostic.com`} />
            <p>
              Create the networking filter & analyzer which easy to use(only
              four norms: request, bandwidth, concurrency and latency) for
              nowadays complex backend system.
            </p>
          </div>
          <div>
            <b>AndroVideo(back-end engineer)</b>{" "}
            <SiteLink url={`http://www.androvideo.com/`} />
            <p>
              Developing cloud web service with container-solution. Maintaining
              the device(camera) HMI system by communicating with the Android
              system.
            </p>
          </div>
          <div>
            <b>Mapacode(fullstack engineer)</b>
            <p>
              Developing HMI of CNC by React.js & Rust working with Rust & a
              little C++ to interact with CNC
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const Section = ({ children }) => (
  <h2
    style={{
      color: `#aba4a4`,
      paddingBottom: `0.3em`,
      borderBottom: `0.1em solid`,
    }}
  >
    {children}
  </h2>
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