import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const Header = ({ siteMetadata }) => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "lambda-icon.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const [dans, blog] = siteMetadata.title.split(" ")

  return (
    <header
      style={{
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          textAlign: `center`,
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1
          style={{
            margin: 0,
          }}
        >
          <Link
            to="/"
            style={{
              color: `#aba4a4`,
              textDecoration: `none`,
            }}
          >
            {dans}
            <Img fixed={data.image.childImageSharp.fixed} />
            {blog}
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
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
