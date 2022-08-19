// importando o modulo que faz a conexão e requisições http
import { clienteService } from "../service/cliente-service.js"

// percorrendo a arvore do DOM para encontrar o nosso formulario, onde vamos criar uma nova linha de cliente
const formulario = document.querySelector('[data-form]')

/* 
usamos aqui o formulario que encontramos na variavel acima para poder adicionar um eventListener aqui, assim podemos aguardar o evento de 
'submit' e com o evento ocorrendo, criamos duas constantes temporárias de nome e email que serão passadas como argumento lá na função 
que veio exportada de clienteService, criando assim um novo cliente
*/
formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault()
    const nome = evento.target.querySelector('[data-nome]').value
    const email = evento.target.querySelector('[data-email]').value

    try{
        await clienteService.criaCliente(nome, email)
        window.location.href = '../telas/cadastro_concluido.html'
    }
    catch(erro){
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
    
})