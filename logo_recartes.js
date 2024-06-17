var linkLojaIntegrada = document.querySelector('#rodape div .conteiner .row-fluid a[href="https://www.lojaintegrada.com.br?utm_source=lojas&utm_medium=rodape&utm_campaign=makkers.com.br"]');

linkLojaIntegrada.href = "#";
linkLojaIntegrada.style.cursor = "default";

var divLinks = document.querySelector('#rodape div .conteiner .row-fluid div[style="min-height: 30px; text-align: center; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; float: left; opacity: 1 !important; display: block !important; visibility: visible !important; height: 40px !important; width: 100% !important; margin: 0 !important; position: static !important;"]');

divLinks.classList.add('div-desenvolvedores-makkers');
divLinks.style.cssText = "min-height: 30px; text-align: center; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; float: left; opacity: 1 !important; display: flex !important; visibility: visible !important; height: 40px !important; width: 100% !important; margin: 0 !important; position: static !important; justify-content: center; align-items: center; gap: 50px; margin: 30px 0px 60px 0 !important;"


var logoRecartes = `
<a class="logo-recartes-makkers" target="_blank" href="https://recartes.com.br">
    <?xml version="1.0" encoding="UTF-16"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <!-- Creator: CorelDRAW 2021 (64 Bit) -->
    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="835px" height="200px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
    viewBox="0 0 172.54 41.29"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
    <defs>
    <style type="text/css">
    <![CDATA[
        #rodape .fil1 {fill:#00AFEF}
        #rodape .fil3 {fill:#0099DB}
        #rodape .fil2 {fill:#0098DA}
        #rodape .fil0 {fill:#006BB3}
        #rodape .fil4 {fill:#0099DB;fill-rule:nonzero}
    ]]>
    </style>
    </defs>
    <g id="Camada_x0020_1">
    <metadata id="CorelCorpID_0Corel-Layer"/>
    <g id="_2536965476480">
    <g>
        <polygon class="fil0" points="19.11,21.07 1.14,26.67 1.07,26.61 1.09,26.53 19.07,20.92 19.13,20.98 "/>
        <polygon class="fil1" points="21.11,21.38 34.95,34.15 34.94,34.23 34.85,34.26 21.01,21.49 21.03,21.41 "/>
        <polygon class="fil2" points="20.39,19.49 24.52,1.12 24.61,1.1 24.67,1.16 20.53,19.52 20.45,19.55 "/>
    </g>
    <polygon class="fil3" points="24.47,1.72 35.11,11.58 10.64,6.06 "/>
    <path class="fil0" d="M5.23 8.16l-4.16 18.45 13.91 12.82 4.15 -18.45 -13.9 -12.82zm-0.58 -1.86l-4.65 20.65 15.56 14.34 4.65 -20.64 -15.56 -14.35z"/>
    <path class="fil2" d="M24.61 1.1l-18.06 5.63 13.9 12.82 18.06 -5.63 -13.9 -12.82zm0.24 -1.1l-20.2 6.3 15.56 14.35 20.2 -6.3 -15.56 -14.35z"/>
    <path class="fil1" d="M34.94 34.23l4.15 -18.45 -18.06 5.63 -4.15 18.45 18.06 -5.63zm0.82 0.77l-20.2 6.29 4.65 -20.64 20.2 -6.3 -4.65 20.65z"/>
    </g>
    <path class="fil4" d="M60.42 34.95l-3.92 0 -8.53 -12.11 -0.07 0 0 12.11 -3.43 0 0 -24.94c1.68,-0.93 3.83,-1.4 6.45,-1.4 2.91,0 5.13,0.68 6.64,2.02 1.51,1.35 2.26,3.24 2.26,5.68 0,2.19 -0.71,3.91 -2.13,5.17 -1.42,1.26 -3.34,1.91 -5.75,1.96l0 0 8.48 11.51zm-4.03 -18.49c0,-3.87 -1.85,-5.81 -5.55,-5.81 -1.28,0 -2.26,0.19 -2.94,0.57l0 10.86c0.5,0.15 1.24,0.23 2.23,0.23 4.17,0 6.26,-1.95 6.26,-5.85zm23.01 7.73l-12.79 1.85c0.38,4.58 2.44,6.87 6.19,6.87 1.98,0 3.66,-0.39 5.01,-1.17l0.87 2.19c-1.53,0.93 -3.58,1.39 -6.15,1.39 -2.76,0 -4.94,-0.87 -6.52,-2.6 -1.69,-1.84 -2.53,-4.5 -2.53,-8 0,-3.37 0.77,-5.98 2.3,-7.84 1.46,-1.76 3.42,-2.65 5.89,-2.65 5.23,0 7.8,3.32 7.73,9.96zm-3.17 -1.39c0,-4.28 -1.55,-6.41 -4.66,-6.41 -1.55,0 -2.76,0.62 -3.65,1.88 -0.94,1.36 -1.41,3.36 -1.38,6l9.69 -1.47zm19.24 11.16c-1.01,0.91 -2.53,1.36 -4.57,1.36 -2.26,0 -4.11,-0.95 -5.56,-2.86 -1.45,-1.92 -2.17,-4.48 -2.17,-7.7 0,-3.27 0.74,-5.86 2.23,-7.77 1.41,-1.84 3.27,-2.76 5.58,-2.76 1.96,0 3.46,0.46 4.49,1.36l-0.79 1.93c-0.88,-0.66 -1.89,-0.98 -3.02,-0.98 -3.42,0 -5.13,2.7 -5.13,8.11 0,2.49 0.43,4.46 1.28,5.92 0.88,1.53 2.13,2.3 3.74,2.3 1.13,0 2.16,-0.33 3.09,-0.98l0.83 2.07zm17.5 -0.07c-1.71,0.95 -3.96,1.43 -6.75,1.43 -5.15,0 -7.73,-2 -7.73,-6 0,-2.49 1.1,-4.35 3.32,-5.58 1.76,-0.98 4.44,-1.66 8.03,-2.04l0 -1.24c0,-2.69 -1.49,-4.04 -4.49,-4.04 -1.56,0 -3.19,0.43 -4.9,1.29l-0.79 -1.97c1.83,-1 3.91,-1.51 6.22,-1.51 4.73,0 7.09,2.21 7.09,6.61l0 13.05zm-3.13 -1.17l0 -9.32c-2.84,0.35 -4.84,0.89 -6,1.62 -1.45,0.91 -2.18,2.32 -2.18,4.23 0,2.77 1.61,4.15 4.82,4.15 1.41,0 2.53,-0.23 3.36,-0.68zm17.2 -18.45l-0.78 2.53c-0.65,-0.2 -1.32,-0.3 -1.99,-0.3 -1.07,0 -1.95,0.22 -2.62,0.68l0 17.77 -3.36 0 0 -19.24c2.06,-1.06 4.98,-1.54 8.75,-1.44zm11.4 20.59c-0.68,0.21 -1.29,0.31 -1.81,0.31 -1.71,0 -3.02,-0.54 -3.93,-1.63 -0.75,-0.93 -1.13,-2.1 -1.13,-3.52l0 -13.37 -2.34 0 0 -2.04 2.34 0 0 -4.68 3.36 -1.01 0 5.69 3.51 0 0 2.04 -3.51 0 0 13.3c0,1.97 0.85,2.96 2.54,2.96 0.19,0 0.52,-0.06 0.97,-0.19l0 2.14zm18.86 -10.67l-12.79 1.85c0.38,4.58 2.44,6.87 6.19,6.87 1.98,0 3.66,-0.39 5.01,-1.17l0.87 2.19c-1.53,0.93 -3.58,1.39 -6.15,1.39 -2.76,0 -4.94,-0.87 -6.52,-2.6 -1.69,-1.84 -2.53,-4.5 -2.53,-8 0,-3.37 0.77,-5.98 2.3,-7.84 1.46,-1.76 3.42,-2.65 5.89,-2.65 5.23,0 7.8,3.32 7.73,9.96zm-3.17 -1.39c0,-4.28 -1.55,-6.41 -4.66,-6.41 -1.55,0 -2.77,0.62 -3.65,1.88 -0.94,1.36 -1.41,3.36 -1.39,6l9.7 -1.47zm18.41 6.49c0,1.61 -0.62,2.99 -1.85,4.15 -1.31,1.2 -2.97,1.81 -4.98,1.81 -2.24,0 -3.97,-0.47 -5.2,-1.4l0.91 -2.19c0.95,0.81 2.28,1.21 3.97,1.21 1.11,0 2.03,-0.33 2.73,-1 0.71,-0.67 1.06,-1.5 1.06,-2.51 0,-1 -0.26,-1.8 -0.8,-2.37 -0.52,-0.58 -1.39,-1.09 -2.57,-1.51 -3.19,-1.19 -4.78,-3.08 -4.78,-5.7 0,-1.56 0.56,-2.88 1.68,-3.96 1.12,-1.08 2.59,-1.62 4.4,-1.62 1.78,0 3.37,0.46 4.75,1.39l-0.87 2c-1,-0.75 -2.14,-1.13 -3.39,-1.13 -1.06,0 -1.89,0.31 -2.49,0.92 -0.61,0.62 -0.91,1.38 -0.91,2.29 0,1.58 1.13,2.8 3.4,3.66 3.29,1.25 4.94,3.24 4.94,5.96z"/>
    </g>
    </svg>

  </a>


` 


divLinks.insertAdjacentHTML('beforeend', logoRecartes);
