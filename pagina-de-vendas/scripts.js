document.addEventListener("DOMContentLoaded", function() {
    const productsContainer = document.querySelector(".products");
  
    // Array de produtos (pode ser substituído por uma chamada a uma API)
    const products = [
      { name: "Produto 1", image: "product1.jpg", price: 19.99 },
      { name: "Produto 2", image: "product2.jpg", price: 29.99 },
      { name: "Produto 3", image: "product3.jpg", price: 39.99 },
      { name: "Produto 4", image: "product4.jpg", price: 49.99 },
      { name: "Produto 5", image: "product5.jpg", price: 59.99 },
      { name: "Produto 6", image: "product6.jpg", price: 69.99 },
      { name: "Produto 7", image: "product7.jpg", price: 79.99 },
      { name: "Produto 8", image: "product8.jpg", price: 89.99 },
      { name: "Produto 9", image: "product9.jpg", price: 99.99 }
    ];
  
    // Adiciona os produtos à página
    products.forEach(product => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Preço: R$ ${product.price.toFixed(2)}</p>
        <button class="btn">Adicionar ao Carrinho</button>
      `;
      productsContainer.appendChild(productElement);
    });
  });