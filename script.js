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
    price: 'Rs. 1,199/-*',
    description: 'The Portronics Ruffpad Calc 2 combines a 12-digit calculator and a 5.5-inch LCD writing pad in one compact device. Perfect for students, professionals, and kids.',
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
},
  {
  id: "TBB-004",
  name: "Portronics Luxcell Wireless Mini 10K Magnetic Power Bank",
  price: "Rs. 1,499/-*",
  description:
    "The Portronics Luxcell Wireless Mini 10K is a compact 10000mAh magnetic power bank with 15W wireless fast charging and 22.5W wired output, compatible with iPhone 12 series and other Qi-enabled devices.",
  image:
    "https://m.media-amazon.com/images/I/610xLLSDJ9L._SL1500_.jpg",
  link: "https://amzn.to/4gSML25"
},
  {
  id: "TBB-005",
  name: "Unisex Faux Leather Watch Organiser Box with 6 Slots",
  price: "Rs. 459/-*",
  description:
    "Durable & Sturdy Design: Made from high-quality material, this organiser box is designed for durability and longevity, keeping your watches safe and protected always.",
  image:
    "https://m.media-amazon.com/images/I/8162qBrd6ML._SL1500_.jpg",
  link: "https://link.amazon/B0iWA8ijx"
},
   {
  id: "TBB-006",
  name: "Playpulse Electric Popcorn Popper",
  price: "Rs. 1299/-*",
  description:
    "Oil-Free Healthy Snacking: Enjoy guilt-free popcorn every time! The Playpulse 1200W Hot Air Popcorn Maker pops kernels using only hot air — no oil or butter needed, delivering a light, healthy, and delicious snack in minutes.",
  image:
    "https://m.media-amazon.com/images/I/81mPzHWTStL._SL1500_.jpg",
  link: "https://link.amazon/B0eanCzRr"
},
  {
  id: "TBB-007",
  name: "GRENARO YouTube Wireless Mic",
  price: "Rs. 749/-*",
  description:
    "This wireless mic for YouTubers offers 4 mode settings—Original Sound, Noise Reduction, Reverb, and Mute. The clear LED indicators make it easy to switch to the perfect mode, ensuring a hassle-free setup every time, whether you're using your mic.",
  image:
    "https://m.media-amazon.com/images/I/71dhDqkgHPL._SL1500_.jpg",
  link: "https://link.amazon/B0gDmKViM"
},
  {
  id: "TBB-008",
  name: "Portronics Multifunctional Fast Charging Data Cable Kit,",
  price: "Rs. 299/-*",
  description:
    "All-in-One Convenience: The ultimate multipurpose gadget for charging, syncing, and managing device essentials, ensuring you’re always prepared on the go.",
  image:
    "https://m.media-amazon.com/images/I/61t1Q0eNs7L._SL1500_.jpg",
  link: "https://link.amazon/B0aMbM5JV"
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
