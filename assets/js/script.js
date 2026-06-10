// ==========================================
// CENTRAL PRODUCT DATABASE (12 REMEDIES)
// ==========================================
const PRODUCTS_DB = {
    "ss-strip-10": {
        id: "ss-strip-10",
        title: "Premium Vastu Stainless Steel Strip 10.2ft",
        price: 1999,
        originalPrice: 4442,
        category: "Strips",
        image: "../assets/images/111111.jpg",
        url: "product.html?id=ss-strip-10",
        material: "Stainless Steel",
        size: "10.2 Feet",
        weight: "1.2 Kg",
        rating: 5,
        badge: "-55%",
        trending: "Popular",
        sku: "AGNI-SS-STRIP-10",
        description: "Our Premium Stainless Steel Strip (10.2ft) is a specialized Vastu remedy meticulously designed to balance elemental cuts and entrance anomalies. It acts as a powerful energy divider to segment floor plan areas, effectively correcting space-element imbalances and blocks without demolition. Recommended for Northwest and West direction corrections.",
        specs: {
            "Material": "304 Stainless Steel",
            "Purity": ">99.6% ISO Certified Pure",
            "Gauge": "2.0mm Heavy Gauge",
            "Directional Zone": "West (Space Element)",
            "Installation": "Floor Slots / Under Door Thresholds"
        }
    },
    "copper-strip-8": {
        id: "copper-strip-8",
        title: "Premium Vastu Copper Strip 8ft",
        price: 1499,
        originalPrice: 4542,
        category: "Strips",
        image: "../assets/images/11.jpg",
        url: "product.html?id=copper-strip-8",
        material: "Copper",
        size: "8 Feet",
        weight: "1.8 Kg",
        rating: 5,
        badge: "-67%",
        trending: "Bestseller",
        sku: "AGNI-COP-STRIP-8",
        description: "Crafted from pure, high-grade red copper, this Vastu Strip is specifically designed to rectify Fire element defects. Primarily installed in the Southeast or Southern zones, it eliminates negative entry patterns and balances kitchens placed in wrong directions, restoring planetary vibrations.",
        specs: {
            "Material": "Pure Electrolytic Copper",
            "Purity": ">99.6% ISO Certified Pure",
            "Gauge": "2.0mm Heavy Gauge",
            "Directional Zone": "South / Southeast (Fire Element)",
            "Installation": "Floor Gaps / Kitchen Counter Borders"
        }
    },
    "brass-stud-3": {
        id: "brass-stud-3",
        title: "Vastu Round Solid Brass Energy Stud (3\") - Pack of 3",
        price: 2199,
        originalPrice: 5499,
        category: "Studs",
        image: "https://agniyantra.in/wp-content/uploads/2025/12/SMALL-13.webp",
        url: "product.html?id=brass-stud-3",
        material: "Brass",
        size: "3 Inches",
        weight: "2.5 Kg",
        rating: 4.5,
        badge: "-60%",
        trending: "Anchor",
        sku: "AGNI-BRS-STUD-3",
        description: "Solid Brass Energy Studs are high-density Earth stabilizers. These heavy round castings block harmful geopathic stress and strengthen the Earth element in the Southwest zone. They secure property corners and anchor unstable boundaries permanently.",
        specs: {
            "Material": "High-Density Solid Brass",
            "Purity": ">99.6% ISO Certified Pure",
            "Size": "3.0 Inches Diameter",
            "Directional Zone": "Southwest (Earth Element)",
            "Installation": "Wall Drills / Corner Floor Insertion"
        }
    },
    "gold-stud-15": {
        id: "gold-stud-15",
        title: "Vastu Brass Gold Plated Energy Stud (1.5\") - Pack of 3",
        price: 1499,
        originalPrice: 1806,
        category: "Studs",
        image: "https://agniyantra.in/wp-content/uploads/2025/12/SMALL-10.webp",
        url: "product.html?id=gold-stud-15",
        material: "Gold Plated",
        size: "1.5 Inches",
        weight: "0.8 Kg",
        rating: 5,
        badge: "-17%",
        trending: "Supreme",
        sku: "AGNI-GLD-STUD-15",
        description: "Enriched with a real gold plated coating over solid brass, these energy studs serve as cosmic amplifiers. Perfect for correcting entrance defects and energizing primary door thresholds to attract continuous positive energy, prosperity, and spiritual abundance.",
        specs: {
            "Material": "Gold Plated Solid Brass",
            "Purity": "Premium Cosmic Gold Overlay",
            "Size": "1.5 Inches Diameter",
            "Directional Zone": "Northeast / East (Water/Air Element)",
            "Installation": "Door Thresholds / Puja Room Entrance"
        }
    },
    "alu-strip-10": {
        id: "alu-strip-10",
        title: "Premium Vastu Aluminium Strip 10.2ft - Pack of 3",
        price: 2499,
        originalPrice: 5681,
        category: "Strips",
        image: "../assets/images/1111.jpg",
        url: "product.html?id=alu-strip-10",
        material: "Aluminium",
        size: "10.2 Feet",
        weight: "0.9 Kg",
        rating: 4,
        badge: "-56%",
        trending: "Bestseller",
        sku: "AGNI-ALU-STRIP-10",
        description: "These premium pure aluminium strips are customized Vastu remedies to neutralize defects related to the Air element. Excellent for correcting entrance anomalies in the Northeast or East zones, preventing wealth drain and improving family relationships.",
        specs: {
            "Material": "High-Grade Pure Aluminium",
            "Purity": ">99.6% ISO Certified Pure",
            "Gauge": "2.0mm Heavy Gauge",
            "Directional Zone": "East / Northeast (Air Element)",
            "Installation": "Floor Inlays / Door Dividers"
        }
    },
    "iron-stud-3": {
        id: "iron-stud-3",
        title: "Vastu Round Solid Iron Energy Stud (3\") - Pack of 6",
        price: 1999,
        originalPrice: 7140,
        category: "Studs",
        image: "https://agniyantra.in/wp-content/uploads/2025/12/20.png",
        url: "product.html?id=iron-stud-3",
        material: "Iron",
        size: "3 Inches",
        weight: "3.2 Kg",
        rating: 4.5,
        badge: "-72%",
        trending: "Anchor",
        sku: "AGNI-IRN-STUD-3",
        description: "Solid Iron Energy Studs are heavy-duty Vastu remedies designed to stabilize space element sectors. They are highly effective for correcting structural cuts and toilet defects in the West and Northwest zones, neutralizing negative frequencies instantly.",
        specs: {
            "Material": "Solid Casted Iron",
            "Purity": "High-Density Vedic Cast",
            "Size": "3.0 Inches Diameter",
            "Directional Zone": "West / Northwest (Space Element)",
            "Installation": "Floor Embedding / Corner Drills"
        }
    },
    "multimetal-kit": {
        id: "multimetal-kit",
        title: "Agniyantra Multi-Metal Vastu Energy Strip Kit",
        price: 3499,
        originalPrice: 7999,
        category: "Combos",
        image: "https://agniyantra.in/wp-content/uploads/2025/12/BRASS-STRIPES-pack-of-2-1.png",
        url: "product.html?id=multimetal-kit",
        material: "Multi-Metal",
        size: "Complete Set",
        weight: "4.5 Kg",
        rating: 5,
        badge: "-56%",
        trending: "Trending #1",
        sku: "AGNI-MM-KIT-5",
        description: "The ultimate spatial correction kit for comprehensive Vastu remediation. This combo pack contains an assorted collection of Copper, Brass, Stainless Steel, and Aluminium strips to balance elemental energies across all five sectors of any residential or commercial property.",
        specs: {
            "Material": "Copper, Brass, Steel & Aluminium",
            "Purity": ">99.6% Certified Pure Grades",
            "Contents": "Assorted Multi-Metal Strips",
            "Directional Zone": "Universal (All 5 Elemental Zones)",
            "Installation": "Complete Property Border Segmentation"
        }
    },
    "lead-studs-5": {
        id: "lead-studs-5",
        title: "Vastu Supreme Lead Energy Studs (Pack of 5)",
        price: 2799,
        originalPrice: 6999,
        category: "Studs",
        image: "https://agniyantra.in/wp-content/uploads/2025/12/SMALL-2-1.webp",
        url: "product.html?id=lead-studs-5",
        material: "Lead",
        size: "2 Inches",
        weight: "5.0 Kg",
        rating: 5,
        badge: "-60%",
        trending: "Hot Deal",
        sku: "AGNI-LED-STUD-5",
        description: "These Vastu Supreme Lead Studs are casting-grade solid lead remedies. Lead is chemically designated to correct the Nairutya (Southwest) corner anomalies, such as Southwest toilets or extensions. They act as high-density elemental dampeners against energy leaks.",
        specs: {
            "Material": "Solid Elemental Lead",
            "Purity": ">99.6% ISO Certified Pure",
            "Weight": "Heavy Cast Weight",
            "Directional Zone": "Southwest (Earth/Lead Element)",
            "Installation": "Toilet Border Floor Insertion"
        }
    },
    "zinc-helix": {
        id: "zinc-helix",
        title: "Vastu Pure Zinc Helix for North-East Correction",
        price: 1899,
        originalPrice: 4500,
        category: "Idols",
        image: "https://agniyantra.in/wp-content/uploads/2025/12/15.png",
        url: "product.html?id=zinc-helix",
        material: "Zinc",
        size: "Standard",
        weight: "1.4 Kg",
        rating: 5,
        badge: "-57%",
        trending: "Popular",
        sku: "AGNI-ZNC-HELIX-NE",
        description: "Our Pure Zinc Helix is designed for North-East Vastu remedies. The North-East is governed by the water element, and zinc is classical for correcting defects like North-East toilets, cut corners, or heavy kitchen placements, restoring clear cosmic energies.",
        specs: {
            "Material": "Casted Pure Zinc",
            "Purity": "High-Grade Metal Alloy",
            "Design": "Cosmic Helix Geometry",
            "Directional Zone": "North-East (Water Element)",
            "Installation": "Hang on Wall / Floor Burial"
        }
    },
    "pyramid-chip": {
        id: "pyramid-chip",
        title: "Premium Vastu Copper Pyramid Chip Set",
        price: 1299,
        originalPrice: 3249,
        category: "Crystals",
        image: "https://agniyantra.in/wp-content/uploads/2025/12/SMALL-10.webp",
        url: "product.html?id=pyramid-chip",
        material: "Copper",
        size: "Mini",
        weight: "0.5 Kg",
        rating: 5,
        badge: "-60%",
        trending: "Low Stock",
        sku: "AGNI-COP-PYR-CHIP",
        description: "Premium Vastu Copper Pyramid Chips are miniature elemental energy concentrators. These pure copper chips generate a positive torsional field that helps neutralize geometric defects, perfect for embedding under tiles or inside furniture to boost positive vibes.",
        specs: {
            "Material": "Pure Electrolytic Copper",
            "Purity": ">99.6% Certified Copper",
            "Contents": "Multi-Chip Pyramid Set",
            "Directional Zone": "Southeast / South (Fire Element)",
            "Installation": "Under Tile Adhesives / Puja Box"
        }
    },
    "vastu-dust-5elements": {
        id: "vastu-dust-5elements",
        title: "Agniyantra Panch Dhatu Vastu Correction Dust - 1kg",
        price: 1249,
        originalPrice: 2999,
        category: "Dust",
        image: "https://agniyantra.in/wp-content/uploads/2025/12/SMALL-10.webp",
        url: "product.html?id=vastu-dust-5elements",
        material: "Panchdhatu",
        size: "1 Kg",
        weight: "1.0 Kg",
        rating: 4.5,
        badge: "-58%",
        trending: "Hot Deal",
        sku: "AGNI-PCH-DUST-1KG",
        description: "Panch Dhatu Vastu Correction Dust is a sacred blend of five pure metals (Gold, Silver, Copper, Brass, Iron). Widely used during foundation laying (Bhoomi Pujan) or door threshold installation, it fills the space with powerful protective and abundance energies.",
        specs: {
            "Material": "Sacred Panchdhatu Mixture",
            "Purity": "Traditional Vedic Composition",
            "Weight": "1.0 Kg Net Weight",
            "Directional Zone": "Universal (Land Foundation)",
            "Installation": "Bhoomi Pujan Foundation / Door Sill"
        }
    },
    "copper-helix": {
        id: "copper-helix",
        title: "Vastu Pure Red Copper Helix for South-East Protection",
        price: 1799,
        originalPrice: 4200,
        category: "Idols",
        image: "https://agniyantra.in/wp-content/uploads/2025/12/BRASS-STRIPES-pack-of-2-1.png",
        url: "product.html?id=copper-helix",
        material: "Copper",
        size: "Standard",
        weight: "1.6 Kg",
        rating: 5,
        badge: "-57%",
        trending: "New Launch",
        sku: "AGNI-COP-HELIX-SE",
        description: "Pure Red Copper Helix is specifically crafted to resolve fire zone issues in the Southeast. If your kitchen is placed in the North or Northeast, or the main entrance falls in an adverse fire zone, this helix rectifies the layout defect and secures financial stability.",
        specs: {
            "Material": "Pure Red Copper",
            "Purity": ">99.6% Certified Pure",
            "Design": "Cosmic Helix Geometry",
            "Directional Zone": "South-East (Fire Element)",
            "Installation": "Wall Placement / Ceiling Hanging"
        }
    },
    "brass-strip-10": {
        id: "brass-strip-10",
        title: "Premium Vastu Solid Brass Strip 10.2ft",
        price: 2299,
        originalPrice: 5200,
        category: "Strips",
        image: "../assets/images/111.jpg",
        url: "product.html?id=brass-strip-10",
        material: "Brass",
        size: "10.2 Feet",
        weight: "1.9 Kg",
        rating: 5,
        badge: "-55%",
        trending: "Bestseller",
        sku: "AGNI-BRS-STRIP-10",
        description: "Our Premium Solid Brass Strip is a gold-standard elemental stabilizer for floor corrections. Primarily used in Southwest, South, and Center zones, it works as an energetic boundary wall to rectify entrance defects and geopathic energy stress.",
        specs: {
            "Material": "Solid Heavy Brass",
            "Purity": ">99.6% ISO Certified Pure",
            "Gauge": "2.0mm Heavy Gauge",
            "Directional Zone": "Southwest / Center (Earth Element)",
            "Installation": "Floor Slots / Door Thresholds"
        }
    },
    "iron-strip-10": {
        id: "iron-strip-10",
        title: "Premium Vastu Solid Iron Strip 10.2ft",
        price: 1199,
        originalPrice: 2800,
        category: "Strips",
        image: "../assets/images/11111.jpg",
        url: "product.html?id=iron-strip-10",
        material: "Iron",
        size: "10.2 Feet",
        weight: "2.1 Kg",
        rating: 4.5,
        badge: "-57%",
        trending: "New Launch",
        sku: "AGNI-IRN-STRIP-10",
        description: "Premium Vastu Iron Strip is designed to correct Space element layout defects. Effective in the West and Northwest zones, it stabilizes energy cuts and toilet defects, sealing negative vibration flow instantly.",
        specs: {
            "Material": "Solid Cast Iron",
            "Purity": "High-Grade Vedic Cast",
            "Gauge": "2.0mm Heavy Gauge",
            "Directional Zone": "West / Northwest (Space Element)",
            "Installation": "Floor Slots / Threshold Burials"
        }
    }
};

// ==========================================
// CENTRAL CART ENGINE
// ==========================================
let cart = JSON.parse(localStorage.getItem('agni_cart')) || [];

function saveCart() {
    localStorage.setItem('agni_cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    // Sync quantities in header badges
    const counts = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    counts.forEach(el => {
        el.textContent = totalItems;
    });

    // Render Mini-Cart Drawer
    const drawerContainer = document.querySelector('.cart-drawer-items');
    const drawerSubtotal = document.querySelector('.drawer-subtotal-val');
    
    if (drawerContainer) {
        if (cart.length === 0) {
            drawerContainer.innerHTML = `
                <div class="empty-cart-message">
                    <i class="ph ph-shopping-bag" style="font-size: 3rem; color: var(--clr-border); display: block; margin-bottom: 1rem;"></i>
                    Your cart is currently empty.
                </div>`;
            if (drawerSubtotal) drawerSubtotal.textContent = "₹0.00";
            updateShippingProgress(0);
        } else {
            let html = '';
            let subtotal = 0;
            cart.forEach(item => {
                const itemSub = item.price * item.quantity;
                subtotal += itemSub;
                html += `
                    <div class="cart-drawer-item" data-id="${item.id}">
                        <img src="${item.image}" alt="${item.title}">
                        <div class="drawer-item-details">
                            <div class="drawer-item-title">${item.title}</div>
                            <div class="drawer-item-category">${item.category} | ${item.material}</div>
                            <div class="drawer-item-price">₹${item.price.toLocaleString('en-IN')}</div>
                            <div class="drawer-item-qty-row">
                                <div class="drawer-qty-control">
                                    <button class="drawer-qty-btn minus" onclick="changeQuantity('${item.id}', -1)">-</button>
                                    <input type="number" class="drawer-qty-input" value="${item.quantity}" min="1" readonly>
                                    <button class="drawer-qty-btn plus" onclick="changeQuantity('${item.id}', 1)">+</button>
                                </div>
                                <button class="drawer-remove-btn" onclick="removeFromCart('${item.id}')" title="Remove Item">
                                    <i class="ph ph-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            });
            drawerContainer.innerHTML = html;
            if (drawerSubtotal) drawerSubtotal.textContent = `₹${subtotal.toLocaleString('en-IN')}.00`;
            updateShippingProgress(subtotal);
        }
    }

    // Render Full Cart Page (cart.html)
    const cartTableBody = document.querySelector('.cart-table tbody');
    const cartPageSubtotal = document.querySelector('.summary-row:first-child span:last-child');
    const cartPageTotal = document.querySelector('.total-row span:last-child');
    
    if (cartTableBody && window.location.pathname.includes('cart.html')) {
        if (cart.length === 0) {
            document.querySelector('.cart-container').innerHTML = `
                <div style="grid-column: span 2; text-align: center; padding: 5rem 2rem;">
                    <i class="ph ph-shopping-cart" style="font-size: 5rem; color: var(--clr-border); display: block; margin-bottom: 2rem;"></i>
                    <h2 style="margin-bottom: 1.5rem;">Your Cart is Empty</h2>
                    <p style="color: var(--clr-text-muted); margin-bottom: 2rem;">Add authentic Vastu remedies to correct floor elemental imbalances.</p>
                    <a href="shop.html" class="btn btn-primary">Go to Shop</a>
                </div>
            `;
        } else {
            let tableHtml = '';
            let total = 0;
            cart.forEach(item => {
                const sub = item.price * item.quantity;
                total += sub;
                tableHtml += `
                    <tr data-id="${item.id}">
                        <td class="product-col">
                            <div class="cart-item-info">
                                <img src="${item.image}" alt="${item.title}">
                                <div>
                                    <h4>${item.title}</h4>
                                    <p>Material: ${item.material}</p>
                                </div>
                            </div>
                        </td>
                        <td class="price-col">₹${item.price.toLocaleString('en-IN')}.00</td>
                        <td class="qty-col">
                            <div class="qty-control">
                                <button class="qty-btn minus" onclick="changeQuantity('${item.id}', -1)">-</button>
                                <input type="number" value="${item.quantity}" min="1" readonly>
                                <button class="qty-btn plus" onclick="changeQuantity('${item.id}', 1)">+</button>
                            </div>
                        </td>
                        <td class="subtotal-col">₹${sub.toLocaleString('en-IN')}.00</td>
                        <td class="remove-col">
                            <button class="remove-btn" onclick="removeFromCart('${item.id}')" aria-label="Remove item">
                                <i class="ph ph-trash"></i>
                            </button>
                        </td>
                    </tr>
                `;
            });
            cartTableBody.innerHTML = tableHtml;
            if (cartPageSubtotal) cartPageSubtotal.textContent = `₹${total.toLocaleString('en-IN')}.00`;
            if (cartPageTotal) cartPageTotal.textContent = `₹${total.toLocaleString('en-IN')}.00`;
        }
    }
}

function addToCart(productId, qty = 1) {
    const product = PRODUCTS_DB[productId];
    if (!product) return;

    const existingIndex = cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
        cart[existingIndex].quantity += qty;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            category: product.category,
            image: product.image,
            material: product.material,
            quantity: qty
        });
    }
    saveCart();
    showToast(`Added ${product.title} to cart`);
    openCartDrawer();
}

function changeQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        saveCart();
    }
}

function removeFromCart(productId) {
    const item = cart.find(i => i.id === productId);
    cart = cart.filter(i => i.id !== productId);
    saveCart();
    if (item) showToast(`Removed ${item.title} from cart`);
}

function updateShippingProgress(subtotal) {
    const threshold = 5000;
    const progressFill = document.querySelector('.shipping-progress-fill');
    const progressMsg = document.querySelector('.shipping-message');
    
    if (!progressFill || !progressMsg) return;

    if (subtotal === 0) {
        progressFill.style.width = '0%';
        progressMsg.innerHTML = `Add Vastu remedies to get FREE delivery nationwide!`;
    } else if (subtotal >= threshold) {
        progressFill.style.width = '100%';
        progressMsg.innerHTML = `<span style="color: var(--clr-gold-dark)"><i class="ph ph-sparkle"></i> Congratulations! You've unlocked Free Shipping!</span>`;
    } else {
        const diff = threshold - subtotal;
        const percent = Math.min((subtotal / threshold) * 100, 100);
        progressFill.style.width = `${percent}%`;
        progressMsg.innerHTML = `Add <strong>₹${diff.toLocaleString('en-IN')}</strong> more for <span style="color: var(--clr-gold-dark);">FREE Shipping</span>`;
    }
}

function openCartDrawer() {
    const overlay = document.querySelector('.cart-drawer-overlay');
    if (overlay) overlay.classList.add('open');
}

function closeCartDrawer() {
    const overlay = document.querySelector('.cart-drawer-overlay');
    if (overlay) overlay.classList.remove('open');
}

// Global Toast Queue
function showToast(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="ph ph-shield-check"></i> ${message}`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 400);
    }, 3500);
}

// ==========================================
// SEARCH PORTAL OVERLAY
// ==========================================
function openSearchPortal() {
    let overlay = document.querySelector('.search-portal-overlay');
    if (!overlay) {
        // Dynamically inject search portal structure
        overlay = document.createElement('div');
        overlay.className = 'search-portal-overlay';
        overlay.innerHTML = `
            <div class="search-portal">
                <button class="close-search-btn" onclick="closeSearchPortal()"><i class="ph ph-x"></i></button>
                <div class="search-box-container">
                    <i class="ph ph-magnifying-glass search-input-icon"></i>
                    <input type="text" id="searchInput" class="search-input" placeholder="Type to search remedies (e.g. Copper, Brass, Strip)..." autocomplete="off" autofocus>
                </div>
                <div class="search-results-wrapper">
                    <div id="searchResults" class="search-results-grid">
                        <div class="search-empty-state">Start typing to scan the government lab-certified catalog...</div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        // Bind input typing event listener
        const input = overlay.querySelector('#searchInput');
        input.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            const resultsBox = overlay.querySelector('#searchResults');
            
            if (query.length < 2) {
                resultsBox.innerHTML = `<div class="search-empty-state">Type at least 2 characters to search...</div>`;
                return;
            }

            const matches = Object.values(PRODUCTS_DB).filter(product => {
                return product.title.toLowerCase().includes(query) ||
                       product.material.toLowerCase().includes(query) ||
                       product.category.toLowerCase().includes(query);
            });

            if (matches.length === 0) {
                resultsBox.innerHTML = `<div class="search-empty-state">No authentic remedies found matching "${e.target.value}". Try "Copper" or "Brass"!</div>`;
            } else {
                let html = '';
                matches.forEach(prod => {
                    html += `
                        <div class="search-result-card" onclick="window.location.href='${prod.url}'">
                            <img src="${prod.image}" alt="${prod.title}">
                            <div class="search-result-info">
                                <span class="search-result-cat">${prod.category}</span>
                                <h4>${prod.title}</h4>
                                <div class="search-result-price">₹${prod.price.toLocaleString('en-IN')} <del>₹${prod.originalPrice.toLocaleString('en-IN')}</del></div>
                            </div>
                            <i class="ph ph-caret-right search-card-arrow"></i>
                        </div>
                    `;
                });
                resultsBox.innerHTML = html;
            }
        });
    }
    overlay.classList.add('open');
    setTimeout(() => {
        const input = document.getElementById('searchInput');
        if (input) input.focus();
    }, 300);
}

function closeSearchPortal() {
    const overlay = document.querySelector('.search-portal-overlay');
    if (overlay) overlay.classList.remove('open');
}

// ==========================================
// QUICK VIEW MODAL CONTROLLER
// ==========================================
function openQuickView(productId) {
    const product = PRODUCTS_DB[productId];
    if (!product) return;

    const overlay = document.querySelector('.quickview-overlay');
    if (!overlay) return;

    overlay.querySelector('.quickview-modal').setAttribute('data-current-id', productId);
    overlay.querySelector('.quickview-main-img-box img').src = product.image;
    overlay.querySelector('.quickview-info-box h2').textContent = product.title;
    overlay.querySelector('.quickview-price').innerHTML = `₹${product.price.toLocaleString('en-IN')} <del>₹${product.originalPrice.toLocaleString('en-IN')}</del>`;
    overlay.querySelector('.quickview-desc').textContent = `${product.title} is a lab-certified Vastu spatial balancer crafted under controlled directions to shield negative elements, secure entrance zones, and correct directional cuts permanently.`;
    overlay.querySelector('.quickview-qty-input').value = 1;

    overlay.classList.add('open');
}

function closeQuickView() {
    const overlay = document.querySelector('.quickview-overlay');
    if (overlay) overlay.classList.remove('open');
}

function triggerQuickViewAddToCart() {
    const overlay = document.querySelector('.quickview-overlay');
    if (!overlay) return;
    
    const productId = overlay.querySelector('.quickview-modal').getAttribute('data-current-id');
    const qty = parseInt(overlay.querySelector('.quickview-qty-input').value) || 1;
    
    if (productId) {
        addToCart(productId, qty);
        closeQuickView();
    }
}


// ==========================================
// VASTU CONSULTATION COUNTDOWN TIMER
// ==========================================
let consultInterval;

function openConsultingModal() {
    let modal = document.querySelector('.consult-modal-overlay');
    if (!modal) {
        modal = document.createElement('div');
        modal.className = 'consult-modal-overlay';
        modal.innerHTML = `
            <div class="consult-modal">
                <button class="close-consult-btn" onclick="closeConsultingModal()"><i class="ph ph-x"></i></button>
                <div class="consult-success-icon"><i class="ph ph-phone-call"></i></div>
                <h3>Expert Consultation Booked!</h3>
                <p class="consult-status-msg">Vedic astrologer <strong style="color: var(--clr-gold-dark);">Acharya Shastri</strong> has been assigned to scan your floor plan guidelines.</p>
                
                <div class="consult-timer-container">
                    <div class="consult-timer-val">10:00</div>
                    <div style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; color: var(--clr-text-muted);">Estimated Callback Time</div>
                </div>

                <div class="consult-tips">
                    <p><i class="ph ph-check-circle" style="color: var(--clr-gold-dark);"></i> Keep a digital layout or rough drawing of your home ready.</p>
                    <p><i class="ph ph-check-circle" style="color: var(--clr-gold-dark);"></i> Keep compass directions marked if possible.</p>
                </div>
                <button class="btn btn-primary" onclick="closeConsultingModal()" style="width: 100%;">Got it, Thank You</button>
            </div>
        `;
        document.body.appendChild(modal);
    }
    modal.classList.add('open');

    // Run 10 minute countdown timer
    let totalSeconds = 600;
    const timerDisplay = modal.querySelector('.consult-timer-val');
    
    clearInterval(consultInterval);
    consultInterval = setInterval(() => {
        totalSeconds--;
        if (totalSeconds <= 0) {
            clearInterval(consultInterval);
            timerDisplay.textContent = "00:00";
            return;
        }

        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }, 1000);
}

function closeConsultingModal() {
    const modal = document.querySelector('.consult-modal-overlay');
    if (modal) modal.classList.remove('open');
    clearInterval(consultInterval);
}

// ==========================================
// VEDIC ORDER SUCCESS POPUP
// ==========================================
function triggerOrderSuccessFlow(e) {
    if (e) e.preventDefault();

    const address = document.getElementById('shipAddress') ? document.getElementById('shipAddress').value : '';
    const phone = document.getElementById('shipPhone') ? document.getElementById('shipPhone').value : '';
    const name = document.getElementById('shipName') ? document.getElementById('shipName').value : '';

    if (!name || !phone || !address) {
        showToast("Please fill in all shipping details before placing the order!");
        return;
    }

    const orderNum = 'AGNI-' + Math.floor(10000 + Math.random() * 90000);
    const container = document.querySelector('.cart-container');

    if (container) {
        // Clear Cart data
        cart = [];
        localStorage.setItem('agni_cart', JSON.stringify(cart));
        updateCartUI();

        // Render gorgeous Order Success screen
        container.innerHTML = `
            <div class="order-success-card" style="grid-column: span 2; text-align: center; padding: 6rem 3rem; background: white; border: 1px solid var(--clr-border); border-radius: var(--radius-md); box-shadow: var(--shadow-premium);">
                <div class="order-success-seal" style="font-size: 5rem; color: var(--clr-gold-dark); margin-bottom: 2rem;"><i class="ph ph-sparkles"></i></div>
                <h2 style="font-size: 2.5rem; margin-bottom: 1rem; font-family: var(--font-heading);">Jay Vastu Dev!</h2>
                <h3 style="font-size: 1.5rem; color: var(--clr-gold-dark); margin-bottom: 1.5rem;">Your Order has been Consecrated & Confirmed!</h3>
                <p style="color: var(--clr-text-muted); max-width: 600px; margin: 0 auto 3rem; line-height: 1.7; font-size: 1.05rem;">
                    We have successfully registered order <strong>${orderNum}</strong>. Your Vastu remedies are now being Vedic-energized with specialized mantra chants by our temple acharyas to secure optimal directional vibrations.
                </p>

                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; max-width: 700px; margin: 0 auto 4rem; text-align: left; padding: 2rem; background: #FAF9F6; border-radius: var(--radius-sm); border: 1px solid var(--clr-border);">
                    <div>
                        <strong style="color: var(--clr-gold-dark); font-size: 0.8rem; text-transform: uppercase;">Tracking Number:</strong>
                        <p style="font-weight: 700; font-size: 1.1rem; color: var(--clr-text-dark); margin-top: 4px;">${orderNum}</p>
                    </div>
                    <div>
                        <strong style="color: var(--clr-gold-dark); font-size: 0.8rem; text-transform: uppercase;">Delivery Window:</strong>
                        <p style="font-weight: 700; font-size: 1.1rem; color: var(--clr-text-dark); margin-top: 4px;">3-5 Business Days</p>
                    </div>
                    <div>
                        <strong style="color: var(--clr-gold-dark); font-size: 0.8rem; text-transform: uppercase;">Assigned Pandit:</strong>
                        <p style="font-weight: 700; font-size: 1.1rem; color: var(--clr-text-dark); margin-top: 4px;">Acharya Shastri</p>
                    </div>
                </div>

                <div style="display: flex; gap: 1.5rem; justify-content: center;">
                    <button class="btn btn-primary" onclick="showToast('Your digital consecration certificate is downloading...')"><i class="ph ph-download-simple"></i> Download Consecration Certificate</button>
                    <a href="shop.html" class="btn btn-outline">Continue Shopping</a>
                </div>
            </div>
        `;
        window.scrollTo({top: 0, behavior: 'smooth'});
        showToast("Order placed successfully!");
    }
}

// ==========================================
// DYNAMIC CATALOG GRID LOADER & PAGINATION
// ==========================================
let currentShopCategory = null;
let currentShopPage = 1;

function changeShopPage(pageNumber) {
    currentShopPage = pageNumber;
    renderDynamicCatalog(currentShopCategory, pageNumber);
    // Smooth scroll back up to the top of the products grid
    const grid = document.querySelector('.shop-container .products-grid');
    if (grid) {
        grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function renderDynamicCatalog(categoryFilter = null, page = 1) {
    const grid = document.querySelector('.shop-container .products-grid');
    if (!grid) return;

    currentShopCategory = categoryFilter;
    currentShopPage = page;

    let items = Object.values(PRODUCTS_DB);
    
    // Apply URL parameters if any
    if (categoryFilter) {
        items = items.filter(item => item.category.toLowerCase() === categoryFilter.toLowerCase());
    }

    if (items.length === 0) {
        grid.innerHTML = `<div style="grid-column: span 3; text-align: center; padding: 5rem 2rem; color: var(--clr-text-muted);">No products found in this category.</div>`;
        return;
    }

    // Paginate items only on shop.html (where pagination element is active)
    const paginationContainer = document.querySelector('.shop-pagination');
    let displayedItems = items;
    
    if (paginationContainer) {
        const itemsPerPage = 4; // 12 items divide cleanly into 3 pages (4 per page)
        const totalPages = Math.ceil(items.length / itemsPerPage);
        
        // Boundaries verification
        if (page > totalPages) page = totalPages;
        if (page < 1) page = 1;
        currentShopPage = page;

        // Slice products list
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        displayedItems = items.slice(start, end);

        // Build elegant pagination HTML controls dynamically
        let pagHtml = '';
        if (totalPages > 1) {
            // Previous button caret
            if (page > 1) {
                pagHtml += `<button class="action-btn" onclick="changeShopPage(${page - 1})" aria-label="Previous Page"><i class="ph ph-caret-left"></i></button>`;
            }

            for (let p = 1; p <= totalPages; p++) {
                const activeStyle = p === page ? 'background: var(--clr-gold-dark); color: white; border-color: var(--clr-gold-dark);' : '';
                pagHtml += `<button class="action-btn" style="${activeStyle}" onclick="changeShopPage(${p})">${p}</button>`;
            }

            // Next button caret
            if (page < totalPages) {
                pagHtml += `<button class="action-btn" onclick="changeShopPage(${page + 1})" aria-label="Next Page"><i class="ph ph-caret-right"></i></button>`;
            }
        }
        paginationContainer.innerHTML = pagHtml;

        // Sync visual showing text
        const showingText = document.querySelector('.shop-controls p');
        if (showingText) {
            const startIdx = start + 1;
            const endIdx = Math.min(end, items.length);
            showingText.textContent = `Showing ${startIdx}–${endIdx} of ${items.length} certified items`;
        }
    }

    let html = '';
    displayedItems.forEach(prod => {
        const badgeHtml = prod.badge ? `<div class="product-badge">${prod.badge}</div>` : '';
        const trendHtml = prod.trending ? `<div class="trending-badge">${prod.trending}</div>` : '';
        
        let starsHtml = '';
        const fullStars = Math.floor(prod.rating);
        const halfStar = prod.rating % 1 !== 0;
        
        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                starsHtml += '<i class="ph ph-star-fill"></i>';
            } else if (i === fullStars && halfStar) {
                starsHtml += '<i class="ph ph-star-half-fill"></i>';
            } else {
                starsHtml += '<i class="ph ph-star"></i>';
            }
        }

        html += `
            <div class="product-card">
                ${trendHtml}
                ${badgeHtml}
                <div class="product-image-container">
                    <img src="${prod.image}" alt="${prod.title}">
                    <div class="product-actions">
                        <button class="action-btn" title="Add to Wishlist" onclick="showToast('Added to Wishlist')"><i class="ph ph-heart"></i></button>
                        <button class="action-btn" title="Quick View" onclick="openQuickView('${prod.id}')"><i class="ph ph-eye"></i></button>
                        <button class="action-btn" title="Add to Cart" onclick="addToCart('${prod.id}')"><i class="ph ph-shopping-cart"></i></button>
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-category">${prod.category}</div>
                    <div class="rating-stars">${starsHtml}</div>
                    <a href="product.html?id=${prod.id}" class="product-title">${prod.title}</a>
                    <div class="product-price">₹${prod.price.toLocaleString('en-IN')} <del>₹${prod.originalPrice.toLocaleString('en-IN')}</del></div>
                    <button class="btn-add-cart" onclick="addToCart('${prod.id}')">
                        <i class="ph ph-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;
    });
    
    grid.innerHTML = html;
}

// ==========================================
// CORE DOM LOAD ROUTER
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Cart Drawer and count overlays
    updateCartUI();

    // 2. Sticky Header shrinking on scroll
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (header) {
            if (window.scrollY > 40) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });

    // 3. Bind Search Overlay button from Nav
    const searchBtns = document.querySelectorAll('[aria-label="Search"]');
    searchBtns.forEach(btn => {
        btn.removeAttribute('onclick'); // Clear dummy alert inline triggers
        btn.addEventListener('click', openSearchPortal);
    });

    // 4. Bind Cart Drawer click controls
    document.querySelectorAll('.cart-drawer-overlay').forEach(el => {
        el.addEventListener('click', (e) => {
            if (e.target === el) closeCartDrawer();
        });
    });

    document.querySelectorAll('.quickview-overlay').forEach(el => {
        el.addEventListener('click', (e) => {
            if (e.target === el) closeQuickView();
        });
    });

    // 5. Dynamic Page Router Listings Render
    const pathname = window.location.pathname;
    
    if (pathname.includes('shop.html')) {
        // Read active category param from URL
        const urlParams = new URLSearchParams(window.location.search);
        const catParam = urlParams.get('category');
        
        // Render initial database list
        renderDynamicCatalog(catParam);
        
        // Bind Category Sidebar checkbox triggers
        const shopGrid = document.querySelector('.shop-container .products-grid');
        const categoryLabels = document.querySelectorAll('.shop-sidebar .filter-group:first-child .filter-label');
        const materialLabels = document.querySelectorAll('.shop-sidebar .filter-group:nth-child(2) .filter-label');
        const priceLabels = document.querySelectorAll('.shop-sidebar .filter-group:nth-child(3) .filter-label');

        if (shopGrid && categoryLabels.length > 0) {
            function applyFilters() {
                const productCards = shopGrid.querySelectorAll('.product-card');

                // Checked Categories
                let selectedCategories = [];
                let allCategoriesChecked = false;
                categoryLabels.forEach((label, idx) => {
                    const check = label.querySelector('input');
                    const text = label.textContent.trim().toLowerCase();
                    if (check && check.checked) {
                        if (idx === 0) allCategoriesChecked = true;
                        else selectedCategories.push(text.replace(/\(\d+\)/g, '').trim());
                    }
                });

                // Checked Materials
                let selectedMaterials = [];
                materialLabels.forEach(label => {
                    const check = label.querySelector('input');
                    const text = label.textContent.trim().toLowerCase();
                    if (check && check.checked) selectedMaterials.push(text);
                });

                // Checked Price Ranges
                let selectedPrices = [];
                priceLabels.forEach((label, idx) => {
                    const check = label.querySelector('input');
                    if (check && check.checked) selectedPrices.push(idx);
                });

                productCards.forEach(card => {
                    const categoryEl = card.querySelector('.product-category');
                    const titleEl = card.querySelector('.product-title');
                    const priceEl = card.querySelector('.product-price');
                    
                    if (!categoryEl || !titleEl || !priceEl) return;
                    
                    const catText = categoryEl.textContent.trim().toLowerCase();
                    const titleText = titleEl.textContent.trim().toLowerCase();
                    
                    const priceText = priceEl.innerHTML.split('<del>')[0];
                    const priceVal = parseInt(priceText.replace(/[^\d]/g, '')) || 0;

                    // Match Category
                    let categoryMatch = false;
                    if (allCategoriesChecked || selectedCategories.length === 0) {
                        categoryMatch = true;
                    } else {
                        selectedCategories.forEach(cat => {
                            if (catText.includes(cat.substring(0, 4)) || cat.includes(catText.substring(0, 4))) {
                                categoryMatch = true;
                            }
                        });
                    }

                    // Match Material
                    let materialMatch = false;
                    if (selectedMaterials.length === 0) {
                        materialMatch = true;
                    } else {
                        selectedMaterials.forEach(mat => {
                            if (titleText.includes(mat) || catText.includes(mat)) {
                                materialMatch = true;
                            }
                        });
                    }

                    // Match Price
                    let priceMatch = false;
                    if (selectedPrices.length === 0) {
                        priceMatch = true;
                    } else {
                        selectedPrices.forEach(rangeIdx => {
                            if (rangeIdx === 0 && priceVal <= 1500) priceMatch = true;
                            else if (rangeIdx === 1 && priceVal > 1500 && priceVal <= 3000) priceMatch = true;
                            else if (rangeIdx === 2 && priceVal > 3000) priceMatch = true;
                        });
                    }

                    // Toggle Visibility
                    if (categoryMatch && materialMatch && priceMatch) {
                        card.style.display = 'block';
                        card.style.animation = 'fadeInUp 0.4s ease-out';
                    } else {
                        card.style.display = 'none';
                    }
                });
            }

            categoryLabels.forEach((label, idx) => {
                const check = label.querySelector('input');
                if (check) {
                    check.addEventListener('change', () => {
                        if (idx === 0 && check.checked) {
                            categoryLabels.forEach((ol, oi) => {
                                if (oi !== 0) {
                                    const c = ol.querySelector('input');
                                    if (c) c.checked = false;
                                }
                            });
                        } else if (idx !== 0 && check.checked) {
                            const allC = categoryLabels[0].querySelector('input');
                            if (allC) allC.checked = false;
                        }
                        
                        const anyChecked = Array.from(categoryLabels).some(l => {
                            const c = l.querySelector('input');
                            return c && c.checked;
                        });
                        if (!anyChecked) {
                            const allC = categoryLabels[0].querySelector('input');
                            if (allC) allC.checked = true;
                        }
                        applyFilters();
                    });
                }
            });

            materialLabels.forEach(label => {
                const check = label.querySelector('input');
                if (check) check.addEventListener('change', applyFilters);
            });

            priceLabels.forEach(label => {
                const check = label.querySelector('input');
                if (check) check.addEventListener('change', applyFilters);
            });

            // Pre-select category checkbox if URL param exists
            if (catParam) {
                categoryLabels.forEach(l => {
                    const c = l.querySelector('input');
                    if (c) c.checked = false;
                });
                
                let found = false;
                categoryLabels.forEach((label) => {
                    const text = label.textContent.trim().toLowerCase();
                    if (text.includes(catParam.toLowerCase().substring(0, 4))) {
                        const c = label.querySelector('input');
                        if (c) c.checked = true;
                        found = true;
                    }
                });
                
                if (!found) {
                    const allC = categoryLabels[0].querySelector('input');
                    if (allC) allC.checked = true;
                }
                applyFilters();
            }

            // Setup Sort dropdown
            const sortSelect = document.querySelector('.shop-select');
            if (sortSelect) {
                sortSelect.addEventListener('change', () => {
                    const productCards = shopGrid.querySelectorAll('.product-card');
                    
                    // Store original order indices if not already set
                    productCards.forEach((card, idx) => {
                        if (!card.hasAttribute('data-original-index')) {
                            card.setAttribute('data-original-index', idx);
                        }
                    });

                    const cards = Array.from(productCards);
                    const sortBy = sortSelect.value;

                    cards.sort((a, b) => {
                        const priceElA = a.querySelector('.product-price');
                        const priceElB = b.querySelector('.product-price');
                        if (!priceElA || !priceElB) return 0;
                        
                        const priceTextA = priceElA.innerHTML.split('<del>')[0];
                        const priceTextB = priceElB.innerHTML.split('<del>')[0];
                        const priceA = parseInt(priceTextA.replace(/[^\d]/g, '')) || 0;
                        const priceB = parseInt(priceTextB.replace(/[^\d]/g, '')) || 0;
                        
                        const starsA = a.querySelectorAll('.rating-stars .ph-star-fill').length + (a.querySelector('.rating-stars .ph-star-half-fill') ? 0.5 : 0);
                        const starsB = b.querySelectorAll('.rating-stars .ph-star-fill').length + (b.querySelector('.rating-stars .ph-star-half-fill') ? 0.5 : 0);
                        
                        if (sortBy === 'price-low') {
                            return priceA - priceB;
                        } else if (sortBy === 'price-high') {
                            return priceB - priceA;
                        } else if (sortBy === 'rating') {
                            return starsB - starsA;
                        } else {
                            const indexA = parseInt(a.getAttribute('data-original-index')) || 0;
                            const indexB = parseInt(b.getAttribute('data-original-index')) || 0;
                            return indexA - indexB;
                        }
                    });

                    cards.forEach(card => shopGrid.appendChild(card));
                    showToast(`Sorted remedies by ${sortSelect.options[sortSelect.selectedIndex].text}`);
                });
            }
        }
    } else if (pathname.includes('strips.html')) {
        renderDynamicCatalog('Strips');
    } else if (pathname.includes('studs.html')) {
        renderDynamicCatalog('Studs');
    } else if (pathname.includes('product.html')) {
        // Dynamic Product details router
        const urlParams = new URLSearchParams(window.location.search);
        let prodId = urlParams.get('id');
        
        // Default to bestseller stainless steel strip if no ID provided or invalid
        if (!prodId || !PRODUCTS_DB[prodId]) {
            prodId = 'ss-strip-10';
        }
        
        const prod = PRODUCTS_DB[prodId];
        
        // 1. Populate basic information
        const titleEl = document.querySelector('.product-meta h1');
        const priceEl = document.querySelector('.price-large');
        const descEl = document.querySelector('.product-description p');
        const mainImgEl = document.getElementById('mainImage');
        const thumbnailList = document.querySelector('.thumbnail-list');
        const breadcrumbLast = document.querySelector('.breadcrumb span:last-child');
        const categoryBreadcrumb = document.querySelector('.breadcrumb a:nth-of-type(3)');
        
        if (titleEl) titleEl.textContent = prod.title;
        if (priceEl) {
            priceEl.innerHTML = `₹${prod.price.toLocaleString('en-IN')} <del>₹${prod.originalPrice.toLocaleString('en-IN')}</del>`;
        }
        if (descEl) descEl.textContent = prod.description;
        if (mainImgEl) mainImgEl.src = prod.image;
        if (breadcrumbLast) breadcrumbLast.textContent = prod.title;
        
        if (categoryBreadcrumb) {
            categoryBreadcrumb.textContent = `Vastu ${prod.category}`;
            categoryBreadcrumb.href = `shop.html?category=${prod.category.toLowerCase()}`;
        }
        
        // 2. Dynamic SKU & Tags metadata
        const skuSpan = document.querySelector('.product-meta-details p:nth-child(1) span');
        const catSpan = document.querySelector('.product-meta-details p:nth-child(2) span');
        const tagSpan = document.querySelector('.product-meta-details p:nth-child(3) span');
        
        if (skuSpan) skuSpan.textContent = prod.sku;
        if (catSpan) {
            catSpan.innerHTML = `<a href="shop.html?category=${prod.category.toLowerCase()}" style="color: var(--clr-gold-dark);">${prod.category}</a>`;
        }
        if (tagSpan) {
            tagSpan.textContent = `${prod.material}, ${prod.category}, Vedic Correction, Vastu Remedy`;
        }
        
        // 3. Dynamic Thumbnail Gallery
        if (thumbnailList) {
            // Find another relevant image to populate as second thumbnail
            let secondaryImage = "https://agniyantra.in/wp-content/uploads/2025/12/BRASS-STRIPES-pack-of-2-1.png";
            if (prod.category === 'Studs') {
                secondaryImage = "https://agniyantra.in/wp-content/uploads/2025/12/SMALL-2-1.webp";
            } else if (prod.category === 'Idols' || prod.category === 'Crystals') {
                secondaryImage = "https://agniyantra.in/wp-content/uploads/2025/12/15.png";
            }
            if (prod.image === secondaryImage) {
                secondaryImage = "https://agniyantra.in/wp-content/uploads/2025/12/SMALL-10.webp";
            }
            
            thumbnailList.innerHTML = `
                <img src="${prod.image}" class="thumbnail active" onclick="document.getElementById('mainImage').src=this.src; document.querySelectorAll('.thumbnail').forEach(t=>t.classList.remove('active')); this.classList.add('active');" alt="${prod.title} Thumb 1">
                <img src="${secondaryImage}" class="thumbnail" onclick="document.getElementById('mainImage').src=this.src; document.querySelectorAll('.thumbnail').forEach(t=>t.classList.remove('active')); this.classList.add('active');" alt="${prod.title} Thumb 2">
            `;
        }
        
        // 4. Set active add to cart trigger ID
        const addToCartBtn = document.querySelector('.add-to-cart-btn');
        if (addToCartBtn) {
            addToCartBtn.setAttribute('onclick', `addToCart('${prod.id}', parseInt(document.getElementById('qty').value))`);
        }
        
        // 5. Dynamic Vastu Specifications Table & Accordion Info Tabs
        const updateSpecsTable = () => {
            const specTabContainer = document.querySelector('.product-tabs');
            if (specTabContainer) {
                let specRows = '';
                for (const [key, value] of Object.entries(prod.specs)) {
                    specRows += `<tr><th>${key}</th><td>${value}</td></tr>`;
                }
                
                const specsTableHtml = `
                    <table class="spec-table">
                        ${specRows}
                        <tr><th>Thickness/Gauge</th><td>2mm Heavy Gauge Shield Density</td></tr>
                        <tr><th>Material Weight</th><td>${prod.weight || 'Standard Weight'}</td></tr>
                        <tr><th>Authenticity</th><td>99.6%+ Spectrograph Tested Purity</td></tr>
                    </table>
                `;
                
                const tabBtns = document.querySelectorAll('.product-tabs .tab-btn');
                const tabContent = document.querySelector('.product-tabs .tab-content');
                
                const reviewsHtml = `
                    <div class="reviews-summary-block">
                        <div>
                            <div class="average-rating-num">${prod.rating.toFixed(1)}</div>
                            <div class="rating-stars" style="justify-content: flex-start; margin: 0.5rem 0;">
                                <i class="ph ph-star-fill"></i><i class="ph ph-star-fill"></i><i class="ph ph-star-fill"></i><i class="ph ph-star-fill"></i><i class="ph ph-star-fill"></i>
                            </div>
                            <div style="font-size: 0.85rem; color: var(--clr-text-muted);">Based on 28 verified reviews</div>
                        </div>
                        <div style="font-size: 0.95rem; color: var(--clr-text-muted); line-height: 1.6;">
                            "Installing the ${prod.material.toLowerCase()} remedy along the correct zone immediately changed the ambient energy of the house. Certified high quality metal!" <br><strong style="color: var(--clr-text-dark); display: block; margin-top: 0.5rem;">— Acharya K. Sharma (Consultant)</strong>
                        </div>
                    </div>
                    <div class="review-card-item">
                        <div class="review-card-header">
                            <div class="reviewer-name">Rahul Sharma <span class="reviewer-verified-badge"><i class="ph ph-patch-check-fill"></i> Verified Buyer</span></div>
                            <div class="rating-stars">
                                <i class="ph ph-star-fill"></i><i class="ph ph-star-fill"></i><i class="ph ph-star-fill"></i><i class="ph ph-star-fill"></i><i class="ph ph-star-fill"></i>
                            </div>
                        </div>
                        <p class="review-comment">Product is heavy and beautifully cut. Standard Vastu guidelines specify heavy gauge metals, and Agniyantra provides exactly that. The shipping was incredibly fast!</p>
                    </div>
                `;
                
                const TAB_TEXTS = [
                    prod.description,
                    specsTableHtml,
                    reviewsHtml
                ];
                
                tabContent.innerHTML = TAB_TEXTS[0];
                
                tabBtns.forEach((btn, idx) => {
                    btn.removeAttribute('onclick');
                    const newBtn = btn.cloneNode(true);
                    btn.parentNode.replaceChild(newBtn, btn);
                    
                    newBtn.addEventListener('click', () => {
                        const activeTabBtns = document.querySelectorAll('.product-tabs .tab-btn');
                        activeTabBtns.forEach(b => b.classList.remove('active'));
                        newBtn.classList.add('active');
                        tabContent.innerHTML = TAB_TEXTS[idx];
                    });
                });
            }
        };
        
        updateSpecsTable();
        
        // 6. Dynamic Swatches Material Selection
        const swatchGroup = document.querySelector('.swatch-group');
        if (swatchGroup) {
            const relatedProducts = Object.values(PRODUCTS_DB).filter(p => p.category === prod.category);
            let swatchHtml = '';
            relatedProducts.forEach(rp => {
                const isActive = rp.id === prod.id ? 'active' : '';
                swatchHtml += `<button class="swatch-btn ${isActive}" onclick="window.location.href='product.html?id=${rp.id}'">${rp.material} (${rp.size || 'Standard'})</button>`;
            });
            swatchGroup.innerHTML = swatchHtml;
        }
    }

    // 9. Coordinate-based image zoom lens on product.html
    const mainImg = document.getElementById('mainImage');
    const magnifierContainer = document.querySelector('.magnifier-container');
    
    if (mainImg && magnifierContainer) {
        const lens = document.createElement('div');
        lens.className = 'magnifier-lens';
        magnifierContainer.appendChild(lens);

        magnifierContainer.addEventListener('mousemove', moveLens);
        magnifierContainer.addEventListener('mouseenter', showLens);
        magnifierContainer.addEventListener('mouseleave', hideLens);

        function showLens() {
            lens.style.display = 'block';
            lens.style.backgroundImage = `url('${mainImg.src}')`;
            lens.style.backgroundSize = `${mainImg.width * 2.2}px ${mainImg.height * 2.2}px`;
        }

        function hideLens() {
            lens.style.display = 'none';
        }

        function moveLens(e) {
            const rect = mainImg.getBoundingClientRect();
            let x = e.pageX - rect.left - window.scrollX;
            let y = e.pageY - rect.top - window.scrollY;

            if (x > mainImg.width) x = mainImg.width;
            if (x < 0) x = 0;
            if (y > mainImg.height) y = mainImg.height;
            if (y < 0) y = 0;

            const lensW = lens.offsetWidth / 2;
            const lensH = lens.offsetHeight / 2;

            lens.style.left = `${x - lensW}px`;
            lens.style.top = `${y - lensH}px`;

            const ratioX = (x / mainImg.width) * 100;
            const ratioY = (y / mainImg.height) * 100;
            lens.style.backgroundPosition = `${ratioX}% ${ratioY}%`;
        }
    }
});

// ==========================================
// VIDEO SLIDER AUTOPLAY CONTROLS
// ==========================================
const slides = document.querySelectorAll('.video-slide');
const dots = document.querySelectorAll('.carousel-dot');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const playBtn = document.querySelector('.carousel-play-btn');

let currentSlide = 0;
let isPlaying = true;
let slideInterval;

function showSlide(index) {
    if (!slides.length) return;
    
    slides.forEach((slide, i) => {
        const video = slide.querySelector('video');
        if (i === index) {
            slide.classList.add('active');
            if (dots[i]) dots[i].classList.add('active');
            if (isPlaying && video) {
                video.play().catch(err => console.log('Autoplay blocked:', err));
            }
        } else {
            slide.classList.remove('active');
            if (dots[i]) dots[i].classList.remove('active');
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        }
    });
    currentSlide = index;
}

function nextSlide() {
    if (!slides.length) return;
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
}

function prevSlide() {
    if (!slides.length) return;
    let prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
}

function startSlideShow() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 8000); 
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

if (slides.length > 0) {
    const activeVideo = slides[currentSlide].querySelector('video');
    if (activeVideo) {
        activeVideo.play().catch(err => console.log('Autoplay blocked:', err));
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            if (isPlaying) startSlideShow();
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            if (isPlaying) startSlideShow();
        });
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            if (isPlaying) startSlideShow();
        });
    });
    
    if (playBtn) {
        playBtn.addEventListener('click', () => {
            const activeVideo = slides[currentSlide].querySelector('video');
            const icon = playBtn.querySelector('i');
            if (!activeVideo || !icon) return;
            
            if (isPlaying) {
                isPlaying = false;
                stopSlideShow();
                activeVideo.pause();
                icon.className = 'ph ph-play';
            } else {
                isPlaying = true;
                startSlideShow();
                activeVideo.play().catch(err => console.log('Autoplay blocked:', err));
                icon.className = 'ph ph-pause';
            }
        });
    }
    
    startSlideShow();
}

// Copy Coupon helper
window.copyCouponCode = function(code, element) {
    navigator.clipboard.writeText(code).then(() => {
        const container = element.closest('.offer-code-container');
        if (!container) return;
        
        const tooltip = container.querySelector('.tooltip');
        if (!tooltip) return;
        
        tooltip.textContent = 'Copied!';
        tooltip.classList.add('show');
        
        setTimeout(() => {
            tooltip.classList.remove('show');
            setTimeout(() => {
                tooltip.textContent = 'Copy Code';
            }, 300);
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
};

// ==========================================
// HERO IMAGE CAROUSEL SLIDESHOW
// ==========================================
const heroSlides = document.querySelectorAll('.hero-slide');
const heroDots = document.querySelectorAll('.hero-carousel-dot');
const heroPrevBtn = document.querySelector('.hero-carousel-btn.prev');
const heroNextBtn = document.querySelector('.hero-carousel-btn.next');

let currentHeroSlide = 0;
let heroInterval;

function showHeroSlide(index) {
    if (!heroSlides.length) return;

    let prevIndex = currentHeroSlide;

    heroSlides.forEach((slide, i) => {
        slide.classList.remove('active', 'leave');
        if (heroDots[i]) heroDots[i].classList.remove('active');
    });

    if (prevIndex !== index) {
        heroSlides[prevIndex]?.classList.add('leave');
    }

    heroSlides[index]?.classList.add('active');
    if (heroDots[index]) heroDots[index].classList.add('active');
    currentHeroSlide = index;

    setTimeout(() => {
        heroSlides[prevIndex]?.classList.remove('leave');
    }, 700);
}

function nextHeroSlide() {
    if (!heroSlides.length) return;
    let next = (currentHeroSlide + 1) % heroSlides.length;
    showHeroSlide(next);
}

function prevHeroSlide() {
    if (!heroSlides.length) return;
    let prev = (currentHeroSlide - 1 + heroSlides.length) % heroSlides.length;
    showHeroSlide(prev);
}

function startHeroAutoplay() {
    clearInterval(heroInterval);
    heroInterval = setInterval(nextHeroSlide, 6000);
}

if (heroSlides.length > 0) {
    if (heroNextBtn) {
        heroNextBtn.addEventListener('click', () => {
            nextHeroSlide();
            startHeroAutoplay();
        });
    }
    
    if (heroPrevBtn) {
        heroPrevBtn.addEventListener('click', () => {
            prevHeroSlide();
            startHeroAutoplay();
        });
    }
    
    heroDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showHeroSlide(index);
            startHeroAutoplay();
        });
    });
    
    startHeroAutoplay();
}

// ==========================================
// MOBILE NAV TOGGLE
// ==========================================
function toggleNav() {
    const nav = document.querySelector('.nav-links');
    const overlay = document.querySelector('.nav-overlay');
    if (!nav) return;
    nav.classList.toggle('open');
    if (overlay) overlay.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
}
