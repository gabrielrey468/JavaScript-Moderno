const lista = document.querySelector('#lista')

const arrayLista = ["item 1", "item 2", "item 3"];

const template = document.querySelector('#template-li').content
const  fragment = document.createDocumentFragment()

arrayLista.forEach(item => {
    //template.querySelector('.list span').texContent = item
    template.querySelector('.text-danger').texContent = item
    //template.querySelector('span').texContent = item

    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
})

lista.appendChild(fragment)