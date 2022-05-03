$(document).ready(function(){
   $('.header__burger').click(function(event){
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   })
});
function slowScroll(id) {
   var offset = 0;
   $('html, body').animate({
      scrollTop: $(id).offset().top - offset
   }, 1000);
   const headerBurger = document.querySelector('.header__burger');
   const headerMenu = document.querySelector('.header__menu');

   if (headerBurger.classList.contains('active')){
      headerBurger.classList.remove('active');
      headerMenu.classList.remove('active');
      document.body.classList.remove('lock');
   }
   return false;
}

