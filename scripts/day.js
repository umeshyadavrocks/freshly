
let Next = document.getElementById("NextDay");
let hiddenInput = document.getElementById("hiddenInput");
    let one = document.getElementById("subDiv1");
    let two = document.getElementById("subDiv2");
    let three = document.getElementById("subDiv3");
    let four = document.getElementById("subDiv4");
    let five = document.getElementById("subDiv5");
    let six = document.getElementById("subDiv6");
    let seven = document.getElementById("subDiv7");

one.addEventListener("click",function(){
    one.classList.remove("subDivActive");
    two.classList.remove("subDivActive");
    three.classList.remove("subDivActive");
    four.classList.remove("subDivActive");
    five.classList.remove("subDivActive");
    six.classList.remove("subDivActive");
    seven.classList.remove("subDivActive");
  
    one.classList.add("subDivActive");
    hiddenInput.innerText = "";
    hiddenInput.innerText = "Wednesday, Nov 17";

})

two.addEventListener("click",function(){
    one.classList.remove("subDivActive");
    two.classList.remove("subDivActive");
    three.classList.remove("subDivActive");
    four.classList.remove("subDivActive");
    five.classList.remove("subDivActive");
    six.classList.remove("subDivActive");
    seven.classList.remove("subDivActive");
  
    two.classList.add("subDivActive");
    hiddenInput.innerText = "";
    hiddenInput.innerText = "Thursday, Nov 18";
})

three.addEventListener("click",function(){
    one.classList.remove("subDivActive");
    two.classList.remove("subDivActive");
    three.classList.remove("subDivActive");
    four.classList.remove("subDivActive");
    five.classList.remove("subDivActive");
    six.classList.remove("subDivActive");
    seven.classList.remove("subDivActive");
 
    three.classList.add("subDivActive");
    hiddenInput.innerText = "";
    hiddenInput.innerText = "Friday, Nov 19";
})

four.addEventListener("click",function(){
    one.classList.remove("subDivActive");
    two.classList.remove("subDivActive");
    three.classList.remove("subDivActive");
    four.classList.remove("subDivActive");
    five.classList.remove("subDivActive");
    six.classList.remove("subDivActive");
    seven.classList.remove("subDivActive");
  
    four.classList.add("subDivActive");
    hiddenInput.innerText = "";
    hiddenInput.innerText = "Tuesday, Nov 30";
})

five.addEventListener("click",function(){
    one.classList.remove("subDivActive");
    two.classList.remove("subDivActive");
    three.classList.remove("subDivActive");
    four.classList.remove("subDivActive");
    five.classList.remove("subDivActive");
    six.classList.remove("subDivActive");
    seven.classList.remove("subDivActive");
  
    five.classList.add("subDivActive");
    hiddenInput.innerText = "";
    hiddenInput.innerText = "Wednesday, Dec 1";
})
six.addEventListener("click",function(){
    one.classList.remove("subDivActive");
    two.classList.remove("subDivActive");
    three.classList.remove("subDivActive");
    four.classList.remove("subDivActive");
    five.classList.remove("subDivActive");
    six.classList.remove("subDivActive");
    seven.classList.remove("subDivActive");
 
    six.classList.add("subDivActive");
    hiddenInput.innerText = "";
    hiddenInput.innerText = "Thursday, Dec 2";
})
seven.addEventListener("click",function(){
    one.classList.remove("subDivActive");
    two.classList.remove("subDivActive");
    three.classList.remove("subDivActive");
    four.classList.remove("subDivActive");
    five.classList.remove("subDivActive");
    six.classList.remove("subDivActive");
    seven.classList.remove("subDivActive");
 
    seven.classList.add("subDivActive");
    hiddenInput.innerText = "";
    hiddenInput.innerText = "Friday, Dec 3";
})

Next.addEventListener("click",function(){
    let dayValue = hiddenInput.innerText;
    
    dayValue = JSON.stringify(dayValue);
    localStorage.setItem("dayValue",dayValue);
   
    if(dayValue.length>2){
    window.location.assign("../meals.html");
}
    else{
        alert("Please select a date");
    }
})