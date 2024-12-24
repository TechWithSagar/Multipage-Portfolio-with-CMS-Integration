function toggleMenu() {
    const menu = document.querySelector('.vertical-menu');
    menu.classList.toggle('expanded');
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    showSection('home'); // Show the home section by default
});
