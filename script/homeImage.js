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
		slides[i].style.right = "150px";
		slides[i].style.width = "0";
		slides[i].style.opacity = "0";
	}
	if (window.innerWidth > 1366)
		slides[slideIndex - 1].style.width = "35.625rem";
	if (window.innerWidth <= 1366 && window.innerWidth > 1220)
		slides[slideIndex - 1].style.width = "32.8125rem";
	if (window.innerWidth <= 1220 && window.innerWidth > 992)
		slides[slideIndex - 1].style.width = "28.125rem";
	if (window.innerWidth <= 992 && window.innerWidth > 768)
		slides[slideIndex - 1].style.width = "42.1875vw";
	slides[slideIndex - 1].style.right = "0";
	slides[slideIndex - 1].style.opacity = "1";
	slides[slideIndex - 1].style.transition = "all 1.5s ease-in-out";
}