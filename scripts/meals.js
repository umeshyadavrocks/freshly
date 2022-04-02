    import mappingDataFetcher from "./data.js";
    let freshlyData = mappingDataFetcher();
    let itemDiv = document.getElementById("itemDiv");
    let bodyDiv = document.getElementById("iDiv");
    
    freshlyData.forEach(function(item){
        append(item)
        
    })
    
    let day = localStorage.getItem("dayValue");
    day = JSON.parse(day);
    
    let  navbarValue = document.createElement("h3");
    navbarValue.innerText = day;
    
    let navbar = document.getElementById("mealsNavbar");
    
    navbar.append(navbarValue);
    
    
    let heading = document.getElementById("heading");
    
    let headValue = document.createElement("h3");
    
    let numOfMeals = localStorage.getItem("planValue");
    numOfMeals = JSON.parse(numOfMeals);
    
    headValue.innerText = `Choose ${numOfMeals} meals`;
    heading.append(headValue);
    
    
    let count = numOfMeals;
    count = Number(count);
    
    let cartCount = document.getElementById("cartCount");
    let itemCount = 0;
    let checkOutBtn = document.getElementById("checkOutBtn");
    
    
    
    
    let selectedCount = document.getElementById("selectedCount");
    
    selectedCount.innerText = count;
    function append(x){
    let div = document.createElement("div");
    
    div.setAttribute("class","container");
    let itemName = document.createElement("h4");
    itemName.setAttribute("id","itemName");
    itemName.innerText = x.itemName;
    let subhead = document.createElement("p");
    subhead.innerText = x.subheading;
    let img = document.createElement("img");
    img.setAttribute("class","itemImg");
    img.setAttribute("id",x.itemNo);
    let imageDiv = document.createElement("div");
    imageDiv.setAttribute("id","imageDiv");
    
    img.src = x.img;
    imageDiv.append(img);
    
    
    let btnAdd = document.createElement("button");
    btnAdd.setAttribute("class","dataAddBtn");
    btnAdd.setAttribute("id",x.itemNo);
    
    let rightFixedDiv = document.getElementById("rightFixedSubDiv");
    
    let clear = document.getElementById("clearAll");
    clear.addEventListener("click",function(){
        rightFixedDiv.innerHTML = "";
        cartCount.innerText=0;
        itemCount=0;
        checkOutBtn.classList.remove("checkOutBtnActive");
    })
    
    
    btnAdd.addEventListener("click",function(){
        itemCount++;
     if(itemCount==count){
         alert(`You added ${count} in the cart`);
        checkOutBtn.classList.add("checkOutBtnActive");
    
         checkOutBtn .addEventListener("click",function(){
    
            let aData = rightFixedDiv.innerHTML
            aData =aData.toString();
           
            localStorage.setItem("innerHtml",JSON.stringify(aData));
    
           window.location.assign("../checOut.html");
         })
     }
    let checkoutDiv = document.createElement("div");
    checkoutDiv.setAttribute("class","checkoutDiv");
    let imgCheckout = document.createElement("img");
    imgCheckout.setAttribute("class","imgCheckOut")
    imgCheckout.src = x.img;
    let titleCheckout = document.createElement("h5");
    titleCheckout.innerText = x.itemName;
    
    checkoutDiv.append(imgCheckout,titleCheckout);
    rightFixedDiv.append(checkoutDiv);
    
    
    cartCount.innerText = itemCount;
    
    })
    
    
    let textDivTitle = document.createElement("div");
    textDivTitle.setAttribute("id","textDivTitle");
    textDivTitle.append(itemName,subhead)
    
    let addBtnDiv = document.createElement("div");
    addBtnDiv.setAttribute("class","addBtnDiv");
    btnAdd.innerText = "+ Add";
    addBtnDiv.append(btnAdd);
    
    let getValue = document.getElementById("dataAddBtn");
    
    
    div.append(imageDiv,textDivTitle,addBtnDiv);
    itemDiv.append(div);
    bodyDiv.append(itemDiv);
    
    let select = document.getElementById(x.itemNo);
    select.addEventListener("click" ,function(){
    
    let blur = document.getElementById("backgroundBlur");
    blur.classList.add("activeBlur");
    
    let modalDiv = document.getElementById("modalDivSelect");
    modalDiv.innerHTML = "";
    modalDiv.classList.add("activeModal");
    
    let modalInnerTopDiv = document.createElement("div");
    modalInnerTopDiv.setAttribute("id","modalTopDivId");
    let modalName = document.createElement("h3");
    modalName.setAttribute("id","modalNameId");
    modalName.innerText = x.itemName;
    let modalSubName = document.createElement("p");
    modalSubName.innerText = x.subheading;
    
    let btn1 = document.createElement("button");
    btn1.innerText = "Gluten Free";
    let btn2 = document.createElement("button");
    let btn3 = document.createElement("button");
    let closeModalBtn = document.createElement("button");
    closeModalBtn.setAttribute("id","closeModalBtn");
    closeModalBtn.innerText = "X";
    
    closeModalBtn.addEventListener("click",function(){
        modalDiv.innerHTML = "";
        modalDiv.classList.remove("activeModal");
        blur.classList.remove("activeBlur");
    })
    modalInnerTopDiv.append(modalName,modalSubName,closeModalBtn);
    
    
    let middleModalDiv = document.createElement("div");
    middleModalDiv.setAttribute("id","middleModalDivId");
    let imageModalDiv = document.createElement("div");
    imageModalDiv.setAttribute("id","imageModalDiv");
    let imgModal = document.createElement("img");
    imgModal.setAttribute("id","imgModalId");
    imgModal.src = x.img;
    
    let innerMiddleModalDiv = document.createElement("div");
    innerMiddleModalDiv.setAttribute("id","innerMiddleModalDiv");
    let innerDivHead = document.createElement("h3");
    innerDivHead.innerText = x.itemInfo;
    let modalPara = document.createElement("p");
    modalPara.innerText = x.itemDetails;
    innerMiddleModalDiv.append(innerDivHead,modalPara);
    imageModalDiv.append(imgModal);
    middleModalDiv.append(imageModalDiv);
    
    let modalIngredient = document.createElement("div");
    modalIngredient.setAttribute("id","modalIndgredient");
    let imgModal1 = document.createElement("img");
    imgModal1.setAttribute("class","imgModal1");
    let imgModal2 = document.createElement("img");
    imgModal2.setAttribute("class","imgModal1");
    
    let imgModal3 = document.createElement("img");
    imgModal3.setAttribute("class","imgModal1");
    
    let imgModal4 = document.createElement("img");
    imgModal4.setAttribute("class","imgModal1");
    
    let imgModal5 = document.createElement("img");
    imgModal5.setAttribute("class","imgModal1");
    
    let imgModal6 = document.createElement("img");
    imgModal6.setAttribute("class","imgModal1");
    
    imgModal1.src = x.ingreadientsThumb[0];
    imgModal2.src = x.ingreadientsThumb[1];
    imgModal3.src = x.ingreadientsThumb[2];
    imgModal4.src = x.ingreadientsThumb[3];
    imgModal5.src = x.ingreadientsThumb[4];
    imgModal6.src = x.ingreadientsThumb[5];
    
    let indgrediantHead = document.createElement("h3");
    indgrediantHead.innerText = "Ingredients";
    modalIngredient.append(indgrediantHead,imgModal1,imgModal2,imgModal3,imgModal4,imgModal5,imgModal6);
    
    
    let ingreadientsInfo = document.createElement("div");
    ingreadientsInfo.setAttribute("id","ingreadientsInfo");
    
    let ingreadientsInfoP = document.createElement("p");
    
    ingreadientsInfoP.innerText = x.ingredients;
    
    let indHeadP = document.createElement("h4");
    indHeadP.innerText = "All Ingredients";
    
    
    ingreadientsInfo.append(indHeadP,ingreadientsInfoP);
    
    
    
    modalDiv.append(modalInnerTopDiv,middleModalDiv,innerMiddleModalDiv,modalIngredient,ingreadientsInfo);
    
    })
    }