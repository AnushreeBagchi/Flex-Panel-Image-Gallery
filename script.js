$('.panel').on('click',function (){
   $(this).toggleClass('expand');
   $(this).children('.first').toggleClass('onClick');
   $(this).children('.last').toggleClass('onClick');
})