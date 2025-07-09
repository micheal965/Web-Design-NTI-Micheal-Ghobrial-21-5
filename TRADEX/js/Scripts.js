// Counter Section
document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // lower is faster
  
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
  
        // Calculate increment
        const increment = Math.ceil(target / speed);
  
        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target;
        }
      };
      // Start the animation
      updateCount();
    });
  });



$(".owl-carousel").owlCarousel(
    {
        loop: true,
        margin: 30,
        nav: true,
        autoplay: true ,
        autoplayTimeout: 3000, 
        navText :['<i class="fa-solid fa-arrow-left-long bg-primary text-white py-1 px-3 rounded-start me-2"></i>' ,
                    '<i class="fa-solid fa-arrow-right-long bg-primary text-white py-1 px-3 rounded-end"></i>'],
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    }
);