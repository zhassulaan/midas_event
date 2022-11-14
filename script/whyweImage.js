let slideWhyweIndex = 1;
showWhyweSlides(slideWhyweIndex);

// Previous / Next controls
function plusWhyweSlides(n) {
	showWhyweSlides(slideWhyweIndex += n);
}
function openWhyweSlides(n) {
	slideWhyweIndex = n;
	showWhyweSlides(slideWhyweIndex);
}

// Thumbnail image controls
function currentSlide(n) {
	showWhyweSlides(slideWhyweIndex = n);
}

function showWhyweSlides(n) {
	let slides = document.getElementsByClassName("whywe-box");
	let text = document.getElementById("text");
	let circle = document.getElementsByClassName("circle");
	
	if (n < 1) { 
		slideWhyweIndex = slides.length;
	} 
	
	if (n > slides.length) { 
		slideWhyweIndex = 1;
	} 

	if (window.innerWidth <= 768) {
		for (let i = 0; i < slides.length; i++) {
			slides[i].style.right = "250px";
			slides[i].style.opacity = "0";
			slides[i].style.transition = "all 1.5s ease-in-out";
			circle[i].style.width = "0.25rem";
			circle[i].style.height = "0.25rem";
		}

		slides[slideWhyweIndex - 1].style.right = "5.556vw";
		slides[slideWhyweIndex - 1].style.opacity = "1";
		slides[slideWhyweIndex - 1].style.transition = "all 1.5s ease-in-out";
		circle[slideWhyweIndex - 1].style.width = "0.625rem";
		circle[slideWhyweIndex - 1].style.height = "0.625rem";
	}
}