const colunas = document.querySelectorAll('.swim-lane');
const cards = document.querySelectorAll('.task');

// Variável que recebe o valor do card quando o mesmo é selecionado e arrastado
let draggeCard;

const dragstart = (event) => {
    draggeCard = event.target;
    
    // console.log(draggeCard)
};

const dragOVer = (event) =>{
    // console.log('over');
    event.preventDefault();
    
}
const dragEnter = ({target}) =>{
    // console.log(target);
    if(target.classList.contains('swim-lane')){
        target.classList.add('is-dragging');
    }
}
const dragLeave = ({target}) =>{
    //  console.log(target);
    target.classList.remove('is-dragging');
    
}
const Drop = ({target}) =>{
    //  console.log(target);
    target.classList.remove('is-dragging');
    target.append(draggeCard);
    
}


colunas.forEach((coluna) =>{
    coluna.addEventListener("dragover", dragOVer);
    coluna.addEventListener("dragenter", dragEnter);
    coluna.addEventListener("dragleave", dragLeave);
    coluna.addEventListener("drop", Drop);
})


cards.forEach((card) =>{
    card.addEventListener("dragstart", dragstart)
})