/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Jonathan Konrath`,
    author: {
      name: `Jonathan Konrath`,
      summary: `technical writer, docs manager, and publications engineer.`,
    },
    description: `Technical writing, management, documentation systems, API docs, and assorted blog posts from Jonathan Konrath.`,
    siteUrl: `https://www.jonkonrath.com`,
    social: {
      github: `jkonrath`,
      linkedin: `jkonrath`,
    },
    navigation: [
      { title: `About`, slug: `/about-me/` },
      { title: `Contact`, slug: `/contact/` },
      { title: `Skills`, slug: `/skills/` },
      { title: `Resume`, slug: `/resume/` },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 720,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1rem`,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.nodes.map(node => ({
                ...node.frontmatter,
                description: node.excerpt,
                date: node.frontmatter.date,
                url: `${site.siteMetadata.siteUrl}${node.fields.slug}`,
                guid: `${site.siteMetadata.siteUrl}${node.fields.slug}`,
                custom_elements: [{ "content:encoded": node.html }],
              })),
            query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } }
                  filter: { fields: { collection: { eq: "blog" } } }
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Jonathan Konrath RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jonathan Konrath`,
        short_name: `Jon Konrath`,
        start_url: `/`,
        background_color: `#f4efe6`,
        theme_color: `#16324f`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}
