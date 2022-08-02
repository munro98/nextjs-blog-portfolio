---
title: "Building a portfilio site with nextjs"
date: "July 29, 2022"
excerpt: "I rebuilt my portfolio website with NextJS"
cover_image: "/images/posts/img1.jpg"
---

My previous portfolio website was built using Jekyll since Github supported building and hosting the site and had a selection of themes you could pick from. You could also write most of the content of the website in Markdown a simplistic markup language which is much better for writing down documents compared to raw html which jekyll would compile to later.
<br></br>

The downside of Markdown is that it's removed from html code so when it's compiled to html for display in the browser the result may be something more to be desired from.

<br></br>
NextJS, one of the hottest web frameworks today now allows building static webpages leveraging Reactjs so pages render out serverside allowing faster page loads. I thought it makes a nice project to revamp my vanilla-looking GitHub pages website with a brand new one with dark mode, new content and a swanky .xyz domain from the cheapest domain registrar I could find.
<br></br>

Markdown is probably still much more suitable writing down ideas and articles quickly compared to JSX so I can use marked for parsing the Markdown files and turning them into pages.