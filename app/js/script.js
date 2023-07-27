
function generatePassword() {

const length = parseInt(document.getElementById('length').value);
const includeUppercase = document.getElementById("include-uppercase").checked;
const includeLowercase = document.getElementById("include-lowercase").checked;
const includeNumbers = document.getElementById("include-numbers").checked;
const includeSymbols = document.getElementById("include-symbols").checked;

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_-+=[]{}|:;<>,.?/";

let allChars = "";
if (includeUppercase) allChars += uppercaseChars;
if (includeLowercase) allChars += lowercaseChars;
if (includeNumbers) allChars += numberChars;
if (includeSymbols) allChars += symbolChars;

if (allChars === "") {
    alert('Nenhum Checkbox selecionado !')
    const generatedPasswordElement = document.getElementById("generated-password");
    generatedPasswordElement.innerText = "";
} else  {
    let generatedPassword = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        generatedPassword += allChars.charAt(randomIndex)
    }
    
    const generatedPasswordElement = document.getElementById("generated-password");
    generatedPasswordElement.innerText = "Senha gerada: " + generatedPassword;
}



}