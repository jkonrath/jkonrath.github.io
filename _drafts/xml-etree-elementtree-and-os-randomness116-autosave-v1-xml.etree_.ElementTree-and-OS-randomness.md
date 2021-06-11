---
id: 122
title: xml.etree.ElementTree and OS randomness
date: 2020-05-05T13:28:43-07:00
author: jkonrath
layout: revision
guid: http://jonkonrath.com/?p=122
permalink: /?p=122
---
OK, I&#8217;ll start by doing something you aren&#8217;t supposed to do: parse HTML using a bunch of regular expressions in Python. Don&#8217;t do this. Life is too short. Use something like <a href="https://www.crummy.com/software/BeautifulSoup/" target="_blank" rel="noopener noreferrer">BeautifulSoup</a>. I couldn&#8217;t, because I had to use standard libraries only, so here I am.

Anyway, my program manipulated a tree of XHTML using `xml.etree.ElementTree`. Typical stuff like any tutorial on it:

<pre>import xml.etree.ElementTree as ET
...
root = ET.parse(htmlfname).getroot()
bod = root.find('body')
...</pre>

Then after a bunch of scraping, I used a regex like this to get the address in the href of the link:

<pre>anchor_addr = re.search("&lt;a href=\"([^\"]*)\"",anchor_base).group(1)
</pre>

(I&#8217;m converting HTML to Markdown. Don&#8217;t ask why.) 

Anyway, this worked fine on Windows. I pushed the code, and a Unix machine in the CICD pipeline built it, and failed on this line. The match would fail, and `anchor_addr` wouldn&#8217;t have a `.group(1)`.

At first, I thought it was the typical problem with linefeeds, like my code was splitting strings into arrays with `\n` and on Windows it had `\r\n`. After messing around with that, I found it it wasn&#8217;t the case.

Here&#8217;s the problem: `xml.etree.ElementTree` uses a dictionary to store the attributes of an element it parses. Python dictionaries are inherently unordered. Or they can be unordered; it&#8217;s an implementation detail. And it looks like the version of Python I was using on Windows was ordering them, but the ones I was using on my home Mac and on this unix build machine were returning the attributes alphabetically. So `<a href="foo" alt="hi">` was becoming `<a alt="hi" href="foo">` and breaking my regexp. 

My code didn&#8217;t really need to find the entire element and pull the value of the attribute, because it was already inside the element. So I was able to change that regexp to `"href=\"([^\"]*)\""` and that worked, provided it was never `HREF` or `HREF='foo'`. 

Anyway, don&#8217;t use regular expressions to parse HTML.