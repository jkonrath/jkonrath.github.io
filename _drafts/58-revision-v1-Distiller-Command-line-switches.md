---
id: 59
title: Distiller Command line switches
date: 2015-04-15T18:27:47-07:00
author: jkonrath
layout: revision
guid: http://jonkonrath.com/?p=59
permalink: /?p=59
---
You should be able to do something like this:

c:/Program Files/Adobe/Acrobat 10.0/Acrobat/acrodist /n /q /o /out-dir file.ps

where /out-dir is whatever target directory you want your file to end up in. /n starts a new instance, and /q quits it when its done.

Here&#8217;s a page that outlines all of the switches. I haven&#8217;t tested all of this with 10, but I think they work:

<a href="http://home.comcast.net/~tom.brodhead/distiller-switches.htm" rel="nofollow">http://home.comcast.net/~tom.brodhead/distiller-switches.htm</a>