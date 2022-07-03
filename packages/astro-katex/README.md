# astro-katex [![NPM version][npm-image]][npm-url]

<div align="center">

![astro-katex](https://raw.githubusercontent.com/victor0x16/astro-katex/full-integration/packages/astro-katex/images/katex.jpeg)

</div>

> Astro component to auto-render math in element, based on [Katex](https://github.com/KaTeX/KaTeX)

> Math in astro markdown is not working with astro > 1.0.0-beta.31. [#issue-3714](https://github.com/withastro/astro/issues/3714)


## Install | <a href="https://codesandbox.io/s/cranky-moon-wfg8uo" style="color: #ff7f33;">Try it now</a> | <a href="https://victor0x16.github.io/demo-astro-katex/" style="color: #ff7f33;">Blog Demo</a>

```sh
$ npm install astro-katex katex
```

## Usage

### Before using astro-katex

#### Add a new integration
```js
import katex from 'astro-katex';

export default defineConfig({
  integrations: [ katex() ],
});
```
## Math in element

```js
---
import AstroKatex from 'astro-katex/AstroKatex.astro'
---
<AstroKatex is:raw>
  Look again at \(\textbf{Figure A} \) and \(\textbf{Figure B}\). Notice that in both graphs, as  \(x\)  approaches \(7\), the output values approach \(8\). This means
  \[
    \lim_{x \to 7} f(x) = \lim_{x \to 7} g(x)
  \]
</AstroKatex>
```
### Output:
 Look again at $\textbf{Figure A}$ and $\textbf{Figure B}$. Notice that in both graphs, as  $x$  approaches $7$, the output values approach $8$. This means $$\lim_{x \to 7} f(x) = \lim_{x \to 7} g(x)$$

## Using just an Expression

```js
---
import Expr from 'astro-katex/OnlyExpression.astro'
---

A simple mathematical expression:
<Expr>
    \sqrt{3x-1}+(1+x)^2
</Expr>
```
### Output:
**A simple mathematical expression:**
$\sqrt{3x-1}+(1+x)^2$

### Options for Katex

A number of options are now supported. For a comprehensive list please visit: [here](https://katex.org/docs/supported.html)

## License

MIT

> **Note:** Some $\LaTeX$ syntax may not be supported by KaTeX itself.

[npm-image]: https://badge.fury.io/js/astro-katex.svg
[npm-url]: https://npmjs.org/package/astro-katex