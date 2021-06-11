---
id: 80
title: REST API Doc article
date: 2016-01-11T18:16:24-08:00
author: jkonrath
layout: post
guid: http://jonkonrath.com/?p=80
permalink: /2016/01/11/rest-api-doc-article/
categories:
  - blog
tags:
  - api-docs
  - REST
---
I think the big problem with API docs is what to document. And it usually ends up with a comment per method, where you have &#8220;createFoo = creates a foo; deleteFoo = deletes a foo&#8221; and no real content. The question always becomes &#8220;well, what else?&#8221; And the real value of API docs is everything in between, the things you can&#8217;t infer by just looking at method signatures.

The following article is a good list of the other things you need to cover. It talks specifically about REST, but holds true for other API types, also. The TL;DR: what does a consumer need to know to actually use this API? How do you do auth? What are the business uses? What standards does it really follow? What are the other gotchas? What are the SLAs or other requirements for the service?

<a href="https://dzone.com/articles/rest-api-documentation-part-1" target="_blank" rel="noopener noreferrer">https://dzone.com/articles/rest-api-documentation-part-1</a>