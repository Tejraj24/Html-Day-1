// Get saved cart data from localStorage
const savedCart = localStorage.getItem("cart");

// If saved cart exists → convert string back to array
// Otherwise → create empty cart array
let cart = savedCart ? JSON.parse(savedCart) : [];
let total = 0;

cart.forEach((product) => {
    total = total + Number(product.price);
});
console.log(total);

const totalAmount = document.getElementById("total-amount");
totalAmount.textContent = `$${total.toFixed(2)}`;

// Select all Add to Cart buttons
const buttons = document.querySelectorAll(".add-btn");

// Loop through all buttons
buttons.forEach((button) => {

    // Listen for click event
    button.addEventListener("click", (e) => {

        // Find nearest parent product card
        const productCard = e.target.closest(".product-card");

        // Create product object
        const product = {
            name: productCard.dataset.name,
            price: productCard.dataset.price,
            image: productCard.dataset.image
        };

        // Add product into cart array
        cart.push(product);

        // Save updated cart into localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Check output in console
        console.log(product);
        console.log(cart);

    });

});

const container = document.getElementById("cart-container");  

cart.forEach((product) => {
    container.innerHTML += `
    <div class="cart-item"  data-name="${product.name}">

        <img src="${product.image}" alt="${product.name}">

        <div class="cart-details">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
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
    })
})