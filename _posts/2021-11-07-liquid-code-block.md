---
id: 172
title: Liquid code blocks in Jekyll posts
date: 2021-11-07
author: jkonrath
layout: post
guid: http://jonkonrath.com/?p=172
permalink: /2021/11/07/liquid-code-blocks-in-jekyll/
categories:
  - blog
tags:
  - jekyll
  - liquid
  - code
---

This came up in the [factorials](/2021/10/26/factorial/) post I did recently, and it was a bit maddening, so here's a quick reference, so I remember it two years from now when it comes up again.

Typical fenced code blocks in Jekyll (and any other Markdown situation) are surrounded with lines that are nothing but a triple backslash. (Your Markdown processor might also define a code language on the first line, so throwing a `json` on there might give you pretty formatting or color-coding, depending on your tools.) Example:

```json
{
  "book": {
    "title": "Infinite Jest",
    "author": "David Foster Wallace"
  }
}
```

Here's what that looks like in my editor:

<img alt="JSON code block" src="/assets/img/json-code-block.png" width="350px" />

Now let's say you need to add an example of some code using the [Liquid template language](https://shopify.github.io/liquid/basics/introduction/), as one might need to do when talking about Jekyll themes. When you get into your first full block of code with things like surrounding `page.title` with two curly brackets on either side of it, Jekyll's going to start evaluating the code, even if it's inside a block or a piece of inline code (hence me describing `page.title` with two curly brackets on either side of it instead of showing it). Liquid code takes precedence over any Markdown escaping.

Liquid has a set of tags named `raw` and `endraw` to solve this. You can use these to surround a code block containing Liquid. The nesting is really touchy though, and there's a good chance your editor's preview won't show it right.

Two quick examples: First, you can put an inline example on a line. The output looks like this: {% raw %}`{% assign n = 20 %}`{% endraw %}.

Output of a fenced code block looks like this:

{% raw %}
```
{% assign result = 1 %}
{{ result }}
```
{% endraw %}

Here's what these look like in my editor:

<img alt="Liquid code block" src="/assets/img/liquid-code-block.png" width="500px" />


Your mileage may vary; like I said, this is touchy. Make sure to fire up Jekyll locally and test it. Bad combinations will show up as errors in your server output.
