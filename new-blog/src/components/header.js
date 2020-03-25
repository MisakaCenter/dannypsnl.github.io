import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteMetadata }) => (
  <header
    style={{
      background: `#0f7199`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteMetadata.title}
        </Link>
      </h1>
      <h4
        style={{
          color: `#aba4a4`,
          marginTop: 20,
        }}
      >
        {siteMetadata.description}
      </h4>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
