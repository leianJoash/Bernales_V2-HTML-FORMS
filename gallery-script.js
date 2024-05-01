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

