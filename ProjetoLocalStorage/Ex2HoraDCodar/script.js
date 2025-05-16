// Selecionando todos os elementos
const todoForm = document.querySelector('#toDo-form');
const todoInput = document.querySelector('#toDo-input');
const todoList = document.querySelector('#toDo-list');
const editForm = document.querySelector('#edit-form');
const editInput = document.querySelector("#edit-input");
const cancelBTN = document.querySelector('#cancel-edit-btn');

let oldInputValue;
// Funções
const saveTodo = (text)=>{
    // criando uma div
    const todo = document.createElement("div");
    // Adicionando uma classe no elemento criado
    todo.classList.add("toDo");

    // Criando titulo
    const todoTitle = document.createElement('h3');

    // Adicionando texto no h3
    todoTitle.innerText = text;

    //Adicionando o h
    // 3r no todo
    todo.appendChild(todoTitle);

    // Debug
    // console.log(todo);

    // Criando botão 1
    const doneBTN = document.createElement("button");
    // Adicionanod classe no btn
    doneBTN.classList.add("finish-todo");
    // Adicionando ico no botão
    doneBTN.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    // Adicionando o btn na todo
    todo.appendChild(doneBTN);

    // Criando botão 2
    const editBTN = document.createElement("button");
    // Adicionanod classe no btn
    editBTN.classList.add("edit-todo");
    // Adicionando ico no botão
    editBTN.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    // Adicionando o btn na todo
    todo.appendChild(editBTN);


    // Criando botão 3
    const deleteBTN = document.createElement("button");
    // Adicionanod classe no btn
    deleteBTN.classList.add("delete-todo");
    // Adicionando ico no botão
    deleteBTN.innerHTML = '<i class="fa-solid fa-rectangle-xmark"></i>';
    // Adicionando o btn na todo
    todo.appendChild(deleteBTN);

    // Adicionando o todo na toto-list
    todoList.appendChild(todo);

    // Limpa valor
    todoInput.value = "";

    // Trazer foco
    todoInput.focus();
}

const toggleForm = ()=>{
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
}

const updateTodo = (text)=>{
// Debug da text
   console.log('Valor antigo: ' + oldInputValue);
    console.log('Valor atualizado' + text);
 
    // Selecionando todos os elementos com a classe (todo)
    const todos = document.querySelectorAll(".toDo");

    // Debug todos
    console.log(todos);

    todos.forEach((todo) => {
        let TitleOfTodo = todo.querySelector("h3");

        // Verifica se o valor é igual ao que está na memoria/variavel
        if(TitleOfTodo.innerText === oldInputValue){
            // Alterando o texto
            TitleOfTodo.innerText = text;
        }
    })
}

// Eventos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log("Enviou o Form");

    // Criando nova tarefa
    const inputValue = todoInput.value;

    if(inputValue){
        // Salvando valor 
        // console.log(inputValue);
        saveTodo(inputValue);
    }
})

// Adicionando evento que escuta o click em todo o documento/window
document.addEventListener("click", (e)=>{
    // Debug para ver o click
    console.log(e);

    // Capturando quem foi clicado
    const targetEl = e.target;
    // Selecionando a div mais próxima
    const parentEl = targetEl.closest("div");
    // Variável global do evento para receber o titulo
    let todoTitle;

    if(parentEl && parentEl.querySelector("h3")){
        todoTitle = parentEl.querySelector("h3").innerText;
    };


    // Varificando se o targetEl contem a classe finish-todo
    if(targetEl.classList.contains("finish-todo")){
        console.log("Concluindo")
        /**
         * alterando a classe da div/tag pai do botao clicado com a classe finish-todo
         * e ao invés de usar o add(), usamos o toggle() que alterna entre a classe 
         * original e a nova que nesse caso seria "done";
         * */
        parentEl.classList.toggle("done")
    };
    
    if(targetEl.classList.contains("delete-todo")){
        console.log("removendo")    
        parentEl.remove();
    };

    if(targetEl.classList.contains("edit-todo")){
         console.log("editando")  
        toggleForm();

        // Editando o valor
        editInput.value = todoTitle;

        // Mapeando o valor anterior para fazer alterações
        oldInputValue = todoTitle;
    };
});

cancelBTN.addEventListener("click", (e) =>{
    e.preventDefault();
    toggleForm();
});

editForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const editInputValue = editInput.value;

    if(editInputValue){
        // Atualizando dados
        updateTodo(editInputValue);
    };

    toggleForm();

});