const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
const pageTemplate = path.resolve(`./src/templates/page.js`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: 1000) {
        nodes {
          id
          fields {
            collection
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading markdown content`, result.errors)
    return
  }

  const nodes = result.data.allMarkdownRemark.nodes
  const posts = nodes.filter(node => node.fields.collection === `blog`)
  const pages = nodes.filter(node => node.fields.collection === `pages`)

  posts.forEach((post, index) => {
    const previousPostId = index === 0 ? null : posts[index - 1].id
    const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

    createPage({
      path: post.fields.slug,
      component: blogPostTemplate,
      context: {
        id: post.id,
        previousPostId,
        nextPostId,
      },
    })
  })

  pages.forEach(page => {
    createPage({
      path: page.fields.slug,
      component: pageTemplate,
      context: {
        id: page.id,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type !== `MarkdownRemark`) {
    return
  }

  const parent = getNode(node.parent)
  const collection = parent.sourceInstanceName
  const generatedPath = createFilePath({ node, getNode })
  const slug = node.frontmatter.permalink || node.frontmatter.slug || generatedPath

  createNodeField({
    name: `collection`,
    node,
    value: collection,
  })

  createNodeField({
    name: `slug`,
    node,
    value: slug,
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type SiteSiteMetadata {
      author: Author
      description: String
      navigation: [NavigationItem]
      siteUrl: String
      social: Social
      title: String
    }

    type Author {
      name: String
      summary: String
    }

    type NavigationItem {
      title: String
      slug: String
    }

    type Social {
      github: String
      linkedin: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      permalink: String
      slug: String
      menuTitle: String
      tags: [String]
      categories: [String]
    }

    type Fields {
      collection: String
      slug: String
    }
  `)
}
