function rolagem() {
    var cabecalho = document.getElementById("cabecalho");

    if (window.scrollY > 1) { // Verifica se o scroll é maior que 50px
        cabecalho.classList.add('cabecalho-rolagem-makkers');
    } else {
        cabecalho.classList.remove('cabecalho-rolagem-makkers');
    }
}
window.addEventListener("scroll", rolagem);
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {

        var ajudaLiDiv = document.querySelector('li.visible-phone a>div');

        ajudaLiDiv.innerHTML = 'Precisa de ajuda? <br><b>Fale Conosco</b>'
    
    }, 700);
});