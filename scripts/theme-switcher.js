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
  
  // Inject Switcher UI once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectThemePicker);
  } else {
    injectThemePicker();
  }
}

function setTheme(themeId) {
  document.documentElement.setAttribute('data-theme', themeId);
  localStorage.setItem('site-theme', themeId);
  
  // Update active state in UI
  document.querySelectorAll('.theme-dot').forEach(dot => {
    dot.classList.toggle('active', dot.dataset.theme === themeId);
  });
}

function injectThemePicker() {
  const nav = document.querySelector('nav');
  if (!nav || document.getElementById('theme-picker')) return;

  const pickerWrap = document.createElement('div');
  pickerWrap.id = 'theme-picker';
  pickerWrap.className = 'theme-picker-container';
  
  const currentTheme = localStorage.getItem('site-theme') || 'original';

  pickerWrap.innerHTML = `
    <button class="theme-toggle" aria-label="Switch Theme">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    </button>
    <div class="theme-menu">
      ${THEMES.map(t => `
        <button 
          class="theme-dot ${t.id === currentTheme ? 'active' : ''}" 
          data-theme="${t.id}" 
          style="background-color: ${t.color}" 
          title="${t.name}">
        </button>
      `).join('')}
    </div>
    <style>
      .theme-picker-container {
        position: relative;
        margin-left: 2rem;
        display: flex;
        align-items: center;
      }
      .theme-toggle {
        background: transparent;
        border: none;
        color: rgba(255,255,255,0.6);
        cursor: pointer;
        padding: 8px;
        display: flex;
        align-items: center;
        transition: color 0.3s ease, transform 0.3s ease;
      }
      .theme-toggle:hover {
        color: var(--yellow);
        transform: rotate(30deg);
      }
      .theme-menu {
        position: absolute;
        top: 100%;
        right: 0;
        background: rgba(28, 20, 73, 0.95);
        backdrop-filter: blur(12px);
        padding: 10px;
        border-radius: 12px;
        display: flex;
        gap: 8px;
        opacity: 0;
        visibility: hidden;
        transform: translateY(10px);
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        border: 1px solid rgba(255,255,255,0.1);
        z-index: 1000;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      }
      .theme-picker-container:hover .theme-menu {
        opacity: 1;
        visibility: visible;
        transform: translateY(12px);
      }
      .theme-dot {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: 2px solid rgba(255,255,255,0.2);
        cursor: pointer;
        transition: all 0.3s ease;
        padding: 0;
      }
      .theme-dot:hover {
        transform: scale(1.2);
        border-color: #fff;
      }
      .theme-dot.active {
        border-color: #fff;
        transform: scale(1.1);
        box-shadow: 0 0 10px rgba(255,255,255,0.3);
      }
      @media (max-width: 900px) {
        .theme-picker-container { margin-left: 1rem; }
        .theme-menu { right: -10px; }
      }
    </style>
  `;

  // Append to nav
  const navLinks = nav.querySelector('.nav-links');
  if (navLinks) {
    nav.insertBefore(pickerWrap, navLinks.nextSibling);
  } else {
    nav.appendChild(pickerWrap);
  }

  // Event Listeners
  pickerWrap.querySelectorAll('.theme-dot').forEach(dot => {
    dot.addEventListener('click', () => setTheme(dot.dataset.theme));
  });
}

// Run immediately
initTheme();
