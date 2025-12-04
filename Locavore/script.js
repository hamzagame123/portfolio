// Locavore App - Main JavaScript

// State management
let currentScreen = 'splash';
let cart = [];
let quantity = 1;
let onboardingSlide = 0;

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

// Initialize the app
function initializeApp() {
    // Show splash screen for 2.5 seconds, then show onboarding
    setTimeout(() => {
        showScreen('onboarding');
    }, 2500);

    // Setup event listeners
    setupOnboarding();
    setupQuantitySelector();
    setupFilterChips();
    setupDeliveryOptions();
    setupFavoriteButtons();
    setupCategoryItems();
    setupScrollAnimations();
}

// Screen Navigation
function showScreen(screenId) {
    // Remove active class from all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    // Add active class to target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        currentScreen = screenId;

        // Update bottom nav active state
        updateBottomNav(screenId);

        // Trigger animations for the new screen
        triggerScreenAnimations(screenId);
    }
}

// Update bottom navigation active state
function updateBottomNav(screenId) {
    const navItems = document.querySelectorAll('.nav-item');
    const navMap = {
        'home': 0,
        'markets': 1,
        'market-detail': 1,
        'cart': 2,
        'messages': 3,
        'chat': 3,
        'profile': 4
    };

    navItems.forEach((item, index) => {
        if (Math.floor(index / 5) === 0) { // Only update first set of nav items
            item.classList.remove('active');
        }
    });

    // Find nav items in all screens and update
    document.querySelectorAll('.bottom-nav').forEach(nav => {
        const items = nav.querySelectorAll('.nav-item');
        items.forEach(item => item.classList.remove('active'));
        if (navMap[screenId] !== undefined && items[navMap[screenId]]) {
            items[navMap[screenId]].classList.add('active');
        }
    });
}

// Trigger animations for screen content
function triggerScreenAnimations(screenId) {
    const screen = document.getElementById(screenId);
    if (!screen) return;

    // Add staggered animation to elements
    const animatableElements = screen.querySelectorAll('.product-card, .farm-card, .category-item, .menu-item');
    animatableElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 50);
    });
}

// Onboarding Setup
function setupOnboarding() {
    const nextBtn = document.querySelector('.onboarding-next');
    const skipBtn = document.querySelector('.onboarding-skip');

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (onboardingSlide < 2) {
                onboardingSlide++;
                updateOnboardingSlide();
            } else {
                showScreen('location');
            }
        });
    }

    if (skipBtn) {
        skipBtn.addEventListener('click', () => {
            showScreen('location');
        });
    }
}

function updateOnboardingSlide() {
    // Update slides
    const slides = document.querySelectorAll('.onboarding-slide');
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === onboardingSlide);
    });

    // Update dots
    const dots = document.querySelectorAll('.onboarding-dots .dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === onboardingSlide);
    });

    // Update button text on last slide
    const nextBtn = document.querySelector('.onboarding-next');
    if (nextBtn) {
        nextBtn.textContent = onboardingSlide === 2 ? 'Get Started' : 'Continue';
    }
}

// Quantity Selector
function setupQuantitySelector() {
    const qtyBtns = document.querySelectorAll('.product-price-section .qty-btn');
    const qtyValue = document.querySelector('.product-price-section .qty-value');
    const addToCartBtn = document.querySelector('.add-to-cart-btn');

    if (qtyBtns.length && qtyValue) {
        qtyBtns[0].addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                updateQuantityDisplay(qtyValue, addToCartBtn);
            }
        });

        qtyBtns[1].addEventListener('click', () => {
            if (quantity < 99) {
                quantity++;
                updateQuantityDisplay(qtyValue, addToCartBtn);
            }
        });
    }
}

function updateQuantityDisplay(qtyValue, addToCartBtn) {
    if (qtyValue) {
        qtyValue.textContent = quantity;
    }
    if (addToCartBtn) {
        const price = (4.99 * quantity).toFixed(2);
        addToCartBtn.textContent = `Add to Cart - $${price}`;
    }
}

// Add to Cart
function addToCart() {
    // Show feedback animation
    const btn = document.querySelector('.add-to-cart-btn');
    if (btn) {
        btn.textContent = 'Added! ✓';
        btn.style.background = '#4caf50';
        
        setTimeout(() => {
            btn.textContent = `Add to Cart - $${(4.99 * quantity).toFixed(2)}`;
            btn.style.background = '';
        }, 1500);
    }

    // Update cart badge
    updateCartBadge();

    // Show toast notification
    showToast('Added to cart!');
}

function updateCartBadge() {
    const badges = document.querySelectorAll('.cart-badge');
    badges.forEach(badge => {
        const current = parseInt(badge.textContent) || 0;
        badge.textContent = current + 1;
        badge.style.animation = 'none';
        setTimeout(() => {
            badge.style.animation = 'successPop 0.3s ease';
        }, 10);
    });
}

// Toast Notification
function showToast(message) {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    // Create new toast
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 120px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(26, 26, 26, 0.9);
        color: white;
        padding: 12px 24px;
        border-radius: 24px;
        font-size: 14px;
        font-weight: 500;
        z-index: 1000;
        animation: fadeInUp 0.3s ease;
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// Filter Chips
function setupFilterChips() {
    const chips = document.querySelectorAll('.filter-chip');
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
        });
    });
}

// Delivery Options
function setupDeliveryOptions() {
    const options = document.querySelectorAll('.delivery-option');
    options.forEach(option => {
        option.addEventListener('click', () => {
            options.forEach(o => o.classList.remove('active'));
            option.classList.add('active');
            
            // Update total based on delivery choice
            updateCartTotal(option.querySelector('.option-price').textContent);
        });
    });
}

function updateCartTotal(deliveryPrice) {
    const totalRow = document.querySelector('.summary-row.total span:last-child');
    const deliveryRow = document.querySelector('.summary-row:nth-child(2) span:last-child');
    
    if (deliveryRow && totalRow) {
        if (deliveryPrice === 'Free') {
            deliveryRow.textContent = 'Free';
            deliveryRow.className = 'free';
            totalRow.textContent = '$14.22';
        } else {
            deliveryRow.textContent = '$5.99';
            deliveryRow.className = '';
            totalRow.textContent = '$20.21';
        }
    }
}

// Favorite Buttons
function setupFavoriteButtons() {
    const favBtns = document.querySelectorAll('.favorite-btn, .favorite-btn-large');
    favBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isFilled = btn.textContent === '♥';
            btn.textContent = isFilled ? '♡' : '♥';
            btn.style.color = isFilled ? '' : '#f44336';
            
            if (!isFilled) {
                btn.style.animation = 'successPop 0.3s ease';
                setTimeout(() => {
                    btn.style.animation = '';
                }, 300);
            }
        });
    });
}

// Category Items
function setupCategoryItems() {
    const categories = document.querySelectorAll('.category-item');
    categories.forEach(cat => {
        cat.addEventListener('click', () => {
            categories.forEach(c => {
                c.querySelector('.category-icon').style.background = '';
            });
            cat.querySelector('.category-icon').style.background = 'var(--primary-200)';
        });
    });
}

function filterCategory(category) {
    showScreen('search');
    // Could implement actual filtering logic here
    const searchInput = document.querySelector('.search-input-container input');
    if (searchInput) {
        searchInput.value = category;
        searchInput.focus();
    }
}

// Scroll Animations
function setupScrollAnimations() {
    const scrollContainers = document.querySelectorAll('.home-content, .search-content, .cart-content, .profile-content');
    
    scrollContainers.forEach(container => {
        container.addEventListener('scroll', () => {
            const scrollTop = container.scrollTop;
            
            // Parallax effect for banners
            const banner = container.querySelector('.seasonal-banner');
            if (banner) {
                banner.style.transform = `translateY(${scrollTop * 0.1}px)`;
            }
        });
    });
}

// Search functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-input-container input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            // Simple search simulation
            const results = document.querySelectorAll('.result-item');
            results.forEach(result => {
                const name = result.querySelector('h4').textContent.toLowerCase();
                result.style.display = name.includes(query) || query === '' ? 'flex' : 'none';
            });
        });
    }
});

// Cart item quantity controls
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('qty-btn') && e.target.classList.contains('small')) {
        const controls = e.target.closest('.cart-item-controls');
        if (controls) {
            const span = controls.querySelector('span');
            let qty = parseInt(span.textContent);
            
            if (e.target.textContent === '-' && qty > 1) {
                qty--;
            } else if (e.target.textContent === '+' && qty < 99) {
                qty++;
            }
            
            span.textContent = qty;
            updateCartSummary();
        }
    }
});

function updateCartSummary() {
    // Recalculate cart totals
    const items = document.querySelectorAll('.cart-item');
    let subtotal = 0;
    
    items.forEach(item => {
        const price = parseFloat(item.querySelector('.cart-item-price').textContent.replace('$', '').split('/')[0]);
        const qty = parseInt(item.closest('.cart-farm-group').querySelector('.cart-item-controls span')?.textContent || 1);
        subtotal += price * qty;
    });
    
    const subtotalEl = document.querySelector('.summary-row:first-child span:last-child');
    if (subtotalEl) {
        subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    }
}

// Add product button interactions
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-btn') || e.target.classList.contains('add-btn-small')) {
        e.stopPropagation();
        
        // Visual feedback
        const originalText = e.target.textContent;
        e.target.textContent = '✓';
        e.target.style.background = '#4caf50';
        
        setTimeout(() => {
            e.target.textContent = originalText;
            e.target.style.background = '';
        }, 1000);
        
        showToast('Added to cart!');
        updateCartBadge();
    }
});

// Greeting based on time of day
function updateGreeting() {
    const greetingEl = document.querySelector('.greeting-section h1');
    if (greetingEl) {
        const hour = new Date().getHours();
        let greeting = 'Good Morning';
        
        if (hour >= 12 && hour < 17) {
            greeting = 'Good Afternoon';
        } else if (hour >= 17) {
            greeting = 'Good Evening';
        }
        
        greetingEl.innerHTML = `${greeting}, <span class="user-name">Hamza</span> 👋`;
    }
}

// Call updateGreeting when home screen is shown
const originalShowScreen = showScreen;
showScreen = function(screenId) {
    originalShowScreen(screenId);
    if (screenId === 'home') {
        updateGreeting();
    }
};

// Add CSS animation for fade out
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(10px);
        }
    }
`;
document.head.appendChild(style);

// Handle pull to refresh simulation (optional UX enhancement)
let startY = 0;
let pulling = false;

document.addEventListener('touchstart', (e) => {
    const scrollContainer = e.target.closest('.home-content');
    if (scrollContainer && scrollContainer.scrollTop === 0) {
        startY = e.touches[0].clientY;
        pulling = true;
    }
});

document.addEventListener('touchmove', (e) => {
    if (!pulling) return;
    
    const currentY = e.touches[0].clientY;
    const diff = currentY - startY;
    
    if (diff > 80) {
        // Could implement actual refresh logic here
        pulling = false;
    }
});

document.addEventListener('touchend', () => {
    pulling = false;
});

// Toggle Going status on market cards
function toggleGoing(btn) {
    btn.classList.toggle('active');
    
    if (btn.classList.contains('active')) {
        const goingText = btn.querySelector('.going-text');
        if (goingText) {
            goingText.textContent = 'Going!';
        }
        showToast("You're going! 🎉");
        
        // Update the going count on the card
        const card = btn.closest('.market-card');
        if (card) {
            const countEl = card.querySelector('.market-going-count, .market-going-badge span');
            if (countEl) {
                const currentCount = parseInt(countEl.textContent.match(/\d+/)[0]) || 0;
                countEl.textContent = `👥 ${currentCount + 1} going`;
            }
        }
    } else {
        const goingText = btn.querySelector('.going-text');
        if (goingText) {
            goingText.textContent = 'I\'m Going';
        }
    }
}

// Toggle Going on market detail page
function toggleGoingDetail(btn) {
    btn.classList.toggle('active');
    
    if (btn.classList.contains('active')) {
        btn.textContent = "I'm Going! ✓";
        btn.style.background = 'var(--success)';
        showToast("You're going! 🎉 Friends notified.");
    } else {
        btn.textContent = "I'm Going! 🎉";
        btn.style.background = '';
    }
}

// Open maps for directions
function openMaps() {
    showToast('Opening Maps... 🗺️');
    // In a real app, this would open the device's maps app
}

// Console welcome message
console.log(`
🌿 Locavore - Sustainable Local Food Marketplace
   Eat Local. Live Sustainable.
   
   Featuring: Farmers Markets Discovery & Social Features!
   
   App initialized successfully!
`);

