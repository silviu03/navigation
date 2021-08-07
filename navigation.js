$(function () {
    console.log('ready');

    const meniuItems = $('.menu-item');
    const navPages = $('.target-item');

    $('#order-details-page').click(function () {
        $('.order-details-box').removeClass('hidden');
        navPages.addClass('hidden');
    })

    meniuItems.click(function () {
        $('.orders-box').removeClass('hidden');
        $('.order-details-box').addClass('hidden');
       
    })


    meniuItems.click(function (e) {
        let data = $(this).data('link-order');

        navPages.each(function (index, item) {
            
            if (!$(item).hasClass('hidden')) {
                $(item).addClass('hidden')
            }

            if (data == index) {
                $(item).removeClass('hidden')
            }
            
        })
    })

    $('#inputSubmit').click(function(event) {
        event.preventDefault();
        
        $('#loaderOverlay').removeClass('hidden')
        setTimeout(function() {
            $('#loaderOverlay').addClass('hidden')
            $('#modalOverlay').removeClass('hidden')
        }, 4000);
    })

    $('.close-btn').click(function() {
        $('#modalOverlay').addClass('hidden')
    })


























})



1