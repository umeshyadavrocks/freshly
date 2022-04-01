let leftClick = document.getElementById("leftBtn");
    let a = document.getElementsByClassName("slider")[0];
    console.log(leftClick);
    console.log(a);
    leftClick.addEventListener("click",function(){
        
        console.log(a);
      
        a.style.marginLeft ="0";
        count=0;
        
    })
    let rightClick = document.getElementById("rightBtn");
    let count = 0;
    rightClick.addEventListener("click",function(){
        
   if(count==0){
    a.style.marginLeft = "-40rem";
   }
   else if(count>=1){
    a.style.marginLeft = "-80rem";
   }
       count++; 
    })


    let menuBtn = document.getElementsByClassName("MenuBtn")[0];

    menuBtn.addEventListener("click",function(){
        window.location.assign("../menuItems.html");
    })



    let navbarSignup = document.getElementById("navbarSignup");

    navbarSignup.addEventListener("click",function(){
        window.location.assign("./signup.html");
    })


    let BtnS = document.getElementById("btnS");

    BtnS.addEventListener("click",function(){
        let email = document.getElementById("mailId").value;
         let zip = document.getElementById("pinId").value;
         
       if((email.includes("@")&&email.length>=5)&&(zip.length===5)){

        localStorage.setItem("email",JSON.stringify(email));
        localStorage.setItem("zip",JSON.stringify(zip));
         window.location.assign("./choosePlan.html");
       }

       else{
        alert("please Enter a valid Email & Zip Code");
    }
    })


    let btnChoose1 = document.getElementById("btnChoose1");
    let btnChoose2 = document.getElementById("btnChoose2");
    let btnChoose3 = document.getElementById("btnChoose3");
    let btnChoose4 = document.getElementById("btnChoose4");
    let btnChoose5 = document.getElementById("btnChoose5");

    btnChoose1.addEventListener("click",function(){
        window.location.assign("./signup.html");
    })

    btnChoose2.addEventListener("click",function(){
        window.location.assign("./signup.html");
    })
    btnChoose3.addEventListener("click",function(){
        window.location.assign("./signup.html");
    })
    btnChoose4.addEventListener("click",function(){
        window.location.assign("./signup.html");
    })
    btnChoose5.addEventListener("click",function(){
        window.location.assign("./signup.html");
    })


    let navbarLogin = document.getElementById("navbarLogin");

    navbarLogin.addEventListener("click",function(){
        window.location.assign("./signup.html");
    })