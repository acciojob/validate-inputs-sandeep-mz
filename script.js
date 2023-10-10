//your JS code here. If required.
 function validateName(input) {
	const namePattern = /[A-Za-z]{3,}/;
	if (namePattern.test(input.value)) {
		input.className = "valid";
	} else {
		input.className = "invalid";
	}
}

function validateEmail(input) {
	const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
	if (emailPattern.test(input.value)) {
		input.className = "valid";
	} else {
		input.className = "invalid";
	}
}

function validateMobile(input) {
	const mobilePattern = /[0-9]{10}/;
	if (mobilePattern.test(input.value)) {
		input.className = "valid";
	} else {
		input.className = "invalid";
	}
}