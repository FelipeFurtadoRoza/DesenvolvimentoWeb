import { soma, subtracao, multiplicacao, divisao, delta, bas } from './calculadora';

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

it('divisao de dois numeros positivos e negativos', () => {
    expect(delta(2,8,-24)).toBe(256)
})

it('divisao de dois numeros positivos e negativos', () => {
    expect(bas(256,2,8)).toMatchObject({x1:2,x2:-6})
})

//npm i babel-jest @babel/preset-env