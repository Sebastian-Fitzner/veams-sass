### Breakpoint

General Mixin to add media query support. 

**Usage:**

1. Define your project settings in `global/_vars.scss`:
	- change/add the breakpoints you need for your project
	- change the variable `$use-min-width` so that it fits your needs (true or false)

2. Add a specific breakpoint with:
``` scss
@include breakpoint($my-breakpoint-variable){};
```

3. When you need `min-width` and `max-width` you just have to provide a second parameter:
``` scss
@include breakpoint($my-breakpoint-variable-1, $my-breakpoint-variable-2){};
```

_Simple Example:_

``` scss
$use-min-width: true;
@include breakpoint(400px){
	color: red;
};
```

_Output:_

``` css
@media only screen and (min-width: 400px) {
	 color: red;
}
```