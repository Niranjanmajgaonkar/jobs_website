document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const jobCardsContainer = document.getElementById('job-cards-container');
    const jobCards = jobCardsContainer.querySelectorAll('.job-card');

    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');

    // Toggle navigation on hamburger menu click
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    // Basic search functionality
    searchInput.addEventListener('keyup', (event) => {
        const searchTerm = event.target.value.toLowerCase();

        jobCards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
            if (cardText.includes(searchTerm)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});