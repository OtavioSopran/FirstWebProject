// code p/ fazer efeito da aba lateral

let hamburguer = document.querySelector(".hamburguer")

hamburguer.addEventListener("click", function () {
    document.querySelector(".container").classList.toggle("show-menu")
})

