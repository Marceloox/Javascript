const btnOpenModal = document.querySelector('.btnOpenModal')
const modal = document.querySelector('.modal-container')
const btnClose = document.querySelector('.btnClose')



function openModal(){
    modal.style.display = 'flex'
}

function closeModal(){
    modal.style.display = 'none'
}

btnClose.addEventListener('click',closeModal)
btnOpenModal.addEventListener('click',openModal) 