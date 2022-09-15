const products = [
  {
    title: "A Pillow",
    imageUrl: "",
    price: 9.99,
    description: "A Soft Pillow!",
  },
  {
    title: "A Carpet",
    imageUrl: "",
    price: 89.99,
    description: "A Carpet which you might like - or not.",
  },
];

const productList = {
  products: [
    {
      title: "A Pillow",
      imageUrl:
        "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
      price: 9.99,
      description: "A Soft Pillow!",
    },
    {
      title: "A Carpet",
      imageUrl:
        "https://images.unsplash.com/photo-1603913996638-c01100417b4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      price: 89.99,
      description: "A Carpet which you might like - or not.",
    },
  ],
  render() {
    const renderSec = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list flex";
    for (const product of this.products) {
      const productEl = document.createElement("li");
      productEl.className = "product-item";
      productEl.innerHTML = `
            <div>
                <img src="${product.imageUrl} alt="${product.title}">
                <div class="product-item__content">
                    <h2>${product.title}</h2>
                    <h3>\$${product.price}</h3>
                    <p>${product.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        `;
      prodList.append(productEl);
    }
    renderSec.append(prodList);
  },
};

productList.render();
