/* importando o módulo clienteService que está centralizando todos os métodos de conexão 
HTTP
*/
import { clienteService } from '../service/cliente-service.js'

/* 
Função que basicamente cria o layout das linhas de registro que serão exibidas no front
da apĺicação.
Ela recebe dois parametros, nome e email.
Futuramente, para quesito de estudos, eu poderia adicionar mais alguma informação, como
por exemplo a função dentro da empresa.
*/
const criaNovaLinha = (nome, email) => {
    /*Dentro da função de criar a nova linha, temos uma constante que cria literalmente
    uma nova linha "tr" em branco no front.
    Temos também uma const "conteudo" que vai conter todo o conteúdo que será inserido na linha 
    criada anteriormente pela constante "linhaNovoCliente", e essa está recebendo os 
    dois parametros iniciais e encaixando no layout.
    */
    const linhaNovoCliente = document.createElement('tr')
    // repare que está sendo utilizado o literals `` para conter o layout.. pesquisar o que é isso depois caso tenha esquecido
    const conteudo = `
        <td class="td" data-td>${nome}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td>
    `
    // inserindo o conteudo na página utilizando o innerHTML
    linhaNovoCliente.innerHTML = conteudo
    // retornando com o conteudo preenchido
    return linhaNovoCliente
}

// constante que busca na árvore do DOM pela tag de data-tabela.. assim encontramos
// o lugar que será inserido toda a informação do conteudo do registro
const tabela = document.querySelector('[data-tabela]')

/*Utilizando o módulo que importamos, vamos passar como referencia na notação . 
o método de GET para capturar a lista de clientes.
*/
clienteService.listaCliente()
.then(data => {
    data.forEach(elemento => {
    tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email))  
})})

