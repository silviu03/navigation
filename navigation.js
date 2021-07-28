document.addEventListener("DOMContentLoaded", function (ev) {
    const navItems = document.getElementsByClassName("menu-item")
    const navPages = document.getElementsByClassName("target-item")
    const logoIcons = document.getElementsByClassName("logo-icon")
    const orderDetails = document.getElementById("order-details-page")
    const orderBoxDetails = document.querySelector(".order-details-box")
    const orderBox = document.querySelector(".orders-box")
 
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener("click", function (event) {
            orderBoxDetails.classList.add("hidden")
            if (navItems[i].classList.contains("selected")) {
                navItems[i].classList.remove("selected")
            } else {
                navItems[i].classList.add("selected")
            }

            if (navPages[i].classList.contains("hidden")) {
                navPages[i].classList.remove("hidden")
            }

            if (logoIcons[i].classList.contains("hidden")) {
                logoIcons[i].classList.remove("hidden")
            }

            for (let j = 0; j < navItems.length; j++) {
                if (i != j) {
                    navItems[j].classList.remove("selected")

                    if (!navPages[j].classList.contains("hidden")) {
                        navPages[j].classList.add("hidden")
                    }

                    if (!logoIcons[j].classList.contains("hidden")) {
                        logoIcons[j].classList.add("hidden")
                    }
                }
            }
        })
    }

    orderDetails.addEventListener("click", function (orderEvent) {
        if (!orderBox.classList.contains("hidden")) {
            orderBox.classList.add("hidden")
        }
        if (orderBoxDetails.classList.contains("hidden")) {
            orderBoxDetails.classList.remove("hidden")
        }
    });

    const loaderOverlay = document.getElementById('loaderOverlay');
    const modalOverlay = document.getElementById('modalOverlay');
    const inputSubmit = document.getElementById('inputSubmit');
    const inputForm = document.getElementById('input-form');
    console.log(inputForm);

    inputForm.addEventListener('submit', function(eventAccountInfo) {
    
        eventAccountInfo.preventDefault();
        loaderOverlay.classList.remove('hidden');
        console.log('wtf')

        setTimeout(function() {
            loaderOverlay.classList.add('hidden');
            modalOverlay.classList.remove('hidden');

            // setTimeout(function() {
            //     modalOverlay.classList.add('hidden');
            // }, 4000);
        }, 4000);

    })

    const closeBtn = document.getElementsByClassName('close-btn');
    closeBtn[0].addEventListener('click', function(eventCloseBtn) {
        loaderOverlay.classList.add('hidden');
        modalOverlay.classList.add('hidden');
        console.log('is it closing ???')
    })




});



