let slideAboutIndex = 1;
showAboutSlides(slideAboutIndex);

// Previous / Next controls
function plusAboutSlides(n) {
	showAboutSlides(slideAboutIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	showAboutSlides(slideAboutIndex = n);
}

function showAboutSlides(n) {
	let slides = document.getElementsByClassName("about-box");
	
	if (n < 1) { 
		slideAboutIndex = slides.length;
	} 
	
	if (n > slides.length) { 
		slideAboutIndex = 1;
	} 

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.width = "0";
		slides[i].style.right = "150px";
		slides[i].style.opacity = "0";
	}
	slides[slideAboutIndex - 1].style.width = "100%";
	slides[slideAboutIndex - 1].style.right = "0";
	slides[slideAboutIndex - 1].style.opacity = "1";
	slides[slideAboutIndex - 1].style.transition = "all 1.5s ease-in-out";
}
