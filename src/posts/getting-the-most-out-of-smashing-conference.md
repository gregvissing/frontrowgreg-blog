---
layout: layouts/post.njk
title: Getting the most out of Smashing Conference
metaTitle: ""
date: 2020-10-25T06:58:44.865Z
tags:
  - SmashingConf
---
Before I went to my second Smashing Conference, I wanted to make sure that I was better prepared to learn what each speaker was presenting so that I could better implement their information into my work. I loved my experience last year was my first Smashing Conference, in San Francisco, but I felt like I did too much gawking at the work/information from presenters. I feel like we all can relate to this in one way, shape or form.

I felt it was in my best interest to look through each speaker's topic and create a checklist on what I hoped to learn from them as it relates to what myself and my team at the UC Foundation do.

For anyone who has never heard of Smashing Conference, I highly recommend checking out their [videos](https://vimeo.com/channels/smashingconf) they post after each conference they host in San Francisco, Toronto, New York and Germany. They have speakers in many areas of the digital world, including: development, design, user experience (UX), typography, animation and many other topics. I highly recommend checking out their [Vimeo page](https://vimeo.com/channels/smashingconf), where they post speakers from past conferences.

The following list the speaker list and topic each is presenting.

[Smashing Conference Toronto 2019](https://smashingconf.com/toronto-2019/)

* [Collaborative Doc: Day 1](https://smashed.by/moon)
* [Collaborative Doc: Day 2](https://smashed.by/sun)
* [SmashingConf Slack Channel](https://smashed.by/slack)

**WORKSHOP: Chris Gannon**\
Designing Delightful Animations For The Web

**Questions:**

**Q: What did I most get out of this workshop?**

**A:** Animations, using GSAP, can be fun to do and don't require a lot of code to do. Testing and tweaking of animation code is crucial to making the animation believable.

**Q: How can I incorporate into what I do at work?**

**A:** Instead of using CSS to animate everything, GSAP makes things easier and it's easier to scale using SVGs.

**Q: Feelings about Greensock (GSAP) after workshop?**

**A:** Chris Gannon explained everything so clearly and I'm excited to continue learning about GSAP.

**Q: What ideas do I have for projects using GSAP?**

**A:** Icon and logo animation would add a nice touch to any future project.

First off, I have to say what a nice guy Chris Gannon is. I was the first one in his workshop and he immediately came over and introduced himself and welcomed me to his workshop. I had done some basic animation using the Greensock library but nothing to the extent of what Chris taught us. I was intimidated to use it in projects because I wasn't sure exactly what was going on, but Chris' workshop put me at ease with using it.

- - -

**DAY 1**

- - -

**Brad Frost**\
Topic: Let's Build A Design System!

**Question: How do you get the most out of conferences that you attend, whether attending or speaking?**

Answer:

**Notes & key takeaways:**

* Design system def: official language of an org’s visual design (correct if you got that better?)
* Library of reusable components
* Coded, not just design
* Big trick: build through the lens of your software …
* Show where components are linked to other components
* Just say No to Carousels!
* Create a common language (promo, carousel, card, etc) for all stakeholders to share (designers, programmers, etc). Common names determined in Pattern Lab using an “fpo” (for placement only) id for the Divs so it makes a wireframe with names labels.
* Correction: “fpo” class not id
* Include documentation on 3rd party widgets in your design system documentation: how your team uses it, aspects of it that you can control, etc.
* Create consistent api code conventions (Ex: buttonText. heroImage)
* Naming: name it based on reusability. 'Forget password' and 'newsletter block' could be the same component that does the same job. Name it in an abstract way, not based on what's in it. Use a birds eye view with naming.
* More people recognize that code is the source of truth
* Code move so fast that trying to update design to keep with the changes can seem unnecessary (is the expectation then, that designers only build with code in some kind of WYSIWYG?)

- - -

**Sarah Drasner**\
Topic: Let's Write A Vue App From Scratch

**Question: How do you get the most out of conferences that you attend, whether attending or speaking?**

Answer: Well rested, drinking water, take notes

**Notes & key takeaways:**

* Bash profile?!
* Extreme terminal is fun
* Use snippet generators to speed up your workflow
* Use flex grid generator as a shortcut
* Store is the brain of the application (Vuex for Vue, Redux for React)
* State - where we hold all the values
* Can update states through mutations
* Actions - only way to do things asynchronously
* Nuxt version > 2.6 will polyfill \`fetch\` for you. No need to include axios.
* Consider moving asynchronous calls server-side so loading is more snappy
* Be mindful of what API data you want to store in Vuex

- - -

**Phil Hawksworth**\
Topic: Jamstack: Silly Name. Serious Stuff

**Notes & key takeaways:**

* Simplify the technology stack
* JAMstack: Javascript, APIs, pre-rendered Markup, served without web servers
* The goal is to get everything to the CDN as quickly as possible
* Static sites are meant to be portable. You can take them to different deployment services without too much modification
* Webhooks can automate deployment process by triggering a deploy when something happens (eg. a new repo is added to a GitHub account)
* Benefit of loading everything onto a CDN is they’re creating a new instance of the site each time, not mutating old ones. You can go back & see what the site looked like X commits/deploys ago
* Having static sites allow you to easily archive and access the different states regardless of what was or wasn't there because you've taken a snapshot (using something like Netlify)
* Automate as much as you can; set it and forget it!
* Architecture shouldn’t dictate the experience. Static sites can feel just as dynamic as a traditional site rendered from servers.

- - -

**Jenny Shen**\
Topic: Build Bridges, Not Walls--Design For Users Across Cultures

**Question: How do you get the most out of conferences that you attend, whether attending or speaking?**

**Answer:**

**Notes & key takeaways:**

* Inclusive design means understanding other cultures
* Culture
*
* Understanding different cultures means personalizing to their preferences to increase trust, engagement
* * This can mean adding/modifying/removing content details (eg. providing more/less details about a travel itinerary for some users)
* Design patterns can also differ, some cultures may not understand or commonly recognize the hamburger menu 🍔
* * Density could also differ; Chinese culture are familiar with dense UI because they want/need to see the Chinese characters by discovery rather than use the search form; and takes too long to type in Chinese characters
* Researching cultural differences
* * Use Hofstede Insights
  * Secondary
  * * Google Scholar
    * Internations
    * Wikipedia
    * Statista
  * (Pro tip: Research in the local language instead of English or your own language)
  * Primary Research
  * * Ethnography study
    * In-person user interviews
  * Information Interviews
  * * International and local networks
* Be sensitive to what might be taboo in other cultures
* Diversity within the team increases cultural awareness of the team
* Traveling and experiencing the culture is the best way to fully understand different cultures
* Avoid machine translation
* Formatting is also different, as well as local sayings

- - -

**Chris Gannon**\
Topic: Make It Move! Create A Web Animation From Scratch

**Notes & key takeaways:**

* Prefers to use "classes" instead of "ids" to avoid the need to make unique names
* When using Illustrator:
* Export SVGs from Illustrator using asset export, NOT save as. Alt + click exports all layers together as a group
* Make sure you make a rectangle the se size as your artboard to maintain SVG location and dimensions
* Use different easing options to make the animations feel more dynamic & natural
* Creating a loop animation requires 2 elements: one coming in and one going out
* If you have a bunch of elements in a group that have the same fill or stroke attribute, you can remove it from the individual elements & apply it on the group instead
* Greensock (paid animation tools/library -free to play with on codepen)

- - -

**Kristina Podnar**\
Topic: Help! I'm Your Ailing Website. The Digital Policy & Standards Rehab Hour.

**Notes & key takeaways:**

* Have an up-to-date Privacy Policy, GDPR
* Update your copyright
* Policies: the rules of the road. The laws we never break. Often high level statements. Keep things safe and correct legally. Example: we drive on the right side of the road.
* Fewer, these should be high level
* Framework
* Standards: More of the how-tos. eg: speed limits on the road
* Can have more. We all have an interest in them with respect to different aspects of the company
* Roles:
* Digital Policy Steward: analogy - librarian. Person often organizing documentation, making sure others know where to find this information
* Digital Policy Author: often a developer or designer. Actively creating and contributing
* Often make the mistake of creating and document policies and standards, maybe in a beautiful PDF uploaded to an intranet. Typically no one reads it. This is where Steward comes in to disseminate it.
* Make the steward a role, not a person—a person will eventually leave
* You can’t manage what you don’t measure
* How/why do you keep policies alive? Make it part of …
* Localize policies for various cultures
* Having metrics allow you to track how compliant your product is, can be a metric by which indicate the strength and health of your brand experience, how well your role is doing (promotion, work load)
* Often balancing accessibility and budget - example WCAG 2.1AA is much more affordable to implement than 3A

- - -

**Steven Hoober**\
Topic: Authentic Digital Design, By The Numbers

**Notes & key takeaways:**

* We shift our grip on our mobile devices all the time to avoid the “ouch” zone (Well, no. The ouch zone is a myth. Sorry if that wasn’t clear still - SSH).
* On mobile, people don’t start at the top and read down. They often start at the center of the screen then work their way outward.
* When building for mobile (and desktop) what’s the consequences of missing? —example: Gmail Edit button, accidentally hit Send
* Think about tap targets in terms of probability, there will be some misses, and accuracy is highest in the middle of the screen
* Flat, but layers. Information architecture should guide the layering of different components
* Functions:
* * Primary: in the center
  * Secondary: actions along the edge
  * Tertiary: behind menus
* Menus are okay, if you use them right!
* Centering list items is always wrong, sorry :)
* The fold on digital can't be defined--different screen sizes.

- - -

**DAY 2**

- - -

**Mystery Speaker: Seb Lester**\
Topic: Lettering/Calligraphy

**Notes & key takeaways:**

* Passion from youth can be the fire that fuels your career
* “Craftsmanship is a cornerstone of great art and design”
* Neo Sans and Sans Tech was inspired by curiosity, “what typeface would look cool on a spaceship”
* Soho : 3,o00 hours of work
* Working on designs that leave you unrecognized isn’t fun; work should be meaningful to the creator
* Failure is the key to success. Every mistake teaches us something
* Experimenting with 3D illustration taught him that it wasn’t for him and stuck with 2D
* Experimenting with ideas and forms away from corporate work gave way to more creative, expressive designs
* Share your F\*\** dreams and manifest them into reality!!!
* In an article in Salon online magazine, he shared his dream of designing for NASA or a web project - and NASA got back to him!
* Learning more about the project, he included the following
* Requirements
* Functionality
* How I work
* If you don’t ask, you don’t get; no harm in asking for it
* Internet makes the world smaller, anything is possible
* Keep practicing; (image of a tall stack of notebooks filled with calligraphy done over one year)
* Casey Neistat is a big fan and they collaborated on a YouTube video
* You never get a second chance to make a first impression
* * “Hi Seb, I am JJ”
* Is it luck that brings influential people to connect with him? But he’s done the ground work, he’s put in the hours, and he’s doing work he’s passionate about: he’s prepared for these opportunities.
* Believe in yourself

- - -

**Phil Nash**\
Topic: Diving Into Service Workers, Live

**Notes & key takeaways:**

* Using service workers doesn’t require a single page application - you can do it on a straight-forward HTML/CSS website with a little bit of JavaScript
* Make a test fail before you fix it (TDD - test-driven development)
* Service workers are all async, we want them to be unobtrusive and run in the background
* Wait until the page is loaded before registering a service worker
* Use scope when registering a SW if only needed on a certain path or when there are multiple per site
* Use the \`activate\` event listener to clean up anything left behind by the old service worker
* Service workers are smart enough to copy files over to a new worker if the same from a previous worker rather than re-downloading
* Cache first, then fall back to network - is one strategy
* Fetch doesn’t like to reject (even on 404), so you have to check to see if there’s a match
* If there’s no network and an object doesn’t exist in cache, then it will reject
* Never ask for push notifications permissions on page load. Give people context for what reason they’re being asked to give that permission (Very good advice! Very accessible!)
* Best thing about sw: We get control over the network, user experience
* With testing and the right caching methods, we can make a better user experience

- - -

**Jules Forrest**\
Topic: For The Love Of The Grid

**Notes & key takeaways:**

* Creativity isn’t necessarily a good thing. Keep common UI patterns consistent to help your users easily navigate.
* CSS Grid can be used for both big page layouts & smaller elements
* Start with basic HTML to get all your content on the page, styles come afterwards
* The road to a perfect CSS grid is filled with panic moments, but you just have to work through them and bring it all together section by section
* CSS grids allow you to have overlaps rather than Flexbox
* “Let’s just see if going forward fixes it” :)\
  display: contents;
* By default CSS grid will flow elements vertically, while flexbox will flow them horizontally\
  grid-column: 1 / -1; will span all the from left to right without having to know how many columns there are\
  grid-row: 1 / -1; will span all rows
* Experiment, experiment, experiment

- - -

**Dan Rose**\
Topic: Seeing The Pages For The Components

**Notes & key takeaways:**

* As a visual designer, how do you prioritize consistency over making cohesive pages? Consider the differences between cinematic short cuts (Rocky) and long cut (Creed); different but have cohesive story telling
* Building pages with components can result in content that doesn’t have strong visual relationships—just stacked components. Contrast Target’s simple product section page to Stripe page where elements overlap and lead your eye down page
* Components have many benefits, and how do we connect them for better reading flow
* Static tools can be helpful in exploration phases of design (take a screenshot of a page and open it in Photoshop)
* Page Layers - converts web page to layered PSD
* Photoshop preferences can be modified to let you turn on “legacy” shift transform functionality
* The purpose of exploration comps is to explore - don’t get caught up in being pixel perfect
* Consider allowing components to have variants to add interest; when adjacent to hero content it could overlap and be raised. Should components be content aware or change with adjacent components? This might be not bbe good globally as you need to see it in context
* 6 tricks to better flow
* * Angles
  * Share background color between components
  * ”scotch tape”/stitches color between background colors
  * overlap images over 2 components
  * alternate
  * Use shadows to provide a softer separation between content, especially when using cutout boxes to overlap content between sections.

- - -

**Diana Mounter**\
Topic: The Secret Lives Of Color Systems

**Notes & key takeaways:**

* Choose your essence GIF
* People have opinions about colors. Changing color systems is a lot of work!
* A lot of effort to feature a Github dark mode: is this what Diana explores?
* Enough range of colours (variations of different colours) to do what they needed
* * Alias: Created for most frequently used colors .bg-gray-light
  * Class: .bg-gray-0
  * Variables: $gray-000, $gray-100, etc.
  * Value: hex, rgb, hsl color definition
* System props - from Primer Styled System
* * Different categories for props which are grouped into categories like common (e.g. colour and space) and some props are specific (e.g. typography props only for those affecting text)
* Using a Gatsby app, she explores creating a dark mode theme
* Create api for theming, replace color variables in component with theme props, which then reference the color variables
* Avoid using 100% white/black colors, using slightly lighter/darker variations to make it feel more natural, less stark
* * Softer contrast means less eye strain
* When trying to change the colours, she realized that some of the components hard code colour values and doesn’t make it easy for theming
* Naming is important; need to abstract the names to make effective theming - textGray vs primaryLabel
* Names are more purposeful, functional, meaningful rather than descriptive of the colour
* Can still have named colour variables - but adding the abstract layer for use in components (textSecondary: gray\[3])
* * button :
  * * fg: white;
    * bg: black;
* Component organization - Primer is pulled in as npm package. “Components” folder in the Github folder is like a waiting room for components that haven’t yet been added to Primer
* Spectrum- browser plugin to mimic types of color-blindnesss
* Also accessibility insights
* Color is hard.
* Still testing color contrast—example, Github green doesn’t pass yet, still working on it

- - -

**Scott Jehl**\
Topic: Move Fast & Don't Break Things

**Notes & key takeaways:**

* Moving fast and breaking things = naive
* The notion of what it means to “break” websites has changed several times
* We’ve leaned into trying to build consistency even as the number of devices & browsers we’ve had to build for as increased
* Trying to make a website work & look the same across so many different devices isn’t the right approach - instead, we need to cater to the diversity
* Web performance is getting worse for many people.
* The global average mobile device used is underpowered; we can’t assume that everybody is using the latest and greatest smart phone
* Progress enhancement is a good practice that continues to help us build performant experiences regardless of network and expectations that devices and technologies are getting better/faster
* Progress enhancement IS faster
* * Build: Faster in building practices/process
  * User: Serving faster digital experiences
* PageSpeed Insights
* * Makes suggestions on how to improve your website.
* Render blockers (preventing HTML from displaying immediately)