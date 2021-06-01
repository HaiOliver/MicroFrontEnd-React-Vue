import faker from 'faker'

const cartText = `<div>You have ${faker.random.number()} in cart</div>`

document.querySelector('#cart-dev').innerHTML = cartText