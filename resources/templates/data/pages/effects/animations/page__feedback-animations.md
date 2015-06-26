This demo page contains some examples with predefined feedback animations. You can find the original source here: 
http://tympanus.net/Development/ClickEffects/. 

### Usage

First include the feedback animations scss files you need. 

``` scss
// Single file
@import "..bower-component/pg-scss/resources/scss/animations/feedback-effects/fb-ani-circleDelay";

// Or just all animation files
@import "..bower-component/pg-scss/resources/scss/pg-animations";

```

Then use the provided mixins as you wish. 

``` scss
// Use mixins or extends to add the animation
.my-custom-class {
	@include fb-ani-setup(); // standard setup for feedback animations
	@include fb-ani-circleSimple(); // animation effect
}
```

### Feedback-Animations
{{#each animations-fb}}
{{> c-animations-fb }}
{{/each}}

### Customize Feedback-Animations

You can easily customize the animations with parameters. Just pass them to the mixin.

```scss

.animate-fb-borderSimpleEdge {
	@include fb-ani-setup($size: 75px, $radius: 0);
	@include fb-ani-borderSimple();
}
.animate-fb-borderMultipleSmall {
	@include fb-ani-setup($size: 35px);
	@include fb-ani-borderMultiple($shadow: 0 0 0 10px rgba(255, 121, 0, 0.50));

	&::before {
		@include fb-ani-setupPseudo($width: 35px, $height: 35px);
	}
}

.animate-fb-circleSimpleEdge {
	@include fb-ani-setup($size: 70px, $radius: 0);
	@include fb-ani-circleSimple($bgColor: rgba(0, 255, 160, 0.50));
}

.animate-fb-circleDelaySmall {
	@include fb-ani-setup($size: 50px 70px, $radius: 0);
	@include fb-ani-circleDelay($bgColor: rgba(255, 124, 244, 0.50));
}

.animate-fb-circleBigRounded {
	@include fb-ani-setup($size: 50px 70px);
	@include fb-ani-circleBig();
}

.animate-fb-circleRevertRounded {
	@include fb-ani-setup($size: 70px 40px);
	@include fb-ani-circleRevert();
}

.animate-fb-circleShrinkEdge {
	@include fb-ani-setup($size: 50px, $radius: 0);
	@include fb-ani-circleShrink();
}
```

{{#each animations-fb-custom}}
{{> c-animations-fb }}
{{/each}}

