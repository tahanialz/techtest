function printError(element, msg) {
    document.getElementById(element).innerHTML = msg;
}

function validateError(inputValue, validationRegex, inputString, errorElementName) {
    if (inputValue == '') {
        printError(errorElementName, `Please enter your ${inputString}`);
    } else {
        var regex = validationRegex;
        if (regex.test(inputValue) === false) {
            printError(errorElementName, `Please enter a valid ${inputString}`);
        } else {
            printError(errorElementName, "");
            return false;
        }
    }

    return true;
}

function validateForm() {
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var country = document.contactForm.country.value;
    var message = document.contactForm.message.value;

    var nameErr=emailErr=mobileErr=countryErr=genderErr=messageErr=true;
    
    nameErr = validateError(name, /^[a-zA-z\s]+$/, "name", "nameErr");
    emailErr = validateError(email, /^\S+@\S+\.\S+$/, "email", "emailErr");
    mobileErr = validateError(mobile, /^[0-9]+$/, "mobile number", "mobileErr");
    countryErr = validateError(country, /^(?!Select).*$/, "country", "countryErr");
    messageErr = validateError(message, /\S+/, "message", "messageErr");
    if (nameErr || emailErr || mobileErr || countryErr || messageErr) {
        return false;
    } else {
        alert('You have submitted the form');
    }
}