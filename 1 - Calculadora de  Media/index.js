var nome = "Giovanni"

var nota1 = 10
var nota2 = 8.4
var nota3 = 5.1
var nota4 = 7.5

var media = (nota1 + nota2 + nota3+ nota4) / 4;
var mediaFixada = media.toFixed(1)


console.log("Bem vindo " + nome)
console.log("Nota final fixada: " + mediaFixada)

if (mediaFixada >= 6) {
    console.log("Aluno aprovado!")
} else {
    console.log("Aluno reprovado!")
}