import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const buildPagePath = pageNumber => (pageNumber === 1 ? `/` : `/page/${pageNumber}/`)

const PaginationControl = ({ disabled, to, children, active = false }) => {
  if (disabled) {
    return <span className="pagination-link pagination-link-disabled">{children}</span>
  }

  return (
    <Link className={active ? "pagination-link pagination-link-active" : "pagination-link"} to={to}>
      {children}
    </Link>
  )
}

const BlogIndexTemplate = ({ data, location, pageContext }) => {
  const posts = data.allMarkdownRemark.nodes
  const { currentPage, numPages } = pageContext

  return (
    <Layout location={location}>
      <section className="home-intro">
        <Bio />
      </section>
      <section>
        <ol className="post-list">
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <li key={post.fields.slug}>
                <article className="post-list-item" itemScope itemType="http://schema.org/Article">
                  <header>
                    <h2>
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <p className="post-meta">{post.frontmatter.date}</p>
                  </header>
                  <section
                    className="post-list-body"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                    itemProp="articleBody"
                  />
                </article>
              </li>
            )
          })}
        </ol>
      </section>
      <nav aria-label="Pagination" className="pagination">
        <PaginationControl disabled={currentPage === 1} to={buildPagePath(1)}>
          &lt;&lt;
        </PaginationControl>
        <PaginationControl
          disabled={currentPage === 1}
          to={buildPagePath(currentPage - 1)}
        >
          &lt;
        </PaginationControl>
        {Array.from({ length: numPages }).map((_, index) => {
          const pageNumber = index + 1

          return (
            <PaginationControl
              key={pageNumber}
              active={pageNumber === currentPage}
              to={buildPagePath(pageNumber)}
            >
              {pageNumber}
            </PaginationControl>
          )
        })}
        <PaginationControl
          disabled={currentPage === numPages}
          to={buildPagePath(currentPage + 1)}
        >
          &gt;
        </PaginationControl>
        <PaginationControl
          disabled={currentPage === numPages}
          to={buildPagePath(numPages)}
        >
          &gt;&gt;
        </PaginationControl>
      </nav>
    </Layout>
  )
}

export const Head = ({ pageContext }) => (
  <Seo
    title={pageContext.currentPage === 1 ? "All posts" : `All posts - Page ${pageContext.currentPage}`}
  />
)

export default BlogIndexTemplate

export const pageQuery = graphql`
  query BlogIndexPage($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { fields: { collection: { eq: "blog" } } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        html
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
      }
    }
  }
`
