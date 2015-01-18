### Keyframes

This mixin outputs keyframes based on predefined variables.

_Example:_

``` scss
/* ---------------------------------------------------
Prefix
--------------------------------------------------- */
$webkit: true;
$moz: true;
$ms: false;
$o: false;

@include keyframes(rotateCubeLeftOut) {
	0% {
	}
	50% {
		@include prefix(transform, translateX(-50%) translateZ(-200px) rotateY(-45deg));
		@include prefix(animation-timing-function, ease-out);
	}
	100% {
		@include prefix(transform, translateX(-100%) rotateY(-90deg));
		opacity: .3;
	}
}
```

_Output:_

``` css
@-webkit-keyframes rotateCubeLeftOut {
  50% {
    -webkit-transform: translateX(-50%) translateZ(-200px) rotateY(-45deg);
    -moz-transform: translateX(-50%) translateZ(-200px) rotateY(-45deg);
    -ms-transform: translateX(-50%) translateZ(-200px) rotateY(-45deg);
    -o-transform: translateX(-50%) translateZ(-200px) rotateY(-45deg);
    transform: translateX(-50%) translateZ(-200px) rotateY(-45deg);
    -webkit-animation-timing-function: ease-out;
    -moz-animation-timing-function: ease-out;
    -ms-animation-timing-function: ease-out;
    -o-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  100% {
    -webkit-transform: translateX(-100%) rotateY(-90deg);
    -moz-transform: translateX(-100%) rotateY(-90deg);
    -ms-transform: translateX(-100%) rotateY(-90deg);
    -o-transform: translateX(-100%) rotateY(-90deg);
    transform: translateX(-100%) rotateY(-90deg);
    opacity: 0.3;
  }
}

@-moz-keyframes rotateCubeLeftOut {
  50% {
    -webkit-transform: translateX(-50%) translateZ(-200px) rotateY(-45deg);
    -moz-transform: translateX(-50%) translateZ(-200px) rotateY(-45deg);
    -ms-transform: translateX(-50%) translateZ(-200px) rotateY(-45deg);
    -o-transform: translateX(-50%) translateZ(-200px) rotateY(-45deg);
    transform: translateX(-50%) translateZ(-200px) rotateY(-45deg);
    -webkit-animation-timing-function: ease-out;
    -moz-animation-timing-function: ease-out;
    -ms-animation-timing-function: ease-out;
    -o-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  100% {
    -webkit-transform: translateX(-100%) rotateY(-90deg);
    -moz-transform: translateX(-100%) rotateY(-90deg);
    -ms-transform: translateX(-100%) rotateY(-90deg);
    -o-transform: translateX(-100%) rotateY(-90deg);
    transform: translateX(-100%) rotateY(-90deg);
    opacity: 0.3;
  }
}

@keyframes rotateCubeLeftOut {
  50% {
    -webkit-transform: translateX(-50%) translateZ(-200px) rotateY(-45deg);
    -moz-transform: translateX(-50%) translateZ(-200px) rotateY(-45deg);
    -ms-transform: translateX(-50%) translateZ(-200px) rotateY(-45deg);
    -o-transform: translateX(-50%) translateZ(-200px) rotateY(-45deg);
    transform: translateX(-50%) translateZ(-200px) rotateY(-45deg);
    -webkit-animation-timing-function: ease-out;
    -moz-animation-timing-function: ease-out;
    -ms-animation-timing-function: ease-out;
    -o-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  100% {
    -webkit-transform: translateX(-100%) rotateY(-90deg);
    -moz-transform: translateX(-100%) rotateY(-90deg);
    -ms-transform: translateX(-100%) rotateY(-90deg);
    -o-transform: translateX(-100%) rotateY(-90deg);
    transform: translateX(-100%) rotateY(-90deg);
    opacity: 0.3;
  }
}
```