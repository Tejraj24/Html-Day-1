// Get saved cart data from localStorage
const savedCart = localStorage.getItem("cart");

// If saved cart exists → convert string back to array
// Otherwise → create empty cart array
let cart = savedCart ? JSON.parse(savedCart) : [];
let total = 0;

cart.forEach((product) => {
total = total + (Number(product.price) * product.quantity);
});
console.log(total);

const totalAmount = document.getElementById("total-amount");
if(totalAmount){

    totalAmount.textContent = `$${total.toFixed(2)}`;

}

// Select all Add to Cart buttons
const buttons = document.querySelectorAll(".add-btn");

// Loop through all buttons

if(buttons.length > 0){

buttons.forEach((button) => {

    // Listen for click event
    button.addEventListener("click", (e) => {

        // Find nearest parent product card
        const productCard = e.target.closest(".product-card");

        // Create product object
        const product = {
            name: productCard.dataset.name,
            price: productCard.dataset.price,
            image: productCard.dataset.image,
            quantity: 1
        };

        // Add product into cart array
        const existingProduct = cart.find((item) => {
            return item.name === product.name;
        });
        if(existingProduct){
            existingProduct.quantity++;
        }
        else{
            cart.push(product);
        }

        // Save updated cart into localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Check output in console
        console.log(product);
        console.log(cart);

    });

});
};
const container = document.getElementById("cart-container");  

cart.forEach((product) => {
    container.innerHTML += `
    <div class="cart-item"  data-name="${product.name}">

        <img src="${product.image}" alt="${product.name}">

        <div class="cart-details">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <div class="quantity-controls">
                <button class="decrease-qty" data-name="${product.name}">-</button>

                <span>${product.quantity}</span>

                <button class="increase-qty" data-name="${product.name}">+</button>

            </div>
        </div>

        <button class="remove-btn">Remove</button>       

    </div>
`;
});

const removeButtons = document.querySelectorAll(".remove-btn");

removeButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const cartItem = e.target.closest(".cart-item");
        cartItem.remove();  

        const productName = cartItem.dataset.name;

        cart = cart.filter((product) => {
            return product.name !== productName;
        });

        localStorage.setItem("cart", JSON.stringify(cart));

        location.reload();
    })
})

const increaseButton = document.querySelectorAll(".increase-qty");  

increaseButton.forEach((button) => {
    button.addEventListener("click", (e) => {
        const productName = e.target.dataset.name;

        const product = cart.find((item) => {
            return item.name === productName;
        });
        product.quantity++;

        localStorage.setItem("cart", JSON.stringify(cart)); 

        location.reload();
    })
});

const decreaseButtons = document.querySelectorAll('.decrease-qty');

decreaseButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const productName = e.target.dataset.name;

        const product = cart.find((item) => {
            return item.name === productName;
        });
        product.quantity--;
        if(product.quantity <= 0) {
            cart = cart.filter((item) => {
                return item.name !== productName;
            });

            localStorage.setItem("cart", JSON.stringify(cart));

            location.reload();
        }
    })
})


const totalPriceElement = document.querySelector("#total-price p");

if (totalPriceElement) {

    totalPriceElement.innerText = `$${total.toFixed(2)}`;

}

