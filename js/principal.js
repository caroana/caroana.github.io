window.onload = function(){
    var barraCarga = document.getElementById('barra-carga');
    
    barraCarga.style.visibility = 'hidden';
    barraCarga.style.display = 'none';
}
$('document').ready(function(){
    //ANIMACIÓN DE "REVELACIÓN" DE TEXTO.

    /* Guardo en la variable "profesion" la etiqueta que contiene el texto 
    al cual quiero aplicar el efecto de revelado.*/
    const cargo = baffle(".cargo ");

    /* Le asigno a la variable profesión (que contiene el texto que quiero animar) los caracteres a utilizar para 
    la animación del texto revelado (puedes utilizar cualquier tipo de carácteres). También asigno la velocidad que tendrá el efecto de las letras*/
    cargo .set({
        characters: '█▓▓ ░░>██ ▓█▓>▓ ▓<█ ░<▒░▓ █░<█ █▒> ▓░▓< ▒▓░░',
        speed: 90
    });

    // Ejecuto el inicio de la animacion.
    cargo .start();
    // Establezco la duración que tendrá la animación antes de revelar el texto.
    cargo .reveal(3000);

    var boton = document.getElementById('boton');
    function about(){
      $('#tagline').t({
        beep:false,
        caret:'<span style="color:white;">•</span>',
        typing:function(elm,chr){
        if(chr.match(/\-trigger/))
            $('#pow-txt').show().delay(500).fadeOut(0);
        }
    });
    }
    const aboutClick = document.getElementById("aboutClick");
    aboutClick.addEventListener("click", about);
     
       document.getElementById("verMas1").addEventListener("click", function() {
       const portfolioWrap = this.parentNode.querySelector(".portfolio-wrap[id=\"" + this.getAttribute("portfolioProject") + "\"]");
       portfolioWrap.querySelector("::before");
      // portfolioWrap.querySelector("::before").style.opacity = 1;
     });
    
 

    $('#boton-arriba').click(function(){
        $('body, html').animate({
          scrollTop: '0px'
        }, 300);
      });
   
    $(window).scroll(function(){
      if( $(this).scrollTop() > 0 ){
        $('#boton-arriba').slideDown(300);
      } else {
        $('#boton-arriba').slideUp(300);
      }
    });
});