---
layout: layouts/post.njk
title: Building High Conversion Forms
date: 2020-07-09T18:10:39.038Z
tags:
  - forms
  - mobile
  - touch support
---
## Lesson 1: Efficient Inputs Part 1

### [Here's Ido's Autocomplete Example](http://greenido.github.io/Product-Site-101/form-cc-example-m3.html)

#### Check out [more input types](https://goo.gl/i0vY1M) and the [full deck](http://goo.gl/K1w1K7) of HTML5 form best practices.

### [Input types on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-type)

### [Datalists on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist)

### [Ido's Geolocation Example](http://codepen.io/greenido/pen/qOEbGp) and the [HTML5Rocks Geolocation Example](http://www.html5rocks.com/en/tutorials/geolocation/trip_meter/)

\-----

## **Lesson 2: Efficient Inputs Part 2**

### [Labels on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)

Follow us online!

[@cwpittman](https://twitter.com/cwpittman)\
[@greenido](https://twitter.com/greenido)\
[+greenido](https://plus.google.com/+GreenIdo/posts) *Cameron says: In this quiz, you're going to use two methods to attach an input to a label. Whether or not to wrap an input in a label is a matter of personal preference. However, not all browsers treat inputs wrapped with labels the same way, which is why we want you to practice with the* `for` *attribute for the first part of the question.*

### [Placeholders on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-placeholder)

### [Ido's calendar demo](http://codepen.io/greenido/pen/xwGEWO)

### [Styling Calendars](http://tjvantoll.com/2013/04/15/list-of-pseudo-elements-to-style-form-controls/#input_date)

### [Input types on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-type)

### [Ido's calendar demo](http://codepen.io/greenido/pen/xwGEWO)

### [Styling Calendars](http://tjvantoll.com/2013/04/15/list-of-pseudo-elements-to-style-form-controls/#input_date)



### Learn more about [autofill and the autocomplete attribute](https://developers.google.com/web/updates/2015/06/checkout-faster-with-autofill?hl=en).

### [Autocomplete attributes on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autocomplete)

### [Autofocus Input Attribute on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autofocus)

Don't forget to make your inputs required with the `required` attribute! Add `required` to any HTML5 input to let users know that the input must be filled out in order to finish the form. See [MDN for more details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-required).

### Numeric Inputs

Numbers are even easier to validate than text. For number input types, the HTML5 spec gives you [attributes](http://www.wufoo.com/html5/types/7-number.html) like `min`, `max`, and `step`. Each of these do pretty much what you would expect.

`min` and `max` set the minimum and maximum values that the arrows in the input will allow. `step` sets the increments for between possible values. There’s also `value`, which sets the starting value of the input.

Of course, you’ll probably notice that users can still type whatever number they want into numeric inputs. If you want to really limit possible values, consider a [range](http://www.wufoo.com/html5/types/8-range.html) instead.

### Range Inputs

The range input type creates a slider on the page. It also has `min`, `max`, `step` and `value` attributes. If you want to display the current `value` of the range when it changes, you’ll need to use some JavaScript to pull the value from the range. Here's an example:

```
// grab <input id="range-example" type="range" min="0" max="5" step="1"> from the page
var rangeInput = document.querySelector('input#range-example');

// grab <p id="output"></p> to display the output
var output = document.querySelector('p#output');

// update the display when the range changes
rangeInput.onchange = function() {
    output.innerHTML = this.value;
};
```

### [Inputs on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

### [Number Inputs on Wufoo](http://www.wufoo.com/html5/types/7-number.html)

Want some help writing regular expressions for the letter grade input? Try testing with [RegExr](http://www.regexr.com/).

Note: The code provided for the pattern match in the answer video shows a match for `A\+`, which should be `A\-`(We want to reject A+ as it is an invalid grade)

### [setCustomValidity on MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/setCustomValidity)

Try out the [puppy validator](http://udacity.github.io/course-web-forms/lesson2/setCustomValidity)!

### [setCustomValidity on MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/setCustomValidity)

Steps to complete this quiz:

1) Install the [Udacity Feedback Chrome extension](https://chrome.google.com/webstore/detail/udacity-front-end-feedbac/melpgahbngpgnbhhccnopmlmpbmdaeoi).

2) Download the site from the Downloadables section and run it over `localhost`.

3) When you're ready to get some feedback, turn on the Udacity Feedback extension and check off the box next to "Allow feedback on this domain." You'll get feedback from the Chrome extension every time you refresh the page.

4) When all of the tests pass, a completion code will appear in the Chrome Extension. Copy and paste the code into the box in the quiz to continue.

*You can create your own quizzes with the Udacity Feedback extension! Check out the [walkthrough](http://labs.udacity.com/udacity-feedback-extension/) to get started*

*Cameron says:* *I said "...less than 16 characters," but technically [I should have said](http://www.quickanddirtytips.com/education/grammar/less-versus-fewer) "...fewer than 16 characters." The English language is weird sometimes.*

\---

## **Lesson 3:**

### [Form Principles Deck](http://goo.gl/K1w1K7)

### [Here's the form that needs improvement](http://udacity.github.io/course-web-forms/lesson3/bigForm1/start)!

### [The Geolocation API on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation)



See the Downloadables section for a copy of the site. You can use it as a starting point, or you can start from scratch. It's up to you!

Follow us online!

[@cwpittman](https://twitter.com/cwpittman)\
[@greenido](https://twitter.com/greenido)\
[+greenido](https://plus.google.com/+GreenIdo/posts)

### Here are live versions of the [Polymer checkout](https://udacity.github.io/course-web-forms/lesson3/bigForm1/polymer/dest/) and the [native checkout](http://udacity.github.io/course-web-forms/lesson3/bigForm1/solution/).

Check the Downloadables section for copies of the Polymer checkout and native checkout **source code**. To install and run the Polymer checkout form:

1. Unzip lesson3-quizBigForm1-polymer.zip and `cd` into it
2. Install [npm](https://www.npmjs.com/), [bower](http://bower.io/) and [gulp](http://gulpjs.com/) if you haven't already
3. Run `npm install`
4. Run `bower install`
5. Host over `localhost` and open `dest/index.html` in your browser
6. As you make your edits to the files in `src/`, use `gulp watch` to watch for changes and rebuild to `dest/`.

\----

## **Lesson 4:**

Want some practice building sites for mobile? Check out [Responsive Web Design Fundamentals](https://www.udacity.com/course/responsive-web-design-fundamentals--ud893).

[Swipe Demo](https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ui/input/touch/touch-demo-1.html)

[Touch, Mouse, & Pointer Event Demo](http://codepen.io/greenido/pen/RWBjKz?editor=001)

### [Active states on iOS](https://developers.google.com/web/fundamentals/design-and-ui/input/touch/active-states?hl=en#enabling-active-state-support-on-ios)

Quick note: some mobile browsers will select text if the user long presses on the screen. This is super useful for copying and pasting, but can be frustrating if a user didn’t intend to select any text.

You can prevent this from happening using the user-select CSS property seen here:

```
-moz-user-select: none;
-webkit-user-select: none;
-ms-user-select: none;
user-select: none;
```

Keep this in mind as you start designing touch inputs!



### Here's the link to the [demo site](http://udacity.github.io/course-web-forms/lesson4/quizSimpleTouch/solution)!

Don't forget to try it on mobile! Use: <http://goo.gl/gl63G7>

There's a link to the source code in the Downloadables section.

### [Touch Events on HTML5Rocks](http://www.html5rocks.com/en/mobile/touch/)

### [Event Listeners on MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

See the Downloadables section for the source code.

### Touch Event Example

Touch, mouse and Pointer Events (A [Microsoft specific](<https://msdn.microsoft.com/en-us/library/dn433244(v=vs.85>).aspx) combination of mouse and touch events) are the building blocks for adding new gestures into your application.

I want to show you a real world example of a useful event listener.

```
// Check if pointer events are supported.
if (window.PointerEventSupport) {
  // Add Pointer Event Listener
  swipeFrontElement.addEventListener(pointerDownName, this.handleGestureStart, true);
} else {
  // Add Touch Listener
  swipeFrontElement.addEventListener('touchstart', this.handleGestureStart, true);
  // Add Mouse Listener
  swipeFrontElement.addEventListener('mousedown', this.handleGestureStart, true);
}
```

This code first checks to see if Pointer Events are supported by testing for `window.PointerEventSupport`. If Pointer Events aren’t supported, we add listeners for touch and mouse events instead. If Pointer Events are supported, we use variables for event names, which use the prefixed or unprefixed versions depending on the existence of `window.PointerEvent`.

Notice that event listeners are added to a specific element, `swipeFrontElement`, for a specific type of event.



When users touch the screen of a website, touch events are fired. Let me show you what information you receive with touch events.

### Touch Events

Use the `event` object to tailor actions to events. Each touch `event` includes three lists of touches.

* `touches`: a list of all fingers currently on the screen.
* `targetTouches`: a list of fingers on the current DOM element.
* `changedTouches`: a list of fingers involved in the current event. For example, in a touchend event, this will be the finger that was removed.

These lists consist of objects that contain touch information:

* `identifier`: a number that uniquely identifies the current finger in the touch session.
* `target`: the DOM element that was the target of the action.
* `client`/`page`/`screen` coordinates: where on the screen the action happened.
* `radius` coordinates and `rotationAngle`: describe the ellipse that approximates finger shape.

In the next quiz, you'll be challenged to create an element that responds to touches naturally!

### [Touch Events on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)



### [Event Listeners on MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

### [Touch Events on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)

Unfortunately, this quiz is not graded because it's tricky to reliably simulate touch and mouse events. You'll know you've completed this quiz when the toggle sticks to your finger/mouse and slides nicely. You can either work in the classroom here or you can find a copy of the code to download and run in the Downloadables section.



## Meet-Up Event Planner

Prepare for this project with [Building High Conversation Web Forms](https://www.udacity.com/course/building-high-conversion-web-forms--ud890) and [Web Tooling and Automation](https://www.udacity.com/course/web-tooling-automation--ud892).

### Requirements

*You do not need to create a functioning back-end or save user information. Only the form components themselves and their performance will be evaluated.*

1) You do not need to create a real back-end or save user information, but the app must provide a form for users to create an account. Account creation should include, but is not limited to:

* Name
* Email address
* Secure password (with character and length requirements)
* Optional public biographical information (such as employer, job title, birthday, etc)

2) The app should allow users to create a new event. Each event should, at a minimum, allow a user to set:

* Name of the event
* Type of the event (birthday party, conference talk, wedding, etc.)
* Event host (could be an individual’s name or an organization)
* Event start date and time
* Event end date and time
* Guest list
* Location
* Optional message to the guests with additional information about the event

3) The app should display events that have been created.

### Tips, Tricks, and Advice

* You may find that you want to save user information in some way, as opposed to just hard-coding in a few events to meet the “display events” requirement. You could accomplish this by using [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Storage) or by using a “back-end as a service” platform like [Firebase](https://www.firebase.com/).
* You can use any framework you’d like - or don’t! It’s up to you.
* Need some help testing your site with a screen reader? Check out [this video](https://classroom.udacity.com/courses/ud882/lessons/3574748851/concepts/37757186550923) from our Responsive Images course for some tips.
* Use [this checklist](http://labs.udacity.com/images/web-forms-checklist.pdf) as a reference to help you throughout this project.

### Evaluation

Your project will be evaluated by a Udacity reviewer according to the rubric below. Be sure to review it thoroughly before you submit. All criteria must "meet specifications" in order to pass.

![Rubric Part 1](http://i.imgur.com/lVTN4Aw.png) ![Rubric Part 2](http://i.imgur.com/ZeLdErg.png)