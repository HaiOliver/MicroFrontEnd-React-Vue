import faker from 'faker';



const mount = (el) => {
      let products = '';

      for(let i = 0; i< 3; i++){
            const name = faker.commerce.productName()
            products +=`<div>${name}</div>`;
      }

      // pass in html 
      el.innerHTML = products ;
}

// Testing in development phase -> div with id = #dev-products exist
if(process.env.NODE_ENV === "development"){
      const el = document.querySelector("#dev-products")

      if(el){
            mount(el)
      }
}

// Production mode: 


export {mount};