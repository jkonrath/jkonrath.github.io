---
id: 142
title: A quick cmd trick
date: 2020-11-14T12:34:29-08:00
author: jkonrath
layout: post
guid: http://jonkonrath.com/?p=142
permalink: /2020/11/14/a-quick-cmd-trick/
categories:
  - blog
  - tip-slash-problem
tags:
  - CLI
  - jekyll
  - windows
---
I wish I could tell the 1990 me that the 2020 me would be posting DOS commands in a blog instead of using a brain-implant computer on the surface of Mars. (I also wish 2020 me could tell 1990 me to patent the idea for an online book store, or that the Reds would sweep the A&#8217;s in the World Series.) Anyway, here&#8217;s a quick one I should have known already.

You can set the prompt in a command window by setting the environment variable `PROMPT`. There is a `PROMPT` command too, which I vaguely remember from the DOS days and setting up an `AUTOEXEC.BAT` file. But the `PROMPT` command only works for that session. The variable works for every session.

The default would be `PROMPT $P$G`: show your current directory, then a greater-than sign, so you get `C:\this\that>` as your prompt. But you can do some other fun stuff:

  * `$D` &#8211; the date
  * `$T` &#8211; the time
  * `$V` &#8211; the OS version number
  * `$B` &#8211; a pipe symbol
  * `$G` and `$T` &#8211; greater-than and less-than
  * `$S` &#8211; space
  * `$+` &#8211; a plus-sign for each level of depth in the `PUSHD` directory (If you&#8217;re not a habitual user of `PUSHD`/`POPD`, look into it.)

There are more; do a `PROMPT /?` to see them.

I normally set an environment windows by right-clicking **My Computer** and going to **Properties > Advanced > Environment variables**, but another fun trick is you can use the `SETX` command to do this, too. So I did this:

<pre>SETX PROMPT=$T $P$G</pre>

That adds the time to the front of the default prompt. The reason I did this is because Jekyll builds take forever, and I wanted an easy way to tell if I started the build two minutes or seventeen minutes ago, because time loses all meaning on the last day of a release.

(Thanks: <a href="http://www.hanselman.com/blog/a-better-prompt-for-cmdexe-or-cool-prompt-environment-variables-and-a-nice-transparent-multiprompt" target="_blank" rel="noopener noreferrer">http://www.hanselman.com/blog/a-better-prompt-for-cmdexe-or-cool-prompt-environment-variables-and-a-nice-transparent-multiprompt</a>)

&nbsp;