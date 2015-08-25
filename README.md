## Veams-SCSS Utility Library

Veams-SCSS is a simple utility library to extend Veams.

Demo: [Veams-SCSS](http://scss.prototype-generator.com/)

### Requirements

In general there are no requirements. Just download the package and import the files you need. 

If you want to install it with Bower, here are the requirements: 

- NodeJS
- Bower (npm install -g bower)

### Installation

``` bash
bower install veams-scss --save
```

### How to use

Just import the files you need into your project.

**Example:**

``` scss
@import "veams-reset"; // or "veams-normalize"
@import "veams";
@import "veams-animations"; // optional, because it adds keyframes to your css
```

### Main Files

**To start of just import either `_veams-reset` or `_veams-normalize` at the beginning of your `scss` file.**

#### `_veams-reset.scss`

`_veams-reset.scss` contains your resets, font-base size and settings: 
- _reset.scss
- _font-base.scss
- _settings.scss

#### `_veams-normalize.scss`

`_veams-normalize.scss` contains your normalize.scss, font-base size and settings: 
- _normalize.scss
- _font-base.scss
- _settings.scss

#### `_veams-helpers.scss`

`_veams-helpers.scss` contains helpers and layout mixins.

This file is imported in `_pg.scss`.

#### `_veams.scss`

`_veams.scss` contains all major helpers and mixins.

#### `_veams-animations`

`_veams-animations.scss` contains custom keyframes and animation sets. You have to import this file manually when you want to use it.

### Background

I really like [Bourbon](http://bourbon.io/), so you can see a few similarities, but not all of Bourbon is needed, other things are missing because they are too specific or a few things have to be modified. 

That's why I decided to create a simple and lightweight library which contains specific enhancements like animation sets or icon mixins.
 
In the end my personal favor is to use both libraries.