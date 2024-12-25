function toggleMenu() {
    const menu = document.querySelector('.vertical-menu');
    if (menu) {
        menu.classList.toggle('expanded');
    } else {
        console.error("Element with class 'vertical-menu' not found.");
    }
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        if (section) {
            section.style.display = 'none';
        } else {
            console.error("Content section not found.");
        }
    });
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    } else {
        console.error("Element with id '" + sectionId + "' not found.");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showSection('home'); // Show the home section by default
});
