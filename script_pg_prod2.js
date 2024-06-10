//buscando preço do pix
var shearchPreco = document.querySelectorAll('div.span5 div.acoes-produto div.preco-produto span.desconto-a-vista strong');
shearchPreco.forEach(function (preco) {
  var valor = preco.textContent //pegando o texto dentro das formataçoes

  //Buscando os accordions
  var acordions = document.querySelectorAll('span.accordion-toggle'); 
  acordions.forEach(function (acordion) {
    if (acordion.textContent.includes(valor)) { //vendo se o accordion capturado e o acordion do pix (comparando com valor do pix capturado)

      acordion.innerHTML += ''

      acordion.querySelector('img').classList.add('d-none')//adicionando class 'd-none 'na imagem  

      //SVG do pix com a pagali
      acordion.innerHTML += ` 
        <?xml version="1.0" encoding="UTF-16"?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <!-- Creator: CorelDRAW 2021 (64 Bit) -->
        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="140px" height="30px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
        viewBox="0 0 16.91 2.64"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
        <defs>
          <clipPath id="id0">
            <path d="M0 0.04l16.86 -0.04 0.05 2.59 -16.86 0.05 -0.05 -2.6z"/>
          </clipPath>
        </defs>
        <g id="Camada_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer"/>
          <g style="clip-path:url(#id0)">
          <image x="0.18" y="0.19" width="16.51" height="2.41" xlink:href="data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAeQB9AAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgF
        BQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUE
        BQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU
        FBT/wAARCAAbALMDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QA
        tRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkK
        FhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJ
        ipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx
        8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcF
        BAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygp
        KjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJma
        oqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oA
        DAMBAAIRAxEAPwD9K/HPjFPCekytbrBeavIp+yafJcxxPM3TjcwyAfTJ9K+INb8b+JbrxjLrN7fX
        VvrcUxO7JRoSD9wL/CB020nxG13WNe8Z6pc640gv1maNon48kKSAgHYD/wCv3rstKa/1PRLfXbnR
        oL3xHDCxsZppwJLqNOPOaAjMzRgHDZGcchthr3aVFUI3et/6+4/B82zern+IdKk5U40m2lrrZ6tp
        Walp7qvborPU+mPhX8QLjxbodtHrUMWm6+Iw0loZk8yRcAiQR53KCCDhgOvpXZ39/b6XYz3l3KsF
        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
        CjorKeqkZBp9FSMTaPQUUtFAH//Z"/>
          </g>
        </g>
        </svg>
        `

    }

  })
})
