function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "grid-item") {
		x.className += " responsive";
	} else {
		x.className = "grid-item";
	}
}
