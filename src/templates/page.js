import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const PageTemplate = ({ data: { markdownRemark: page }, location }) => (
  <Layout location={location}>
    <article className="content-card page-content">
      <p className="eyebrow">Page</p>
      <h1>{page.frontmatter.title}</h1>
      <section dangerouslySetInnerHTML={{ __html: page.html }} />
    </article>
  </Layout>
)

export const Head = ({ data: { markdownRemark: page } }) => (
  <Seo
    title={page.frontmatter.menuTitle || page.frontmatter.title}
    description={page.excerpt}
  />
)

export default PageTemplate

export const pageQuery = graphql`
  query PageById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        menuTitle
      }
    }
  }
`
