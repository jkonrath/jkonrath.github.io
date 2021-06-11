---
id: 162
title: Parsing JSON on the command line
date: 2021-02-08T14:16:12-08:00
author: jkonrath
layout: revision
guid: http://jonkonrath.com/2021/02/08/160-revision-v1/
permalink: /?p=162
---
So, you&#8217;re using a REST API with curl from a shell script. When you hit an API, this is what you get back:

`$ curl https://cat-fact.herokuapp.com/facts/random?animal_type=cat<br />
{"status":{"verified":true,"sentCount":1},"type":"cat","deleted":false,"_id":"591f98803b90f7150a19c20f","__v":0,"text":"Fossil records from two million years ago show evidence of jaguars.","source":"api","updatedAt":"2020-08-23T20:20:01.611Z","createdAt":"2018-01-04T01:10:54.673Z","used":false,"user":"5a9ac18c7478810ea6c06381"}$` 

Not very pretty, and if I needed `text` to use elsewhere in my script, that&#8217;s a mess of shell scripting, right?

A great tool for this is called **jq**. (<a href="https://stedolan.github.io/jq/" target="_blank" rel="noopener">https://stedolan.github.io/jq/</a>) jq touts itself as &#8220;the sed of JSON.&#8221; If you&#8217;re not familiar with sed, it&#8217;s a unix command (&#8220;stream editor&#8221;) used to programmatically slice and dice text using regular expressions. The easiest way to use sed is doing stuff like `sed '/s/Pepsi/Coke' file.txt`. jq is designed to do similar, but with JSON.

First, you need to install jq. I did a `brew install jq` on my Mac, but feel free to use your favorite package manager, or check the link above for other systems.

You can prettify the JSON with the base parser option, which is a &#8216;.&#8217; like this:

`$ curl -s https://cat-fact.herokuapp.com/facts/random?animal_type=cat | jq '.'`

This gives you something prettier, like this:

[<img loading="lazy" class="alignnone wp-image-161 size-full" src="http://jonkonrath.com/wordpress/wp-content/uploads/2021/02/Screen-Shot-2021-02-08-at-2.07.45-PM.png" alt="" width="999" height="291" srcset="http://jonkonrath.com/wordpress/wp-content/uploads/2021/02/Screen-Shot-2021-02-08-at-2.07.45-PM.png 999w, http://jonkonrath.com/wordpress/wp-content/uploads/2021/02/Screen-Shot-2021-02-08-at-2.07.45-PM-300x87.png 300w, http://jonkonrath.com/wordpress/wp-content/uploads/2021/02/Screen-Shot-2021-02-08-at-2.07.45-PM-768x224.png 768w" sizes="(max-width: 999px) 100vw, 999px" />](http://jonkonrath.com/wordpress/wp-content/uploads/2021/02/Screen-Shot-2021-02-08-at-2.07.45-PM.png)

&nbsp;