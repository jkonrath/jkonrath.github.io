---
id: 128
title: PDF Printing with Headless Chrome
date: 2020-06-21T17:04:54-07:00
author: jkonrath
layout: revision
guid: http://jonkonrath.com/?p=128
permalink: /?p=128
---
I&#8217;ve got docs for a bunch of products in Jekyll, written mostly in Markdown, but also some HTML output from DITA and Flare. It works great, but doc reviews are a nightmare. We typically use Acrobat shared reviews for doc review, which mostly works, but the question became how to make PDFs of this stuff, especially the Markdown.

There are a lot of obvious and not-so-obvious half-answers here. Like, why not save as PDF from your Markdown editor? (You don&#8217;t get any of the templating from Jekyll, and none of the variables show up. You also have to do it from each file, by hand.) I spent _years_ chasing a good solution for this, and tried Pandoc, Prince, PrawnPDF, wkhtmltopdf, dita-ot, and gotenberg, hitting some roadblock with each one.

My short-term solution was starting Jekyll locally, going to each page in a browser, doing a Ctrl-P, and printing to a PDF. For every page. Every single page. For every review. That was obviously not a great way to handle it.

This is when I found something genius: _Headless Chrome_.

Basically, headless Chrome runs the Chrome browser in the background, and then you can throw commands at it and get the output. If you ever used the venerable DZBatcher back in the day for non-interactive FrameMaker, it&#8217;s a similar concept. If you&#8217;re a Node programmer, there&#8217;s a bunch of crazy stuff you can do with it. But there&#8217;s also a command-line interface where you can do some basic stuff from a shell script.

If you have a version of Chrome newer than mid-2017, you&#8217;re set. You can do something like this:

`chrome --headless --disable-gpu --print-to-pdf https://www.jonkonrath.com/`

Another fun command is `--screenshot`, which will dump the page to a PNG.

There are a bunch of caveats, and there is almost no logging or error messages thrown by Chrome, so it&#8217;s maddening trying to debug this. So keep the following in mind:

  * Headless Chrome uses the location of your Chrome binary as the working directory, and tries to save files there. If you&#8217;re using Windows, chances are you can&#8217;t write files in `C:\Program Files (x86)`, but it won&#8217;t tell you that if it fails. And if it does work, it will pollute that directory with output as you wonder where it&#8217;s putting the PDFs. You can specify an output file with `--print-to-pdf="/full/path/file.pdf"` and give a full absolute directory there.
  * There is an `--enable-logging` switch, which is vaguely helpful.
  * The URL you specify has to have a protocol in front of it (http:// or https://) or it will silently fail.
  * If you do something wrong, Chrome will go sideways, but keep running in the background without complaint. You&#8217;ll need to stop every Chrome process to get it to work again.

I can&#8217;t publish the Windows CMD script I wrote for two reasons: one, it belongs to my employer because they pay me, and two, it&#8217;s the worst piece of garbage you&#8217;ve ever seen. The five lines of code I had to write to generate a timestamped directory look like if one of my cats slept on my keyboard for 45 minutes. Anyway, what I basically did:

  1. Pass in a .txt file with a list of URLs in the order I eventually want the output.
  2. Create a new timestamped directory.
  3. Loop through the text file, and run the print-to-pdf command once per line, dumping them into the timestamped directory.

When I named the output files, I stripped off the protocol and hostname from the URL, and numbered the files, and replaced the slashes with dashes in the file. So if I printed http://example.com/this/is/the/index.html, it would create 1-this-is-the-index.html. The path thing is so duplicate files don&#8217;t overwrite each other.

Then when I have that directory of PDFs, I Ctrl-A, right-click, and combine the files into a PDF, then run a shared review on that. The beauty is that when I do round two of the review, I simply run the script again, and the files are in the same order. (Otherwise, the files are going to be in alphabetical order, which probably isn&#8217;t what your reviewers want.)

A handy way to get that file started is with a `dir /b > file-list.txt` from the command line in your top-level source directory. Don&#8217;t forget to edit out the images and directory names from your list.

This isn&#8217;t a great way to do production-ready PDFs, and you&#8217;ll have no good control over headers, footers, page layout, or anything else. Also, all of the links in the PDF won&#8217;t work right; they&#8217;ll go to localhost if you&#8217;re running Jekyll locally. But it&#8217;s close enough for review purposes.

More info on Headless Chrome: <a href="https://developers.google.com/web/updates/2017/04/headless-chrome" target="_blank" rel="noopener noreferrer">https://developers.google.com/web/updates/2017/04/headless-chrome</a>