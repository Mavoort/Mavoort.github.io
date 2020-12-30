#/bin/bash

echo "MathJax.Hub.Config({
	TeX: {
		Macros: {

// Befehle mit Argument
abs: ['\\left\\lvert #1 \\right\\rvert', 1],	// Betrag
norm: ['\\left\\lVert #1 \\right\\rVert', 1],	// Norm
" > mathjax-head.txt

cat mathjax-head.txt macros.sty > macros.js
rm -rf mathjax-head.txt
sed -E -i '/\}\[1\]\{/d' macros.js

sed -E -i 's/^\\(re)?newcommand\{\\//g' macros.js
sed -E -i 's/\}\{/: "/g' macros.js
sed -E -i 's/\}\s*(%.*)?\s*$/",/g' macros.js
sed -E -i 's/\\/\\\\/g' macros.js
sed -E -i 's/%/\/\//g' macros.js

echo '
 ddt: "\\frac{\\mathrm{d}}{\\mathrm{d}t}",
 ddx: "\\frac{\\mathrm{d}}{\\mathrm{d}x}",
		}
	}
});' >> macros.js
