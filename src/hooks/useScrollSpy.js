import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds, offset = 100) {
  const [active, setActive] = useState('');

  useEffect(() => {
    function onScroll() {
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.getBoundingClientRect().top <= offset) {
          setActive(sectionIds[i]);
          return;
        }
      }
      setActive(sectionIds[0] || '');
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds, offset]);

  return active;
}
