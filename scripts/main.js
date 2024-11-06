//* Variables

const cartBtn = document.querySelector(".cart-btn");
const closeBtn = document.querySelector(".close-btn");
const clearBtn = document.querySelector(".clear-btn");
const cartDOM = document.querySelector(".cart");
const cartItems = document.querySelector(".cart-item");
const cartOverlay = document.querySelector(".cart-overlay");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");

//* cart
let cart = [];

//* Render products
class Products {
  async getProducts() {
    await fetch("./db.json")
      .then((res) => res.json())
      .catch(err);
  }
}
//* Display products
class UI {}
//* localStorage
class Storage {}
document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();

  //* Get all products
  products.getProducts((res) => console.log(res));
});
