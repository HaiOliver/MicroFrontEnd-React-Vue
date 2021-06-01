import faker from 'faker'



const mount = (el) => {
    const cartText = `<div>You have ${faker.random.number()} in cart</div>`
    // pass html in cart team
    el.innerHTML = cartText
}

if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#cart-dev');
    if(el) mount(el)
}

export {mount};