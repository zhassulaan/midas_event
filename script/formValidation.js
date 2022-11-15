function validatePhoneNumber(str) {
	for (let i = 0; i < str.length; i++) {
		if (str[i] === '_')
			return false;
	}
	return true;
}
const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 
var form = document.getElementById("form");
var user = form[0];
var phone = form[1];
var email = form[2];
var celebrity = form[3];
var button = document.getElementById("button");
var text = document.getElementById("btn-text");
var loading = document.getElementById("loading");
var success = document.getElementById("success");
 
 function validation() {
	if (user.value !== "" && validatePhoneNumber(phone.value) && email.value.match(validateEmail) && celebrity.value !== "") {
		form.classList.add("valid");
		form.classList.remove("invalid");
		button.style.backgroundColor = "transparent";
		button.style.border = "none";
		loading.style.display = "block";
		loading.style.animation = "spin 5000ms linear infinite";
		text.textContent = "Ваша заявка отправляется...";
		text.style.width = "18.75rem";
		text.style.textAlign = "left";
		setTimeout(function() {
			loading.style.display = "none";
			success.style.display = "block";
			text.textContent = "Ваша заявка оформлена!";
		}, 3000); 

		var params = { from_name: user.value, from_phone: phone.value, from_email: email.value, from_event: celebrity.value }
		emailjs.send("service_li2ez09", "template_geh3k6n", params)
		.then(function(res){
			console.log("success", res.status);
		})
	} else {
		form.classList.remove("valid");
		form.classList.add("invalid");
		text.textContent = "Заполните все необходимые поля";
		button.style.backgroundColor = "var(--clr-black)";
	}
}