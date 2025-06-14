// Theme handling
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButton(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton(newTheme);
}

function updateThemeButton(theme) {
    const themeButton = document.getElementById('theme-toggle');
    if (themeButton) {
        themeButton.innerHTML = theme === 'light' ? '🌙' : '☀️';
        themeButton.setAttribute('title', theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro');
    }
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', initTheme); 