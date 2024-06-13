var bannerPrincipal = document.querySelector('.secao-banners')

var codigo = `
    <section id="features-recartes" class="container d-flex">
        <div class="feature-item d-flex">
            <a href="https://www.makkers.com.br/pagina/politica-de-frete.html">
                <i class="bi bi-truck"></i>
                <div>
                    <h4>Frete grátis <br> para todo Brasil</h4>
                    <p>Consulte as condições</p>
                </div>
            </a>
        </div>
        <div class="feature-item d-flex">
            <i class="bi bi-credit-card"></i>
            <div>
                <h4>3x sem juros ou</h4>
                <p>5% OFF no PIX</p>
            </div>
        </div>
        <div class="feature-item d-flex">
            <a href="#" id="openModalBtnMakkers">
                <i class="bi bi-box"></i>
                <div>
                    <h4>Envio no <br> mesmo dia</h4>
                    <p>pedidos até as 14h30</p>
                </div>
            </a>
            <div id="myModalMakkers" class="modalMakkers">
                <div class="modal-contentMakkers">
                    <span class="closeMakkers">&times;</span>
                    <h3>Envio no mesmo dia</h3>
                    <hr>
                    <p><b>Motoboy:</b> Para pedidos com pagamentos confirmados até 14h30 em Goiânia</p>
                    <p><b>Transportadoras:</b> Para pedidos com pagamentos confirmados até 14h30 envios para todo o
                        Brasil </p>
                    <br>
                    <p><b>Válido de segunda à sexta para pedidos cujos pagamentos sejam confirmados até os respectivos
                            horários
                            informados.</b></p>
                </div>
            </div>
        </div>
        <div class="feature-item d-flex">
            <i class="bi bi-tools"></i>
            <div>
                <h4>Suporte Técnico</h4>
                <p>seg à sex - 8h às 17h</p>
            </div>
        </div>
        <div class="feature-item d-flex">
            <i class="bi bi-file-text"></i>
            <div>
                <h4>Nota Fiscal <br> Eletrônica</h4>
                <p>para todos os pedidos</p>
            </div>
        </div>
    </section>



    `

bannerPrincipal.innerHTML += codigo;  // Adiciona o HTML ao DOM

// Pega o modal
var modal = document.getElementById("myModalMakkers");

// Pega o botão que abre o modal
var btn = document.getElementById("openModalBtnMakkers");

// Pega o elemento <span> que fecha o modal
var span = document.getElementsByClassName("closeMakkers")[0];

// Quando o usuário clicar no botão, abre o modal
btn.onclick = function () {
    modal.style.display = "block";
}

// Quando o usuário clicar em <span> (x), fecha o modal
span.onclick = function () {
    modal.style.display = "none";
}

// Quando o usuário clicar fora do modal, fecha o modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}