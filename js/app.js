import Ruleta from './Ruleta.js';
import Carta from './Carta.js';
import Baraja from './Baraja.js';
import { cartas } from './cartasAgregar.js';
import {componentesRuleta, componentesBaraja} from './Componentes.js';

(function(){

    const ruleta = new Ruleta(1, 5);
    let baraja;
    
    //EN CASO DE ESTAR EN LA PAGINA DE RULETA
    if(componentesRuleta.botonGirar){
        componentesRuleta.botonGirar.addEventListener('click', ()=>{
            ruleta.girar();
        });   
    }
    
    //EN CASO DE ESTAR EN LA PÁGINA DE CARTAS
    if(componentesBaraja.baraja){
        
        const baraja = new Baraja(cartas);
        baraja.crearBarajaHTML();
        //RESOLVER ESTA PARTE
        baraja.revolver();
        baraja.mostrarCartasEnBaraja();
        
        componentesBaraja.botonSacarCarta.addEventListener('click', ()=>{
            baraja.siguiente();
        });

        componentesBaraja.botonReiniciarBaraja.addEventListener('click', ()=>{
           location.reload();
        });
    }

})();
