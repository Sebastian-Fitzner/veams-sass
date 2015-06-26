### Percent Calculation

This mixin converts pixel into percentage based on a context width (or variable).

_Simple Example:_

``` scss
$max-width: 980px;
.element {
     @include cp('padding',10px 0 2px 5px, $max-width);
}
```

_Output:_

``` css
.element {
    padding: 1.02041% 0 0.204082% 0.510204%; // 10px 0 2px 5px
}
```