---
title: "Building a portfilio site with nextjs"
date: "July 29, 2022"
excerpt: "I rebuilt my portfolio website with NextJS"
cover_image: "/images/posts/img1.jpg"
---

In this interesting project I built a full stack web app

The application leveraged LastFM and YouTube

The idea of the application that a user could search for a familiar song artist in the search bar and see their top tracks and also display artist with a similar style. If they like what they found they could press the heart button and that track would be saved to thier account.

Some interesting problems I ran into

LastFM in 2019 disabled returning any images when returning any artist data which was really anoying since including images really adds to the visuals of the app. I realized that images are still returned from the artists top album so I just make an adition LastFM api call to get the top ablum and get its image to display on the artists page.

I also found dealing with cross orgin on the browser a massive headache

I chose to use AWS code deploy. this way I can simplyify and don't need to build any docker images and find some place to store them
