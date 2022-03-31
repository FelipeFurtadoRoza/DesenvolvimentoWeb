import { delta, bas } from './calculadora.js';

function criaNovoElemento(valor) {
    var pai = document.calculo;
    var divNova = document.createElement("div");
    var conteudoNovo = document.createTextNode(valor);
    divNova.appendChild(conteudoNovo);

    var divAtual = document.getElementById("div1");
    document.body.insertBefore(divNova, divAtual);
}

function calcula() {
    let valor1 = document.getElementById('valorCampo1').value;
    let valor2 = document.getElementById('valorCampo2').value;
    let valor3 = document.getElementById('valorCampo3').value;

    criaNovoElemento(valor1);
    criaNovoElemento(valor2);
    criaNovoElemento(valor3);

    var delta = delta(valor1, valor2, valor3);
    var bas = bas(delta, valor1, valor2);

    console.log(x1,x2);
}

document.getElementById('calcular').addEventListener("click", calcula);


