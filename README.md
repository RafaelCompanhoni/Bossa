# Bossa CMS

Note on global styles (e.g. layout/_grid.scss)
  * Prefix the global styles with **:global** in order to make it work with PostCSS
  * In the JSX:
    * If the style is component exclusive, then use **styleName**
    * If the style is global, then use **className**


As per **react-css-modules** docs: *There is clear distinction between global CSS and CSS Modules, e.g.*

```html
  <div className='global-css' styleName='local-module'></div>
```
