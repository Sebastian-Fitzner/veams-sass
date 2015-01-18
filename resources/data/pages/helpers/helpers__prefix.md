### Prefixing

This mixin prefixes your properties based on predefined variables.

_Simple Example:_

``` scss
/* ---------------------------------------------------
Prefix
--------------------------------------------------- */
$webkit: true;
$moz: true;
$ms: true;
$o: true;

.element {
     @include prefix(transform, translateX(-50%) translateZ(-200px) rotateY(-45deg));
}
```

_Output:_

``` css
.element {
    -webkit-transform: translateX(-50%) translateZ(-200px) rotateY(-45deg);
    -moz-transform: translateX(-50%) translateZ(-200px) rotateY(-45deg);
    -ms-transform: translateX(-50%) translateZ(-200px) rotateY(-45deg);
    -o-transform: translateX(-50%) translateZ(-200px) rotateY(-45deg);
    transform: translateX(-50%) translateZ(-200px) rotateY(-45deg);
}
```