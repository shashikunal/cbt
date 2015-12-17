jQuery(document).ready(function(){
    
jQuery("#block-views-front-course-details-block .block-title").append("<p>Here, there and everywhere... what we've been doing</p>");
    
    
});


/*-----------------------------------top-fixed header----------------------------------*/

(function ($) {
  Drupal.behaviors.yourBehaviorName = {
    attach: function (context, settings) {
  var fixed = false;

$(document).scroll(function() {
    if(jQuery(this).scrollTop() >= 100 ) {
        if( !fixed ) {
            fixed = true;
           jQuery('#header').css({ position: "fixed",   zIndex:99 , left: "0px", right: "0px", top: "0px" ,transition:'all 0.4s ease-in-out 0s'});
           jQuery(".front .brand").css({position:'fixed' , zIndex:999 , transition:'all 0.7s ease-in-out 0s'});
           jQuery(".navbar").css("margin-bottom" , '0px');
           jQuery('#block-views-front-course-details-block .block-title').css({margin:'150px 0px 40px'  ,transition:'all 0s ease-in-out 0s'});
           
            
           
           }

    } else {
        if( fixed ) {
            fixed = false;
           jQuery('#header').css({position:'relative'  ,transition:'all 0s ease-in-out 0s' , borderTop:'none' , borderBottom:'none'});
           jQuery(".front .brand").css({position:'static' , zIndex:0 , transition:'all 0s ease-in-out 0s'});
            //jQuery(".navbar").css("margin-bottom" , '20px');
           jQuery('#block-views-front-course-details-block .block-title').css({ margin:'0 0 30px',transition:'all 0.4s ease-in-out 0s'});
           
        }
    }

    
});

/////////////////////

   
    }
  };
})(jQuery);

/*-------------------------------------end of fixed header-------------------------------*/

/*------------------------------------smooth scroll-----------------------------------------*/
jQuery(document).ready(function(){
jQuery('#header .navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = jQuery(this.hash);
        target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             jQuery('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
 });
});

/*-------------------end of smooth scroll---------------------------*/
jQuery(document).ready(function() {
   
  jQuery("#block-block-3 a").click(function() {
    jQuery('.about_content').slideToggle(400);
  
  });
}); 

/*---------------------------append enroll now button on top ---------------------*/



//  map sliding
jQuery(document).ready(function() {

 jQuery('.california').click(function(){
    jQuery('#banglore').hide(400);
    jQuery('#london').hide(400);
    jQuery("#dublin").hide(400);
    jQuery('#california').show(400);
     }); //end of california
   
      jQuery('.bang').click(function(){
    jQuery('#banglore').show(400);
    jQuery('#california').hide(400);
    jQuery('#london').hide(400);
    jQuery("#dublin").hide(400);
     }); //end of banglore


    jQuery('.london').click(function(){
    jQuery('#banglore').hide(400);
    jQuery('#california').hide(400);
    jQuery("#dublin").hide(400);
    jQuery('#london').show(400);
     }); //end of london

    jQuery('.dublin').click(function(){
    jQuery('#banglore').hide(400);
    jQuery('#california').hide(400);
    jQuery('#london').hide(400);
    jQuery("#dublin").show(400);
     }); //end of london

});


jQuery(document).ready(function(){
 jQuery(".bullet-list li").prepend("<i class='fa fa-long-arrow-right'></i>");
 jQuery(".swiper-container-horizontal").prepend("<h2>Device Platform</h2>");
 jQuery(".block-bootstrap-login-modal li a").eq(0).addClass("loginmodel");
});



//--------------------jQuery------------------------------*/

jQuery(document).ready(function(){
     jQuery(".block-bootstrap-login-modal .menu li a").eq(1).addClass("signup");
  //    jQuery("#navbar ul").addClass("menu-list");
  //    jQuery("#navbar ul li a").addClass("hyper-link");
  // jQuery("#navbar ul li .hyper-link").eq(0).wrapInner("<span class='box-animation'><span class='front'></span><span class='back'>Home</span></span>");
    
    
    /* Every time the window is scrolled ... */
   jQuery(window).scroll( function(){
    
        /* Check the location of each desired element */
       jQuery('.hideme').each( function(i){
            
            var bottom_of_object =jQuery(this).offset().top +jQuery(this).outerHeight();
            var bottom_of_window =jQuery(window).scrollTop() +jQuery(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
               jQuery(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
   

});



