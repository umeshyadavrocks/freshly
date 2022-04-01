let dayselect = document.getElementById('meal-menu')
dayselect.addEventListener("click",function(){
        let planValue = 4;
        let planPrice = "$8.99 / meal";

        localStorage.setItem("planValue",JSON.stringify(planValue));
        localStorage.setItem("planPrice",JSON.stringify(planPrice));

        window.location.assign("../day.html");

    })