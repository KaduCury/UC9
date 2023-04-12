function avisoPagDeEstudos(){
  alert("Esta é uma página feita para finalidade de Estudos!" + "\n" + "Não se trata de uma loja de verdade!" + "\n" + "Obrigado!");
}

function tocarMusica(){
    var audio1 = new Audio();
    audio1.src = "Imagens/rollingChair.wav";
    audio1.play();
}

$("#CEP").mask("99.999-999");

$("#EMAIL").mask("exemplo@exemplo.com.br")

function alerta(){
    alert("Seu email foi incluido com sucesso!")
}

function addSacola(){
    alert("Seu produto foi incluído na sacola de compras")
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
/*
  $("#menu-mobile").click(()=>{
  $("#menu-slide").toggleClass("show")
})

*/
