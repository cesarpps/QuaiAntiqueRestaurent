const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputEmail = document.getElementById("EmailInput");
const inputPassword1 = document.getElementById("InputPassword1");
const inputValidatePassword = document.getElementById("ValidateInputPassword1");
const btnValidationIncription = document.getElementById("btn-validation-incription");

inputNom.addEventListener("keyup", validateFrom);
inputPrenom.addEventListener("keyup", validateFrom);
inputEmail.addEventListener("keyup", validateFrom);
inputPassword1.addEventListener("keyup", validateFrom);
inputValidatePassword.addEventListener("keyup", validateFrom);

function validateConfirmPassword(inputPwd, inputConfirmPwd) {
    if (inputPwd.value == inputConfirmPwd.value && inputConfirmPwd.value !== '') {
        inputValidatePassword.classList.add("is-valid");
        inputValidatePassword.classList.remove("is-invalid");
        return true;
    }

    else{
        inputConfirmPwd.classList.remove("is-valid");
        inputConfirmPwd.classList.add("is-invalid");
     return false;
    }
}

function validateFrom() {
    const nomOK = validateRequired(inputNom);
    const prenomOk = validateRequired(inputPrenom);
    const mailOk = validateEmail(inputEmail);
    const passwordOk = validatePassword(inputPassword1);
    const confirmPasswordOk = validateConfirmPassword(inputPassword1, inputValidatePassword);

    if(nomOK && prenomOk && mailOk && passwordOk && confirmPasswordOk){
        btnValidationIncription.disabled = false;
    }
    else{
        btnValidationIncription.disabled = true;
    }

}
function validateEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailuser = input.value;
    if(mailuser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
     return false;
    }
}

function validateRequired(input) {
    if (input.value.trim() !== ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validatePassword(input) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passworduser = input.value;
    if(passworduser.match(passwordRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
     return false;
    }
}
