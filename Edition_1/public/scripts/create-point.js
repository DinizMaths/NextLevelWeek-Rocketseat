function populateUFs() {
  const ufSelect = document.querySelector("select[name=uf]")

  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
  .then(resultado => resultado.json())
  .then(estados => {

    for(const estado of estados) {
      ufSelect.innerHTML += `<option value="${estado.id}">${estado.nome}</option>`
    }

  })
}

populateUFs()

function getCities(event) {
  const citySelect = document.querySelector("select[name=city]")
  const stateInput = document.querySelector("input[name=state]")

  const ufValue = event.target.value

  const indexOfSelectedState = event.target.selectedIndex
  stateInput.value = event.target.options[indexOfSelectedState].text

  citySelect.innerHTML = '<option>Selecione a Cidade</option>'
  citySelect.disabled = true

  fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`)
  .then(resultado => resultado.json())
  .then(cidades => {

    for(const cidade of cidades) {
      citySelect.innerHTML += `<option value="${cidade.nome}">${cidade.nome}</option>`
    }

    citySelect.disabled = false 
  })
}

window.document
  .querySelector("select[name=uf]")
  .addEventListener("change", getCities)



const itemsToCollect = window.document.querySelectorAll('.items-grid li')

for(const item of itemsToCollect) {
  item.addEventListener('click', handleSelectedItem)
}

const collectedItems = window.document.querySelector('input[name=items]')

let selectedItems = []

function handleSelectedItem(event) {
  const itemLi = event.target

  itemLi.classList.toggle('selected')
  
  const itemId = itemLi.dataset.id

  const alreadySelected = selectedItems.findIndex(item => item === itemId)
  
  if(alreadySelected >= 0) {
    const filteredItems = selectedItems.filter(item => {
      const itemIsDifferent = item != itemId

      return itemIsDifferent

    })

  selectedItems = filteredItems
  } else {
    selectedItems.push(itemId)
  }

  collectedItems.value = selectedItems
}