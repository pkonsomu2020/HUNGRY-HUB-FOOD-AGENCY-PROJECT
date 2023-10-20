// let openShopping = document.querySelector('.shopping');
// let closeShopping = document.querySelector('.closeShopping');
// let list = document.querySelector('.list');
// let listCard = document.querySelector('.listCard');
// let body = document.querySelector('body');
// let total = document.querySelector('.total');
// let quantity = document.querySelector('.quantity');

// openShopping.addEventListener('click', ()=>{
//     body.classList.add('active');
// })
// closeShopping.addEventListener('click', ()=>{
//     body.classList.remove('active');
// })

// let products = [
//     {
//         id: 1,
//         name: 'PRODUCT NAME 1',
//         image: '1.PNG',
//         price: 120000
//     },
//     {
//         id: 2,
//         name: 'PRODUCT NAME 2',
//         image: '2.PNG',
//         price: 120000
//     },
//     {
//         id: 3,
//         name: 'PRODUCT NAME 3',
//         image: '3.PNG',
//         price: 220000
//     },
//     {
//         id: 4,
//         name: 'PRODUCT NAME 4',
//         image: '4.PNG',
//         price: 123000
//     },
//     {
//         id: 5,
//         name: 'PRODUCT NAME 5',
//         image: '5.PNG',
//         price: 320000
//     },
//     {
//         id: 6,
//         name: 'PRODUCT NAME 6',
//         image: '6.PNG',
//         price: 120000
//     }
// ];
// let listCards  = [];
// function initApp(){
//     products.forEach((value, key) =>{
//         let newDiv = document.createElement('div');
//         newDiv.classList.add('item');
//         newDiv.innerHTML = `
//             <img src="image/${value.image}">
//             <div class="title">${value.name}</div>
//             <div class="price">${value.price.toLocaleString()}</div>
//             <button onclick="addToCard(${key})">Add To Card</button>`;
//         list.appendChild(newDiv);
//     })
// }
// initApp();
// function addToCard(key){
//     if(listCards[key] == null){
//         // copy product form list to list card
//         listCards[key] = JSON.parse(JSON.stringify(products[key]));
//         listCards[key].quantity = 1;
//     }
//     reloadCard();
// }
// function reloadCard(){
//     listCard.innerHTML = '';
//     let count = 0;
//     let totalPrice = 0;
//     listCards.forEach((value, key)=>{
//         totalPrice = totalPrice + value.price;
//         count = count + value.quantity;
//         if(value != null){
//             let newDiv = document.createElement('li');
//             newDiv.innerHTML = `
//                 <div><img src="image/${value.image}"/></div>
//                 <div>${value.name}</div>
//                 <div>${value.price.toLocaleString()}</div>
//                 <div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
//                     <div class="count">${value.quantity}</div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
//                 </div>`;
//                 listCard.appendChild(newDiv);
//         }
//     })
//     total.innerText = totalPrice.toLocaleString();
//     quantity.innerText = count;
// }
// function changeQuantity(key, quantity){
//     if(quantity == 0){
//         delete listCards[key];
//     }else{
//         listCards[key].quantity = quantity;
//         listCards[key].price = quantity * products[key].price;
//     }
//     reloadCard();
// }

function addToCart(itemName, itemPrice) {
    // Create an object to represent the cart item
    const cartItem = { name: itemName, price: itemPrice };

    // Get the current cart data from local storage or initialize an empty array
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Add the new item to the cart
    cartItems.push(cartItem);

    // Store the updated cart data back in local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Update the cart quantity and display it in the shopping icon
    const cartQuantity = cartItems.length;
    document.getElementById('cart-quantity').textContent = cartQuantity;

    // Optionally, you can display a confirmation message to the user
    alert(`Added ${itemName} to the cart.`);
}



// Function to remove all cart items
function removeAllCartItems() {
    // Clear the cart in local storage
    localStorage.removeItem('cartItems');

    // Clear the cart content on the page
    cartContent.innerHTML = ''; // Clear the cart content
    totalElement.textContent = 'Total: KSH. 0';
}

// Add a click event listener to the "Remove All" button
// const removeAllButton = document.getElementById('remove-all-button');
// removeAllButton.addEventListener('click', () => {
//     removeAllCartItems();
// });

// Call displayCart to initially load and display the cart items
// displayCart();