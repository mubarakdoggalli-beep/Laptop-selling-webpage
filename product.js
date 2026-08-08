const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function(e) {

        e.preventDefault();

        const card = this.parentElement;

        const product = {
            name: card.querySelector("h3").innerText,
            price: card.querySelector("h4").innerText,
            image: card.querySelector("img").src,
            quantity: 1
        };

        localStorage.setItem("cart", JSON.stringify([product]));

        window.location.href = "cart.html";

    });

});