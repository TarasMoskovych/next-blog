import { useEffect, useState } from 'react';

export const useScrollProgress = () => {
  const [scrolled, setScrolled] = useState('0px');
  const scrollProgress = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    setScrolled(`${scrollTop / (scrollHeight - clientHeight) * 100}%`);
  };

  useEffect(() => {
    const toggleListener = (add = true) => window[add ? 'addEventListener' : 'removeEventListener']('scroll', scrollProgress);

    toggleListener();

    return () => toggleListener(false);
  }, []);

  return { scrolled };
};
