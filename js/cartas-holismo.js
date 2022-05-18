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

    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[0], '¿Qué se puede expresar en la dimensión comunicativa?', [
        'Pensamientos',
        'Personalidad',
        'Amor propio',
        'Dinero'
    ],1),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[1], '¿Qué habilidad está relacionada con la dimensión comunicativa?', [
        'Comunicación asertiva',
        'Discurso',
        'Chisme',
        'Dar ordenes'
    ],2),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[2], '¿Cual de estas NO es una practica para el bienestar fisico?', [
        'Salir a fiesta todos los dias',
        'Realizar ejercicio',
        'Comer sanamente',
        'No fumar'
    ],3),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[3], 'La dimensión fisica es:', [
        'Ser la persona mas fuerte del mundo',
        'Practicar un deporte extremo',
        'Cuidar tu cuerpo y tu alimentación',
        'Ser el mas inteligente de tu salón'
    ],4),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[0], 'El ser humano tiene una necesidad:', [
        'Cognitiva',
        'Social',
        'De conocimiento',
        'Económica'
    ],5),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[1], 'La dimensión social consiste en:', [
        'Relaciones amorosas',
        'Relaciones con los individuos',
        'Desiciones sociales',
        'La familia'
    ],6),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[2], 'Es una practica de la dimensión espiritual:', [
        'Uso de la fé',
        'Odiar a otras personas',
        'Respeto a los demás',
        'Inteligencia emocional'
    ],7),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[3], 'Pertenece a la dimensión emocional:', [
        'Autoconocerse',
        'Ejercicio fisico',
        'Distinción de lo bueno y lo malo',
        'Poco sentido de la vida'
    ],8),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[0], '¿Quién determina la ética?', [
        'Uno mismo',
        'La sociedad',
        'El presidente',
        'La ley'
    ],9),
    
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[1], '¿Cuál de estos NO es una manera de expresar los sentimientos?', [
        'Arte',
        'Danza',
        'Pintura',
        'Conducir'
    ],10),
    
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[3], 'Menciona un felino que no sea gato', [
    ],11),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[3], '¿Como se llama este gato?', [
        '<img src="https://cdni.rbth.com/rbthmedia/images/2021.06/original/60c5350115e9f9152b1c4529.jpg" width="100px"/>'
    ],12),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[3], '¿Como se llama este perro?', [
        '<img src="https://i.redd.it/pws4qtk7x6461.jpg" width="100px"/>'
    ],13),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[0], '¿Qué es la dimensión holistica?', [
        ''
    ],14),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[1], 'Menciona un ejemplo de la dimensión fisica', [
        ''
    ],15),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[2], 'Menciona un ejemplo de la dimensión cognitiva', [
        ''
    ],16),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[3], 'Menciona un ejemplo de la dimensión emocional', [
        ''
    ],17),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[0], 'Menciona un ejemplo de la dimensión espiritual', [
        ''
    ],18),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[1], 'Menciona un ejemplo de la dimensión ética', [
        ''
    ],19),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[2], 'Menciona un ejemplo de la dimensión estética', [
        ''
    ],20),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[3], 'Menciona un ejemplo de la dimensión comiunicativa', [
        ''
    ],21),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[0], 'Menciona un ejemplo de la dimensión social', [
        ''
    ],22),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[1], '¿Qué podemos hacer para mantener un equilibrio con todas las dimensiones?', [
        ''
    ],23),
    

    //new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[0], '', [],4)
    //new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[0], '', [],4)
];