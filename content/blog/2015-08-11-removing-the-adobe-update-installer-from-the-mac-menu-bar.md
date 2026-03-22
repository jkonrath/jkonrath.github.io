---
id: 72
title: Removing the Adobe Update Installer from the Mac menu bar
date: 2015-08-11T09:41:13-07:00
author: jkonrath
layout: post
guid: http://jonkonrath.com/?p=72
permalink: /2015/08/11/removing-the-adobe-update-installer-from-the-mac-menu-bar/
categories:
  - blog
  - tip-slash-problem
tags:
  - adobe
  - creative cloud
  - mac
  - photoshop
---
So at some point, Adobe Creative Cloud added a second notification to the menu bar on my Mac. There&#8217;s already one that opens the CC app, and always sits in the menu bar. And everyone else wants something in the menu bar. But Adobe started showing this second icon, with a perpetual 1 next to it, even if there were no updates, and all it does is open the first one. No combination of preference-toggling would make it go away, and neither would quitting CC.

Here&#8217;s what I had to do:

  1. Quit Creative Cloud.
  2. Rename `Applications/Utilities/Adobe Creative Cloud/ACC/Creative Cloud` to `Creative CloudX.`
  3. Go to the new weird menu bar thing and select Open Updater.
  4. You&#8217;ll see the old Adobe Updater. If you see the new CC app, you did 1-3 wrong.
  5. Go to Preferences and and turn off Notifications.
  6. Un-rename the file you changed in step 2.
  7. Start the CC app.
  8. You probably have to repeat this every time Adobe issues an update, which will be in like five minutes.