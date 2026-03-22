---
id: 83
title: Adjusting Mic volume from the command line in Windows
date: 2016-03-09T18:58:58-08:00
author: jkonrath
layout: post
guid: http://jonkonrath.com/?p=83
permalink: /2016/03/09/adjusting-mic-volume-from-the-command-line-in-windows/
categories:
  - tip-slash-problem
tags:
  - CLI
  - "why doesn't this just work"
  - windows
---
I spend a lot of time in meetings on a USB headset. I have a Windows computer. So every day, multiple times a day, here&#8217;s the drill:

  1. Plug in headset.
  2. Mic volume is a random number.
  3. Right-click Sound.
  4. Wait for the right click to register, because half the time it doesn&#8217;t, and the lag is horrible.
  5. Select Recording Devices. See last step about lag.
  6. Click Microphone.
  7. Click Properties.
  8. One in ten times, this will cause the control panel to gray out and freeze, so wait five minutes and/or force quit it and start over.
  9. Click the Level Tab. (It&#8217;s not the first tab, so this takes ten seconds to scan.)
 10. Change the level back to 100.
 11. Click OK.
 12. Click OK.
 13. Feel the great joy in knowing you&#8217;ll have to do this three or four more times that day, which adds up to like 18 months of your life.

The same process on a Mac:

  1. Plug in the headset. It remembers what you had the level set to the last time it was plugged in.

There is a great way around this. It&#8217;s called <a href="http://www.nirsoft.net/utils/nircmd.html" target="_blank" rel="noopener noreferrer">NirCmd</a>, and it&#8217;s a great little free Windows command-line executable that enables you to do all sorts of weird things from a command prompt or batch script.

Go grab a copy of it at the above link. The first time you click on the exe, it will ask to copy itself to your Windows directory, and then it&#8217;s in your path, ready to go. Create a .bat file like this:

<pre>nircmd setsysvolume 65535 Microphone</pre>

Each time you put in your headset, run that, and you&#8217;re good to go.

Nircmd also has some commands for shutdown/reboot/standby/logoff if you are sick of digging in the Windows menu for those commands.