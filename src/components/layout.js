import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { SocialIcon } from "react-social-icons"

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
          <div
            style={{
              marginBottom: `1.5em`,
            }}
          >
            ©{new Date().getFullYear()} dannypsnl(林子篆)
            <div
              style={{
                display: `inline`,
                float: `right`,
              }}
            >
              <SocialIcon url="https://github.com/dannypsnl" />
              <SocialIcon url="https://twitter.com/dannypsnl" />
            </div>
          </div>
          <LicenseCC4 />
        </footer>
      </div>
    </>
  )
}

const LicenseCC4 = () => (
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
      Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International
    </a>{" "}
    License.
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
