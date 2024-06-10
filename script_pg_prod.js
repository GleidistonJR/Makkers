// Encontrar todas as classes com a tag "desconto-a-vista" presentes no documento
var pg_produto = document.querySelectorAll('.acoes-produto');


pg_produto.forEach(function(pai) {
    var classesDescontoPg = pai.querySelectorAll('.desconto-a-vista');

    
    // Iterar sobre as classes encontradas
    classesDescontoPg.forEach(function(elemento, index) {
        for (var i = 0; i < elemento.childNodes.length; i++) {
        var node = elemento.childNodes[i];


        // Verificar se o nó é de texto
        if (node.nodeType === Node.TEXT_NODE) {
            // Alterar o conteúdo do nó de texto
            node.textContent = '';
        }
        }
        elemento.innerHTML += ` 
        <?xml version="1.0" encoding="UTF-16"?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <!-- Creator: CorelDRAW 2021 (64 Bit) -->
        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="140px" height="30px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
        viewBox="0 0 16.89 2.87"
         xmlns:xlink="http://www.w3.org/1999/xlink"
         xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
         <defs>
          <style type="text/css">
           <![CDATA[
            .fil0 {fill:#EDEDED}
           ]]>
          </style>
           <clipPath id="id0">
            <rect x="0.2" y="0.26" width="16.48" height="2.41"/>
           </clipPath>
         </defs>
         <g id="Camada_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer"/>
          <rect class="fil0" width="16.89" height="2.87"/>
          <g style="clip-path:url(#id0)">
           <image x="0.2" y="0.26" width="16.49" height="2.4" xlink:href="data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAeQB9AAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgF
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
        DAMBAAIRAxEAPwD9BPGHilPDWmyNCsN1qbr/AKNZPcJE0rdONxGR9Mn0r5B1fxf4guPFUmq3d5cQ
        6vHKTnJQxEH7oHYDpijx7rOq614s1GfV2cXqTNGY248oAkBAOwH/ANfvXV6a17qOkQ6zcaVBea9D
        Exs5ZpgJLhE/5amEj96UwcNkZxyG2mvdpUVQjd63/r7j8FzfN6uf4h0qTlTjTbaWutnu0rNS091X
        8lZ6n0B8OPGs/ibR7dNWijsNaCAvamVN8i4GJAmdyg5HBA/Kurvb2DTrSa6uZFht4UMkkjdFUDJN
        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
        0+ip3KG7F/uj8qKdRQB//9k="/>
          </g>
         </g>
        </svg>




        `
        });
});