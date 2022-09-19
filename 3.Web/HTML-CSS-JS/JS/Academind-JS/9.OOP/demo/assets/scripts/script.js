const renderSec = document.getElementById("app");
class Product {
  constructor(title, imageUrl, price, description) {
    this.title = title || "DEFAULT";
    this.imageUrl = imageUrl;
    this.price = price || 0.0;
    this.description = description || "Nothing to see here :)!";
  }
}

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookID, shouldRender = true) {
    this.hook = document.getElementById(renderHookID);
    if (shouldRender) {
      this.render();
    }
  }

  render() {}

  createRootEl(tag, classNames, attributes) {
    const rootEl = document.createElement(tag);
    rootEl.className = classNames || "";

    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootEl.setAttribute(attr.name, attr.value);
      }
    }

    this.hook.append(rootEl);
    return rootEl;
  }
}

class ProductItem extends Component {
  constructor(hookID, product) {
    super(hookID, false);
    this.product = product;
    this.render();
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
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
  }
}

class ProductList extends Component {
  #products = [];

  constructor(hookID) {
    super(hookID);
    this.fetchProducts();
  }

  fetchProducts() {
    this.#products = [
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
    this.renderProducts();
  }

  renderProducts() {
    for (const product of this.#products) {
      new ProductItem("prod-list", product);
      //   const productItem = new ProductItem("app", product);
      //   const prodEl = productItem.renderItem();
      //   prodList.append(prodEl);
      //   prodList.append(new ProductItem("app", product));
    }
  }

  render() {
    this.createRootEl("ul", "product-list flex", [
      new ElementAttribute("id", "prod-list"),
    ]);
    if (this.products && this.products.length > 0) {
      this.renderProducts();
    }
  }
}

class Cart extends Component {
  constructor(hookID) {
    super(hookID, false);
    this.items = [];
    this.render();
  }

  get totalAmount() {
    const totalAmount = this.items.reduce(
      (prevVal, currVal) => prevVal + currVal.price,
      0
    );

    return totalAmount;
  }

  orderProducts() {
    console.log("Ordering");
    console.log(this.items);
  }

  render() {
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

    const orderBtn = cartEl.querySelector("button");
    orderBtn.addEventListener("click", this.orderProducts.bind(this));

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
  constructor() {
    this.render();
  }

  render() {
    this.cart = new Cart("app");
    new ProductList("app");
  }
}

class App {
  static cart;

  static init() {
    const shop = new RenderShop();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
