---
id: 54
title: The FrameMaker Text Inset Header Problem
date: 2015-04-15T14:26:30-07:00
author: jkonrath
layout: revision
guid: http://jonkonrath.com/?p=54
permalink: /?p=54
---
Here&#8217;s a FrameMaker thing that burns me once a year, usually a few hours before a release.

So, you&#8217;ve done this:

  1. Created a text inset file that begins with a Head1 paragraph style.
  2. Inserted that file as a reference in another file, at a point where the paragraph style was Body.
  3. Did a book update, and a blank Head1 was magically added right after the inset, causing a blank entry in the TOC. Didn&#8217;t notice this until after the book went to QA and they asked why this keeps happening.
  4. Went to the file with the reference, changed it back to Body, regenerated.
  5. Repeated step 4 for an hour or two and ended up throwing your computer out of a window.

Here&#8217;s how to get around it:

  1. Delete the reference in the file and start over.
  2. On the line where you add the inset, make that line consist of nothing but a single nonbreaking space (Ctrl-space).
  3. Move the cursor/insertion point to right BEFORE the nonbreaking space and do a **File > Import** to add the inset.