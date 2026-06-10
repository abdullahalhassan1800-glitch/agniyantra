let landingIdx = 0;
const landingSlides = document.querySelectorAll('.slide');
const landingDots = document.querySelectorAll('.slider-dot');
const progressFill = document.getElementById('sliderProgressFill');
let landingInterval;
let isTransitioning = false;

function resetProgress() {
    if (!progressFill) return;
    progressFill.classList.remove('paused');
    progressFill.style.animation = 'none';
    void progressFill.offsetWidth;
    progressFill.style.animation = 'progressShrink 5s linear forwards';
}

function startAutoplay() {
    clearInterval(landingInterval);
    resetProgress();
    landingInterval = setInterval(() => {
        if (!isTransitioning) landingRotate(1);
    }, 5000);
}

function landingRotate(dir) {
    if (!landingSlides.length || isTransitioning) return;
    isTransitioning = true;
    const current = landingSlides[landingIdx];
    current.classList.add('exit');
    setTimeout(() => {
        current.classList.remove('active', 'exit');
        landingDots[landingIdx].classList.remove('active');
        landingIdx += dir;
        if (landingIdx >= landingSlides.length) landingIdx = 0;
        if (landingIdx < 0) landingIdx = landingSlides.length - 1;
        landingSlides[landingIdx].classList.add('active');
        landingDots[landingIdx].classList.add('active');
        isTransitioning = false;
    }, 300);
    clearInterval(landingInterval);
    startAutoplay();
}

function changeSlide(dir) {
    if (isTransitioning) return;
    landingRotate(dir);
}

function setSlide(index) {
    if (!landingSlides.length || index === landingIdx || isTransitioning) return;
    isTransitioning = true;
    const dir = index > landingIdx ? 1 : -1;
    const current = landingSlides[landingIdx];
    current.classList.add('exit');
    setTimeout(() => {
        current.classList.remove('active', 'exit');
        landingDots[landingIdx].classList.remove('active');
        landingIdx = index;
        landingSlides[landingIdx].classList.add('active');
        landingDots[landingIdx].classList.add('active');
        isTransitioning = false;
    }, 300);
    clearInterval(landingInterval);
    startAutoplay();
}

landingSlides.forEach((slide, i) => {
    slide.addEventListener('click', (e) => {
        if (e.target.closest('.slide-add-btn')) return;
        const metals = ['brass', 'aluminium', 'copper', 'steel', 'iron'];
        scrollToFinish(metals[i]);
    });
});

let touchStartX = 0;
let touchEndX = 0;
const sliderCard = document.querySelector('.slider-card');
if (sliderCard) {
    sliderCard.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    sliderCard.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) changeSlide(1);
            else changeSlide(-1);
        }
    }, { passive: true });
}

document.addEventListener('keydown', (e) => {
    const inView = sliderCard && sliderCard.closest('.landing-hero') && sliderCard.closest('.landing-hero').getBoundingClientRect().top < window.innerHeight && sliderCard.closest('.landing-hero').getBoundingClientRect().bottom > 0;
    if (!inView) return;
    if (e.key === 'ArrowLeft') changeSlide(-1);
    if (e.key === 'ArrowRight') changeSlide(1);
});

startAutoplay();

document.querySelectorAll('.product-visual').forEach(el => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale(1.02)`;
    });
    el.addEventListener('mouseleave', () => {
        el.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
    });
});

document.querySelectorAll('.faq-item').forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answerEl = item.querySelector('.faq-answer');
    questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(other => {
            other.classList.remove('active');
            other.querySelector('.faq-answer').style.maxHeight = null;
        });
        if (!isActive) {
            item.classList.add('active');
            answerEl.style.maxHeight = answerEl.scrollHeight + "px";
        }
    });
});

function scrollToFinish(metalId) {
    const el = document.getElementById('finish-' + metalId);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.style.transform = 'scale(1.05)';
        el.style.borderColor = 'var(--clr-gold)';
        setTimeout(() => {
            el.style.transform = '';
            el.style.borderColor = '';
        }, 1500);
    }
}

function updateMockupText() {
    const logo = document.getElementById('customInputLogo').value || 'YOUR LOGO';
    const name = document.getElementById('customInputName').value || 'YOUR NAME';
    const phone = document.getElementById('customInputPhone').value || 'YOUR PHONE NO';
    document.getElementById('boxCustomName').textContent = logo.substring(0, 16);
    document.getElementById('boxCustomSub').textContent = name.substring(0, 18);
    document.getElementById('boxCustomPhone').textContent = phone.substring(0, 14);
}

const PRICES = { brass: 2299, copper: 1499, steel: 1999, aluminium: 2499, iron: 1199 };

function updateCalcQty(metal, delta) {
    const el = document.getElementById('calc-qty-' + metal);
    let val = parseInt(el.value) || 0;
    val += delta;
    if (val < 0) val = 0;
    el.value = val;
    recalculateBundle();
}

function recalculateBundle() {
    let subtotal = 0;
    for (const key in PRICES) {
        const qty = parseInt(document.getElementById('calc-qty-' + key).value) || 0;
        const total = qty * PRICES[key];
        subtotal += total;
        document.getElementById('calc-total-' + key).textContent = '₹' + total.toLocaleString('en-IN');
    }
    document.getElementById('calc-subtotal').textContent = '₹' + subtotal.toLocaleString('en-IN');
    const target = 10100;
    let percent = Math.min((subtotal / target) * 100, 100);
    document.getElementById('calc-progress-val').textContent = Math.round(percent) + '%';
    const fill = document.getElementById('calc-progress-fill');
    fill.style.width = percent + '%';
    const msg = document.getElementById('calc-unlock-msg');
    const submitBtn = document.getElementById('calc-submit-btn');
    if (subtotal >= target) {
        fill.classList.add('unlocked');
        msg.classList.add('unlocked');
        msg.innerHTML = '<i class="ph ph-lock-key-open"></i> Congratulations! FREE White Labelling Unlocked!';
        submitBtn.removeAttribute('disabled');
    } else {
        fill.classList.remove('unlocked');
        msg.classList.remove('unlocked');
        const diff = target - subtotal;
        msg.innerHTML = '<i class="ph ph-lock"></i> Add ₹' + diff.toLocaleString('en-IN') + ' more to unlock FREE White Labelling.';
        submitBtn.setAttribute('disabled', 'true');
    }
}

function addBundleToCart() {
    const quantities = {
        'brass-strip-10': parseInt(document.getElementById('calc-qty-brass').value) || 0,
        'copper-strip-8': parseInt(document.getElementById('calc-qty-copper').value) || 0,
        'ss-strip-10': parseInt(document.getElementById('calc-qty-steel').value) || 0,
        'alu-strip-10': parseInt(document.getElementById('calc-qty-aluminium').value) || 0,
        'iron-strip-10': parseInt(document.getElementById('calc-qty-iron').value) || 0
    };
    let addedAny = false;
    for (const prodId in quantities) {
        const qty = quantities[prodId];
        if (qty > 0) { addToCart(prodId, qty); addedAny = true; }
    }
    if (addedAny) {
        showToast("White Labelling Bundle added to your cart!");
        closeCartDrawer();
        setTimeout(() => openCartDrawer(), 300);
    }
}
