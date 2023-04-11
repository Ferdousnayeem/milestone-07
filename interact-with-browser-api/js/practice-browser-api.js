const addProduct = () => {
    const productName = document.getElementById('product-name').value;
    const productQty = document.getElementById('quantity').value;

    // console.log(productName, productQty);
    displayProduct (productName, productQty);

    saveProductToShoppingCart(productName, productQty);
}

const displayProduct = (productName, productQty) => {
    const listContainer = document.getElementById('list-container');
    const list = document.createElement('li');
    list.innerText = `
    Product Name: ${productName}, Quantity: ${productQty}
    `
    listContainer.appendChild(list);
}


const getStoredShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToShoppingCart = (product, quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified);
}

const displayProductFromLocalStorage = () => {
    const savedCart = getStoredShoppingCart();
    for (const product in savedCart) {
        const quantity = savedCart[product];
        console.log(quantity);
        displayProduct(product, quantity)
    }
}

displayProductFromLocalStorage();



document.getElementById('add-product-btn').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        }
})