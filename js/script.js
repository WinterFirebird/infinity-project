$(window).on("load", function(){






    /* Scroll to the top on refresh */
    $("html, body").animate({scrollTop:0}, 100, function() {
      /* Animations on Scroll */
      var WindowHeight = $(window).height();
      var offsetResponsive = WindowHeight * 0.75;
      $('.animate-this').waypoint({
            handler: function() {
              $(this.element).addClass("animated fadeInUp")
            },
            offset: offsetResponsive,
          })
    });


   /* PreLoader */


    
      $(".loader").fadeOut("slow", function(){
        $(".preloader").delay(300).fadeOut("slow");
        /*$(".animate-this").delay(300).addClass("scrollAnim");*/
      })










    $(document).ready(function(){


      /* passive event listeners */

    /*document.addEventListener('touchstart', onTouchStart, {passive: true});
    document.addEventListener('touchmove', onTouchMove, {passive: true});*/









      /* IntroAnimation */

            var numChild = $(".left-side ul li").length - 1;
            var linkNumber = 0;
            var timeOutDur = 0;



            

            for(linkNumber = 0; linkNumber <= numChild; linkNumber++) {

              timeOutDur += 300;
              timeOutFunc(linkNumber, timeOutDur)
            }



            function timeOutFunc(num, dur) {
              setTimeout(function(){
               $(".left-side ul").children().eq(num).addClass("animated fadeInUp");
              }, dur);
            }


      /* */



      /* MenuTrigger */

          $(".menu-trigger").click(function(e){
            e.preventDefault();
            e.stopPropagation(); /* So that its click even doesn't bubble up to the whole document (for Menu to close on clicking outside function) */

            $("#menu").addClass("visible");

            var winHei = $(window).height() + "px";
            /*console.log(winHei);*/
            $("#menu").css({height:winHei, visibility: "visible"})
            $("#menu").animate({right: 0}, 400);
            });
          
            $(".menu-close-button").click(function(){
              $("#menu").animate({right: "-220px"}, 200, function(){
                  $("#menu").css({visibility:"hidden"});
              });
              $("#menu").removeClass("visible");
            });





      /* Menu-Trigger scrolling */

          $(window).scroll(function(){
              var scrollTop = $(this).scrollTop();
              if (scrollTop > 200) {
                  /*console.log(scrollTop);*/
                  $(".menu-trigger").addClass("menu-trigger-opaque");
              } else if (scrollTop < 200) {
                  /*console.log(scrollTop);*/
                  $(".menu-trigger").removeClass("menu-trigger-opaque");
              };

              if (scrollTop > 500) {
                $(".return").addClass("return-opaque");
              } else if (scrollTop < 500) {
                  $(".return").removeClass("return-opaque");
              }
          });


      /* MenuClose while clicking outside of the menu */


        $("div").on("click", function(evt){
          
          var target = evt.currentTarget;
          var menu = $("#menu");
          var menuVisible = $("#menu").hasClass("visible");

          if(menuVisible == true) {
            $(".menu-close-button").trigger("click");
          }

        })
          





      /* Return button */

          $(".return").on("click", function(){
            $("html, body").animate({scrollTop: 0}, 600);
          })


          

      /* Reload */


        $(".left-side img").on("click", function(){
          window.location.reload();
        })






          /* FlexSlider 2 */

          $('.flexslider').flexslider({
              namespace: "flex-",
             controlsContainer: "",
             animation: 'slide',
             controlNav: true,
             directionNav: false,
             smoothHeight: true,
             slideshowSpeed: 7000,
             animationSpeed: 600,
             randomize: false,
             touch: true,
          });

          /* OwlCarousel 2 */

          $(".clients-owl").owlCarousel({
              loop:true,
              margin:50,
              nav:false,
              autoplay:1000,
              responsiveClass:true,
              responsive: {
                  0:{
                     items:2,
                     margin: 20
                  },
                  400:{
                     items:3,
                     margin: 30
                  },
                  600:{
                     items:4,
                     margin: 40
                  },
                  1000:{
                     items:6            
                  }
                 }
          })

          /* Light Gallery */

          $(".portfolio").lightGallery({
              selector: ".grid-item",
              showThumbByDefault: false,
          });



          $(".brick-overlay").hover(function(){
            $(this).next().toggleClass("hover")
          })


          
          

          /* Animations on Scroll */

/*
            var WindowHeight = $(window).height();
            var offsetResponsive = WindowHeight * 0.75;



          $('.animate-this').waypoint({
            handler: function() {
              $(this.element).addClass("animated fadeInUp")
            },
            offset: offsetResponsive,
          })
*/



          /* Smooth Scroll */


          $("a").on("click", function(){

            target = $(this).attr("href");
            targetOffset = $(target).offset().top;
            /*console.log(targetOffset);*/

            $("html, body").animate({scrollTop: targetOffset}, 500, function(){
              $(".menu-close-button").trigger("click");
            });

          })






    })








    




})
