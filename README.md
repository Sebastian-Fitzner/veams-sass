## PG-SCSS Kickstarter

PG-SCSS Kickstarter is a simple library to extend the Prototype-Generator (PG).

### Requirements

In general there are no requirements. Just download the package and import the files you need. 

If you want to install it with Bower, here are the requirements: 

- NodeJS
- Bower (npm install -g bower)

### Installation

``` bash
bower install pg-scss --save
```

### How to use

Just import the files you need into your project.

**Example:**

``` scss
@import "pg-reset"; // or "pg-normalize"
@import "pg";
@import "pg-animations"; // optional, because it adds keyframes to your css
```

### Main Files

#### `_pg-reset.scss`

`_pg-global.scss` contains your resets, font-base size and settings: 
- _reset.scss
- _font-base.scss
- _settings.scss

#### `_pg-normalize.scss`

`_pg-normalize.scss` contains your normalize.scss, font-base size and settings: 
- _normalize.scss
- _font-base.scss
- _settings.scss

**Just import one of these files at the beginning of your `scss` file.**

#### `_pg-helpers.scss`

`_pg-helpers.scss` contains helpers and layout mixins.

This file is imported in `_pg.scss`.

#### `_pg.scss`

`_pg.scss` contains all major helpers and mixins.

#### `_pg-animations`

`_pg-animations.scss` contains custom keyframes and animation sets. You have to import this file manually when you want to use it.

### Background

I really like [Bourbon](http://bourbon.io/), so you can see a few similarities, but not all of Bourbon is needed, other things are missing because they are too specific (e.g. spriteicon) or a few things have to be modified. 

That's why I decided to create a simple and lightweight library which contains specific enhancements like animation sets or icon mixins. 
 
In the end my personal favor is to use both libraries.

---------------------------------------------------
### Frontend Methodology

We build pg-scss with the PG Frontend Methodology: 
* http://www.prototype-generator.com/pg-methodology/pg-methodology-overview.html
