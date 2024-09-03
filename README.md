# ilw-columns

Links: **[ilw-columns in Builder](https://builder3.toolkit.illinois.edu/component/ilw-columns/index.html)** | 
[Illinois Web Theme](https://webtheme.illinois.edu/) | 
[Toolkit Development](https://github.com/web-illinois/toolkit-management)

## Overview

This uses the [CSS flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) to split the container into multiple sections. On smaller containers (700px or less), the flexbox will shrink to a single column and items will be stacked. 

This will automatically style the components inside the ilw-columns component to the height of the largest item in the group.

This is meant to take the place of the old il-image-feature and il-video-feature, as well as some of the other issues that people were trying to solve with those components. This also allows people to put a small number of statistics, quotes, or cards in a page without having to worry about stacking. 

### Attributes
* **mode**: the relative size and position of the columns. See below for options.
* **theme**: `blue`, `orange`, `blue-gradient`, `orange-gradient`, `gray`, `white`. Defaults to white. This is only the background of the columns.
* **width:** no width attribute will make it fit the container, `full` will break the container and go full width, `auto` will break the container, but only for the background, and `page` will contain the contents but allow the background to go full width. 
* **gap**: a length / percentage CSS of padding between the columns. Defaults to none. 
* **padding**: standard length / percentage CSS of padding around the grid. Defaults to `0 0 40px 0` to handle padding. 
* **reverse**: If the columns should reverse, so items on the left will show up on the right. This will have no effect on a smaller container where it stacks. 

### Mode options
* **1x1**: all columns are equal length. This is the default option
* **1x2**: Last column is twice the length of the rest of the columns
* **2x1**: First column is twice the length of the rest of the columns
* **1x3**: Last column is three times the length of the rest of the columns
* **3x1**: First column is three times the length of the rest of the columns
* **1x2x1**: The middle columns are twice the length of the rest of the columns 

## Code Examples

Three columns with information, all the same size. 

```html
<ilw-columns mode="1x1">
   <ilw-content>
     <h3>Information about undergraduate programs</h3>
     <p>.....</p>
     <p>.....</p>
   </ilw-content>
   <ilw-content>
     <h3>Information about graduate programs</h3>
     <p>.....</p>
     <p>.....</p>
   </ilw-content>
   <ilw-content>
     <h3>Information about online programs</h3>
     <p>.....</p>
     <p>.....</p>
   </ilw-content>
</ilw-columns>
```

An image to the left that takes a fourth of the width

```html
<ilw-columns mode="1x3">
   <img src="photo.png" alt="" class="ilw-image-cover">
   <ilw-content>
     <h3>Information about graduate programs</h3>
     <p>.....</p>
     <p>.....</p>
   </il-content>
</ilw-columns>
```

## Accessibility Notes and Use

Use the `reverse` attribute sparingly, as this disrupts the semantic order. Only use this if one of the items is marked decorative and will not be read by a screen reader.

These columns will shrink down until it gets to a certain container size. If you have a lot of columns, be aware that these may shrink to an unacceptable size or do weird results (like you have one word per line). 

This is using the manual slot assignment process using the MutationObserver interface to watch for changes in the DOM. 

## External References
* https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries
* https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
* https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow#slotassignment
* https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe 
