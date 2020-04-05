import React from "react"
import { Link } from "gatsby"
import { nameToYYYYMMDD } from "../utils/string-to-date"

export default ({ blogURL, title, timeToRead, fileName, excerpt, image }) => (
  <div
    style={{
      margin: `2.7rem`,
    }}
  >
    <Link
      to={blogURL}
      style={{
        textDecoration: `none`,
      }}
    >
      <div
        style={{
          float: `left`,
        }}
      >
        {image ? image : ""}
      </div>
      <div
        style={{
          marginBottom: `0.4rem`,
        }}
      >
        {" "}
        <h3
          style={{
            color: `rgb(25, 135, 153)`,
            marginBottom: `-0.2rem`,
          }}
        >
          {title}
        </h3>
        <span
          style={{
            fontSize: `0.8rem`,
            color: `#aba4a4`,
          }}
        >
          {timeToRead} {" min read • "}
          {nameToYYYYMMDD(fileName)}
        </span>
      </div>
    </Link>
    <p>{excerpt}</p>
  </div>
)
