# astro-katex [![NPM version][npm-image]][npm-url]

> Astro component to auto-render math in element, based on [Katex](https://github.com/KaTeX/KaTeX)

## Install

```sh
$ npm install --save astro-katex
```

## Usage

### Before using katex

Include in your html Katex CSS

```html
<html>
    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css" integrity="sha384-KiWOvVjnN8qwAZbuQyWDIbfCLFhLXNETzBQjA/92pIowpC0d2O3nppDGQVgwd2nB" crossorigin="anonymous">
    </head>
</html>
```

### Inline Latex

```js
---
import { AstroKatex } from 'astro-katex'
---
...
   <AstroKatex>
        \(\Delta = b^2-4ac\)
   </AstroKatex>
...
```

### Block Latex

```js
import { Equation } from 'astro-katex'

<Equation equation={`2x+556=-3x-4`}>

```

### Options for Katex

A number of options are now supported. For a comprehensive list please visit: [here](https://katex.org/docs/supported.html)

## License

MIT

> **Note:** Some *LaTeX* syntax may not be supported by KaTeX itself.

[npm-image]: https://badge.fury.io/js/astro-katex.svg
[npm-url]: https://npmjs.org/package/astro-katex
