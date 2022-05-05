adicionar.addEventListener('click', (e=>{
    adicionarText()
}))

function adicionarText() {
    let list = document.querySelector('.list')
    let lista = document.createElement('li')
    lista.classList.add('list-item')
    list.appendChild(lista)
    lista.innerText = addText.value
}