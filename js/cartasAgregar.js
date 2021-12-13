import Carta from "./Carta.js";

const opcionesCartas ={
    TIPO_COMODIN: 1,
    TIPO_NORMAL: 0,
    comodines: ['Meteoro', 'Alienigena', 'Impulso'],
    colores: ['amarillo', 'rojo', 'verde', 'azul']
};

export const cartas = [
    new Carta(opcionesCartas.TIPO_COMODIN, opcionesCartas.comodines[0], opcionesCartas.colores[0], null, null),
    new Carta(opcionesCartas.TIPO_COMODIN, opcionesCartas.comodines[1], opcionesCartas.colores[0], null, null),
    new Carta(opcionesCartas.TIPO_COMODIN, opcionesCartas.comodines[2], opcionesCartas.colores[0], null, null),

    new Carta(opcionesCartas.TIPO_COMODIN, opcionesCartas.comodines[0], opcionesCartas.colores[1], null, null),
    new Carta(opcionesCartas.TIPO_COMODIN, opcionesCartas.comodines[1], opcionesCartas.colores[1], null, null),
    new Carta(opcionesCartas.TIPO_COMODIN, opcionesCartas.comodines[2], opcionesCartas.colores[1], null, null),

    new Carta(opcionesCartas.TIPO_COMODIN, opcionesCartas.comodines[0], opcionesCartas.colores[2], null, null),
    new Carta(opcionesCartas.TIPO_COMODIN, opcionesCartas.comodines[1], opcionesCartas.colores[2], null, null),
    new Carta(opcionesCartas.TIPO_COMODIN, opcionesCartas.comodines[2], opcionesCartas.colores[2], null, null),

    new Carta(opcionesCartas.TIPO_COMODIN, opcionesCartas.comodines[0], opcionesCartas.colores[3], null, null),
    new Carta(opcionesCartas.TIPO_COMODIN, opcionesCartas.comodines[1], opcionesCartas.colores[3], null, null),
    new Carta(opcionesCartas.TIPO_COMODIN, opcionesCartas.comodines[2], opcionesCartas.colores[3], null, null),

    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[0], '¿Cual es el objeto de estudio de la teoria conductista?', [
        'Investiga la conducta observable, analisis basado en la experiencia',
        'Enfoque espitemológico basándose en la relación o interacción que se establece entre el objeto del conocimiento y el sujeto que aprende',
        'Que permite conocer cómo intervienen los procesos neurobiológicos en el aprendizaje'
    ],1),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[1], '¿En qué consiste el condicionamiento operante?',[
        'es el término que se emplea para referirse al método de aprendizaje que se produce a través de la asociación de refuerzos',
        'es un procedimiento que consiste en establecer ciertas condiciones de control de estímulos',
        'Regula el equilibrio corporal,la postura,el control muscular,el movimiento,la adquisición de habilidades motoras'
    ]),2,

];