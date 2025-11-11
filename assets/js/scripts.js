import { inicializarDarkMode } from "./modules/darkMode.js";
import { inicializarFormularioContato } from "./modules/inicializarFormulario.js";

document.addEventListener('DOMContentLoaded', () => {
    inicializarDarkMode();
    console.log('DOM carregado, Dark Mode inicializado.');

    const titulo = document.querySelector('.hero-titulo');
    
    if (titulo) {
        const textoOriginal = titulo.textContent;
        const letras = textoOriginal.split('');

        titulo.textContent = ''; 

        letras.forEach(letra => {
            
            const span = document.createElement('span'); 
            
            span.textContent = letra; 
            
            if(letra === ' ') {
                span.className = 'espaco';
            }
            
            titulo.appendChild(span);
        });

        const spans = titulo.querySelectorAll('span');
        let delay = 75; 

        spans.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('visible');
            }, index * delay);
        });
    }

    AOS.init({
        duration: 1000
    });
    inicializarFormularioContato();
});


