function isCardNumberValid(number) {
	return number === '1234123412341234'
}
function displayError(msg) {
	document.querySelector('.errorMsg').innerHTML = msg
}

function submitHandler(event) {
	event.preventDefault()
	let errorMsg = ''
    console.log(this.cardNumber.value)
	displayError('')
	if (isNaN(this.cardNumber.value)) {
		errorMsg += 'Card number is not a valid number\n'
	} else if (!isCardNumberValid(this.cardNumber.value)) {
		errorMsg += 'Card number is not a valid card number\n'
	}
	if (!validateExpirationDate()) {
		errorMsg += 'Expiration date is not valid or is in the past\n'
	}
    	if (errorMsg !== '') {
		displayError(errorMsg)
		return false
	}
	return true
}


function validateExpirationDate() {
  const today = new Date();
  const month = parseInt(document.querySelector('#expMM').value, 10);
  const year = parseInt(document.querySelector('#expYY').value, 10);

  if (isNaN(month) || isNaN(year) || month < 1 || month > 12) {
    return false;
  }

  const expDate = new Date(year, month, 0);

  return expDate > today;
}




document.querySelector('#creditCard').addEventListener('submit', submitHandler)