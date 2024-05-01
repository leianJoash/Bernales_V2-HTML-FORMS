document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownMenu = document.querySelector("#dropdown > .menu");
    const orderForm = document.getElementById("order-form");
    const cancelBtn = document.querySelector(".cancel-btn");
    const cuisineItems = document.querySelectorAll("#dropdown .menu-item a, #dropdown .submenu-item a");

    dropdownToggle.addEventListener("click", function () {
        dropdownMenu.classList.toggle("open");
        dropdownToggle.classList.toggle("open");
    });

    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const selectedCuisine = dropdownToggle.querySelector("span").textContent.trim();
        if (!selectedCuisine || selectedCuisine === "Pick Category") {
            alert("Please select a cuisine.");
            return;
        }
        alert("Order placed!");
        orderForm.reset();
        for (let i = 0; i < 80; i++) {
            createRainDrop();
        }
    });

    cancelBtn.addEventListener("click", function () {
        orderForm.reset();
        dropdownToggle.querySelector("span").textContent = "Pick Category";
        alert("Order canceled!");
    });

    cuisineItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            const selectedCuisine = item.textContent;
            dropdownToggle.querySelector("span").textContent = selectedCuisine;
            dropdownMenu.classList.remove("open");
            dropdownToggle.classList.remove("open");
            const isSubmenu = item.closest(".submenu-item");
            if (isSubmenu) {
                const parentMenuItem = isSubmenu.closest(".menu-item");
                dropdownToggle.querySelector("span").textContent = parentMenuItem.querySelector("a").textContent + " - " + selectedCuisine;
            }
        });
    });

    function createRainDrop() {
        const rainDrop = document.createElement("img");
        const randomImage = Math.random() < 0.5 ? "assets/burger.png" : "assets/fries.png"; // Randomly choose between burger and fries
        rainDrop.src = randomImage;
        rainDrop.classList.add("rain");
        document.body.appendChild(rainDrop);
        const startOffset = Math.random() * window.innerWidth;
        const duration = Math.random() * 3 + 1;
        rainDrop.style.left = `${startOffset}px`;
        rainDrop.style.top = `${-50}px`;
        rainDrop.style.animation = `fall ${duration}s linear infinite`;
        setTimeout(() => {
            rainDrop.remove();
        }, duration * 1000);
    }
});
