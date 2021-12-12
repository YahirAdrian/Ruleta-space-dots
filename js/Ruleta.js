import { componentesRuleta, rutaImagenesNaves } from "./Componentes.js";

export default class Ruleta{
    grados = 0;
    vueltas_minimo = 1;
    vueltas_maximo = 2;
    maximo = this.vueltas_maximo * 360;
    minimo = this.vueltas_minimo * 360;

    constructor(vueltas_minimo, vueltas_maximo){
        this.angulo = 0;
        this.vueltas_minimo = vueltas_minimo;
        this.vueltas_maximo = vueltas_maximo;
        this.minimo = this.vueltas_minimo * 360;
        this.maximo = this.vueltas_maximo * 360;
    }

    girar() {
        this.grados = this.numeroAleatorio();
        componentesRuleta.ruleta.style= `transform: rotate(${this.grados}deg)`;
        setTimeout(()=>{
            this.cambiarJugador(this.numeroAleatorio());
        }, 1300);

    }

    numeroAleatorio(){
        return Math.floor((Math.random() * (this.maximo-this.minimo)) +this.minimo);
    }

    cambiarJugador(){
        const gradosReales = this.grados%360;
        const gradoSeparacion = 60;

        if(gradosReales >=0 && gradosReales<gradoSeparacion*1){
            componentesRuleta.nombreJugador.textContent="Amarillo";
            componentesRuleta.imagenJugador.src= rutaImagenesNaves.naveAmarilla;
        }else if(gradosReales >=gradoSeparacion*1 && gradosReales<gradoSeparacion*2){
            
            componentesRuleta.nombreJugador.textContent="Verde";
            componentesRuleta.imagenJugador.src= rutaImagenesNaves.naveVerde;
            
        }else if(gradosReales >=gradoSeparacion*2 && gradosReales<gradoSeparacion*3){
            
            componentesRuleta.nombreJugador.textContent="Rosado";
            componentesRuleta.imagenJugador.src= rutaImagenesNaves.naveRosada;
        }else if(gradosReales >=gradoSeparacion*3 && gradosReales<gradoSeparacion*4){
            componentesRuleta.nombreJugador.textContent="Rojo";
            componentesRuleta.imagenJugador.src= rutaImagenesNaves.naveRoja;
            
        }else if(gradosReales >=gradoSeparacion*4 && gradosReales<gradoSeparacion*5){

            componentesRuleta.nombreJugador.textContent="Morado";
            componentesRuleta.imagenJugador.src= rutaImagenesNaves.naveMorada;
        }else{
            componentesRuleta.nombreJugador.textContent="Azul";
            componentesRuleta.imagenJugador.src= rutaImagenesNaves.naveAzul;
        }
        //Amarillo, verde, rosado, rojo, morado, azul
        console.log(gradosReales);
    }

}