document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-bars');
            this.querySelector('i').classList.toggle('fa-times');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                navMenu.classList.remove('active');
                hamburger.querySelector('i').classList.add('fa-bars');
                hamburger.querySelector('i').classList.remove('fa-times');
            }
        });
    });
    
    // Dropdown functionality for mobile
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                const dropdown = this.parentElement.querySelector('.dropdown-menu');
                dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
                
                // Close other open dropdowns
                dropdownToggles.forEach(otherToggle => {
                    if (otherToggle !== this) {
                        const otherDropdown = otherToggle.parentElement.querySelector('.dropdown-menu');
                        otherDropdown.style.display = 'none';
                    }
                });
            }
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown-container')) {
            if (window.innerWidth <= 992) {
                const dropdowns = document.querySelectorAll('.dropdown-menu');
                dropdowns.forEach(dropdown => {
                    dropdown.style.display = 'none';
                });
            }
        }
    });
    
    // Add active state to Help & Support dropdown on hover
    const helpSupportLink = document.querySelector('.help-dropdown').parentElement.previousElementSibling;
    const helpDropdown = document.querySelector('.help-dropdown');
    
    if (helpSupportLink && helpDropdown) {
        helpSupportLink.addEventListener('mouseenter', function() {
            this.classList.add('active');
        });
        
        helpSupportLink.addEventListener('mouseleave', function() {
            // Only remove active class if not hovering over dropdown
            if (!helpDropdown.matches(':hover')) {
                this.classList.remove('active');
            }
        });
        
        helpDropdown.addEventListener('mouseleave', function() {
            helpSupportLink.classList.remove('active');
        });
    }
});