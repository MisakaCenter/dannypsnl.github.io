import React from "react"
import { Link } from "gatsby"

export default ({ blogURL, title, timeToRead, fileName, excerpt }) => (
  <div>
    <Link
      to={blogURL}
      style={{
        color: `#99197b`,
        textDecoration: `none`,
      }}
    >
      <h3>{title}</h3>
    </Link>
    <span>
      {timeToRead} {" min read • "}
      {nameToYYYYMMDD(fileName)}
    </span>
    <p>{excerpt}</p>
  </div>
)

const nameToYYYYMMDD = (name) => name.split(`-`).slice(0, 3).join(`-`)
