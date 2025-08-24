---
layout: layouts/post.njk
title: Learning to be an Accessibility-focused Front-End Developer
date: 2020-10-25T06:43:12.897Z
tags:
  - Front-End Developer; Web Accessibility
---
Since one of my goals for the current fiscal year is to develop guidelines for being Accessibility/ADA Compliant, I figured this would be a good place to document everything I'm learning to become a more accessibility-focused front-end developer. Accessibility is defined as the availability to every individual regardless of disability, situation, or other factors. To be an expert at Accessibility, a Front-End Developer must consider the following four impairments:

**Visual (2.4%):** Low vision, color blindness, blindness. Often rely on the following to navigate the web:

* * Zooming in on the page or enlarging text size
  * Using a screen reader that speaks content to them
  * Using a Braille reader
  * Using high contrast modes

**Auditory (14%):** Any type of hearing loss, hearing aid usage, and deafness. Often rely on the following to use the web effectively:

* * Transcripts/captions for audio content
  * Media players that display captions with adjustable fonts
  * Options to stop, pause, and adjust volume of audio content
  * Foreground audio clearly distinguishable from background noise

**Cognitive (18.5% - but more likely):** Neurological, behavioral, and mental disorders. Often rely on the following to navigate web content:

* * Clearly structured content
  * Simple navigation and link titles
  * Consistent labeling of forms and buttons
  * Options to suppress blinking and flashing content
  * Text-to-speech software
  * Enlarging the webpage or text

**Physical (16.1%):** Range from arthritis and carpal tunnel, to paralysis and missing limbs Often use special technology to interact with web content:

* * Head pointer, mouth stick, or other typing aids.
  * On-screen keyboard with trackball, joystick, etc.
  * Switches operated by foot, shoulder, etc.
  * Voice recognition, eye tracking, and other hands-free option

In order to know what requirements need to be met for the impairments listed above, I'll be referring to the [Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG21/) (WCAG 2.1). The following are the three levels of conformance:

* **A (lowest):** For Level A conformance (the minimum level of conformance), the Web page satisfies all the Level A Success Criteria, or a conforming alternate version is provided.
* **AA (middle):** For Level AA conformance, the Web page satisfies all the Level A and Level AA Success Criteria, or a Level AA conforming alternate version is provided.
* **AAA (highest):** For Level AAA conformance, the Web page satisfies all the Level A, Level AA and Level AAA Success Criteria, or a Level AAA conforming alternate version is provided.

**Note**: Although conformance can only be achieved at the stated levels, authors are encouraged to report (in their claim) any progress toward meeting success criteria from all levels beyond the achieved level of conformance.

**Note**: It is not recommended that Level AAA conformance be required as a general policy for entire sites because it is not possible to satisfy all Level AAA Success Criteria for some content.

- - -

Since I'm taking the [Front-End Accessibility Workshop outline](https://smashingconf.com/austin-2020/workshops/sara-soueidan) in June '2020, I figured I'd get an idea of what will be taught so that I'm better prepared for the workshop. The following are topics that we'll be learning:

<!--\[if !supportLists]-->· <!--\[endif]-->**HTML semantics**: The foundation of a truly accessible Web. We’ll talk about why semantic HTML is important, show examples of what happens when it is not, and you’ll get to build and test a (tricky and fun) accessible layout using the screen reader on your machine.

* * Semantic HTML is the language you use to communicate your content to these various devices, including but not limited to browsers, reading apps, screen readers, smart watches, and more.
  * When we say HTML is semantic, it means that it is descriptive and provides meaning.
  * By using correct elements, your document content will have conveyable **structure** and **meaning**.
  * Structure is important because it helps interoperability. Interoperability is the ability of different systems, devices, applications or products to connect and communicate in a coordinated way, without effort from the end user. In other words, it allows more devices to interpret and access your content, including devices that will show up in the future.
  * Structure helps applications like reading apps and reader modes (such as Safari’s reader mode) as well as environments like Windows High Contrast Mode understand your content and style it in ways that improve the user experience. This is only possible when the proper HTML semantic elements are used, such as`<article>`,`<h1>`,`<ul>`,`<aside>`,`<navigation>`, among [many others available in HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

**The Web Content Accessibility Guidelines**(WCAG): What they are, why they exist and why they are important.

**The accessibility tree:** and how to use it in your development process to ensure your UI is exposed to screen readers as it should be. This gives you an insight into the kind of information your screen reader user is getting from your markup.

**ARIA**: What, Why and (lots, lots) of How. You’ll learn how ARIA can be used to create accessible custom interactive UI patterns that have no native HTML equivalent (such as tabs, accordions, etc.), modify native element semantics where appropriate to enhance the user experience, and provide an overall more accessible UI for screen reader users. Through practice, you’ll get familiar with some of the most important and most used ARIA attributes.

**Hiding and exposing content:** to screen readers accessibly. Screen reader users don’t have the visual affordances that sighted users do. Depending on the design, it is often necessary to provide content exclusive to screen readers, and/or hide visual content from them to enhance their experience.

**Properly labeling UI elements:** using different techniques, and the pros and cons of each one. Proper labeling is important to let screen reader users know what they are interacting with, which, in turn, sets their expectations as to what that element does and how they can interact with it.

**Keyboard focus management basics:** for interactive UI patterns, and more accessible focus styles.

The follow is what we'll learn accordion to the description:

We’ll walk through some of the most common UI patterns and learn what it takes to make them accessible. Some of the components and patterns we’ll cover include:

**SVG Icons and icon buttons**

**Disclosure widgets**, you’ll be surprised how many interactive elements are just simple disclosure widgets under the hood,

**Navigation patterns**,

* * Mobile navigation,
  * Pagination,
  * Breadcrumbs.

**Form elements**

* * Custom **checkboxes and radio buttons** (accessibly styling native ones, and creating a custom one from scratch),
  * Styling **interactive native HTML elements** (such as file inputs) without breaking their inherent accessibility,
  * **Toggle switches**,
  * **Error messages**,
  * **Tooltips:** and interactive form hints.

Content **accordions**,

If time allows, we’ll discuss **Tabs** and all that goes into building a **tabbed UI pattern** accessibly. This would be the cherry on top of the workshop, as it combines everything you learn in the workshop in one exercise.