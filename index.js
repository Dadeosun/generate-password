const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 12
let generatePasswords = document.getElementById("generate-password")
let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")


function getRandomCharacter() { 
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() { 
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) { 
        randomPassword += getRandomCharacter()
    }
    return randomPassword
}
const generatedPasswordOne = generateRandomPassword()
const generatePasswordTwo = generateRandomPassword() 
console.log("Here is a random password: ", generatedPasswordOne, generatePasswordTwo)

generatePasswords.addEventListener("click", function() {
    passwordOne.textContent = generateRandomPassword()
    passwordTwo.textContent = generateRandomPassword()
})

// Create a function so when the user clicks on the "generate password" button, pick two random passwords that put the passwordOne onto the password-one div 
// and the passwordTwo onto the password-two div. Use a for loop, using 
// a conditional statement, and the textContent property.















