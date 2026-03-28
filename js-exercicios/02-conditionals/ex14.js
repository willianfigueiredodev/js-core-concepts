// Receba um turno (M, T, N) e retorne a saudação correta.

function saudaçãoTurno(turno){
    if (turno === "M"){
        return "Bom dia";
    } else if (turno === "T"){
        return "Boa tarde";
    } else if (turno === "N"){
        return "Boa noite";
    } else{
        return `${turno} é um valor inválido.`;
    }
}

console.log(saudaçãoTurno("M"));


// Fiz uma resolução mais objetiva, criei um objeto e pedi pra ele buscar um valor dentro da chave turno.

function saudaçãoTurnoTwo (turno) {
    const turnos = {
        M: "Bom dia",
        T: "Boa tarde",
        N: "Boa noite",
    };
    
    return turnos[turno] || "Turno inválido.";
}

const resultado = saudaçãoTurnoTwo("N");
console.log(resultado);
