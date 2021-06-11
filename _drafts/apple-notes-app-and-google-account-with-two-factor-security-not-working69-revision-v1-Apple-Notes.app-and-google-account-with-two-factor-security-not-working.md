---
id: 154
title: Apple Notes.app and google account with two-factor security not working
date: 2020-11-17T13:51:10-08:00
author: jkonrath
layout: revision
guid: http://jonkonrath.com/2020/11/17/69-revision-v1/
permalink: /?p=154
---
So you&#8217;ve done something, and the Notes app on the Mac won&#8217;t log in to Google anymore. It will sit and spin on a &#8220;logging in&#8221; forever.

Oh, and you&#8217;ve also just turned on two-factor auth in Google.  Well, that&#8217;s the problem.

Google considers Notes to be a &#8220;less secure&#8221; app, and it won&#8217;t work with two-factor. What you need to do is create an app password, and then it will.

See also <a href="https://support.google.com/accounts/answer/185833" target="_blank" rel="noopener noreferrer">https://support.google.com/accounts/answer/185833</a>

(Not saying two-factor auth is the problem. In fact, you should probably use it for everything.)