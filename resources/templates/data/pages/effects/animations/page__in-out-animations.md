This demo page contains some examples with predefined animation sets for sliders, page transitions, carousels and more.

### Usage

First include the animations scss files you need. 

``` scss
// Import single file
@import "..bower-component/pg-scss/resources/scss/animations/in-out-effects/io-ani--carousel";

// Or just import all animation files
@import "..bower-component/pg-scss/resources/scss/pg-animations";

```

Then use the provided mixins as you wish. 

``` scss
// Use mixins or extends to add the animation
.my-custom-class {
	@include slide-rotateCarouselLeftOut();
}

// You can easily customize the speed and transition method
.another-class {
	@include slide-rotateCarouselLeftOut(300ms, ease-in);
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

