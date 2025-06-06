
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("subscribe-form")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    if (email) {
      alert("Thank you for subscribing.");
    } else {
      alert("Please enter an email address.");
    }
  });

  document.getElementById("contact-form")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();
    if (name && message) {
      alert("Thank you for your message");
      localStorage.setItem("customOrder", JSON.stringify({ name, message }));
    } else {
      alert("Please fill in all fields before submitting.");
    }
  });
});

function getCart() {
  return JSON.parse(sessionStorage.getItem("cart") || "[]");
}

function saveCart(cart) {
  sessionStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(item = "Item") {
  const cart = getCart();
  cart.push(item);
  saveCart(cart);
  alert("Item added to the cart");
}

function viewCart() {
  const cart = getCart();
  if (cart.length === 0) {
    alert("Cart is empty.");
  } else {
    alert("Cart contains " + cart.length + " item(s):\n" + cart.join(", "));
  }
}

function clearCart() {
  const cart = getCart();
  if (cart.length > 0) {
    sessionStorage.removeItem("cart");
    alert("Cart cleared");
  } else {
    alert("No items to clear");
  }
}

function processOrder() {
  const cart = getCart();
  if (cart.length > 0) {
    alert("Thank you for your order");
    sessionStorage.removeItem("cart");
  } else {
    alert("Cart is empty");
  }
}
