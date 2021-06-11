---
id: 52
title: Blank Markers in FrameMaker
date: 2015-04-14T22:37:02-07:00
author: jkonrath
layout: revision
guid: http://jonkonrath.com/?p=52
permalink: /?p=52
---
<div>
  Here&#8217;s a FrameMaker problem I had once on a 64-bit Windows machine. I don&#8217;t remember having it on my next Win7 machine, but I&#8217;ve seen it more than once.
</div>

<div>
</div>

<div>
  The problem: the marker symbols were missing. These are the little &#8220;T&#8221; symbols you normally see when you insert a cross-reference or an index marker.
</div>

<div>
</div>

<div>
  The solution: I did not have the <code>fm5font.ttf</code> font installed. I don&#8217;t know if the installer skipped it, or I did an install when I was supposed to upgrade, or I was just holding it wrong.
</div>

<div>
  You can find this font in <code>C:\Program Files (x86)\Adobe\AdobeFrameMaker10\fminit</code>. Double-click it to install, then reboot.
</div>