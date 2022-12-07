import { useState, useEffect } from 'react';

export const useScrollTop = () => {
  const [shown, setShown] = useState(false);
  const toggleVisibility = () => setShown(window.scrollY > 250);
  const scrollTop = () => {
    shown && window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleListener = (add = true) => window[add ? 'addEventListener' : 'removeEventListener']('scroll', toggleVisibility);

    toggleListener();

    return () => toggleListener(false);
  }, []);

  return { shown, scrollTop };
};
