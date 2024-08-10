const btnElem = document.querySelector(".btn");

const inputElem = document.getElementById("input");

const copyIconElem = document.querySelector(".fa-copy");

const alertContElem = document.querySelector(".alert-cont");

btnElem.addEventListener("click", ()=> {
    createPassword();
})

copyIconElem.addEventListener("click", ()=> {
    copyPassword();

    if (inputElem.value) {
        
    alertContElem.classList.remove("active");

    setTimeout(()=> {
        alertContElem.classList.add("active")
    }, 3000);
    
    }
})

function createPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    const pswrdLength = 14;
    let password = "";

    for (let index = 0; index < pswrdLength; index++) {
        const randomNum = Math.floor(Math.random()* chars.length);
        password += chars.substring(randomNum, randomNum + 1);
        
    }

    inputElem.value = password;

    alertContElem.innerText = password + "copied!";
}

function copyPassword() {
    inputElem.select();
    inputElem.setSelectionRange(0, 9999);

    navigator.clipboard.writeText(inputElem.value);
}