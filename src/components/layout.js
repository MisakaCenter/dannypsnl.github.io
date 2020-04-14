import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import SiteLink from "./site-link"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Header siteMetadata={data.site.siteMetadata} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          ©{new Date().getFullYear()}{" "}
          <SiteLink url={`https://github.com/dannypsnl`}>dannypsnl</SiteLink>
          <div>
            <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
              <img
                alt="Creative Commons Attribution-NonCommercial-NoDerivatives 4.0
              International"
                style={{
                  float: `left`,
                  margin: `0.5em`,
                  borderWidth: `0`,
                }}
                src="https://i.creativecommons.org/l/by/4.0/88x31.png"
              />
            </a>
            All works in this site is licensed under a{" "}
            <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
              Creative Commons Attribution-NonCommercial-NoDerivatives 4.0
              International
            </a>{" "}
            License.
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
