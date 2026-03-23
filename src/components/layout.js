import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Layout = ({ location, children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
          description
          navigation {
            title
            slug
          }
          social {
            github
            linkedin
          }
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description
  const navigation = data.site.siteMetadata.navigation
  const social = data.site.siteMetadata.social
  const rootPath = `${__PATH_PREFIX__ || ""}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header-inner">
          <div className="site-brand">
            {isRootPath ? (
              <h1 className="site-title">{siteTitle}</h1>
            ) : (
              <Link className="site-title-link" to="/">
                {siteTitle}
              </Link>
            )}
            <p className="site-tagline">{siteDescription}</p>
          </div>
          <nav aria-label="Primary" className="site-nav">
            {navigation.map(item => (
              <Link
                key={item.slug}
                className={
                  location.pathname === item.slug
                    ? "site-nav-link site-nav-link-active"
                    : "site-nav-link"
                }
                to={item.slug}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="site-main">{children}</main>
      <footer className="site-footer">
        <p>
          <strong>{siteTitle}</strong>
          <br />
          {siteDescription}
        </p>
        <p className="footer-links">
          <a href={`https://github.com/${social.github}`}>GitHub</a>
          <span aria-hidden="true"> / </span>
          <a href={`https://www.linkedin.com/in/${social.linkedin}`}>LinkedIn</a>
          <span aria-hidden="true"> / </span>
          <a href="/rss.xml">RSS</a>
        </p>
      </footer>
    </div>
  )
}

export default Layout
