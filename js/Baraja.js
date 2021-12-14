import Carta from './Carta.js';
import {componentesBaraja, rutaImagenesComodines} from './Componentes.js'
export default class Baraja{
    constructor(cartas){
        this.cartas = cartas;
        this.cartasEnLaBaraja = 0;
        this.cartasHTML = [];
        
    }   

    siguiente(){
        if(this.cartasHTML.length != 0){
            const opciones = document.querySelector('#opciones-respuestas-li');
            opciones.innerHTML = '';
            if(componentesBaraja.lienzo.querySelector('.carta')){
                componentesBaraja.lienzo.querySelector('.carta').remove();
            }
            componentesBaraja.lienzo.appendChild(this.cartasHTML[this.cartasHTML.length-1].cartaMostrar);
            componentesBaraja.lienzo.querySelector('.carta').style ="position: inherit";
            
            //---Poner las opciones
            if(this.cartasHTML[this.cartasHTML.length-1].carta.opciones){
                this.cartasHTML[this.cartasHTML.length-1].carta.opciones.forEach(opcion=>{
                    opciones.innerHTML+=`<li>${opcion}</li>`;
                });
            }

            this.cartasHTML.pop();
        }
    }

    revolver(){
        // console.log(this.cartasHTML);
        this.cartasHTML = this.cartasHTML.sort(function() { return Math.random() - 0.5 });
        // this.mostrarCartasEnBaraja();

    }

    numeroAleatorio(minimo, maximo){
        return Math.floor((Math.random() * (maximo-minimo)) +minimo);
    }

    mostrarCartasEnBaraja(){

        for(let i = this.cartasHTML.length-1; i>0; i--){

            componentesBaraja.baraja.appendChild(this.cartasHTML[i].cartaMostrar);
            this.cartasEnLaBaraja++;
        }
        // console.log(this.cartasEnLaBaraja);
    }

    crearBarajaHTML(){
        this.cartas.forEach(carta=>{
            const cartaMostrar = document.createElement('div');
            const titulo =  document.createElement('span');
            const imagen = document.createElement('img');
            const leyenda = document.createElement('span');
        

            cartaMostrar.classList.add('carta');
            titulo.classList.add('titulo');
            leyenda.classList.add('leyenda');

            cartaMostrar.classList.add(carta.color);

            if(carta.tipo == 1){ // SI LA CARTA ES UN COMODIN
                switch(carta.dato){
                    case 'Meteoro':
                        imagen.src = rutaImagenesComodines.meteoro;
                        leyenda.textContent = Carta.leyendas.meteoro;
                        break;
                        case 'Impulso':
                        imagen.src = rutaImagenesComodines.impulso;
                        leyenda.textContent = Carta.leyendas.impulso;
                        break;
                        
                        default: 
                        imagen.src = rutaImagenesComodines.alienigena;
                        leyenda.textContent = Carta.leyendas.alienigena;
                }
            }else{
                if(carta.numero){
                    const numeroPregunta = document.createElement('span');
                    numeroPregunta.classList.add('numero-pregunta');
                    numeroPregunta.textContent = '' + carta.numero;
                    cartaMostrar.appendChild(numeroPregunta);
                }
                imagen.src = 'src/pregunta.png';
                leyenda.textContent = carta.leyenda;
            }

            titulo.textContent = carta.dato;

            //AGREGAR CARTA A LA BARAJA
            // componentesBaraja.baraja.appendChild(carta);

            cartaMostrar.appendChild(titulo);
            cartaMostrar.appendChild(imagen);
            cartaMostrar.appendChild(leyenda);

            this.cartasHTML.push({cartaMostrar, carta});
            
        });

        // console.log(this.cartasHTML);
    }

}