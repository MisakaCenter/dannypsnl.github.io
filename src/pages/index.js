import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import BlogPost from "../components/blogPost"
import Img from "gatsby-image"
import ReactTagInput from "@pathofdev/react-tag-input"

const IndexPage = ({ data }) => {
  const edges = data.allMarkdownRemark.edges.sort(
    (a, b) => nameToDate(b.node.parent.name) - nameToDate(a.node.parent.name)
  )

  let set = new Set()
  edges.forEach(({ node }) => {
    node.frontmatter.categories.forEach((category) => set.add(category))
  })
  const [selectedCategories, setCategories] = useState(Array.from(set))
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
          <ReactTagInput
            tags={selectedCategories}
            onChange={(newCategories) => setCategories(newCategories)}
            placeholder={`by category`}
            editable={true}
            removeOnBackspace={true}
          />
          <ReactTagInput
            tags={selectedTags}
            onChange={(newTags) => setTags(newTags)}
            placeholder={`by tag`}
            editable={true}
            removeOnBackspace={true}
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

const matchFilter = (tags, selectedTags, categories, selectedCategories) =>
  // categories is or selector, therefore, check categories of post has intersection with user selected categories
  categories.filter((e) => selectedCategories.includes(e)).length > 0 &&
  // tags is and selector, therefore, check every selected tags be contained by post's tags
  selectedTags.every((selectTag) => tags.includes(selectTag))

const nameToDate = (name) => Date.parse(nameToYYYYMMDD(name))
const nameToYYYYMMDD = (name) => name.split(`-`).slice(0, 3).join(`-`)

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
`;
