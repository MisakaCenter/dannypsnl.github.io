import React from "react"

export default ({ url, children }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    {children ? children : url}
  </a>
)
