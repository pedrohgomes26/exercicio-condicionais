let idade = Number(prompt("Digite sua idade: "))

let atestado

let etapa1 = true
let etapa2 = true
let etapa3 = true

let categoria_participante = 0 

let resultado


// Verificando a idade do usuario para poder permitir a entrada dele na maratona e se tem atestado medico
if (idade < 16) {
    alert("Você não pode participar da maratona")
    console.log("Você não pode participar da maratona")
    etapa1 = false
} else if (idade >= 60) {
    atestado = prompt("Você tem atestado medico: ")
} 

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
console.log(`Idade ${idade} ${etapa1} \ Atestado ${atestado} ${etapa2} \ Distancia ${distancia} \ Tempo ${pace} \ Categoria ${categoria_participante} \ Resultado ${resultado}`)

