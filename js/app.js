import Ruleta from './Ruleta.js';
import {componentesRuleta, componentesBaraja} from './Componentes.js';

(function(){
    const ruleta = new Ruleta(1, 5);
    console.log(ruleta);

    componentesRuleta.botonGirar.addEventListener('click', ()=>{
        ruleta.girar();
    });
})();
