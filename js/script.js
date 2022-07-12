$(document).ready(function(){

    // For Mobile Navbar

    // hamburger opening function
   $('.hamburger').click(function(){
    $('.mobile-nav').addClass("nav-show");
    $('.close').show();
    $(this).hide(100);
   }) 

//  closing function
   $('.close').click(function(){
    $('.mobile-nav').removeClass("nav-show");
    $('.hamburger').show();
    $(this).hide();
   })


//    drop down behaviour of nav-item both mobile and desktop

//    for product drop-down
   $('.product').click(function(){
    $('.product-dropdown > ul').toggle(100);
    $('.product > img').toggleClass("rotate");
    $('.company-dropdown > ul').hide(100);
    $('.company > img').removeClass("rotate");
    $('.connect-dropdown > ul').hide(100);
    $('.connect > img').removeClass("rotate");
   })

   //    for company drop-down
   $('.company').click(function () {
       $('.company-dropdown > ul').toggle(100);
       $('.company > img').toggleClass("rotate");
       $('.product-dropdown > ul').hide(100);
       $('.product > img').removeClass("rotate");
       $('.connect-dropdown > ul').hide(100);
       $('.connect > img').removeClass("rotate");
   })

   //    for connect drop-down
   $('.connect').click(function () {
       $('.connect-dropdown > ul').toggle(100);
       $('.connect > img').toggleClass("rotate");
       $('.company-dropdown > ul').hide(100);
       $('.company > img').removeClass("rotate");
       $('.product-dropdown > ul').hide(100);
       $('.product > img').removeClass("rotate");
   })
   


})