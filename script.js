const titulo = document.getElementById ('exibir')

const nota1 = 8 
const falta1 = 16

let resultado

if  (falta1 <= 20 && nota1 >= 7) {
    resultado = " aluno esta aprovado"
}
else {
    resultado = " aluno esta reprovado "
}

titulo.innerHTML = resultado 
