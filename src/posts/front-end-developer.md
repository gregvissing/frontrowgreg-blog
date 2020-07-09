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



# A Quick Flexbox Example

By setting an element's `display` property to `flex`, all elements inside of it become flex items that can be laid out in a customized way following design patterns like columns, rows, alignment, and distribution.

Here, we have learned that Flexbox (the Flexible Box Module) is a set of CSS rules for stretching multiple columns or rows across a parent container. Flex is unique amongst CSS properties because you have a main container and the items nested within it. CSS flex has properties that apply to both the element itself, and the items inside of it.

To use flexbox set the `display` property of the parent container to `flex`:

```
.container{
  display:flex;
}
```

### Further research

For more information about a Flexbox overview, see [this MDN entry](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox).



# Axes and Direction with Flexbox

he Flexbox model relies on two axes: the main axis and the cross axis. The main axis is defined by flex-direction, which has four possible values:

* `row`
* `row-reverse`
* `column`
* `column-reverse`

The two row settings will create the main axis horizontally - or `inline` direction. The two column settings will create the main axis vertically - or `block` direction. `block` or `inline` here refer to the CSS display settings which we have covered previously.

The axis determines the flow of your content - you can think of this as being either rows or columns - and they will be determined when you start aligning and justifying content within a flex container.

# Axes and Direction in Action

After setting an element's display to flex, the next thing you will usually want to state is whether the elements inside the container should be laid out in rows or columns. You can do this using the `flex-direction` property, and setting its value to either column or row.

To set the layout of the items in a flex container to either a row or column use the `flex-direction` property like this:

```
.container{
  display:flex;
  flex-direction: row
}
```

Axes and direction are important concepts for understanding flexbox. They are both conceptual and technical which can be tricky. One suggestion is to try and draw your flex containers out first in a notebook. This can be helpful for mapping out axes and direction.

### Further Research

For more on axis and direction with flexbox see the [documentation here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#The_two_axes_of_flexbox).



# Ordering Elements with Flexbox

There are three ways to explicitly set the order in which items will appear in a grid.

1. Moving the HTML code for the elements themselves to reorder
2. Appending `-reverse` to `row` or `column` will reverse the order in the specified row or column
3. Using the `order` property of the individual items inside the grid



# Ordering Elements Demo

`flex-direction:row;` will lay elements out from left to right. But `flex-direction:row-reverse` will flip that order and display elements from right to left.

The row and columns settings for flex elements can be reversed by appending `-reverse` to either property value.

### Summary

The order of flex items is by default determined by the order they appear in your code. You can explicitly change this order using either `-reverse` or with the CSS property `order`.

### Further Research

For more information on ordering flex items, you can see this section of [the flexbox MDN article](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox#Ordering_flex_items).



To align items on the cross axis use `align-items` with the possible values:

* stretch
* flex-start
* flex-end
* center

To justify content on the main axis use `justify-content`, which has the possible values:

* flex-start
* flex-end
* center
* space-around
* space-between
* space-evenly

# Aligning & Justifying in Action

Aligning, justifying, and distributing is what flexbox is all about. Up next, we will focus in on two of the most powerful properties that flex introduces to achieve such easy and elegant layouts.

By setting different values for the properties `align-items` and `justify-content` you can easily create elegant distribution of elements across the available space.

### Further Research

For further research on the topics covered in this section, see this MDN article [Alignment, justification and distribution of free space between items](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#Alignment_justification_and_distribution_of_free_space_between_items).

Reading the documentation will make you smarter and enjoy coding more!

# Grid vs Flexbox

Flexbox is for how content flows, Grid is for how content is placed - i.e. grid works nicely for page layouts, flex works nicely for regions within the grid.

# An Example of Grid vs Flexbox

An excellent way to use flexbox and grid together is by creating the layout of a webpage with grid and then organizing the flow of the content with flex. Let's see an example of this!

To use CSS Grid set the `display` property of the container element to `grid`.

![Flexbox can work within Grid](https://video.udacity-data.com/topher/2019/August/5d4dbc95_gridvflex/gridvflex.png)Flexbox can work within Grid





### Recap

CSS Grid v. Flexbox

* Grid is two dimensional, while Flex is one
* Grid is layout first, while Flexbox is content first
* Flex is for components of an app, Grid is for the app layout itself

CSS Grid does not replace Flexbox. Each can achieve things that the other is not capable of, and in fact, a true master can use Flexbox and CSS Grid together in harmony to create the ultimate webpage layout.

At the highest level CSS Grid excels at creating layouts for a webpage, while Flexbox is a master of content flow for each element that makes up the page layout.

### Further Research

For more information on CSS Grid and Flexbox together see the articles below:

* [Beginner’s Guide to choosing between CSS Grid and Flexbox](https://medium.com/youstart-labs/beginners-guide-to-choose-between-css-grid-and-flexbox-783005dd2412)
* [The Ultimate CSS Battle: Grid vs. Flexbox](https://hackernoon.com/the-ultimate-css-battle-grid-vs-flexbox-d40da0449faf)
* [Does CSS Grid Replace Flexbox?](https://css-tricks.com/css-grid-replace-flexbox/)



# Rows & Columns

After setting the display property of your container div to grid, the next step is to set the rows and columns in your grid which can be done with the CSS properties:

* `grid-template-columns`
* `grid-template-rows`

And to define gutters between rows and columns you can use the property `grid-gap` on the parent container that has the `display` property set to `grid`.



# Rows & Columns in Action

`grid-template-columns` is the property that defines the column layout of your grid - that is how many sections the page should be divided into vertically. The values for this property are the explicit value for each column and the number of columns is defined implicitly by the number of values entered. For example:

```
grid-template-columns: 60px 60px;
```

would create two columns of 60px each. If you had two items inside your grid and didn't set their position explicitly, the first item would be placed in the first column and the second item in the second. `grid-template-rows` follows the same logic, so that:

```
grid-template-columns: 60px 60px;
grid-template-rows: 160px 60px;
```

would create a grid with two columns and two rows.

The layout of a grid is defined using `grid-template-columns` and `grid-template-rows`.

A CSS Grid is made up of rows and columns which are defined using the CSS properties `grid-template-columns` and `grid-template-rows`, which take as values the size of each track.

### Further Research

To explore grid setup deeper, you can check out this cool [grid visualizer and generator](https://cssgrid-generator.netlify.com/).



# Grid Areas

[YouTube video player](https://www.youtube.com/embed/gXRvG4nPLfM?showinfo=0&rel=0&autohide=1&vq=hd720&hl=en-us&cc_load_policy=0&enablejsapi=1&origin=https%3A%2F%2Fclassroom.udacity.com&widgetid=49)

The `grid-area` property specifies a particular area or set of rows and columns that a grid item occupies. It is applied to the grid item itself with CSS. Here is an example:

```
.item{
  grid-area: 1/2/3/3
}
```

Because`grid-area` is shorthand for the properties: `grid-row-start`, `grid-column-start`, `grid-row-end` and `grid-column-end`, the code above places the item from rows 1-3, and columns 2-3.

# Working with Grid Areas

The `grid-area` property defines the space an element takes up in the grid by setting values for the row it starts and ends in, and the column it starts and ends in. In practice it could look like this:

```
 #one { 
    /* row start/column start/ row end/ column end */
    grid-area: 1/2/3/3;
 }
```

In this example the element with the `id`, `one` would start at the first row and the first column, and end at the third row (which is the end of the second row if there is no third row) and the third column.

Let's take a look at this in action.

[YouTube video player](https://www.youtube.com/embed/vYnJd53LQB0?showinfo=0&rel=0&autohide=1&vq=hd720&hl=en-us&cc_load_policy=0&enablejsapi=1&origin=https%3A%2F%2Fclassroom.udacity.com&widgetid=51)

The `grid-area` CSS property is a shorthand property for `grid-row-start`,`grid-column-start`, `grid-row-end`and `grid-column-end`, and it defines the area that an element occupies in a grid.

* [/](<>)>
* [home](<>)>
* workspace



1

```

```

2

```

```

3

```

```

4

```

```

5

```

```

6

```

```

7

```

```

Menu

*full screen*

Expand

### Grid Areas Summary

`grid-template-areas` is the property used to name the rows and columns of a grid and to set its layout. It could look like this:

```

```

The named areas in the grid are then assigned to each element according to where you want them to be displayed in the grid:

```

```

In the example above the element with the class `header` will stretch across the entire first row of columns because we have assigned it the `grid-area` `hd`, and we have defined the area `hd` with the value for `grid-template-areas` in the parent element.