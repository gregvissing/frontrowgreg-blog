---
layout: layouts/post.njk
title: Front-End Developer
date: 2020-07-09T18:37:42.643Z
tags:
  - semantic html
  - forms
  - input types
---
## The Head

So far you’ve done two things to set up the file properly:

1. Declared to the browser that your code is HTML with `<!DOCTYPE html>`
2. Added the HTML element (`<html>`) that will contain the rest of your code.

Remember the `<body>` tag? The `<head>` element is part of this HTML metaphor. It goes above our `<body>` element.

### Metadata

The `<head>` element contains the metadata for a web page.

Metadata is information about the page that isn’t displayed directly on the web page.

Unlike the information inside of the `<body>` tag, the metadata in the head is information about the page itself.

### Title

A browser’s tab displays the title specified in the `<title`> tag. The `<title>` tag is always inside of the `<head>`.

```
<!DOCTYPE html>
<html>
  <head>
    <title>My Coding Journal</title>
  </head>
</html>
```

If we were to open a file containing the HTML code in the example above, the browser would display the words “My Coding Journal” in the title bar (or in the tab’s title).

![An example of titles](https://video.udacity-data.com/topher/2019/August/5d49f8ba_title-tag/title-tag.png)An example of titles

## Semantic Elements

Structure elements allow you to organize the main parts of your page. They usually contain other HTML elements.

Here’s what a typical webpage could include:

* `<header>` as the first element of the page, that can include the logo and the tagline.
* `<nav>` as a list of links that go to the different pages of the website.
* `<h1>` as the title of the page.
* `<article>` as the main content of the page, like a blog post.
* `<footer>` as the last element of the page, located at the bottom.![An example of the structure of semantic elements](https://video.udacity-data.com/topher/2019/August/5d49f8f2_html-sectioning-elements/html-sectioning-elements.png)

An example of the structure of semantic elements

### Input Types, Select and Textarea

Text, checkbox and radio button forms are specified by an `input type`.

```
<!-- A text input -->
<input type="text" />
<!-- A checkbox -->
<input type="checkbox" />
<!-- A radio button -->
<input type="radio" />
```

![An example of a ‘radio’ input type](https://video.udacity-data.com/topher/2019/August/5d49f977_input-types/input-types.png)

An example of a ‘radio’ input type

Separately, a dropdown menu can be created using `select`.

```
<label for="color-select">Choose a color:</label>

<select id="color-select">
  <option value="">--Please choose an option--</option>
  <option value="blue">Blue</option>
  <option value="red">Red</option>
  <option value="green">Green</option>
  <option value="yellow">Yellow</option>
  <option value="orange">Orange</option>
  <option value="pink">Pink</option>
</select>
```

- - -

Choose a color:

- - -

Last is `textarea`, which creates a more free-form text field for the user to enter information.

```
<label for="learn">What do you hope to learn today?</label>

<textarea id="learn" name="learn" rows="5" cols="30">
I hope to learn about...
</textarea>
```

- - -

## **CSS**

### Pseudo-classes

A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). For example, `:hover` can be used to change a button's color when the user's pointer hovers over it.

```
selector:pseudo-class {
  property: value;
}
```

For more information on pseudo-classes, [see the Mozilla Dev Docs here.](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

### Attributes

Attribute selectors are a special kind of selector that will match elements based on their attributes and attribute values.

Their generic syntax consists of square brackets (`[]`) containing an attribute name followed by an optional condition to match against the value of the attribute.

Attribute selectors can be divided into two categories depending on the way they match attribute values:

1. Presence and value attribute selectors and
2. Substring value attribute selectors.

These attribute selectors try to match an exact attribute value:

* `[attr]` This selector will select all elements with the attribute attr, whatever its value.
* `[attr=val]` This selector will select all elements with the attribute attr, but only if its value is val.
* `[attr~=val]` This selector will select all elements with the attribute attr, but only if val is one of a space-separated list of words contained in attr's value. (This one is a bit more complex, so checking some [documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) might be helpful.)

### Multiple Selectors

What if we want to add some styles to all our headings? We don’t want to have redundant rules, since that would eventually become a nightmare to maintain and is not scalable at all.

```
h1 {
  font-family: "Helvetica", "Arial", sans-serif;
}

h2 {
  font-family: "Helvetica", "Arial", sans-serif;
}

h3 {
  font-family: "Helvetica", "Arial", sans-serif;
}

h4 {
  font-family: "Helvetica", "Arial", sans-serif;
}

h5 {
  font-family: "Helvetica", "Arial", sans-serif;
}

h6 {
  font-family: "Helvetica", "Arial", sans-serif;
}
```

Instead, we can select multiple HTML elements in the same CSS rule by separating them with commas. Add this to our styles.css file:

```
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Helvetica", "Arial", sans-serif;
}
```

This defines the font to use for all of our headings with a single rule. That’s great, because if we ever want to change it, we only have to do so in one place. Copying and pasting code is usually a bad idea for web developers, and multiple selectors can help reduce that kind of behavior quite a bit.

# Linking CSS

### Inline

Although CSS is a different language than HTML, it’s possible to write CSS code directly within HTML code using inline styles.

To style an HTML element, you can add the style attribute directly to the opening tag. After you add the attribute, you can set it equal to the CSS style(s) you’d like applied to that element.

```
<p style="color: red;">I'm learning to code!</p>
```

### External Stylesheets

You can use the `<link>` element to link HTML and CSS files together. The `<link>` element must be placed within the head of the HTML file. It is a self-closing tag and requires the following three attributes:

* `href` — like the anchor element, the value of this attribute must be the address, or path, to the CSS file.
* `type` — this attribute describes the type of document that you are linking to (in this case, a CSS file). The value of this attribute should be set to text/css.
* `rel` — this attribute describes the relationship between the HTML file and the CSS file.

When linking an HTML file and a CSS file together, the `<link>` element will look like the following:

```
<link href="https://udacity.com/style.css" type="text/css" rel="stylesheet" />
```

Using a relative path is very common way of linking a stylesheet.

```
<link rel="stylesheet" href="styles.css" />
```

So you’ve just learned that using the `<link>` element allows you to link HTML and CSS files together. What about linking a CSS file to another CSS file? You can have all your styles living inside one main CSS file, or you can use `@import` to break your styles (one for layout, one for images, one for blog cards, etc.) into a number of smaller, focused files. This makes it a lot easier to manage the styles they contain and your code is more scalable and modular!

```
// at the top of your main CSS file

@import “./layout”;
@import “./images”;
@import “./blog-cards”;
```



# Specificity

Because elements can have multiple CSS selectors, there is a hierarchy for the weight given to each type of selector. Here is the logical order of selectors from least to most weight assigned:

* Type selectors (e.g., h1) and pseudo-elements (e.g., `::before`).
* Class selectors (e.g., `.example)`, attributes selectors (e.g., `[type="radio"]`) and pseudo-classes (e.g., `:hover`).
* ID selectors (e.g., `#example`).

This concept can help you understand why your styles aren't being applied in the way you expect.

There is a way to escape or override the specificity evaluation of elements using the `!important` keyword after an individual CSS property rule, but a couple important reminders:

Always look for a way to use specificity before even considering `!important`. Never use `!important` on site-wide CSS.



# The Box Model

Just like CSS, HTML and JS are the three basic building blocks of the web, the box model is one of the basic building blocks for CSS.

Now, let’s see what the mysterious box model is all about.

### Content

First, we have the content of the box itself, which has a height and width.

![The content box has a height and width.](https://video.udacity-data.com/topher/2019/August/5d4b384e_css-content/css-content.png)

The content box has a height and width.

### Padding

Next is padding - the space between the box’s content and its border. Note that padding is *in addition* to the content’s height and width, and is considered to be inside the element itself.

![Padding extends outside the content box.](https://video.udacity-data.com/topher/2019/August/5d4b38ee_css-padding/css-padding.png)

Padding extends outside the content box.

### Border

Continuing our journey outward from the center of the CSS box model, we have the border: a line drawn around the content and padding of an element. The border property requires a new syntax that we’ve never seen before. First, we define the stroke width of the border, then its style, followed by its color.

This tells the browser to draw a thin gray line around our heading. Notice how the border bumps right up next to the padding with no space in between. And, if you shrink your browser enough for the heading to be split over two lines, both the padding and the border will still be there.

Drawing a border around our entire heading makes it look a little 1990s, so how about we limit it to the bottom of the heading? Like padding, there are `-top`, `-bottom`, `-left`, and `-right` variants for the border property:

`border-bottom: 1px solid #5D6063;`

Borders are common design elements, but they’re also invaluable for debugging. When you’re not sure how a box is being rendered, add a border: 1px solid red; declaration to it. This will clearly show the box’s padding, margin, and overall dimensions with just a single line of CSS. After you figured out why your stuff is broken, simply delete the rule.

If you've ever used a table in a word processor or spreadsheet, then you should be familiar with borders. With CSS, you can add a border to just about anything.

![The border is the line between the box’s padding and margin.](https://video.udacity-data.com/topher/2019/August/5d4b3919_css-border/css-border.png)

The border is the line between the box’s padding and margin.

### Margin

Last is the margin, which surrounds the rest of the box. It is the space between the box and surrounding boxes.

![The margin surrounds the rest of the box, and separates it from other boxes.](https://video.udacity-data.com/topher/2019/August/5d4b3937_css-margin/css-margin.png)

The margin surrounds the rest of the box, and separates it from other boxes.

## Additional Topics on CSS

For more information on CSS background images, see the [MDN documentation here](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image).

For more information on CSS in general, you can see the excellent website [CSS-Tricks](https://css-tricks.com/).