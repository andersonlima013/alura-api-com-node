/*Esse módulo basicamente foi criado para fazer conexões com o servidor
e trazer os métodos http
*/

// método http para GET
const listaCliente = () => {
    return fetch(`http://localhost:3000/profile`)
    .then(resposta => {
        return resposta.json()
    })
}

// método http para POST de nome e email
const criaCliente = () => {
    return fetch('http://localhost:3000/profile', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: {
            nome,
            email
        }
    })
}

/* Exportando um objeto que vai conter todos os métodos do módulo, fazendo com que
seja necessário usar a notação . nos outros módulos.
Importante fazer isso pois nesse módulo serão contidos todos os métodos de conexão
HTTP, daí quando se for necessário o uso dos métodos de GET, POST e DELETE, basta
importar o módulo clienteService e utilizar a notação . para referenciar.

Ex: import { clienteService } from .../colocar o caminho do módulo que vai conter os métodos

clienteService.listaCliente()
.then(data => {
    data.forEach(elemento => {
    tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email))  
})})

Esse exemplo mostra a importação do módulo que vai conter os métodos e também mostra
como o método GET está sendo referenciado com a função listaCliente
*/
export const clienteService = {
    listaCliente
}
