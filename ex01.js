// 01 - Crie um programa que receba dois números e retorne: soma, subtração, multiplicação e divisão.

function calcular (a, b){
    return{
        soma: a + b,
        subtracao: a - b,
        multiplicacao: a * b,
        divisao: b !== 0 ? a / b : null // Aqui eu fiz um tratamento para divisão por 0 não retornar infinity (divisor b não pode ser 0).
    }
}

console.log(calcular(5, 0));