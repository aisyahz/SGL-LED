import { useEffect } from 'react';

export function useSectionReveal() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches || !('IntersectionObserver' in window)) return;
    const sections = document.querySelectorAll('main > section:not(#hero-slider-root)');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-pending');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -30px 0px' });
    sections.forEach(section => { section.classList.add('section-reveal', 'reveal-pending'); observer.observe(section); });
    const show = () => { if (preference.matches) sections.forEach(section => section.classList.remove('reveal-pending')); };
    preference.addEventListener('change', show);
    return () => { observer.disconnect(); preference.removeEventListener('change', show); sections.forEach(section => section.classList.remove('reveal-pending')); };
  }, []);
}
