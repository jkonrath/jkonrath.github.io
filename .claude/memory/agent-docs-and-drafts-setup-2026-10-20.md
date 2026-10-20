# agent-docs-and-drafts-setup — 2026-10-20

Branch: `main` (no feature branch)

## Summary

Set up agent onboarding for the repo: a root CLAUDE.md with a stack summary and
documentation rules, a `.claude/docs/` directory, a `content/drafts/` folder for
unpublished posts, and the `.claude/memory/` record system.

## Prompts and changes

1. **Create a CLAUDE.md summarizing the stack, requiring agents to document changes there
   or in `~/.claude/docs/`, and to read that directory first. Create the directory with a
   README.**
   - Created `CLAUDE.md` (Gatsby 5 stack, commands, deploy, Jekyll leftovers).
   - Created `~/.claude/docs/README.md`.

2. **Asked whether there's a place for drafts that won't get built.**
   - No changes. Answered: everything in `content/blog/` is built; only the ignored
     `_drafts/` is excluded. Suggested a `draft: true` flag or a `content/drafts/` folder.

3. **Correction: the docs directory belongs at the top of this repo, not in `~`.**
   - Moved the README to `.claude/docs/README.md`, removed `~/.claude/docs/`.
   - Updated paths in `CLAUDE.md`; dropped the per-project filename prefix rule.

4. **Add a tracked `content/drafts/` folder that Gatsby doesn't source; move
   `agent-onboarding.md` there.**
   - Moved `content/blog/agent-onboarding.md` to `content/drafts/agent-onboarding.md`.
   - Documented `content/drafts/` and how to publish a draft in `CLAUDE.md`.
   - Note: the draft's `date: 2026-05-09` needs updating when it's published.

5. **Confirmed we're working directly on `main`.** No changes.

6. **Commit to main and push.**
   - Commit `a0259ad` "Add CLAUDE.md, agent docs dir, and content/drafts", pushed to
     `origin/main` (triggers the Pages deploy).

7. **Add the memory record system to CLAUDE.md.**
   - Added a "Memory records" section to `CLAUDE.md`.
   - Created this file, `.claude/memory/agent-docs-and-drafts-setup-2026-10-20.md`.
   - Used `YYYY-MM-DD` in the main-branch file name to match the `<branch>-<YYYY-MM-DD>`
     pattern (the example in the request was written `20260120`).

8. **Commit and push.**
   - Committed the `CLAUDE.md` memory section and this record to `main` as "Add memory
     record system for agent sessions", pushed to `origin/main`.
