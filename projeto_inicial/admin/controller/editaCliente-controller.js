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
