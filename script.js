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


var swiper = new Swiper(".arrival",{
    loop:true,
    centeredSlides: true,
    autoplay:{
        delay :2500,
        disabledonInteraction :false,
    },
    breakpoints:{
        0:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:4,
        }
    }
});
