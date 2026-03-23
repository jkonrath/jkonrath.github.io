---
id: 168
title: Atom as a Markdown Editor
date: 2021-10-19
author: jkonrath
layout: post
guid: http://jonkonrath.com/?p=168
permalink: /2021/10/19/atom-for-markdown/
categories:
  - blog
tags:
  - Markdown
  - Tools
  - Atom
  - Jekyll
  - GitHub
---

> (Update: [nope](https://github.blog/2022-06-08-sunsetting-atom/). I've since switched to VSC, so looks like you should too. I'll leave this here for nostalgia purposes.)

Part of this switch to Jekyll I mentioned [previously](/2021/06/13/dogfooding/) is that I now edit this site in Markdown instead of WordPress. The great thing about Markdown is you can theoretically edit it in anything; you could even use Notepad or TextEdit or even the DOS Edlin editor to make a Markdown file. But you probably want something that adds some conveniences, like a few key bindings to save some time typing, a preview pane, and the ability to search and replace multiple files.

When I first started using Markdown at work in 2015, I looked for a good editor that would do all of this, but never entirely found it. I stumbled through trying to set up Notepad++ like an IDE (I was stuck on a Windows machine), and I almost considered setting up Eclipse as a Markdown editor, but then I remembered it wasn't 2003.

I eventually settled on using [Atom](https://atom.io), which is a text editor-slash-IDE released by GitHub. It's free, open-source, and customizable, with a lot of optional packages that are easy to add.

Here's what I did to set up Atom for my Markdown editing needs:

* Not part of Atom per se, but life is much easier when I'm also using [GitHub Desktop](https://desktop.github.com) along with it. It makes it much easier to handle git commits/pushes/merges/branches. Atom does have its own git integration down in the lower right corner, where you see your current branch, do a quick fetch, and see PR review comments.

* First thing I do is change the theme, because I can't deal with dark mode (sorry). Go to **Preferences > Settings > Themes** and pick something; I usually go with One Light, but there are many options.

* Then go to **Preferences > Settings > Install** and grab the following:

    * `language-markdown` - adds grammar support for MD files.
    * `markdown-writer` - adds more MD writing features.
    * `markdown-preview-enhanced` - there are a few previewers out there, but this one seems to work best for me. I had problems with `markdown-preview` handling Jekyll files; maybe that's fixed now?

* Go to **Preferences > Settings > Packages** and go to the settings for the `spell-check` package. In the **Grammars** section, add `text.md`.

* If you **File > Open** to the directory of your project, it opens it with the hierarchy shown in the left sidebar, and you can then click around in that to open various files.

I've been using this setup daily for a while now at work. But now everyone's using Visual Studio Code, so maybe I need to switch.
