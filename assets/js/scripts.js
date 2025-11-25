import { inicializarDarkMode } from "./modules/darkMode.js";
import { inicializarFormularioContato } from "./modules/inicializarFormulario.js";

document.addEventListener('DOMContentLoaded', () => {
    inicializarDarkMode();
    inicializarFormularioContato();
    console.log('DOM carregado, Dark Mode inicializado.');
   
    AOS.init({
        duration: 1000
    });
    
    const app = document.getElementById('titulo-datilografado');
        if (app) { 
            const typewriter = new Typewriter(app, {
                loop: true,
                delay: 75,
            });

            typewriter
                .typeString('CÓDIGO & DESIGN')
                .pauseFor(1000)
                .deleteAll()
                .typeString('Desenvolvimento Web')
                .pauseFor(1000)
                .deleteAll()
                .typeString('User Interface')
                .pauseFor(1000)
                .start();
        }
})