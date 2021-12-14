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
    ],2),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[2], '¿Qué es una operante?',[
        'Una operante es una conducta que opera sobre el ambiente para lograr cambio',
        'Persona que tiene por oficio establecer las comunicaciones que no son automáticas en una central telefónica.',
        'es un símbolo matemático que indica que debe ser llevada a cabo una operación especificada sobre un cierto número de operandos.'
    ],3),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[3], '¿En qué se diferencian el condicionamiento clásico y el condicionamiento operante?', [
        'Pregunta abierta'
    ],4),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[0], '¿Cual es un refuerzo positivo?', [
        'Premio. Es un refuerzo que aumenta la probabilidad de emisión de una determinada conducta para que aparezca el refuerzo.',
        'Castigo. un refuerzo positivo es castigar al niño para motivarlo a seguir con determinación y seguir con un gran refuerzo',
        'Negociación: el chico negocia para sacar algo de su provecho para motivarlo para aumentar la probabilidad de éxito si le es conveniente, si no, no se motiva'
    ],5),

    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[1], '¿Cual es un refuerzo negativo?', [
        'Se considera que un reforzador negativo es un objeto o suceso cuya eliminación tras una conducta aumenta la probabilidad de que esta conducta aumenta',
        'La recompensa excesiva es un refuerzo positivo puede ser un refuerzo negativo y ya que este deja el interés en su meta y se concentra en la recompensa o premio'
    ],6),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[2], '¿Qué psicólogo estadounidense fue destacado por su teoría del aprendizaje (el conexionismo) durante la primera mitad del siglo XX?', [
        'Edward L. Thorndike',
        'Katzir y Paré-Blagoev',
        'Jean William Fritz Piaget'
    ],7),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[3], 'Es el castigo', [
        'es toda consecuencia que reduce la frecuencia de un comportamiento anterior',
        'tirarle la chancla al niño si hizo algo malo',
        'darle cosas para al niño para que se calle'
    ],8),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[0], '¿Quién es el máximo representante del condicionamiento operante?', [
        'Pavlov',
        'Watson',
        'Skinner'
    ],9),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[1], '¿Cuál es el planteamiento que Skinner desarrolló?', [
        'Conductismo operante',
        'conductismo metodológico',
        'conductismo asociacionista'
    ],10),


    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[2], '¿En que página del libro empieza el tema del conductismo?', [
        '1',
        '71',
        '210'
    ],11),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[3], '¿Cual de los siguientes Subtemas forma parte del conductismo?', [
        'Influencias sobre el aprendizaje y el desempeño',
        'Sistema de procesamiento de la información',
        'Autoeficacia'
    ],12),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[0], 'Un ejemplo de habilidad motriz básica', [
        'correr',
        'Sumar y Restar',
        'Pagar impuestos'
    ],13),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[1], '¿cuál es la diferencia entre habilidad motriz básica y complejas?', [
        'Pregunta abierta'
    ],14),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[2], '¿Que cosas te pueden ser útil para practicar la autoeficacia?', [
        'Decirte palabras motivacionales',
        'Procrastinar',
        'Pensar en la chancla voladora'
    ],15),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[3], '¿Que es el Condicionamiento por contigüidad?', [
        'La conducta en una situación se repetirá cuando dicha situación se presente de nuevo',
        'Proceso de aprendizaje mediante el cual un organismo establece una asociación entre un estímulo condicionado y un estímulo incondicionado',
        'es una forma de enseñanza mediante la cual un sujeto tiene más probabilidades de repetir las formas de conducta que conllevan consecuencias positivas'
    ],16),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[0], '¿De que trata de teoría de Thorndike?', [
        'Representa el marco de la psicología del comportamiento',
        'método de aprendizaje mediante el cual una persona intenta solucionar un problema vital llevando a cabo una serie de ensayos o intentos azarosos hasta dar con la solución',
        'Es una forma de aprender por medio de recompensas y castigo'
    ],17),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[1], '¿Cual es uno de los métodos que se usan para la investigación del cerebro?', [
        'Ensayo error',
        'Respuesta incompatible',
        'Reforzamiento positivoReforzamiento positivo'
    ],18),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[2], '¿Cuál es el país más poblado del mundo? (Pregunta Random)', [
        'China',
        'India',
        'Corea'
    ],19),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[3], '¿Que termino mexicano llego a ser oficial en el diccionario RAE? (Pregunta Random)', [
        'Chale',
        'Cantinfleando',
        'wey'
    ],20),



    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[0], 'El trabajo más importante de Thorndike es su obra en tres volúmenes', [
        'Psicología educativa',
        'El conexionismo',
        'Ensayo y error'
    ],21),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[1], '¿Cuáles son las 2 partes de la ley del ejecicio?', [
        'Ley del uso y desuso',
        'Ley de las causas y consecuencias',
        'Ley de la memoria y olvido.'
    ],22),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[2], '¿Cuándo ocurre la transferencia?', [
        'Cuando las situaciones tienen elementos idénticos y provocan respuestas similares',
        'Cuando las situaciones tienen elementos diferentes y provocan respuestas similares',
        'Cuando las situaciones tienen elementos diferentes y provocan respuestas diferentes'
    ],23),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[3], '¿En qué hace hincapié la ley del efecto', [
        'En las consecuencias buenas y las consecuencias malas',
        'En las consecuencias propias y las consecuencias ajenas',
        'En las consecuencias propias y las consecuencias ajenas'
    ],24),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[0], '¿Cuál es el objeto de estudio de la teoría conductista?', [
        'investiga la conducta observable, análisis basado en la experiencia',
        'enfoque epistemológico, basándose en la relación o interacción que se establece entre el objeto de conocimiento y el sujeto que aprende',
        'que permite conocer cómo intervienen los procesos neurobiológicos en el aprendizaje'
    ],25),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[1], '¿En qué consiste el condicionamiento operante?', [
        'es el término que se emplea para referirse al método de aprendizaje que se produce a través de la asociación de refuerzos',
        'es un procedimiento que consiste en establecer ciertas condiciones de control de estímulos',
        'Regula el equilibrio corporal, la postura, el control muscular, el movimiento, la adquisición de habilidades motoras'
    ],26),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[2], '¿Qué es una operante?', [
        'Una operante es una conducta que opera sobre el ambiente para lograr cambio',
        'Persona que tiene por oficio establecer las comunicaciones que no son automáticas en una central telefónica.',
        'es un símbolo matemático que indica que debe ser llevada a cabo una operación especificada sobre un cierto número de operandos.'
    ],27),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[3], 'Creencia de que aprender ciertas materias (como literatura y matemáticas) contribuye a mejorar, más que otras', [
        'Disciplina mental',
        'Autocontrol',
        'Aprendizaje'
    ],28),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[0], '¿Qué es un refuerzo positivo?', [
        'Premio. Es un refuerzo que aumenta la probabilidad de emisión de una determinada conducta para que aparezca el refuerzo.',
        'Castigo. un refuerzo positivo es castigar al niño para motivarlo a seguir con determinación y seguir con un gran refuerzo.',
        'Negociación: el chico negocia para sacar algo de su provecho para motivarlo para aumentar la probabilidad de éxito si le es conveniente, si no, no se motiva.'
    ],29),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[1], '¿Qué es un refuerzo negativo?', [
        'Se considera que un reforzador negativo es un objeto o suceso cuya eliminación tras una conducta aumenta la probabilidad de que esta conducta aumente',
        'La recompensa excesiva es un refuerzo positivo puede ser un refuerzo negativo y ya que este deja el interés en su meta y se concentra en la recompensa o premio',
        ''
    ],30),


    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[2], '¿Qué psicólogo estadounidense fue destacado por su teoría del aprendizaje (el conexionismo) durante la primera mitad del siglo XX?', [
        'Edward L. Thorndike',
        'Katzir y Paré-Blagoev',
        'Jean William Fritz Piaget'
    ],31),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[3], 'Los estímulos condicionados capaces de producir respuestas condicionadas se denominan', [
        'Señales primarias',
        'Señales secundarias',
        'Señales terciarias'
    ],32),

    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[0], '¿Quién postuló principios de aprendizaje basados en asociaciones?', [
        'Edwin R. Guthrie',
        'Pavlov',
        'Lev Vygotsky'
    ],33),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[1], 'Ejemplo de investigación del cerebro por umbral:', [
        'Introducir el contenido académico en bloques pequeños para los niños. La duración de la sesión se incrementa de manera gradual, pero nunca hasta el punto en que los estudiantes se sientan frustrados o aburridos.',
        'Dar al niño que hace aviones de papel en clase un paquete de hojas y pedirle que elabore un avión con cada hoja.',
        'Emparejar las señales asociadas con el salón de medios (o aula de medios) usando la lectura más que la charla'
    ],34),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[2], 'Ejemplo de investigación del cerebro por fatiga', [
        'Introducir el contenido académico en bloques pequeños para los niños. La duración de la sesión se incrementa de manera gradual, pero nunca hasta el punto en que los estudiantes se sientan frustrados o aburridos',
        'Dar al niño que hace aviones de papel en clase un paquete de hojas y pedirle que elabore un avión con cada hoja.',
        'Emparejar las señales asociadas con el salón de medios (o aula de medios) usando la lectura más que la charla'
    ],35),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[3], 'Ejemplo de investigación del cerebro por respuesta compatible:', [
        'Introducir el contenido académico en bloques pequeños para los niños. La duración de la sesión se incrementa de manera gradual, pero nunca hasta el punto en que los estudiantes se sientan frustrados o aburridos',
        'Dar al niño que hace aviones de papel en clase un paquete de hojas y pedirle que elabore un avión con cada hoja.Dar al niño que hace aviones de papel en clase un paquete de hojas y pedirle que elabore un avión con cada hoja.',
        'Emparejar las señales asociadas con el salón de medios (o aula de medios) usando la lectura más que la charla'
    ],36),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[0], '¿Cómo se refirió Skinner a los medios para examinar la conducta?', [
        'Análisis funcional',
        'Análisis cognitivo',
        'Análisis psicológico'
    ],37),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[1], 'Este principio dice que la oportunidad de participar en una actividad más valiosa refuerza la participación en una actividad menos valiosa', [
        'Principio de Premack',
        'Principio de Skinner',
        'Principio de Pavlov'
    ],38),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[2], '¿Cuál de estas no es una opción del castigo?', [
        'Cambiar los estímulos discriminativos',
        'Aprender a hacer algo',
        'Extinguir una conducta indeseable'
    ],39),
    new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[3], 'Programa donde se refuerzan algunas respuestas correctas, pero no todas', [
        'Programa intermitente',
        'Programa de intervalo',
        'Proograma continuo'
    ],40)



    //new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[0], '', [],4)
    //new Carta(opcionesCartas.TIPO_NORMAL, 'Pregunta', opcionesCartas.colores[0], '', [],4)
];