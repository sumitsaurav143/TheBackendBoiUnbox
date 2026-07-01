const products = [
  {
    id: 'TBB-001',
    name: 'Cubelelo Drift Infinity Cube',
    price: 'Rs. 299/-*',
    description: 'The Drift Infinity Cube offers limitless flipping and folding action that keeps your fingers moving. It’s an ideal tool to beat boredom, stay occupied during idle moments.',
    image:
      'https://m.media-amazon.com/images/I/613LRJr3MjL._SL1500_.jpg',
    link: 'https://amzn.to/3SDZRX4',
  }
];

const grid = document.getElementById('product-grid');
const searchInput = document.getElementById('search');
const resultsCount = document.getElementById('results-count');

function renderProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const haystack = `${product.name} ${product.id}`.toLowerCase();
    return haystack.includes(query);
  });

  resultsCount.textContent = `Showing ${filtered.length} product${filtered.length === 1 ? '' : 's'}`;

  if (!filtered.length) {
    grid.innerHTML = '<div class="empty-state">No products match your search. Try another keyword or product ID.</div>';
    return;
  }

  grid.innerHTML = filtered
    .map(
      (product) => `
        <article class="product-card">
          <img src="${product.image}" alt="${product.name}" />
          <div class="product-content">
            <div class="product-meta">
              <span class="badge">${product.id}</span>
              <span class="product-price">${product.price}</span>
            </div>
            <h2 class="product-title">${product.name}</h2>
            <p class="product-desc">${product.description}</p>
            <a class="cta" href="${product.link}" target="_blank" rel="noreferrer noopener">Buy now</a>
          </div>
        </article>
      `
    )
    .join('');
}

searchInput.addEventListener('input', renderProducts);
renderProducts();
