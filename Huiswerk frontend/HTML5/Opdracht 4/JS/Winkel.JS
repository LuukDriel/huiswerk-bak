// Winkelwagen-functionaliteit
let cart = [];

// Functie voor toevoegen
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const itemName = this.getAttribute('data-item');
        const itemPrice = parseFloat(this.getAttribute('data-price'));
        cart.push({ itemName, itemPrice });
        updateCart();
        document.getElementById('cart-dropdown').style.display = 'block'; // Winkelwagen laten zien
    });
});

// Functie om de winkelwagen bij te werken
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.querySelector('.cart-total');
    cartItemsContainer.innerHTML = ''; // Verwijder alle oude items

    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('cart-item');
        li.innerHTML = `${item.itemName} - €${item.itemPrice.toFixed(2)}`;
        cartItemsContainer.appendChild(li);
        total += item.itemPrice;
    });

    cartTotal.textContent = `Total: €${total.toFixed(2)}`;
}

// Checkout functionaliteit
document.getElementById('checkout-btn').addEventListener('click', function() {
    // Winkelwagen legen
    cart = [];
    updateCart();
    // Winkelwagen verbergen
    document.getElementById('cart-dropdown').style.display = 'none';
    alert('Bedankt voor je bestelling.');
});
