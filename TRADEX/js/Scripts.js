


// $(document).ready(function () {
    $(".owl-carousel").owlCarousel(
        {
            items : 2 ,
            loop: true,
            margin: 30,
            nav: true,
            autoplay: true ,
            autoplayTimeout: 3000, 
            navText :['<i class="fa-solid fa-arrow-left-long bg-primary text-white"></i>' , '<i class="fa-solid fa-arrow-right-long"></i>'],
            // responsive: {
            //     0: {
            //         items: 1
            //     },
            //     // 600: {
            //     //     items: 
            //     // },
            //     1000: {
            //         items: 2
            //     }
            // }
        }
    );
// });