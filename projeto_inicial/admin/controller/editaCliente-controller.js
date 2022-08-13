import { clienteService } from "../service/cliente-service.js"

const pegaURL = new URL(window.location)

const id = pegaURL.searchParams.get('id')

const pegaNome = document.querySelector('[data-nome]')
const pegaEmail = document.querySelector('[data-email]')

clienteService.detalhaCliente(id)
.then( dados => {
    pegaNome.value = dados.nome
    pegaEmail.value = dados.email
})

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()

    clienteService.editaCliente(id, pegaNome.value, pegaEmail.value)
    .then(() => {
        window.location.href = "../telas/edicao_concluida.html"
    })
})