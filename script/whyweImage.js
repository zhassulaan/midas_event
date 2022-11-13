let slideWhyweIndex = 1;
showAboutSlides(slideWhyweIndex);

// Previous / Next controls
function plusWhyweSlides(n) {
	showWhyweSlides(slideWhyweIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	showWhyweSlides(slideWhyweIndex = n);
}

function showWhyweSlides(n) {
	let slides = document.getElementsByClassName("whywe-box");
	
	if (n < 1) { 
		slideWhyweIndex = slides.length;
	} 
	
	if (n > slides.length) { 
		slideWhyweIndex = 1;
	} 

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.opacity = "0";
		slides[i].style.transition = "all 1.5s ease-in-out";
	}
	slides[slideWhyweIndex - 1].style.opacity = "1";
	slides[slideWhyweIndex - 1].style.transition = "all 1.5s ease-in-out";
}