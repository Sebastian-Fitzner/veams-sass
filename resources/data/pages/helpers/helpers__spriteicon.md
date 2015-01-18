### Spriteicon

This mixin can only be used, when the setup for your sprite icons is defined with PG. 

_Simple Example:_

``` scss
.element {
     @include sprite(icon);
}
```

_Output:_

``` css
.element {
     width: 14px;
     height: 24px;
     background-position: -1050px 0;
     -webkit-background-size: 1550px 85px;
     background-size: 1550px 85px;
     background-image: url(../img/sprites/sprites-icons-sprite-medium.png)
}
```