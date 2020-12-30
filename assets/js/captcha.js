/* Porgram: captcha.js
 * Author: K0gito - c0gito@posteo.org
 * Date: 2020-11-01
 *
 * Description:
 * A simple Captcha, which prevents spam and is an alternative to google ReCaptcha.
 *
 * License: GPL 3.0
 */





var n_random = Math.floor((Math.random() * 20) + 1);

function create_captcha()
{
	// Convert random number to string, e.g. 8 --> "08"
	var k = n_random;
	if ( k <= 9){
		k = "0" + k;
	}
	// Save filename of the corresponding image in variable
	var image = "captcha-" + k + ".png";

	var img_style = "max-width:20\%;float:left;transform:none;";

	// Apply different style for darker colorscheme
	if (getCookie("colorscheme")=="dark" ){
		img_style += "filter:invert(1);";
	}

	// Add objects (image and submit-button) to DOM
	var div_object = document.getElementById("captcha");
	var inner = "<div>CAPTCHA: What is the result of: <br/><figure style=\"margin-left:0;\"><img src=\"/assets/images/captcha/" + image + "\" style=\"" + img_style + "\" /></figure><input type=\"text\" id=\"captcha_answer\" placeholder=\"answer\" />   <button type=\"submit\" onsubmit=\"eval_captcha()\">Submit</button></div>";

	div_object.outerHTML = inner;
}


function eval_captcha()
{
	var answer = document.getElementById("captcha_answer").value;

	var normalized_answer = answer

	// Apply filter to answer to avoid errors because of whitespaces, etc.
	normalized_answer = normalized_answer.replace(/\s/g, "");				// Remove Whitespace
	normalized_answer = normalized_answer.replace(/\\/g, "");				// Remove LaTeX-backslashes
	normalized_answer = normalized_answer.replace(/\{|\(/g, "");			// Remove parenthesis
	normalized_answer = normalized_answer.replace(/\}|\)/g, "");
	normalized_answer = normalized_answer.replace(/\*|times|cdot/g, "");	// Change: 5*pi --> 5pi

	// Array with all correct answers
	// Multiple correct answers are possible with RegEx
	var correct_answer = [ 
		/expx|e\^x/g, 
		/2/g,
		/1/g,
		/1/g,
		/3x\^2/g,
		/e\^x/g,
		/cosx/g,
		/frac1x|1:x|1\/x|x\^-1/g,
		/1/g,
		/-1/g,
		/0/g,
		/0/g,
		/0/g,
		/0/g,
		/1/g,
		/a\^2\+2ab\+b\^2|a\^2\+b\^2\+2ab/g,
		/lnxy/g,
		/-2/g,
		/-1/g,
		/pi/g
	];

	var success = normalized_answer.replace(correct_answer[n_random-1], "true") == "true";

	// Alert-box with debug information
	// var debug_info = "n_random = " + n_random + "\nanswer: " + answer + "\nnormalised: " + normalized_answer + "\nsuccess: " + success;
	// alert(debug_info);
	
	return success
}

