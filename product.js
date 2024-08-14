function getProductDetails() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');

  fetch('path/to/db.json')
    .then(response => response.json())
    .then(data => {
      const product = data.products.find(p => p.id == productId);
      if (product) {
        displayProductDetails(product);
      } else {
        console.error('Produto não encontrado.');
      }
    })
    .catch(error => console.error('Erro ao buscar detalhes do produto:', error));
}

function displayProductDetails(product) {
  const productDetails = document.getElementById('product-details');
  productDetails.innerHTML = `
    <h1>${product.name}</h1>
    <img src="${product.image}" alt="${product.name}">
    <p>${product.description}</p>
    <p>Preço: $${product.price}</p>
  `;
}

getProductDetails();