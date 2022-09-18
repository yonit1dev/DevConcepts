const renderSec = document.getElementById("app");
class Product {
  constructor(title, imageUrl, price, description) {
    this.title = title || "DEFAULT";
    this.imageUrl = imageUrl;
    this.price = price || 0.0;
    this.description = description || "Nothing to see here :)!";
  }
}

class Component {
  constructor(renderHookID) {
    this.hook = document.getElementById(renderHookID);
  }

  createRootEl(tag, classNames) {
    const rootEl = document.createElement(tag);
    rootEl.className = classNames || "";

    // if (attributes && attributes.length > 0) {
    //   for (const attribute of attributes) {
    //     rootEl.setAttribute(attribute.name, attribute.value);
    //   }
    // }

    this.hook.append(rootEl);
    return rootEl;
  }
}

class ProductItem extends Component {
  constructor(hookID, product) {
    super(hookID);
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  renderItem() {
    const productEl = this.createRootEl("li", "product-item");
    productEl.innerHTML = `
          <div>
              <img src="${this.product.imageUrl} alt="${this.product.title}">
              <div class="product-item__content">
                  <h2>${this.product.title}</h2>
                  <h3>\$${this.product.price}</h3>
                  <p>${this.product.description}</p>
                  <button>Add to Cart</button>
              </div>
          </div>
      `;
    const addToCartBtn = productEl.querySelector("button");
    addToCartBtn.addEventListener("click", this.addToCart.bind(this));
    return productEl;
  }
}

class ProductList extends Component {
  constructor(hookID) {
    super(hookID);
  }
  products = [
    new Product(
      "A Pillow",
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
      9.99,
      "A Soft Pillow"
    ),
    new Product(
      "A Carpet",
      "https://images.unsplash.com/photo-1603913996638-c01100417b4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      89.99,
      "A Carpet which you might like - or not."
    ),
  ];

  renderList() {
    const prodList = this.createRootEl("ul", "product-list flex");
    for (const product of this.products) {
      const productItem = new ProductItem("app", product);
      const prodEl = productItem.renderItem();
      prodList.append(prodEl);
    }

    return prodList;
  }
}

class Cart extends Component {
  items = [];

  constructor(hookID) {
    super(hookID);
  }

  get totalAmount() {
    const totalAmount = this.items.reduce(
      (prevVal, currVal) => prevVal + currVal.price,
      0
    );

    return totalAmount;
  }

  renderCart() {
    const cartEl = this.createRootEl("section", "cart");
    cartEl.innerHTML = `
        <div>
            <h2>Total: \$${this.totalAmount.toFixed(2)}</h2>
            <h4>Items: ${this.items.length} items.</h4>
        </div>
        <button>Order Now!</button>
    `;
    this.totalAmountEl = cartEl.querySelector("h2");
    this.totalItemsEl = cartEl.querySelector("h4");
    return cartEl;
  }

  addProduct(product) {
    this.items.push(product);
    this.totalAmountEl.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
      2
    )}</h2>`;
    this.totalItemsEl.innerHTML = `<h4>Items: ${this.items.length} items.</h4>`;
  }
}

class RenderShop {
  constructor(productList, cart) {
    this.prodList = productList;
    this.cart = cart;
  }
  render() {
    this.cart.renderCart();
    this.prodList.renderList();
  }
}

class App {
  static cart;

  static init() {
    const prodList = new ProductList("app");
    const cart = new Cart("app");

    const shop = new RenderShop(prodList, cart);
    shop.render();

    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
