let slideCasesIndex = 1;
showCasesSlides(slideCasesIndex);

// Previous / Next controls
function plusCasesSlides(n) {
	showCasesSlides(slideCasesIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	showCasesSlides(slideCasesIndex = n);
}

function showCasesSlides(n) {
	let text = document.getElementsByClassName("caseText");
	let image = document.getElementsByClassName("cases-box");
	
	if (n < 1) { 
		slideCasesIndex = text.length;
	} 
	
	if (n > text.length) { 
		slideCasesIndex = 1;
	} 

	for (let i = 0; i < text.length; i++) {
		text[i].style.display = "none";
		image[i].style.display = "none";
	}
	text[slideCasesIndex - 1].style.display = "block";
	image[slideCasesIndex - 1].style.display = "block";
}