
/* This JavaScript makes it possible to switch between
 * dark and light stylesheet.
 */


// Nodes of the different stylesheets
cs_dark = document.getElementById("dark");
cs_light = document.getElementById("light");
button_dark = document.getElementById("button-dark");
button_light = document.getElementById("button-light");



function enableStylesheet (node) {
	//node.rel = 'stylesheet';
	node.disabled = true; 		// Necessary to prevent Bug in Chrome
	node.disabled = false;
	// node.media = "";
}

function disableStylesheet (node) {
	/// node.rel = 'alternate stylesheet';
	node.disabled = true;
	// node.media = "none";
}

function switchToDark() {
	setCookie("colorscheme", "dark", 1);
	button_dark.className = "current";
	button_light.className = "disabled";

	disableStylesheet(cs_light);
	enableStylesheet(cs_dark);
}

function switchToLight() {
	setCookie("colorscheme", "light", 1);
	button_dark.className = "disabled";
	button_light.className = "current";

	disableStylesheet(cs_dark);
	enableStylesheet(cs_light);
}




// Call Function every time the page is loaded
if ( getCookie("colorscheme")=="light" ){
	switchToLight();
} else {
	switchToDark();
}
