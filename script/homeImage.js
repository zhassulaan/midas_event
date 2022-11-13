let slideIndex = 1;
showSlides(slideIndex);

// Previous / Next controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let slides = document.getElementsByClassName("home-box");
	
	if (n < 1) { 
		slideIndex = slides.length;
	} 
	
	if (n > slides.length) { 
		slideIndex = 1;
	} 

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.opacity = "0";
	}
	slides[slideIndex - 1].style.opacity = "1";
	slides[slideIndex - 1].style.transition = "all 1.5s ease-in-out";
}