const titulo = document.getElementById ('exibir')

const nomeval = 'nome'
const senhaval = '123'

let nomeusuario = 'nome'
let senhausuario = '1236'

let resultado 

if (nomeval == nomeusuario && senhaval == senhausuario) {
    resultado = " Acesso liberado!"
}
else {
    resultado = " Acesso negado, senha ou nome incorretos. "
}

titulo.innerHTML = resultado
