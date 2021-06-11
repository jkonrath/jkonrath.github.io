---
id: 108
title: Python I learned last week
date: 2021-01-21T10:14:50-08:00
author: jkonrath
layout: post
guid: http://jonkonrath.com/?p=108
permalink: /?p=108
categories:
  - programming
tags:
  - python
---
For various reasons, I&#8217;ve been programming in Python a lot in the last few weeks. It mostly involves this-to-that doc conversions, which I won&#8217;t get into right now. I&#8217;ve taken a few online Python courses, but getting past the &#8220;hello world&#8221; stuff and actually doing practical things has been some work.

I thought I&#8217;d start writing down the things I learn each week. I&#8217;m not a Python expert by any means, so please don&#8217;t take any of this as gospel. This is mostly so I&#8217;ll remember it a month from now.

# Windows pip

This doesn&#8217;t work in Windows installs of Python:

<pre>pip install PySomething</pre>

This does (provided python is in your path):

<pre>python -m pip install PySomething</pre>

(Dumb that I didn&#8217;t know this, but I&#8217;m just starting to use Python in Windows, and have to google everything.)

# Naming groups in a regexp

You can name groups in a regexp instead of using the numbered groups of `\1`, `\2`, etc. The syntax is straightforward, but I had to look in a few places to find a simple example. Basically, you use `?P<firstname>` in the the group. Then you refer to it with `\g<firstname>` in the replacement. For example:

<pre>line=re.sub("(?P&lt;firstname&gt;)(?: \w*=\"\w*\")(?P&lt;secondname&gt;)",r"\g&lt;linkaddr&gt;] \g&lt;linktext&gt;)",line)</pre>

In the above example, there&#8217;s also an optional group between the two named ones, using `?:`.

# Unindenting lines in a multiline string

`textwrap.dedent()` does this. See <https://docs.python.org/3/library/textwrap.html#textwrap.dedent>

`textwrap` also has indenting covered, if you don&#8217;t want to pull apart your multiline string into an array, iterate through it, and paste it together.

But, `textwrap.dedent()` removes a level of indent; it doesn&#8217;t remove all indent, which I needed to do. So, I had to do it the ugly way:

<pre>s1tmp = innerbody.split('\n')
flatbody=""
for line in s1tmp:
    flatbody += line.lstrip()+"\n"</pre>

# pyyaml ordering

If you&#8217;re using pyyaml and do something like this, the keys you get aren&#8217;t ordered as they would be in your YAML file:

<pre>import yaml
with open('file.yml') as f:
    data = yaml.load(f)</pre>

do this instead:

<pre>import yaml
with open('file.yml') as f:
    data = yaml.load(f, Loader=yaml.FullLoader)</pre>

# Copying a directory over an existing directory

You&#8217;d think `shutil.copytree(src,dest)` would have some way of clobbering the dest dir if it already exists, but it doesn&#8217;t. It expects dest to not exist.

I had to put this in the front of my `copytree` call:

`if os.path.isdir(dest):`  
`    shutil.rmtree(dest)`

There&#8217;s probably some danger in doing this, like if the copytree failed first, and you were left with nothing.

In my case, dest was a temporary output directory, so no big deal. One issue though is if I had a thousand unchanged files and one changed file, I&#8217;m copying 1001 files instead of one.

# Using xml.etree.ElementTree to parse a document that doesn&#8217;t have a top-level element

I was trying to first strip everything inside the `<body>` element of an HTML document. The list of loose elements inside the `<body>` tag isn&#8217;t an XML document anymore, so duh, it doesn&#8217;t work. Keeping the element surrounded by `<body></body>` did though.

# xml.etree.ElementTree .tostring isn&#8217;t giving me a string

It appears the `tostring` method is just a clever (aka incorrect) name. You actually need to decode it first:

`    s = ET.tostring(ele, method='text').decode("utf-8")`

&nbsp;

That&#8217;s it for this time. I&#8217;ll try to keep doing this.