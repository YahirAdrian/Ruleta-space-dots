export const componentesRuleta= {
    ruleta:  document.querySelector('#ruleta img'),
    botonGirar: document.querySelector('#ruleta #girar'),
    imagenJugador: document.querySelector('#resultados #jugador'),
    nombreJugador: document.querySelector('#resultados #nombre-jugador')
};

export const componentesBaraja = {
    botonSacarCarta: document.querySelector('#sacar-carta'),
    botonReiniciarBaraja: document.querySelector('#reiniciar-baraja'),
    cartaActual: document.querySelector('#carta-actual'),
    baraja: document.querySelector('#cartas'),
    pregunta: document.querySelector('#pregunta'),
    lienzo: document.querySelector('.lienzo')
};

export const rutaImagenesNaves = {
    naveAmarilla : 'src/naves/amarillo.png',
    naveAzul : 'src/naves/azul.png',
    naveMorada : 'src/naves/morado.png',
    naveRoja : 'src/naves/rojo.png',
    naveRosada : 'src/naves/rosado.png',
    naveVerde : 'src/naves/verde.png',
}

export const rutaImagenesComodines = {
    alienigena: 'src/cartas/alienigena.png',
    impulso: 'src/cartas/impulso.png',
    meteoro: 'src/cartas/meteoro.png'
}