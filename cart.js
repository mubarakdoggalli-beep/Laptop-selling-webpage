let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const totalElement = document.getElementById("cart-total");

function displayCart() {

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((product, index) => {

        const price = Number(product.price.replace("₹","").replace(/,/g,""));

        total += price * product.quantity;

        cartItems.innerHTML += `
        <tr>
            <td style="padding:15px;">
                <img src="${product.image}" width="80"><br>
                ${product.name}
            </td>

            <td>${product.price}</td>

            <td>${product.quantity}</td>

            <td>₹${(price * product.quantity).toLocaleString()}</td>

            <td>
                <button onclick="removeProduct(${index})"
                style="background:red;color:white;padding:8px 15px;border:none;border-radius:5px;">
                Remove
                </button>
            </td>
        </tr>
        `;
    });

    totalElement.innerHTML = "Total: ₹" + total.toLocaleString();
}

function removeProduct(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

displayCart();