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
		text[i].style.opacity = "0";
		text[i].style.height = "0";
		if (window.innerWidth <= 768)
			text[i].style.display = "none";
		image[i].style.opacity = "0";
		image[i].style.height = "0";
	}
	text[slideCasesIndex - 1].style.opacity = "1";
	text[slideCasesIndex - 1].style.height = "max-content";
	text[slideCasesIndex - 1].style.transition = "all 1.5s ease-in-out";
	if (window.innerWidth <= 768)
		text[slideCasesIndex - 1].style.display = "block";
	image[slideCasesIndex - 1].style.opacity = "1";
	image[slideCasesIndex - 1].style.height = "max-content";
	image[slideCasesIndex - 1].style.transition = "all 1.5s ease-in-out";
}