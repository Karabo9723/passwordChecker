function passwordIsValid(password) {

	let myRegex = new RegExp(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&*%]).{8,}/g);
	if (password.match(myRegex)) {
		return true;
	} else {
		return false;
	}
}
passwordIsValid('Diggy#237');

function passwordIsOk(password2) {
	
	let lowercase = /^[a-z]/g;
	let uppercase = /^[A-Z]/g;
	let digit = /^[0-9]/g;
	let specialCharacter = /^[!@#$%&*+]/g;

	if (password2.length < 9 || password2 === null) {
		return false ;
		
	} else {
		if (
			lowercase.test(password2) ||
			uppercase.test(password2) ||
			digit.test(password2) ||
			specialCharacter.test(password2)
		) {
			return true
		}
	}
}



module.exports = {passwordIsOk,passwordIsValid};
