// Get the cart count element
const cartCount = document.querySelector('.cart-count');

// Initialize cart count
let itemCount = 0;

// Add event listener to all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.order');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Increase item count
        itemCount++;
        // Update cart count display
        cartCount.textContent = itemCount;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const addButtonList = document.querySelectorAll('.order');

    addButtonList.forEach(function (addButton) {
        addButton.addEventListener('click', function () {
            const notification = document.createElement('div');
            notification.classList.add('notification');
            notification.innerText = 'Successfully added to cart!';

            const notificationContainer = document.getElementById('notification-container');
            notificationContainer.appendChild(notification);

            setTimeout(function () {
                notification.classList.add('remove');
                setTimeout(function () {
                    notification.remove();
                }, 500); // Remove the notification after animation completes
            }, 2000); // Wait 2 seconds before starting animation
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const cartButton = document.querySelector('.cart');
    const cartCount = document.querySelector('.cart-count'); // Get the cart count element
    const cartBox = document.querySelector('.cart-box');
    const cartItemsList = document.querySelector('.cart-items');
    const checkoutButton = document.querySelector('.checkout-btn');
    const addToCartButtons = document.querySelectorAll('.order');
    const clearButton = document.querySelector('.clear-btn'); // Get the clear button
    let cartItems = []; // Initialize an empty array to store cart items
    let isCartBoxOpen = false; // Flag to track if cart box is open or closed

    // Function to update and show the cart box
    function updateAndShowCartBox() {
        if (cartItems.length > 0) {
            cartItemsList.innerHTML = ''; // Clear previous items
            // Count the quantity of each item
            const itemCounts = {};
            cartItems.forEach(item => {
                itemCounts[item] = (itemCounts[item] || 0) + 1;
            });
            // Append each item with its quantity to the list
            Object.keys(itemCounts).forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item} x${itemCounts[item]}`;
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.classList.add('remove-item');
                removeButton.addEventListener('click', function() {
                    removeItemFromCart(item);
                });
                li.appendChild(removeButton);
                cartItemsList.appendChild(li);
            });
            cartBox.style.display = 'block';
            isCartBoxOpen = true;
        } else {
            cartItemsList.innerHTML = '<li>No items added</li>'; // Display "No items added"
            cartBox.style.display = 'block';
            isCartBoxOpen = true;
        }
        // Update cart count
        cartCount.textContent = cartItems.length;
    }

    // Function to remove an item from the cart
    function removeItemFromCart(item) {
        const index = cartItems.indexOf(item);
        if (index !== -1) {
            cartItems.splice(index, 1);
            updateAndShowCartBox(); // Update and show the cart box
        }
    }

    // Function to clear the cart
    function clearCart() {
        cartItems = []; // Clear the cart items
        updateAndShowCartBox(); // Update and show the cart box
    }

    // Event listener for the cart button click
    cartButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent click event from bubbling up
        if (!isCartBoxOpen) {
            updateAndShowCartBox(); // Show the cart box if closed
        } else {
            cartBox.style.display = 'none'; // Hide the cart box if open
            isCartBoxOpen = false;
        }
    });

    // Event listener for the checkout button click
    checkoutButton.addEventListener('click', function() {
        // Add your checkout logic here
        // For example, you can redirect the user to a checkout page
        // window.location.href = 'checkout.html';
    });

    // Event listener for "Add to Cart" button click
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            const item = event.target.parentElement.querySelector('h3').textContent;
            cartItems.push(item); // Add the item to the cart
            updateAndShowCartBox(); // Update and show the cart box
        });
    });

    // Event listener for the Clear button click
    clearButton.addEventListener('click', function() {
        clearCart(); // Call the clearCart function when the Clear button is clicked
    });
});

var checkoutButton = document.getElementById("checkoutButton");

// Add event listener for click event
checkoutButton.addEventListener("click", function() {
    // Redirect to order-form.html
    window.location.href = "order-form.html";
});

