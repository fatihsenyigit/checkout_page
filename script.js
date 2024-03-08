// selectors
const  deleteAllBtn = document.querySelector (".delete-div .fa-trash-can")
const products = document.querySelector("article.products")

// event handlers
deleteAllBtn.addEventListener("click", ()=> {
    products.textContent = "No Product"
    products.classList.add("no-product")
    document.querySelector('.delete-div').style.visibility = "hidden"
})

products.addEventListener ('click', (e)=> {

    console.log(e.target)
    
    if(e.target.classList.contains('fa-plus')) {
        e.target.previousElementSibling.textContent++
        calculatePrice(e.target)
    } else if (e.target.classList.contains('fa-minus')) {
        if (e.target.nextElementSibling.textContent > 1) {
          e.target.nextElementSibling.textContent--;
          calculatePrice(e.target);
        }
    }
})

const calculatePrice = (btn) => {
    const discountedPrice = btn.closest('.product-info').querySelector('#discounted-price')

    const productPrice = btn.closest('.buttons-div').querySelector('#product-price')

    const quantity = btn.parentNode.querySelector('#quantity')

    productPrice.textContent = (quantity.textContent * discountedPrice.textContent).toFixed(2)
}