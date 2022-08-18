/*Esse módulo basicamente foi criado para fazer conexões com o servidor
e trazer as requisições http
*/

// requisição http para GET
const listaCliente = () => {
    return fetch(`http://localhost:3000/profile`)
    .then(resposta => {
        return resposta.json()
    })
}

// requisição http para POST de nome e email
const criaCliente = (nome, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then(resposta => {
        return resposta.body
    })
}

/* 
requisição http para DELETE do nome e email
sempre que você quiser utilizar outra requisição que não seja o GET (padrão do fetch), precisa espeficiar o método do jeito que está descrito abaixo.
esse ${id} é basicamente a forma de passar qual é o cliente que vamos deletar, utilizando o ID do cliente.
*/
const deletaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
}

// outra requisição GET para poder mostrar na tela de edição de clientes as informações que já temos daquele cliente.
const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta => {
        return resposta.json()
    })
}

const editaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then(resposta => {
        return resposta.json()
    })
}

/* Exportando um objeto que vai conter todos os métodos do módulo, fazendo com que
seja necessário usar a notação . nos outros módulos.
Importante fazer isso pois nesse módulo serão contidos todas as requisições HTTP,
 daí quando se for necessário o uso das requisições GET, POST e DELETE, basta
importar o módulo clienteService e utilizar a notação . para referenciar.

Ex: import { clienteService } from '../colocar o caminho do módulo que vai conter os métodos'

clienteService.listaCliente()
.then(data => {
    data.forEach(elemento => {
    tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email))  
})})

Esse exemplo mostra a importação do módulo que vai conter os métodos e também mostra
como a requisição GET está sendo referenciado com a função listaCliente
*/
export const clienteService = {
    listaCliente,
    criaCliente,
    deletaCliente,
    detalhaCliente,
    editaCliente
}
