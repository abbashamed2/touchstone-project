// JavaScript for handling Subscribe functionality
document.addEventListener("DOMContentLoaded", function () {
  // Subscribe Form
  const subscribeForm = document.getElementById("subscribe-form");
  if (subscribeForm) {
    subscribeForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const email = document.getElementById("email").value;
      alert(`Thank you for subscribing, ${email}!`);
      localStorage.setItem("subscribedEmail", email);
      subscribeForm.reset();
    });
  }

  // Add to Cart buttons
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const itemName = this.dataset.itemName;
      const itemPrice = this.dataset.itemPrice;
      const item = {
        name: itemName,
        price: itemPrice,
      };
      let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
      cart.push(item);
      sessionStorage.setItem("cart", JSON.stringify(cart));
      alert(`${itemName} has been added to your cart.`);
    });
  });

  // View Cart Modal
  const viewCartButton = document.getElementById("view-cart");
  const cartContents = document.getElementById("cart-contents");
  const clearCartButton = document.getElementById("clear-cart");
  const processOrderButton = document.getElementById("process-order");

  if (viewCartButton && cartContents) {
    viewCartButton.addEventListener("click", function () {
      const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
      cartContents.innerHTML = "";
      if (cart.length === 0) {
        cartContents.innerHTML = "<p>Your cart is empty.</p>";
      } else {
        const ul = document.createElement("ul");
        cart.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = `${item.name} - $${item.price}`;
          ul.appendChild(li);
        });
        cartContents.appendChild(ul);
      }
    });
  }

  if (clearCartButton) {
    clearCartButton.addEventListener("click", function () {
      sessionStorage.removeItem("cart");
      alert("Cart cleared.");
      if (cartContents) cartContents.innerHTML = "";
    });
  }

  if (processOrderButton) {
    processOrderButton.addEventListener("click", function () {
      sessionStorage.removeItem("cart");
      alert("Order processed. Thank you!");
      if (cartContents) cartContents.innerHTML = "";
    });
  }

  // Contact Form - About Us page
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const order = document.getElementById("order").value.trim();

      if (name && email) {
        const customOrder = {
          name: name,
          email: email,
          order: order,
        };

        let orders = JSON.parse(localStorage.getItem("customOrders")) || [];
        orders.push(customOrder);
        localStorage.setItem("customOrders", JSON.stringify(orders));

        alert("Your custom order has been submitted. Thank you!");
        contactForm.reset();
      } else {
        alert("Please fill in all required fields.");
      }
    });
  }
});
