// code p/ fazer efeito da aba lateral
// chamar variavel hamburguer que recebe o seletor de consulta de documento (class .hamburguer)
let hamburguer = document.querySelector(".hamburguer")
// a partir da var hamburguer sera add um evento que vai escutar o evento de click
// quando aconter o evento de click sera executada essa funcao
// e a partir da lista de classe fazer uma alternacao (toggle) add ou remover class show-menu
hamburguer.addEventListener("click", function () {
    document.querySelector(".container").classList.toggle("show-menu")
    document.querySelector(".menuBurguer").innerHTML = ""
})






