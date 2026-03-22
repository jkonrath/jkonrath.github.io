---
id: 98
title: Git choose-your-own-adventure
date: 2019-03-10T11:03:13-07:00
author: jkonrath
layout: post
guid: http://jonkonrath.com/?p=98
permalink: /2019/03/10/git-choose-your-own-adventure/
categories:
  - blog
tags:
  - doc types
  - git
---
I use git on a daily basis. Not to age myself, but I went from rcs to cvs to svn to git, with some Perforce and SourceSafe sprinkled in there, so I have a long background in source control. But git is just different enough to throw me sometimes. And for whatever reason, a lot of git documentary gets a bit, well, _academic_. It&#8217;s hard to find a quick answer sometimes, and they&#8217;re often buried in very theoretical arguments about whether or not git submodules are essential or the worst thing since Agent Orange.

Anyway, here&#8217;s my go-to for answers when I break something: <a href="http://sethrobertson.github.io/GitFixUm/fixup.html" target="_blank" rel="noopener noreferrer">http://sethrobertson.github.io/GitFixUm/fixup.html</a>

There are two things I like about this page. First, it gives you answers without a lot of guff. Less is more, etc.

The second thing is that it&#8217;s presented as a choose-your-own-adventure. Are you trying to do this? Did you do this? Do you want to do this? It&#8217;s a simple troubleshooting flowchart, something I&#8217;ve written in docs before, and something you&#8217;ll run into every time you call tech support. (There it gets a bad rap because the first steps are always &#8220;did you try restarting?&#8221; and that seems insulting. It&#8217;s also the problem 90% of the time. That&#8217;s another topic, though.)

But as a kid who grew up devouring Bantam books from the book fair at my grade school, and memorizing _The Cave of Time _way back then, there&#8217;s something very intuitive and appealing about this form of docs. I&#8217;m not going to say this makes a git branching disaster where you think you lost everything fun, but it makes it easier to drill through the problem and find a solution. I don&#8217;t really have any docs at work where I could pull something like this, but as docs in general become more informal and user-oriented, this would be a great format to use.