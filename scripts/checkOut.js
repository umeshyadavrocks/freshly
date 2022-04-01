
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



formValue.addEventListener("click",function(){
    let firstName = document.getElementById("firstName1").value;
    let lastName = document.getElementById("lastName1").value;
    let fullName = document.getElementById("fullName1").value;
    let AddressLine1 = document.getElementById("AddressLine1").value;
    let AddressLine2 = document.getElementById("AddressLine2").value;
    let city1 = document.getElementById("city1").value;
    let state1= document.getElementById("state1").value;
    let zip1= document.getElementById("zip1").value;
    let phone1= document.getElementById("phone1").value;


    let obj = {

      firstNameO:firstName,
      lastNameO:lastName,
      fullNameO:fullName,
      AddressLine1O:AddressLine1,
      AddressLine2O:AddressLine2,
      city1O:city1,
      state1O:state1,
      zip1O:zip1,
      phone1O:phone1


    };
      
   

    localStorage.setItem("objCart",JSON.stringify(obj));

    window.location.assign("../confirmCheckOut.html");



})