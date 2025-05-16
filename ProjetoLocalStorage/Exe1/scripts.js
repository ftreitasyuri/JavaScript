const button = document.querySelector('.button-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhaLista = []


function addTarefa(){
    // console.log(input.value)
    //Adicionando na minhaLista o valor digitado pelo usuário
    minhaLista.push({
        tarefa: input.value,
        concluida: false
    })
    // console.log(minhaLista)
    //Limpando o input
    document.querySelector('.input-task').value = ''
    mostraTarefas()
}

function mostraTarefas(){

    let = novaLi = ''

    minhaLista.forEach((item, posicao) =>{
        novaLi = novaLi + `
            <li class="task ${item.concluida && "done"}">
            <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
            <p>${item.tarefa}</p>
            <img src="./img/trash.png" alt="lixo-tarefa" onclick="deletar(${posicao})">
            </li>
        `
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaLista))

    // <li class="task">
    // <img src="./img/checked.png" alt="check-na-tarefa">
    // <p>Primeiro icone</p>
    // <img src="./img/trash.png" alt="lixo-tarefa">
    // </li>
}

function deletar(posicao){
    minhaLista.splice(posicao, 1)
    console.log('Deletar' + posicao)

    // Uma vez que deletamos a task com o código acima
    // Precisamos chamar novamente a função mostraTarefas() 
    // Para reconstruir as tasks
    mostraTarefas()
}

function concluirTarefa(posicao){
    // console.log(posicao)
    minhaLista[posicao].concluida = !minhaLista[posicao].concluida
    mostraTarefas()

}

function recarregarTela(){
    const tarefasLC = localStorage.getItem('lista')
    if(tarefasLC){
        minhaLista = JSON.parse(tarefasLC)
    }

    mostraTarefas()
}

recarregarTela()
button.addEventListener('click', addTarefa)