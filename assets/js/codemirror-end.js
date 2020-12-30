/* Script from CodeMirror. Do not change. Must be at the end of the document. */
var cppFields = document.querySelectorAll(".cpp-code");
for (var i = 0; i < cppFields.length; i++) {
	CodeMirror.fromTextArea(cppFields[i], {
		lineNumbers: true,
		matchBrackets: true,
		mode: "text/x-c++src",
		theme: "tomorrow-night-eighties"
	});
}

var fortranFields = document.querySelectorAll(".fortran-code");
for (var i = 0; i < fortranFields.length; i++) {
	CodeMirror.fromTextArea(fortranFields[i], {
		lineNumbers: true,
		mode: "text/x-fortran",
		theme: "solarized dark"
	});
}


var octaveFields = document.querySelectorAll(".octave-code");
for (var i = 0; i < octaveFields.length; i++) {
	CodeMirror.fromTextArea(octaveFields[i], {
		mode: {name: "octave",
			version: 2,
			singleLineStringErrors: false},
		lineNumbers: true,
		indentUnit: 4,
		matchBrackets: true,
		// theme: "tomorrow-night-eighties"
		theme: "solarized dark"
	});
}

// try {
var matlabFields = document.querySelectorAll(".matlab-code");
for (var i = 0; i < matlabFields.length; i++) {
	CodeMirror.fromTextArea(matlabFields[i], {
		mode: {name: "octave",
			version: 2,
			singleLineStringErrors: false},
		lineNumbers: true,
		indentUnit: 4,
		matchBrackets: true,
		// theme: "tomorrow-night-eighties"
		theme: "solarized dark"
	});
}
// } catch (err) {}

var pythonFields = document.querySelectorAll(".python-code");
for (var i = 0; i < pythonFields.length; i++) {
	CodeMirror.fromTextArea(pythonFields[i], {
		mode: {name: "python",
			version: 3,
			singleLineStringErrors: false},
		lineNumbers: true,
		indentUnit: 4,
		matchBrackets: true,
		theme: "paraiso-dark"
	});

}

var mac = CodeMirror.keyMap.default == CodeMirror.keyMap.macDefault;
CodeMirror.keyMap.default[(mac ? "Cmd" : "Ctrl") + "-Space"] = "autocomplete";

/* Verfügbare Themes,
 * siehe https://codemirror.net/demo/theme.html
 * --------------------------------------------
 * gruvbox-dark  			(grauer Hintergrund)
 * paraiso-dark  			(violetter Hintergrund)
 * solarized dark 			(blauer Hintergrund)
 * tomorrow-night-eighties 	(schwarzer Hintergrund)
 */

