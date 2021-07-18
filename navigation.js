document.addEventListener("DOMContentLoaded", function(ev) {
    const navItems = document.getElementsByClassName("menu-item")
    const navPages = document.getElementsByClassName("target-item")
    const logoIcons = document.getElementsByClassName("logo-icon")
    const orderDetails = document.getElementById("order-details-page")
    const orderBoxDetails = document.querySelector(".order-details-box")
    const orderBox = document.querySelector(".orders-box")
    

    console.log(navItems);
    console.log(navPages);
    console.log(logoIcons);
    console.log(orderDetails);
    console.log(orderBox);

    for(let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener("click", function(event) {
            orderBoxDetails.classList.add("hidden")
            if (navItems[i].classList.contains("selected")) {
                
                navItems[i].classList.remove("selected")
                
            }else{
                navItems[i].classList.add("selected")
                
            }
            

            if(navPages[i].classList.contains("hidden")) {
                
                navPages[i].classList.remove("hidden")
                
            }

            if(logoIcons[i].classList.contains("hidden")) {
                logoIcons[i].classList.remove("hidden")
            }

            
            
            for (let j = 0; j < navItems.length; j++) {
                if(i != j) {
                    console.log(navItems[i])
                    navItems[j].classList.remove("selected")
                    
                    if(!navPages[j].classList.contains("hidden")) {
                        navPages[j].classList.add("hidden")
                    }

                    if(!logoIcons[j].classList.contains("hidden")) {
                        logoIcons[j].classList.add("hidden")
                    }

                }
                

            }
        })
    }



    
        orderDetails.addEventListener("click", function(orderEvent) {
            if(!orderBox.classList.contains("hidden")) {
                orderBox.classList.add("hidden")
            }
            if(orderBoxDetails.classList.contains("hidden")) {
                orderBoxDetails.classList.remove("hidden")
            }
        });







});  


    
