document.addEventListener('DOMContentLoaded', function() {
    // Functionality for "Buy Now" buttons
    const buyButtons = document.querySelectorAll('.gradient');

    buyButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const product = this.parentElement.parentElement.querySelector('p.bg-pink-500').textContent;
            alert(`You have clicked Buy Now for ${product}`);
        });
    });

    // Functionality for navigation buttons
    const navButtons = document.querySelectorAll('nav a');

    navButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            const section = sectionId;
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});