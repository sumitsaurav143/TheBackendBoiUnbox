const products = [
  {
    id: 'TBB-001',
    name: 'Cubelelo Drift Infinity Cube',
    price: 'Rs. 299/-*',
    description: 'The Drift Infinity Cube offers limitless flipping and folding action that keeps your fingers moving. It’s an ideal tool to beat boredom, stay occupied during idle moments.',
    image:
      'https://m.media-amazon.com/images/I/613LRJr3MjL._SL1500_.jpg',
    link: 'https://amzn.to/3SDZRX4',
  },
  {
    id: 'TBB-002',
    name: 'Portronics Ruffpad Calc 2',
    price: 'Rs. 1199/-*',
    description: 'The Portronics Ruffpad Calc 2 combines a 12-digit calculator and a 5.5-inch LCD writing pad in one compact device. Perfect for students, professionals, and kids, it lets you perform calculations, jot down notes, doodle, and erase instantly with a single tap.',
    image:
        'https://m.media-amazon.com/images/I/61LYmKwn61L._SL1500_.jpg',
      link: 'https://amzn.to/4vJkaRD',
  },
  {
  id: 'TBB-003',
  name: 'GoMechanic Digital Tyre Inflator (Gusto T2)',
  price: 'Rs. 1,950/-*',
  description: 'The GoMechanic Gusto T2 is a portable 150 PSI digital tyre inflator designed for cars, bikes, bicycles, and other inflatables.',
  image:
    'https://m.media-amazon.com/images/I/71Cmp2ZNBJL._SL1500_.jpg',
  link: 'https://amzn.to/4wgsA2z',
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
