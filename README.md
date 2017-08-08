# styled-svg-sprite-theme

Theme example which extend liferayThemeTasks by adding a new task to create SVG sprites.

## Steps to create the sprite:

  - Place your SVG files in [/src/images/icons](https://github.com/marcoscv-work/styled-svg-sprite-theme/tree/master/src/images/icons)
  - Run ```gulp build:svgSprite```. Sprite will be created in [/src/images/theme-icons.svg](https://github.com/marcoscv-work/styled-svg-sprite-theme/blob/master/src/images/theme-icons.svg)
  - Use your sprite reference by icon ID, exmaple:
```
  <svg class="lexicon-icon lexicon-icon-close">
    <use xlink:href="${images_folder}/theme-icons.svg#ICON-ID" />
  </svg>
```



For this some dependencies have been added:
https://github.com/marcoscv-work/styled-svg-sprite-theme/blob/master/package.json#L23-L26

New task is declarated here:
https://github.com/marcoscv-work/styled-svg-sprite-theme/blob/master/gulpfile.js#L12-L21

Following original API documentation:
https://github.com/liferay/liferay-theme-tasks#api
