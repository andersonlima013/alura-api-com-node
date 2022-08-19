// importanto o modulo de service, onde ficam todas as requisições HTTP.
import { clienteService } from "../service/cliente-service.js"


(async () => {
    // pegando a URL da página pra poder depois pegar o ID do cliente que está atrelado a essa página.
    const pegaURL = new URL(window.location)

    // aqui estamos utilizando a variavel que pegou a URL e combinando com uma função que já fica disponivel que é o searchParams.get, passando o ('id') para ser buscado
    // lembrando que esse id passa a ficar disponível para esse módulo, sendo utilizado várias vezes para referenciar o cliente que será editado.
    const id = pegaURL.searchParams.get('id')

    // aqui estamos pegando o nome e o email que foi inserido na linha utilizando o document.querySelector e passando os data attributes de '[data-nome]' e '[data-email]' 
    const pegaNome = document.querySelector('[data-nome]')
    const pegaEmail = document.querySelector('[data-email]')

    /*
    utilizando uma das funções que são exportadas no modulo de comunicação http para mostrar nos campos de nome e email as informações da pessoa que já estava
    cadastrada no banco.. passando como argumento o ID dela.

    e nessa parte também está sendo exibido o nome e email que veio lá do db.json nos campos do formulário
    */
   try{
    const dados = await clienteService.detalhaCliente(id)
    pegaNome.value = dados.nome
    pegaEmail.value = dados.email
   }
   catch(erro){
    console.log(erro)
    window.location.href = '../telas/erro.html'
   }
    

    // buscando na arvore do DOM onde está o formulário que será exibido os dados do cliente para ser editado
    const formulario = document.querySelector('[data-form]')

    /*
    aqui estamos adicionando um eventListener com addEventListener para poder colocar uma "escuta" no formulário que fica aguardando o evento de 'submit'
    assim que o usuário der o submit no formulário, é chamada a função de editaCliente que vem lá do módulo de requisição http.
    essa função vai substituir os valores de nome e email para o id, que também entrou como argumento.
    */
    formulario.addEventListener('submit', async (evento) => {
        evento.preventDefault()

        try{
            await clienteService.editaCliente(id, pegaNome.value, pegaEmail.value)
            window.location.href = "../telas/edicao_concluida.html"
        }
        catch(erro){
            console.log(erro)
            window.location.href = '../telas/erro.html'
        }
    
    })
})()
