import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import BlogPost from "../components/blogPost"
import Img from "gatsby-image"
import { nameToDate } from "../utils/string-to-date"
import ReactTags from "react-tag-autocomplete"

import "../styles/tags.css"

const IndexPage = ({ data }) => {
  const edges = data.allMarkdownRemark.edges.sort(
    (a, b) => nameToDate(b.node.parent.name) - nameToDate(a.node.parent.name)
  )

  let allCategories = new Set()
  let allTags = new Set()
  edges.forEach(({ node }) => {
    node.frontmatter.categories.forEach((category) =>
      allCategories.add(category)
    )
    node.frontmatter.tags.forEach((tag) => {
      allTags.add(tag)
    })
  })
  const [selectedCategories, setCategories] = useState(
    Array.from(allCategories).map((c, index) => ({ id: index, name: c }))
  )
  const [selectedTags, setTags] = useState([])

  return (
    <Layout>
      <SEO
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
      />
      <div>
        <div
          style={{
            margin: `1em`,
          }}
        >
          <Tags
            tags={selectedCategories}
            setTags={setCategories}
            placeholder={`by category`}
            suggestions={Array.from(allCategories).map((c, index) => ({
              id: index,
              name: c,
            }))}
          />{" "}
          <Tags
            tags={selectedTags}
            setTags={setTags}
            placeholder={`by tag`}
            suggestions={Array.from(allTags).map((t, index) => ({
              id: index,
              name: t,
            }))}
          />
        </div>
        <h4 style={{ textAlign: `center` }}>
          {edges
            .map(({ node }) =>
              matchFilter(
                node.frontmatter.tags,
                selectedTags,
                node.frontmatter.categories,
                selectedCategories
              )
                ? 1
                : 0
            )
            .reduce((pre, cur) => pre + cur)}{" "}
          Posts
        </h4>

        {// all posts
        edges.map(({ node }) => {
          if (
            matchFilter(
              node.frontmatter.tags,
              selectedTags,
              node.frontmatter.categories,
              selectedCategories
            )
          ) {
            return (
              <div key={node.id}>
                <BlogPost
                  blogURL={node.fields.slug}
                  title={node.frontmatter.title}
                  timeToRead={node.timeToRead}
                  fileName={node.parent.name}
                  excerpt={node.excerpt}
                  image={
                    node.frontmatter.image &&
                    node.frontmatter.image.childImageSharp ? (
                      <Img
                        fixed={node.frontmatter.image.childImageSharp.fixed}
                      />
                    ) : null
                  }
                />
              </div>
            )
          } else {
            return null
          }
        })}
      </div>
    </Layout>
  )
}

const Tags = ({ tags, setTags, suggestions, placeholder }) => (
  <ReactTags
    tags={tags}
    suggestions={suggestions}
    placeholder={placeholder}
    handleValidate={(t) =>
      // must in suggestion list
      suggestions.map((s) => s.name).includes(t.name) &&
      // and must not applied yet
      !tags.map((t) => t.name).includes(t.name)
    }
    handleAddition={(t) => setTags([...tags, t])}
    handleDelete={(i) => {
      const ts = tags.slice(0)
      ts.splice(i, 1)
      setTags(ts)
    }}
    allowNew={true}
  />
)

const matchFilter = (tags, selectedTags, categories, selectedCategories) =>
  // categories is or selector, therefore, check categories of post has intersection with user selected categories
  categories.filter((e) => selectedCategories.map((c) => c.name).includes(e))
    .length > 0 &&
  // tags is and selector, therefore, check every selected tags be contained by post's tags
  selectedTags.every((selectTag) => tags.includes(selectTag.name))

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt
          timeToRead
          frontmatter {
            title
            categories
            tags
            image {
              id
              childImageSharp {
                fixed(width: 180, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          fields {
            slug
          }
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  }
`
