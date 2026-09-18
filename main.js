let idade = Number(prompt("Digite sua idade: "))

let atestado

let etapa1 = true
let etapa2 = true
let etapa3 = true
let etapa4
let premiacao = false

let categoria_participante = 0 

let resultado

if (isNaN(idade)) {
    idade = Number(prompt("Digite uma idade valida: "))
}

// Verificando a idade do usuario para poder permitir a entrada do usuário
if (idade < 16) {
    alert("Você não pode participar da maratona")
    console.log("Você não pode participar da maratona")
    etapa1 = false
} else if (idade >= 60) {
    atestado = prompt("Você tem atestado medico: ")
} 
// validar se o atestado e valido
if (atestado == "sim") {
    console.log("vai participar")
} else if (atestado == "nao") {
    console.log("não pode participar da maratona")
    alert("você não pode participar da maratona")
    etapa2 = false
}

let distancia = Number(prompt("Digite quantos Km vai percorrer: "))

// Caso o participante coloque uma distancia invalida
if (distancia !== 5 && distancia !== 10 && distancia !== 21 && distancia !== 42) {
    distancia = Number(prompt("Essa distancia não e permitida selecione entre as opções 5km, 10km, 21km e 42km: "))
} else if (distancia == null || distancia == "") {
    etapa3 = false
}


let pace = Number(prompt(`Em quantos mintutos você percorre ${distancia}Km: `))

if (isNaN(pace)) {
    pace = Number(prompt("Tempo invalido tente de novo: "))
} else if (pace == 0) {
    pace = Number(prompt("Tempo invalido tente de novo: "))
}


// Calculando a categoria do participante 
let categoria = pace / distancia

// Definindo a categoria do participante
if (categoria >= 7) {
    categoria_participante = "Amador"
    console.log("Categoria Amador")
} else if (categoria >= 5) {
    categoria_participante = "Competitivo"
    console.log("Categoria Competitivo")
} else if (categoria < 5) { 
    categoria_participante = "Elite"
    console.log("Categoria Elite")
}

if (categoria_participante == "Elite") {
    etapa4 = prompt("Você gostaria de concorrer para a premiação: ")
}

if (etapa4 == "sim") {
    premiacao = true
    alert("Você esta concorrendo a premiação da maratona")
}

// verificar se todos as etapas foram cumpridas
if (etapa1 !== true || etapa2 !== true || etapa3 !== true) {
   resultado = false
} else if (etapa1 === true && etapa2 === true && etapa3 === true) {
    resultado = true
}

if (resultado == true) {
    alert("Você esta inscrito na maratona")
}

// relatorio para ver se ta tudo certo
console.log(`Idade ${idade} ${etapa1} \ Atestado ${atestado} ${etapa2} \ Distancia ${distancia} \ Tempo ${pace} \ Categoria ${categoria_participante} \ Participando da premiação ${premiacao}  \ Resultado ${resultado}`)