// selectors
const  deleteAllBtn = document.querySelector (".delete-div .fa-trash-can")
const products = document.querySelector("article.products")

// event handlers
deleteAllBtn.addEventListener("click", ()=> {
    products.textContent = "No Product"
    products.classList.add("no-product")
    document.querySelector('.delete-div').style.visibility = "hidden"
})