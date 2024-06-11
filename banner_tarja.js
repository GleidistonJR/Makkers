var bannerPrincipal = document.querySelector('.secao-banners')

var codigo = `
    <section id="features-recartes" class="container d-flex">
        <div class="feature-item d-flex">
            <a href="https://www.makkers.com.br/pagina/politica-de-frete.html">
                <i class="bi bi-truck"></i>
                <div>
                    <h4>Frete grátis para todo Brasil</h4>
                    <p>Consulte as condições</p>
                </div>
            </a>
        </div>
        <div class="feature-item d-flex">
            <i class="bi bi-credit-card"></i>
            <div>
                <h4>Parcele em até</h4>
                <p>3x sem juros</p>
            </div>
        </div>
        <div class="feature-item d-flex">
            <i class="bi bi-box"></i>
            <div>
                <h4>Envio no mesmo dia útil</h4>
                <p>pedidos até as 14:30</p>
            </div>
        </div>
        <div class="feature-item d-flex">
            <i class="bi bi-tools"></i>
            <div>
                <h4>Suporte Técnico</h4>
                <p>seg á sex - 8h ás 17h</p>
            </div>
        </div>
        <div class="feature-item d-flex">
            <i class="bi bi-file-text"></i>
            <div>
                <h4>Nota Fiscal Eletrônica</h4>
                <p>para todos os pedidos</p>
            </div>
        </div>
    </section>`
    
    bannerPrincipal.insertAdjacentHTML('afterend', codigo);
    