const tagMain = document.createElement('main')
const listaNaoOrdenada = document.createElement('ul')
document.body.appendChild(tagMain)

const productsCart = [
    { name: "Feijão preto", price: 7.99 },
    { name: "Arroz", price: 4.99 },
    { name: "Açucar", price: 3.99 },
    { name: "Macarrão", price: 2.99 },
    { name: "Morango", price: 12.99 },
    { name: "Pepsi", price: 7.99 },
    { name: "Jesus", price: 4.99 },
    { name: "Soda", price: 2.99 },
    { name: "Baré", price: 3.99 },
    { name: "Regente", price: 2.99 },
]

function soma() {
    let soma = 0
    for (let i = 0; i < productsCart.length; i++) {
        soma += Math.ceil(productsCart[i].price)
    }

    return soma
}

function lista() {
    for (let i = 0; i < productsCart.length; i++) {
        const lista = document.createElement('li')
        lista.innerText = productsCart[i].name
        const p = document.createElement('p')
        p.innerText = productsCart[i].price
        listaNaoOrdenada.appendChild(lista)
        listaNaoOrdenada.appendChild(p)

    }
    tagMain.appendChild(listaNaoOrdenada)
    return listaNaoOrdenada
}
lista()

function sessao() {
    const productDetails = document.createElement('section')
    const button = document.createElement('button')
    button.innerText = 'Finalizar compra'
    const p = document.createElement('p')
    const valor = document.createElement('valor')
    valor.innerText = soma()
    p.innerText = 'Total'
    productDetails.appendChild(p)
    productDetails.appendChild(valor)
    productDetails.appendChild(button)
    tagMain.appendChild(productDetails)

    return productDetails
}

sessao()




