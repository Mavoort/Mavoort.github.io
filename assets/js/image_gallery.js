// Dieses Skript stammt von:
// https://www.w3schools.com/howto/howto_css_modal_images.asp

var modal = document.getElementById('myModal');

var images = document.getElementsByTagName("img");

var modalImg = document.getElementById("img01");


// Das funktioniert noch nicht, da ich keine IDs verwende.
var captionText = document.getElementById("caption");


for (var i=0; i < images.length; i++){
	img = images[i];

	img.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
	}
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
	modal.style.display = "none";
}
