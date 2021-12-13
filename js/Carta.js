export default class Carta{

    static leyendas ={
        alienigena: 'Guarda esta carta para avanzar en caso de no conocer una respuesta',
        meteoro: 'Pierdes la oportunidad de avanzar en el tablero',
        impulso: 'Avanza a la siguiente casilla del color de la carta'
    }
    constructor(tipo, dato, color, leyenda, opciones, numero){
        this.tipo = tipo;
        this.dato = dato;
        this.color = color;
        this.leyenda  = leyenda;
        this.opciones = opciones;
        this.numero = numero;
    }


}