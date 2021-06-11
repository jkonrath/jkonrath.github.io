---
id: 150
title: FrameMaker and the Kinesis Advantage Keyboard
date: 2020-11-17T13:51:09-08:00
author: jkonrath
layout: revision
guid: http://jonkonrath.com/2020/11/17/86-revision-v1/
permalink: /?p=150
---
Because of RSI, I use a Kinesis Advantage keyboard. I used the Microsoft ergonomic keyboards for a while, but I&#8217;d burn one out every year, and the membrane keys are a bit mushy. I went whole-hog and spent the money on the Kinesis, which I don&#8217;t regret at all, except for one thing: the function keys. The F-keys and Esc are little rubber chicklet keys reminiscent &#8211; I&#8217;m dating myself here &#8211; of the Atari 400. And when you&#8217;re in FrameMaker and doing some heavy formatting, those keys are essential.

You can remap keys in the Kinesis at the keyboard level, but I switch between Windows and Mac machines through a KVM switch, so I wanted to avoid that. Instead, I use AutoHotkey, a nifty little free Windows utility that enables you to easily remap keys at the OS level.

Head over to <a href="https://autohotkey.com/" target="_blank" rel="noopener noreferrer">https://autohotkey.com/</a> and grab a copy. My `AutoHotkey.ahk` has the following entries for FrameMaker:

<pre>Home & 5::Send, {F8}
Home & 6::Send, {F9}
End::Send, {Esc}</pre>

I don&#8217;t use the Home and End keys much, so I stole them for my own use. On the Kinesis, they are in my left thumb cluster, and great for frequently-used combo keystrokes. So I map:

  * Home-5 to F8. That opens the character designer.
  * Home-6 to F9. That opens the paragraph designer.
  * End to Esc. I use Esc constantly for Frame shortcuts, most notable Esc-j-j to repeat a paragraph assign, and Esc-c-c to repeat a character assign.

AHK can do a _lot_ more stuff, like assigning keys to modify and paste the clipboard, run macros from DLLs, and more. If you have a highly repetitive text massage job you can&#8217;t tackle in a script, check out the advanced options. But it&#8217;s easy to use for a few quick remaps.

&nbsp;