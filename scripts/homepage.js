let appenddiv = document.getElementById('nav-div');
    import navbar from "../scripts/header.js";
   appenddiv.innerHTML = navbar();

   let appendfooter = document.getElementById('footerappend');
    import footer from "../scripts/footer.js";
   appendfooter.innerHTML = footer();

   let navbarSignup = document.getElementById("sign-up");
    navbarSignup.addEventListener("click",function(){
        window.location.assign("./signup.html");
    })

    