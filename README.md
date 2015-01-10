## pg-scss

Simple mixin and extend library for Sass and the Prototype Generator.

---------------------------------------------------
### Requirements

- NodeJS
- Bower (npm install -g bower)

---------------------------------------------------
### Installation

``` bash
bower i pg-scss --save
```

---------------------------------------------------
### How to use

There are multiple files you can import. 

#### Main Files

**`_pg-reset`**

`_pg-global.scss` is a file which contains your resets, font-base size and settings: 
- _reset.scss
- _font-base.scss
- _settings.scss

**`_pg-normalize`**

`_pg-normalize.scss` is a file which contains your normalize.scss, font-base size and settings: 
- _reset.scss
- _font-base.scss
- _settings.scss

Just import one of these files at the beginning of your `scss` file.

**`_pg`**

`_pg.scss` is a file which contains your mixins and extends. 

Just import `_pg.scss` into your `scss` file and you can start to use mixins and extends.

When you want to customize your imports just take the specific files.

---------------------------------------------------
### Demo (WIP)

In future releases I will provide some examples in this package.

---------------------------------------------------
### Frontend Methodology

We build pg-scss with the PG Frontend Methodology: 
* http://www.prototype-generator.com/pg-methodology/pg-methodology-overview.html
