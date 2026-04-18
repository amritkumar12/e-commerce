let cartCount = 0;

const cartDisplay = document.getElementById("cart-count");
const addButtons = document.querySelectorAll(".add-cart");
const toggleButtons = document.querySelectorAll(".toggle-details");

addButtons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        cartDisplay.textContent = cartCount;

        button.textContent = "Added ✔";
        button.style.background = "green";
    });
});

toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
        const details = button.nextElementSibling;
        details.classList.toggle("hidden");

        button.textContent = details.classList.contains("hidden") 
            ? "More" 
            : "Less";
    });
});
