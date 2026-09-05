// This binds your Tailwind compilation styles directly to Vite!
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn') as HTMLButtonElement | null;
  const mobileMenu = document.getElementById('mobile-menu') as HTMLDivElement | null;
  const hamburgerIcon = document.getElementById('hamburger-icon') as globalThis.SVGElement | null;

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        if (hamburgerIcon) hamburgerIcon.style.transform = 'rotate(90deg)';
      } else {
        mobileMenu.classList.add('hidden');
        if (hamburgerIcon) hamburgerIcon.style.transform = 'rotate(0deg)';
      }
    });
  }
});
