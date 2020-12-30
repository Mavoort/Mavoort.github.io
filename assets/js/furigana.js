// This scripts adds Furigana for words in <div class="japanese">
// Syntax: [水](みず)

window.onload = add_furigana;

function add_furigana(){
	x = document.getElementsByClassName("japanese");
	n = x.length;

	if ( n > 0){
		for (var i=0; i <= n; i++){
			text = x[i].innerHTML;
			text = text.replace(/(\[.*\])(\(.*\))/, replacer);
			text = text.replace(/\[|\(|\]|\)/g, "");
			x[i].innerHTML = text;
		}
	}
}


function replacer(match, p1, p2, offset, string){
	furigana_text = "<ruby><rb>" + p1 + "</rb><rt>" + p2 + "</rt></ruby>";
	return furigana_text;
}
