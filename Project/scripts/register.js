console.log("Users register");
//creat constructor
class User{//ES2015 version of a constructor.
    constructor(email, pass, first, last, age, address, phone, payment, color){
        this.email = email;
        this.password = pass;
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.address = address;
        this.phone = phone;
        this.payment = payment;
        this.color = color;
    }
}

function registerUser(){
    let email = $("#txtEmail").val();
    let password = $("#txtPassword").val();
    let first = $("#txtFirst").val();
    let last = $("#txtLast").val();
    let age = $("#txtAge").val();
    let address = $("#txtAddress").val();
    let phone = $("#txtPhone").val();
    let payment = $("#selPayment").val();
    let color = $("#txtColor").val();

    let user = new User(email, password, first, last, age, address, phone, payment, color);
    console.log(user);
    // var syntax=`${user.eamil}`<--test only
    // $("#users").append(syntax);<--test only
    saveUser(user);//this fn is on storeManager.js
    clearInputs();
}

function clearInputs(){
    document.getElementById("#txtEmail").value = "";
    document.getElementById("txtPassword").value = "";
    document.getElementById("txtFirst").value = "";
    document.getElementById("txtLast").value = "";
    document.getElementById("txtAge").value = "";
    document.getElementById("txtAddress").value = "";
    document.getElementById("txtPhone").value = "";
    document.getElementById("txtPayment").val();
    document.getElementById("txtColor").val();
}
function init(){
    console.log("init function");
    $("#btnSave").click(registerUser);
}

window.onload=init;