# ilw-columns

Links: **[ilw-columns in Builder](https://builder3.toolkit.illinois.edu/component/ilw-columns/index.html)** | 
[Illinois Web Theme](https://webtheme.illinois.edu/) | 
[Toolkit Development](https://github.com/web-illinois/toolkit-management)

## Overview

This uses the [CSS flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) to split the container into multiple sections. On smaller containers, the flexbox will shrink to a single column and items will be stacked. 

This will automatically style the components inside the ilw-columns component to the height of the largest item in the group.

This is meant to take the place of the old il-image-feature and il-video-feature, as well as some of the other issues that people were trying to solve with those components. This also allows people to put a small number of statistics, quotes, or cards in a page without having to worry about stacking. 

### Attributes
* **mode**: the relative size and position of the columns. See below for options.
* **theme**: *blue*, *orange*, *blue-gradient*, *orange-gradient*, *gray*, *white*. Defaults to white. This is only the background of the columns.
* **width:** no width attribute will make it fit the container, *full* will break the container and go full width, and *auto* will break the container, but only for the background
* **gap**: a length / percentage CSS of padding between the columns. Defaults to none. 
* **padding**: standard length / percentage CSS of padding around the grid. Defaults to none. 
* **reverse**: If the columns should reverse, so items on the left will show up on the right. This will have no effect on a smaller container where it stacks. 

### Mode options
* 1x1: all columns are equal length
* 1x2: Last column is twice the length of the rest of the columns
* 2x1: First column is twice the length of the rest of the columns
* 1x3: Last column is three times the length of the rest of the columns
* 3x1: First column is three times the length of the rest of the columns
* 1x2x1: The middle column is twice the length of the rest of the columns. If there's an odd number, then it will default to the left column 

## Code Examples

Three columns with information, all the same size. 

```html
<ilw-columns mode="1x1">
   <ilw-content>
     <h3>Information about undergruadate programs</h3>
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

Use the *reverse* attribute sparingly, as this disrupts the semantic order. Only use this if one of the items is marked decorative and will not be read by a screen reader

## External References
* https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries
* https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
