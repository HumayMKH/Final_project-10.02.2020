$(document).ready(function () {
    //Navbar hover show - start
    var navItem = $("#myNavbar .navbar .collapse .nav-item");
    var item = $("a.item-click");
    
    
    let menubtn = $("button");
    let ok = true;
   menubtn.click(function(){
        if(ok){
            $("#myNavbar").css("background-color","blue");
            ok = false;
        }else{
            $("#myNavbar").css("background-color","rgba(48,32,87,.7)");
            ok=true;
        }
   })

   $(window).resize(function(){
       if($(window).width() > 991.98){
        $("#myNavbar").css("background-color","rgba(48,32,87,.7)");
       }
   })

    navItem.mouseenter(function () {
        $(this).addClass("show");
        $(this).children().eq(0).attr("aria-expanded", true);
        $(this).children().eq(1).addClass("show");
        console.log($(this).children())
    });
    navItem.mouseleave(function () {
        $(this).removeClass("show");
        $(this).children().eq(0).attr("aria-expanded", false);
        $(this).children().eq(1).removeClass("show");
    });
    //Navbar hover show - end



    //Navbar change color - start
    $(window).scroll(function () {
        $("#myNavbar").toggleClass("changeColorNav", $(this).scrollTop() > 200)
    });


    $('.popular-carousel .owl-carousel').owlCarousel({
        autoWidth: true,
        loop: true,
        margin: 30,
        center:true,
        responsive: {
            0: {
                items: 1,
               
            },
            766: {
                items: 2,
            },
            992: {
                
                items: 3
            }
        }
    });

    
    $('.visited-place-carousel .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            766: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })


   
    
});