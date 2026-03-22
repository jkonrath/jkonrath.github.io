---
id: 139
title: The one-line web server
date: 2020-09-17T17:38:33-07:00
author: jkonrath
layout: post
guid: http://jonkonrath.com/?p=139
permalink: /2020/09/17/the-one-line-web-server/
categories:
  - tip-slash-problem
tags:
  - httpd
  - jekyll
  - python
  - webserver
---
Every now and again, I run into a situation where a bunch of HTML files can&#8217;t be opened by simply double-clicking the index.html, and need to be hosted on a web server to behave properly. I think this used to happen with WebWorks output, and built Jekyll output does this. It&#8217;s also sometimes handy to have a web server spinning in the background so you can modify and preview things on the fly.

In the past when this came up, I&#8217;d fall down a wormhole about installing the Apache or IIS web server, or trying to figure out where Apple moved the built-in out-of-date Apache web server in the latest version of macOS. (I think it&#8217;s gone completely in Catalina.) But instead of sifting through the many different Apache installers and Medium articles about how to get an entire full stack going, I realized this is dead simple if you have Python installed.

First, do you have Python installed? A quick `python -V` will tell you. If you don&#8217;t, <a href="https://wiki.python.org/moin/BeginnersGuide/Download" target="_blank" rel="noopener noreferrer">grab a copy</a>.

Open a command line in the directory you want to serve up, and if you have Python 3, do this:

<pre>python3 -m http.server</pre>

If you&#8217;re a Windows user, that is probably `python` and not `python3`.

If you&#8217;re still using Python 2, do this instead:

<pre>python -m SimpleHTTPServer</pre>

Now point a web browser at `localhost:8000` and there&#8217;s your stuff.

If you&#8217;ve already got something on port 8000, put another port number after the command, like `python3 -m http.server 90125`.

Don&#8217;t expect to run your Fortune 500&#8217;s production environment on this. It&#8217;s great for testing, though.

(Thanks: <a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server</a> and <a href="https://docs.python.org/3/library/http.server.html" target="_blank" rel="noopener noreferrer">https://docs.python.org/3/library/http.server.html</a>)