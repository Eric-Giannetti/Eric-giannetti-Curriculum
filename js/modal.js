const modalViews = document.querySelectorAll('.services_modal')
const modalBtns = document.querySelectorAll('.services_button')
const modalClose = document.querySelectorAll('.services_modal-close')


function modal (modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalClose.forEach((modalClose) => {
    modalClose.addEventListener('click', ()=>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})