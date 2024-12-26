// For Header
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden'); // Show/hide the menu
});

function openModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
     }

    function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
    }
