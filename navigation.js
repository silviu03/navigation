document.addEventListener("DOMContentLoaded", function(ev) {
    const navItems = document.getElementsByClassName("menu-item")
    const navPages = document.getElementsByClassName("target-item")
    // const 
    console.log(navItems);
    console.log(navPages);

    for(let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener("click", function(event) {
            if (navItems[i].classList.contains("selected")) {
                console.log("menu works")
                navItems[i].classList.remove("selected")
                console.log("it works 2")
            }else{
                navItems[i].classList.add("selected")
                console.log("it works 3")
            }
            console.log("it works 4")

            if(navPages[i].classList.contains("hidden")) {
                console.log("page works")
                navPages[i].classList.remove("hidden")
                console.log("page works 2")
            }

            
            for (let j = 0; j < navItems.length; j++) {
                if(i != j) {
                    console.log(navItems[i])
                    navItems[j].classList.remove("selected")
                    console.log("it works 5")
                    if(!navPages[j].classList.contains("hidden")) {
                        navPages[j].classList.add("hidden")
                    }
                }
                

            }
        })
    }
    






});