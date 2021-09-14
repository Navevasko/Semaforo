"use strict"
const semaforo = document.getElementById("semaforo")
const auto = document.getElementById("Automatico")
let idInterval

function semaforoVermelho() {
    return semaforo.src.includes("vermelho")
}

function semaforoAmarelo() {
    return semaforo.src.includes("amarelo")
}

function semaforoDesligado() {
    return semaforo.src.includes("desligado")
}

function pararAutomatico() {
    clearInterval(idInterval)
}

function vermelho() {
    semaforo.src="img/vermelho.png"
    pararAutomatico()
    mudarAutomatico()
}


function amarelo() {
    semaforo.src="img/amarelo.png"
    pararAutomatico()
    mudarAutomatico()
}

function verde() {
    semaforo.src="img/verde.png"
    pararAutomatico()
    mudarAutomatico()
}

function mudarAutomatico() {
    auto.textContent = "Automatico"
}

function trocarImagem(){

    if(semaforoDesligado()) {
        semaforo.src = "img/vermelho.png"
    }
    else if(semaforoVermelho()) {
        semaforo.src = "img/amarelo.png"
    }
    else if(semaforoAmarelo()) {
        semaforo.src = "img/verde.png"
    }
    else {
        semaforo.src = "img/vermelho.png"
    }

}


function automatico() {
    if (auto.textContent == "Automático") {
        idInterval = setInterval(trocarImagem, 1000)
        auto.textContent = "Parar"
    } else {
        pararAutomatico()
        auto.textContent = "Automático"
    }

}


//Documentos
document.getElementById("Automatico")
        .addEventListener("click", automatico)

document.getElementById("Vermelho")
        .addEventListener("click", vermelho)

document.getElementById("Amarelo")
        .addEventListener("click", amarelo)

document.getElementById("Verde")
        .addEventListener("click", verde)