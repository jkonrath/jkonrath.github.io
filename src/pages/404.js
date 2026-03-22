import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <section className="content-card page-content">
      <h1>Page not found</h1>
      <p>The page you were looking for is not here anymore.</p>
      <p>
        <Link to="/">Back to the homepage</Link>
      </p>
    </section>
  </Layout>
)

export const Head = () => <Seo title="404: Not found" />

export default NotFoundPage
