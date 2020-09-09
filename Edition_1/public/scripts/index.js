const buttonSearch = window.document.querySelector('#page-home main a')

const modal = window.document.querySelector('#modal')

const close = window.document.querySelector('#modal .header a')

buttonSearch.addEventListener('click', () => {
  modal.classList.remove('hide')
})

close.addEventListener('click', () => {
  modal.classList.add('hide')
})