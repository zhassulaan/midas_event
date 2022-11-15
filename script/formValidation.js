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


Array.prototype.forEach.call(document.body.querySelectorAll("*[data-mask]"), applyDataMask);

function applyDataMask(field) {
   var mask = field.dataset.mask.split('');
    
   // For now, this just strips everything that's not a number
   function stripMask(maskedData) {
      function isDigit(char) {
         return /\d/.test(char);
      }
      return maskedData.split('').filter(isDigit);
   }
    
   // Replace `_` characters with characters from `data`
   function applyMask(data) {
      return mask.map(function(char) {
         if (char != '_') return char;
         if (data.length == 0) return char;
         return data.shift();
      }).join('')
   }
    
   function reapplyMask(data) {
      return applyMask(stripMask(data));
   }
    
   function changed() {   
      var oldStart = field.selectionStart;
      var oldEnd = field.selectionEnd;
        
      field.value = reapplyMask(field.value);
        
    	field.selectionStart = oldStart;
      field.selectionEnd = oldEnd;
   }
    
   field.addEventListener('click', changed)
   field.addEventListener('keyup', changed)
}
