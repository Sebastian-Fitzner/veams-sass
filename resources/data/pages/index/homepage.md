### Requirements

- NodeJS
- Bower (npm install -g bower)

### Installation

``` bash
bower i pg-scss --save
```

### How to use

Just import the needed files into your project.

**Example:**

``` scss
@import "pg-reset";
@import "pg";
@import "pg-animations";
```

### Main Files

#### `_pg-reset`

`_pg-global.scss` is a file which contains your resets, font-base size and settings: 
- _reset.scss
- _font-base.scss
- _settings.scss

#### `_pg-normalize`

`_pg-normalize.scss` is a file which contains your normalize.scss, font-base size and settings: 
- _normalize.scss
- _font-base.scss
- _settings.scss

Just import one of these files at the beginning of your `scss` file.

#### `_pg-helpers`

`_pg-helpers.scss` is a file which contains helpers and layout mixins.

This file is imported in `_pg.scss`.

#### `_pg`

`_pg.scss` is a file which contains all major helpers and mixins.

#### `_pg-animations`

`_pg-animations.scss` is a file which contains custom keyframes and animation sets. You have to import this file manually when you want to use it.

### Demo (WIP)

In future releases I will provide some examples in this package.

### Frontend Methodology

We build pg-scss with the PG Frontend Methodology: 
* http://www.prototype-generator.com/pg-methodology/pg-methodology-overview.html
