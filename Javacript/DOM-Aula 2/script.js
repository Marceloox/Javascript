const InputElement = document.querySelector('.new-task-input')
const addTaskButton = document.querySelector('.new-task-button')
const taskContainer = document.querySelector('.tasks-container')

function validarButao(){
    if(InputElement.value === ''){
    InputElement.classList.add('erro')
    }else{
        InputElement.classList.remove('erro')
        const texto = document.createElement('p')
        texto.innerText = InputElement.value
        taskContainer.appendChild(texto)
    }
}

addTaskButton.addEventListener('click', validarButao)