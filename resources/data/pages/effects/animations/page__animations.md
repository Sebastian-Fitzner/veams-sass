This demo page contains some examples with predefined animations.

### Usage

``` scss
// First include the keyframes you need
@import "keyframes/_kf--carousel";

// Then use mixins or extends to add the animation
.my-custom-class {
	@include slide-rotateCarouselLeftOut();
}
```

### Out-Animations

<div class="animations-wrapper">
{{#each animations-out}}
{{> c-animations }}
{{/each}}
</div>

### In-Animations

<div class="animations-wrapper">
{{#each animations-in}}
{{> c-animations }}
{{/each}}
</div>

### Source

** Animations Source**

{{embed "resources/scss/animations/_animations.scss"}}

** Keyframes Sources**

{{embed "resources/scss/keyframes/*.scss"}}

