var userName = document.getElementById("userName");
var passWord = document.getElementById("passWord");
var Email = document.getElementById("Email");
var subReg = document.getElementById("subReg");
var select = document.getElementById("select");
var radio = document.getElementById("radio");
var radiochek;
var option;
let accounts = [];

console.log(subReg);
function showmenu() {
    let show = document.querySelector('.menu');
    show.classList.add('smenu');
}
function closemenu() {
    let close = document.querySelector('.menu');
    close.classList.remove('smenu');
}

subReg.onclick = function () {
    console.log("hello");
    addAccounts();
}



function addAccounts() {

    var account = {
        username: userName.value,
        password: passWord.value,
        Emailacc: Email.value,
        selectT: select.value
    };

    accounts.push(account);
    localStorage.setItem("accountsList", JSON.stringify(accounts));
    console.log(accounts);


}

userName.onkeyup = function () {

    var namePatteren = /^[a-z]{2,12}$/;
    if (namePatteren.test(userName.value)) {
        userName.classList.add("is-valid");
        userName.classList.remove("is-invalid");
    } else {
        userName.classList.remove("is-valid");
        userName.classList.add("is-invalid");
    }

    checkclasslist();
}



passWord.onkeyup = function () {
    var namePatteren2 = /^[a-z]{2,15}$/;

    if (namePatteren2.test(passWord.value)) {

        passWord.classList.add("is-valid");
        passWord.classList.remove("is-invalid");
    } else {

        passWord.classList.remove("is-valid");
        passWord.classList.add("is-invalid");

    }

    checkclasslist();
}




Email.onkeyup = function () {
    var namePatteren2 = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (namePatteren2.test(Email.value)) {

        Email.classList.add("is-valid");
        Email.classList.remove("is-invalid");
    } else {

        Email.classList.remove("is-valid");
        Email.classList.add("is-invalid");

    }

    checkclasslist();
}


select.addEventListener("click", function () {
    option = select.checked;
    return option;
});


radio.addEventListener("click", function () {


    radiochek = radio.checked;
    checkclasslist();
    return radiochek;

});


checkclasslist();
function checkclasslist() {

    if (userName.classList.contains("is-valid") && passWord.classList.contains("is-valid") && Email.classList.contains("is-valid") && option != "none" && radiochek == true) {
        subReg.classList.remove("point-event");

    } else {

        subReg.classList.add("point-event");
    }
}

