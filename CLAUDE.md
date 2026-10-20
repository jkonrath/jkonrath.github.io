# CLAUDE.md

Personal site and blog for Jonathan Konrath, published at https://www.jonkonrath.com.

## Before you start

Read the docs in `.claude/docs/` before doing any work in this repo. Start with
`.claude/docs/README.md`, then read anything relevant to the task. Those docs hold
decisions, history, and context that aren't in the code.

## Documenting your changes

If you modify anything in this repo, you must document it:

- **Small changes** (config tweaks, a new dependency, a fix, a new component): update
  this CLAUDE.md so the stack summary below stays accurate.
- **Larger features, or whenever Jon asks**: write a Markdown file in `.claude/docs/`
  describing what changed, why, and anything the next agent needs to know. Add it to
  the index in `.claude/docs/README.md`.

Don't leave the docs out of date. If something here is wrong, fix it.

## Memory records

In addition to the docs above, every agent session that does work in this repo keeps a
memory record in `.claude/memory/`. Read recent records there before you start, along
with `.claude/docs/`.

- **File name**: `<branch>-<YYYY-MM-DD>.md`, e.g. `draft-filtering-2026-10-20.md`. Replace
  any `/` in the branch name with `-`.
- **Working on `main`** (no branch): use a three-to-five word kebab-case summary of the
  work in place of the branch name, e.g. `font-and-layout-changes-2026-01-20.md`.
- If that file name already exists from an earlier session, add a suffix: `-2`, `-3`, ...
- **Contents**: a summary of what you did in the session, including:
  - The prompts or requests you were given (paraphrase long ones).
  - A running log of the changes you made: files created, edited, moved, or deleted, and
    any commits or pushes.
  - Decisions made along the way and anything left unfinished.
- **Keep it current during your session.** Update your record as you go, not just at the end.
- **Never edit old records.** Records from earlier sessions are a historical record. If
  one is wrong or outdated, say so in your own record or fix the relevant doc instead.
- Don't put secrets, tokens, or credentials in a record.

## Stack

- **Gatsby 5** static site generator, React 18. Node 22 in CI.
- **Content** is Markdown with YAML frontmatter, processed by `gatsby-transformer-remark`:
  - `content/blog/` — blog posts, named `YYYY-MM-DD-slug.md`. Collection name `blog`.
  - `content/pages/` — standalone pages (about-me, contact, resume). Collection name `pages`.
  - `content/drafts/` — unpublished drafts. Tracked in git but **not** sourced by
    `gatsby-source-filesystem`, so nothing here is built or deployed. To publish, move the
    file to `content/blog/` (rename to `YYYY-MM-DD-slug.md` and check the `date`).
  - Slug comes from frontmatter `permalink`, then `slug`, then the file path. Older posts
    migrated from Jekyll/WordPress use `permalink: /YYYY/MM/DD/name/`; keep those to avoid
    breaking URLs.
  - Frontmatter schema is defined in `gatsby-node.js` (`createSchemaCustomization`):
    `title`, `date`, `description`, `permalink`, `slug`, `menuTitle`, `tags`, `categories`.
- **Remark plugins**: `gatsby-remark-images` (max width 720), `gatsby-remark-responsive-iframe`,
  `gatsby-remark-prismjs` (syntax highlighting, Prism default theme).
- **Page generation** (`gatsby-node.js`):
  - Blog index paginated at 5 posts per page: `/`, `/page/2/`, ... via `src/templates/blog-index.js`.
  - Posts via `src/templates/blog-post.js` (with previous/next links).
  - Pages via `src/templates/page.js`.
- **Source layout**:
  - `src/components/` — `layout.js`, `bio.js`, `seo.js`
  - `src/templates/` — `blog-index.js`, `blog-post.js`, `page.js`
  - `src/pages/404.js`
  - `src/style.css`, `src/normalize.css` — global styles, loaded in `gatsby-browser.js`
  - `src/images/` — profile pic and manifest icon
- **Fonts**: Montserrat (variable) and Merriweather via `@fontsource`.
- **Icons**: FontAwesome (`@fortawesome/react-fontawesome`, free solid icons). Its CSS is
  imported in `gatsby-browser.js` with `config.autoAddCss = false` so icons aren't unstyled
  on first paint. Import only the icons you use.
- **Site metadata and nav** live in `gatsby-config.js` (`siteMetadata.navigation`): Home,
  About, Contact, Resume. A nav item can have an optional `icon` name, which
  `src/components/layout.js` maps to a FontAwesome icon in `navIcons` (add new ones there).
  Nav buttons share a `min-width` in `.site-nav-link` (`src/style.css`) so they're the same
  width with centered labels; if you add a longer label, check it still fits.
- **RSS** feed at `/rss.xml` via `gatsby-plugin-feed`, blog collection only.
- **Static files**: `static/` is copied as-is (favicons, `CNAME`, legacy `assets/img/`
  and `wp-content/uploads/` images referenced by old posts).
- **Formatting**: Prettier 2 (`npm run format`), no semicolons, `arrowParens: avoid`.
- **No tests.** `npm test` is a placeholder that fails.
- `npm run build` prints two `ERROR UNKNOWN` lines that are really Node `punycode`
  deprecation warnings; the build still succeeds. Check for `Done building`.

## Commands

- `npm run develop` — dev server at http://localhost:8000 (also defined as
  `gatsby-develop` in `.claude/launch.json` for the Claude preview browser)
- `npm run build` — production build to `public/`
- `npm run serve` — serve the built site
- `npm run clean` — clear Gatsby cache

## Deployment

Pushing to `main` triggers `.github/workflows/gatsby.yml`, which builds with `npm ci` and
`npm run build` and deploys `public/` to GitHub Pages. Custom domain is set by `static/CNAME`.
Pushing to `main` publishes the site, so don't push without asking.

## Leftovers from Jekyll

The site used to be Jekyll. These directories are local-only (ignored or empty, not
tracked) and are not part of the Gatsby build: `_drafts/`, `_posts/`, `_layouts/`,
`_includes/`, `_sass/`, `_site/`, `.jekyll-cache/`, `js/`. `_drafts/` still has old
unpublished Jekyll drafts and is not backed up, so don't delete it. New drafts go in
`content/drafts/`.
