// Esconder section de ataques y boton de reinicio
const sectionSeleccionarAtaque = document.getElementById('seleccionar_ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const sectionSeleccionarMascota = document.getElementById('seleccionar_mascotas')
const sectionInicio = document.getElementById('inicio')
const botonInicio = document.getElementById('boton-iniciar')
const botonMascotas = document.getElementById('boton-mascotas')

const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonAire = document.getElementById('boton-aire')
const botonHielo = document.getElementById('boton-hielo')
const botonReinicio = document.getElementById('boton-reiniciar')

const inputAguataque = document.getElementById('mascota1')
const inputCamenta = document.getElementById('mascota2')
const inputRastor = document.getElementById('mascota3')
const inputVolen = document.getElementById('mascota4')
const inputManyelo = document.getElementById('mascota5')
const imgMascotaEscogida = document.getElementById('mascota-escogida')

const imgMascotaEnemigo = document.getElementById('mascota-escogida-enemigo')

const spanVidaJugador = document.getElementById('vidas-jugador')
const spanVidaEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesJugador = document.getElementById('ataquesJugador')
const ataquesDelEnemigo = document.getElementById('ataquesDelEnemigo')

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let resultado
let vidaJugador = 3
let vidaEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre + nombre
        this.foto + foto
        this.vida + vida
    }
}

let aguataque = new Mokepon('Aguataque', './Assets/Aguataque.png', 5)
let camenta = new Mokepon('Camenta', './Assets/Camenta.png', 5)
let rastor = new Mokepon('Rastor', './Assets/Rastor.png', 5)
let volen = new Mokepon('Volen', './Assets/Volen.png', 5)
let manyelo = new Mokepon('Manyelo', './Assets/Manyelo.png', 5)

mokepones.push(aguataque,camenta,rastor,volen,manyelo)

console.log(mokepones)

sectionSeleccionarAtaque.style.display = 'none'
sectionReiniciar.style.display = 'none'
sectionSeleccionarMascota.style.display = 'none'

//Iniciar juego
function inicio() {
    sectionInicio.style.display = 'none'
    sectionSeleccionarMascota.style.display = 'flex'
}

// Seleccion de mascostas del jugador
function seleccionarMascotaJugador() {
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionSeleccionarMascota.style.display = 'none'

    if(inputAguataque.checked) {
        imgMascotaEscogida.src = "Assets/Aguataque.png"
    } else if(inputCamenta.checked) {
        imgMascotaEscogida.src = "Assets/Camenta.png"
    } else if(inputRastor.checked) {
        imgMascotaEscogida.src = "Assets/Rastor.png"
    } else if(inputVolen.checked) {
        imgMascotaEscogida.src = "Assets/Volen.png"
    } else if(inputManyelo.checked) {
        imgMascotaEscogida.src = "Assets/Manyelo.png"
    } else {
        alert("SELECCIONA ALGO")
    }

    seleccionarMascotaEnemigo()
}

// Funcion para aleatoriedad
function aleatorio(min, max){ 
    return Math.floor(Math.random() * (max - min + 1) + min) 
}

//Seleccion aleatoria de mascota del enemigo
function seleccionarMascotaEnemigo() {
    let enemigoAleatorio = aleatorio(1,5)
    
    if(enemigoAleatorio == 1) {                     // '=' es para asignar --> '==' es para comparar
        imgMascotaEnemigo.src = "Assets/Aguataque.png"
    } else if(enemigoAleatorio == 2) {
        imgMascotaEnemigo.src = "Assets/Camenta.png"
    } else if(enemigoAleatorio == 3) {
        imgMascotaEnemigo.src = "Assets/Rastor.png"
    } else if(enemigoAleatorio == 4) {
        imgMascotaEnemigo.src = "Assets/Volen.png"
    } else {
        imgMascotaEnemigo.src = "Assets/Manyelo.png"
    }
}

// Funciones para la seleccion de ataques
function ataqueFuego() {
    ataqueJugador = "Fuego"
    ataqueEnemigoAleatorio()
}

function ataqueAgua() {
    ataqueJugador = "Agua"
    ataqueEnemigoAleatorio()
}

function ataqueTierra() {
    ataqueJugador = "Tierra"
    ataqueEnemigoAleatorio()
}

function ataqueAire() {
    ataqueJugador = "Aire"
    ataqueEnemigoAleatorio()
}

function ataqueHielo() {
    ataqueJugador = "Hielo"
    ataqueEnemigoAleatorio()
}

// Funcion para el ataque aleatorio del enemigo
function ataqueEnemigoAleatorio() {
    let ataqueAleatorio = aleatorio(1,5)

    if(ataqueAleatorio == 1) {                  
        ataqueEnemigo = "Fuego"
    } else if(ataqueAleatorio == 2) {
        ataqueEnemigo = "Agua"
    } else if(ataqueAleatorio == 3) {
        ataqueEnemigo = "Tierra"
    } else if(ataqueAleatorio == 4) {
        ataqueEnemigo = "Aire"
    } else {
        ataqueEnemigo = "Hielo"
    }

    resultadoCombate()

}

// Funcion para la creacion del mensaje luego de atacar
function crearMensaje() {
    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesJugador.appendChild(nuevoAtaqueJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    sectionReiniciar.style.display = 'block'
    sectionMensajes.innerHTML = resultadoFinal

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    botonAire.disabled = true
    botonHielo.disabled = true

}

function resultadoCombate(){
    if(ataqueJugador == ataqueEnemigo){
        resultado = "Empate"
    } else if(ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra" || ataqueJugador == "Fuego" && ataqueEnemigo == "Hielo" || ataqueJugador == "Agua" && ataqueEnemigo == "Fuego" || ataqueJugador == "Agua" && ataqueEnemigo == "Aire" || ataqueJugador == "Tierra" && ataqueEnemigo == "Agua" || ataqueJugador == "Tierra" && ataqueEnemigo == "Aire" || ataqueJugador == "Tierra" && ataqueEnemigo == "Aire" || ataqueJugador == "Tierra" && ataqueEnemigo == "Hielo" || ataqueJugador == "Aire" && ataqueEnemigo == "Fuego" || ataqueJugador == "Hielo" && ataqueEnemigo == "Aire" || ataqueJugador == "Hielo" && ataqueEnemigo == "Agua") {
        resultado = "Ganaste"
        vidaEnemigo--
        spanVidaEnemigo.innerHTML = vidaEnemigo
    } else{
        resultado = "Perdiste"
        vidaJugador--
        spanVidaJugador.innerHTML = vidaJugador
    }

    crearMensaje()
    revisarVidas()
}

function revisarVidas(){
    if(vidaJugador == 0){
        //alert("Perdiste el combate")
        crearMensajeFinal("Perdiste el Combate")

    } else if(vidaEnemigo == 0){
        //alert("Ganaste el combate")
        crearMensajeFinal("Ganaste el Combate")
    }
}

//addEventListener para boton de inicio
botonInicio.addEventListener('click', inicio)
// addEventListener para el boton de elegir mascota
botonMascotas.addEventListener('click', seleccionarMascotaJugador)
// addEventListeners para la eleccion de ataques
botonFuego.addEventListener('click', ataqueFuego)
botonAgua.addEventListener('click', ataqueAgua)
botonTierra.addEventListener('click', ataqueTierra)
botonAire.addEventListener('click', ataqueAire)
botonHielo.addEventListener('click', ataqueHielo)
// addEventListener para reinicio
botonReinicio.addEventListener('click', _ => location.reload())
