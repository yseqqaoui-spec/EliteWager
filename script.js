// ============================================
// ELITE WAGER - Interactive Functionality
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Balance Display Dropdown Toggle
    const balanceDisplay = document.querySelector('.balance-display');
    if (balanceDisplay) {
        balanceDisplay.addEventListener('click', function() {
            // Add dropdown functionality here
            console.log('Balance display clicked');
            // Example: Toggle dropdown menu
            // You can add a dropdown menu element and toggle its visibility
        });
    }

    // Language Selector Toggle
    const languageSelector = document.querySelector('.language-selector');
    if (languageSelector) {
        languageSelector.addEventListener('click', function() {
            console.log('Language selector clicked');
            // Add language dropdown functionality here
        });
    }

    // Category Button Interactions
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.textContent.trim();
            console.log(`Category selected: ${category}`);
            
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Add navigation or modal functionality here
            // Example: window.location.href = `/category/${category.toLowerCase()}`;
        });
    });

    // Register Button
    const registerBtn = document.querySelector('.register-btn');
    if (registerBtn) {
        registerBtn.addEventListener('click', function() {
            console.log('Register button clicked');
            // Add registration modal or navigation here
            // Example: openRegistrationModal();
        });
    }

    // Wallet Button
    const walletBtn = document.querySelector('.wallet-btn');
    if (walletBtn) {
        walletBtn.addEventListener('click', function() {
            console.log('Wallet button clicked');
            // Add wallet modal or navigation here
            // Example: openWalletModal();
        });
    }

    // Navigation Links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const linkText = this.textContent.trim();
            console.log(`Navigation link clicked: ${linkText}`);
            // Add navigation functionality here
        });
    });

    // Smooth Scroll for Anchor Links (if needed)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation on scroll (optional enhancement)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.promo-banner, .category-btn');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
