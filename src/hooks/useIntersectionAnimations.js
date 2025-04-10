import { useEffect } from 'react';

export default function useIntersectionAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.fade-in-left, .fade-in-right, .fade-in-up, .fade-in-down, .opacity-up');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
