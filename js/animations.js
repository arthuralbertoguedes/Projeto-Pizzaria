function bgControl(){
  var widthScreen = window.innerWidth
  if(widthScreen<=768){
    $('.navbar').addClass('bg-light')
  }
  else{
    $('.navbar').removeClass('bg-light')
  }
}

$.ready(
    $('body').scroll(function(){
      let width = window.innerWidth

      /*Controle para dispositivos mobiles/desktop*/

      if(width<=768){
        $('.navbar').addClass('bg-light')
      }
      else if(width>768){
        $('.navbar').removeClass('bg-light')
        let heightWindow = window.innerHeight
        let heightDiv = $('.divPizza').offset().top
        $('.divPizza').css({opacity:0})

        /*Animações com Header*/

        $('.navbar').addClass('bg-light')
        $('.navbar').css({position:'fixed','z-index':'5',width:'100%'})
        let distanceScrollTop = $('body').scrollTop()
        if(distanceScrollTop<15){
          $('.navbar').removeClass('bg-light')
          $('.navbar').css({position:'relative'})
        }

        /*Animações com Divs*/
      
        //Quando a altura do elemento for menor que a altura da tela, significa que o elemento se torna visível
        if(heightDiv<heightWindow*3/4){
          $('.divPizza').animate({opacity:1},2000)
        }
      }
  } )
)
       




