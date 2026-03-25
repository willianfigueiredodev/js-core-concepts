// Crie um programa que receba um número e verifique se é positivo, negativo ou zero.

function verificarNumero (number){
    if (number > 0){
        return `${number} é positivo`;
    } else if (number < 0) {
        return `${number} é negativo`;
    } 
    return `${number} é zero`;
}

console.log(verificarNumero(0));