fetch('path/to/db.json')
  .then(response => response.json())
  .then(data => {
    const products = data.products;
    // Chamar a função que vai renderizar os produtos e talz
    renderProducts(products);
  })
  .catch(error => console.error('Erro ao buscar produtos:', error));
