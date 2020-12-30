var elements = document.getElementsByClassName("youtube");

for (var i=0; i < elements.length; i++){
	var x = elements[i].getElementsByTagName("a")[0];
	x.innerHTML += "<br/><br/>By clicking to watch this video you accept cookies.";
	x.style.pointerEvents = "none";
}



function loadYoutube() {
	setCookie("embed_youtube", "true", 1);

	for (var i=0; i < elements.length; i++){
		var item = elements[i];

		var video_url = item.getElementsByTagName("a")[0].getAttribute("href");
		var embed_url = video_url.replace(/watch\?v=/g, "embed/");
		embed_url = embed_url.replace(/youtube/g, "youtube-nocookie");

		var ifrm = document.createElement("iframe");
		ifrm.setAttribute("src", embed_url);
		// 		ifrm.style.width = "640px";
		// 		ifrm.style.height = "480px"

		try {
			// Jekyll-setting: parse_block_html: true
			item.replaceChild(ifrm, item.getElementsByTagName("p")[0]);
		} catch (err){
			item.replaceChild(ifrm, item.getElementsByTagName("a")[0]);
		}
	}
}

if ( getCookie("embed_youtube") == "true" ){
	loadYoutube();
}
