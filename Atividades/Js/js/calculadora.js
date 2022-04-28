function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a / b;
}

function delta(a, b, c) {
    var delta = (b*b) - (4 * a * c);

    if (delta < 0) {
        return {x1: 'Inexistente', x2: 'Inexistente'};
    } else {
        return delta;
    }
}

function bas(delta, a, b) {
    var x1 = (-b + (Math.sqrt(delta))) / (2*a);
    var x2 = (-b - (Math.sqrt(delta))) / (2*a);
    console.log(x1,x2);
    return {x1, x2};
}

export { soma, subtracao, multiplicacao, divisao, delta, bas }
