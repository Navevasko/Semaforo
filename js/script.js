"use strict"
const semaforo = document.getElementById("semaforo")
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

function vermelho() {
    semaforo.src="img/vermelho.png"
}


function amarelo() {
    semaforo.src="img/amarelo.png"
}

function verde() {
    semaforo.src="img/verde.png"
}

function trocarImagem(){

    if(semaforoDesligado()) {
        vermelho()
    }
    else if(semaforoVermelho()) {
        amarelo()
    }
    else if(semaforoAmarelo()) {
        verde()
    }
    else {
        vermelho()
    }

}

function pararAutomatico() {
    clearInterval(idInterval)
    semaforo.src="img/desligado.png"
}

function automatico() {
    const automatico = document.getElementById("Automatico")
    if (automatico.textContent == "Automatico") {
        idInterval = setInterval(trocarImagem, 1000)
        automatico.textContent = "Parar"
    } else {
        pararAutomatico()
        automatico.textContent = "Automatico"
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
