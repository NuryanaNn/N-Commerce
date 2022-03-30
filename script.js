var swiper = new Swiper(".category",{
    loop:true,
    centeredSlides: true,
    autoplay:{
        delay :2500,
        disabledonInteraction :false,
    },
    breakpoints:{
        480:{
            slidesPerView:1,
        },
        1024:{
            slidesPerView:4,
        }
    }
});


var swiper = new Swiper(".banner",{
    loop:true,
    centeredSlides: true,
    autoplay:{
        delay :2500,
        disabledonInteraction :false,
    },
    breakpoints:{
        1024:{
            slidesPerView:1,
        }
    }
});
