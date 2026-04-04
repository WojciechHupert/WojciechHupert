/**
 * Shape Seeds — Theme Switcher
 * Handles theme switching logic, persistence, and UI injection.
 */

const THEMES = [
  { id: 'original', name: 'Sunflower', color: '#FFD600' },
  { id: 'cyber', name: 'Midnight', color: '#00F0FF' },
  { id: 'earth', name: 'Forest', color: '#1B3022' },
  { id: 'sunset', name: 'Sunset', color: '#FF5400' },
  { id: 'arctic', name: 'Ocean', color: '#023E8A' },
  { id: 'slate', name: 'Nordic', color: '#333333' }
];

function initTheme() {
  const savedTheme = localStorage.getItem('site-theme') || 'original';
  document.documentElement.setAttribute('data-theme', savedTheme);
}

function setTheme(themeId) {
  document.documentElement.setAttribute('data-theme', themeId);
  localStorage.setItem('site-theme', themeId);
  
  // Update active state in UI
  document.querySelectorAll('.theme-dot').forEach(dot => {
    dot.classList.toggle('active', dot.dataset.theme === themeId);
  });
}

// Run immediately
initTheme();
