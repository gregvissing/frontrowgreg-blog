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