const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4",
 "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
 "=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passEl1 = document.getElementById("password1-el")
const passEl2 = document.getElementById("password2-el")
const passLen = document.getElementById("pass-len")
const err = document.getElementById("error")

function generatePasswords(){
    const len = passLen.value
    if (isNumeric(len)){
        error.textContent = ""
        passEl1.textContent = generatePass(len);
        passEl2.textContent = generatePass(len);
    }
    else {
        if (passLen.value !== "") {
            error.textContent = "Not a number, 15 character long password is generated"
        } else {
            error.textContent = ""
        }
        console.log("hi3")
        passEl1.textContent = generatePass();
        passEl2.textContent = generatePass();    
    }
}

function generatePass(len = 15) {
    let password = ""
    for (let i = 0; i < len; i ++) {
        password += generateRandChar();
    }
    return password;
}

function generateRandChar() {
    return characters[Math.floor(Math.random()*characters.length)]
}

function isNumeric(value) {
    return /^\d+$/.test(value);
}