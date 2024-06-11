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
            <a href="#" data-bs-toggle="modal" data-bs-target="#modalEnvioMesmoDia">
                <i class="bi bi-box"></i>
                <div>
                    <h4>Envio no <br> mesmo dia</h4>
                    <p>pedidos até as 14h30</p>
                </div>
            </a>
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

    <div class="modal fade" id="modalEnvioMesmoDia" tabindex="-1" aria-labelledby="modalEnvioMesmoDiaLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="modalEnvioMesmoDiaLabel">Envio no mesmo dia</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Para pedidos com pagamentos confirmados até 14h30
                </div>
            </div>
        </div>
    </div>
    `
    
    bannerPrincipal.insertAdjacentHTML('afterend', codigo);
    