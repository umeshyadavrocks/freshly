
let rightDivFixed = document.getElementById("rightDivFixed");

let innerHTML = localStorage.getItem("innerHtml");

innerHTML = JSON.parse(innerHTML);

rightDivFixed.innerHTML = innerHTML;

let deliveryDate = document.getElementById("deliveryDateDisplay");
let date = localStorage.getItem("dayValue");
date = JSON.parse(date);
let dateValue = document.createElement("h5");
dateValue.innerText = date;

deliveryDate.append(dateValue);

let planValue = localStorage.getItem("planValue");
let planPrice = localStorage.getItem("planPrice");

planPrice = JSON.parse(planPrice);
planValue = JSON.parse(planValue);
planValue = Number(planValue);
planPrice = planPrice.trim().split("/");
let numPlanPrice = Number(planPrice[0].split("$")[1]);
let mealsPerWeek = planValue*numPlanPrice;


let totalPrice = document.getElementById("totalPrice");
totalPrice.innerText = "$"+mealsPerWeek;

let todayTotal = 6.99+mealsPerWeek;
todayTotal = todayTotal.toFixed(2);

let totalValueShow = document.getElementById("totalValueShow");

totalValueShow.innerText = "$"+todayTotal;

let showTotalPrice = document.getElementById("showTotalPrice");
showTotalPrice.innerText = "$"+todayTotal;



let mealsDisplay = document.getElementById("mealsDisplay");

let mealsValue = localStorage.getItem("planValue");

mealsDisplay.innerText = mealsValue +" meals per week";

let formValue = document.getElementById("nextSubmitBtn");
let email1= document.getElementById("email1");

let emailValue = localStorage.getItem("email");
emailValue = JSON.parse(emailValue);
email1.innerText = emailValue;



    let firstName = document.getElementById("firstName1");
    let lastName = document.getElementById("lastName1");
    let fullName = document.getElementById("fullName1");
    let AddressLine1 = document.getElementById("AddressLine1");
    let AddressLine2 = document.getElementById("AddressLine2");
    let city1 = document.getElementById("city1");
    let state1= document.getElementById("state1");
    let zip1= document.getElementById("zip1");
    let phone1= document.getElementById("phone1");


    let obj = localStorage.getItem("objCart");
    
    obj = JSON.parse(obj);
 
    console.log(obj);

    firstName.innerText = obj.firstNameO;
    lastName.innerText = obj.lastNameO;
    fullName.innerText = obj.fullNameO;
    AddressLine1.innerText = obj.AddressLine1O;
    AddressLine2.innerText = obj.AddressLine2O;
    city1.innerText = obj.city1O;
    state1.innerText = obj.state1O;
    zip1.innerText = obj.zip1O;
    phone1.innerText = obj.phone1O;
    

    let nextSubmitBtn = document.getElementById("nextSubmitBtn");

nextSubmitBtn.addEventListener("click",function(){
    alert("Payment Successfull");
})