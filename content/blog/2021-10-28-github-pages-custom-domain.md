---
id: 170
title: GitHub Pages Custom Domains
date: 2021-10-26
author: jkonrath
layout: post
guid: http://jonkonrath.com/?p=170
permalink: /2021/10/28/github-pages-custom-domains/
categories:
  - blog
tags:
  - GitHub
  - Jekyll
---

I moved this site from Wordpress to GitHub pages a few months ago, and when I got to redirecting the domain, I punted and put an `.htaccess` file on the old site and 301'ed it over. That almost worked, but after each redirect happened, any old URLs were sent to `jkonrath.github.io/`, which broke all of my old links. I needed to properly point my hostname to the right place, and this was a bit maddening.

Here's what I did to get it to work. My domain is registered at Pair Domains, and my old site was running at Pair. This assumes you have created a GitHub account and a repo for your GitHub pages stuff, and have an address like I have `jkonrath.github.io`.

> Disclaimer: I'm not an IT professional, and you could mess up everything by listening to me. You probably shouldn't listen to me about anything, let alone something involving data loss. You've been warned.

The Pair part:

1. Log in to the [Pair ACC](https://acc.pair.com) site. Back up the old WordPress site. Don't forget to back up the database, too.
1. Go to **Domains** and select the domain from the list.
1. Select **Delete Domain From Account**.
    > I only needed to do these three things because the domain was pointed at an IP and subdirectory of another host I run there. If you only registered a domain at Pair Domains and don't host the site there, you don't have to do this.
1. Log in to the [Pair Domains](https://www.pairdomains.com) site, and select your domain name.
1. Go to **Domain Address Settings**. This may be disabled by default; I had to accept terms and turn it on first.
1. If you have **Website Forwarding** set, turn that off by deleting the forwarding URLs.
1. From the **Add New Record** dropdown list, select **CNAME (Parking)**.

    1. In the left side under **Alias**, put `www`.
    1. In the right, under **Points To**, put `yourusername.github.io`.
    1. Select **Add Record**.

1. Go back to **Add New Record**, and select **A (Round Robin)**.
1. Under **Host Name**, put `@` and under **IP Addresses**, put these four IP numbers:
    ```
    185.199.108.153
    185.199.109.153
    185.199.110.153
    185.199.111.153
    ```
1. Select **Add Record**. You will now have a CNAME for www pointing to your GitHub Pages domain, and four A records pointing to the IP addresses above.<br/><br/>

**Note:** Double-check this nine times. The CNAME is `www >> yourusername.github.io` and there are four A records that are `@ >> 185.199.x.y` If you get the `www` and `@` backwards, this won't work.

After you do this, you have to wait. It could be a minute; it could be a day. A good way to test it is [whatsmydns.net](https://www.whatsmydns.net), which shows how your changes have propagated around the world.

Once that sorts itself out:

1. Go to GitHub, and open the repo for your blog.
1. Select **Settings**, then **Pages**. It will say your page is being hosted at `yourusername.github.io`. If it isn't, you've got bigger problems. Sort those out first.
1. Under **Custom Domain**, enter the custom domain and select **Save**. You're putting in `www.my-host-name.com`. There's no protocol in front of it (`http://`) but don't forget the www.
1. This will churn away and check the DNS for you. It will also kick off a request to Let's Encrypt to make a certificate for free. You _do not_ have to pay for anything at Pair or do any other legwork to get this done. The catch is that if you messed up the first part, or if GitHub's feeling grumpy, that creation step will get botched, and you won't get any helpful information, except it won't work.
1. Leave it alone for an hour or a day, and then you can select **Enforce HTTPS** and it will (eventually) enable HTTPS.

On the last step: it may give you a byzantine error message, like "Unavailable for your site because a certificate has not yet been issued for your domain." If that happens:

1. Make sure your CNAME and A records on Pair Domains are correct.
1. Wait a bit.
1. Under **Custom Domain** in the GitHub Pages config, select **Remove**, then add it again. This will redo the request for a new certificate. Or not. I think I did it five times before it took.

You may need to clear your browser cache or wait a bit more until this works, but test it with and without HTTPS and www.
