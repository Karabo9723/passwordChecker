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
	
	let lowercase = /[a-z]/g;
	let uppercase = /[A-Z]/g;
	let digit = /[0-9]/g;
	let specialCharacter = /\W/g;

	let counter = 0;
	let requirements = [lowercase, uppercase, digit, specialCharacter]

	for(let i = 0 ; i < requirements.length; i++) {
		if(requirements[i].test(password2) == true){
			counter++
		}
	}

	if (password2.length >= 8 && counter >= 3){
		return true;
	}
	 else if(password2.length >= 8 && counter <3){
		 return false
	 }
	  else if(password2.length < 8){
		  return false;
	  }
	else {
		return false;
	}


}

console.log(passwordIsOk(""))

module.exports = {passwordIsOk,passwordIsValid};
