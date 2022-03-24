const soma = require('./soma')
const subtracao = require('./subtracao')
const multiplicacao = require('./multiplicacao')
const divisao = require('./divisao')

it('Soma de dois numeros positivos diferentes', () => {
    expect(soma(2,2)).toBe(4)
})

it('Soma de dois numeros positivos e negativos', () => {
    expect(soma(-2,4)).toBe(2)
})

it('subtracao de dois numeros positivos e negativos', () => {
    expect(subtracao(2,4)).toBe(-2)
})

it('multiplicacao de dois numeros positivos e negativos', () => {
    expect(multiplicacao(2,4)).toBe(8)
})

it('divisao de dois numeros positivos e negativos', () => {
    expect(divisao(4,2)).toBe(2)
})