import { createRef, MouseEvent, useEffect, useState } from 'react';

export const useScale = () => {
  const ref = createRef<HTMLImageElement>();
  const [scaled, setScaled] = useState(false);

  const onSetScale = (e: MouseEvent) => {
    e.preventDefault();
    setScaled(!scaled);
  };

  const onRemoveScale = (e: MouseEvent) => {
    e.preventDefault();
    setScaled(false);
  };

  useEffect(() => {
    const DEFAULT_SCALE = 1;
    const DEFAULT_TRANSFORM = `scale(${DEFAULT_SCALE}) translateY(0)`;
    const ENLARGED_SCALE = 1.8;

    const calculateTransform = () => {
      const { height, top, width } = (ref.current as HTMLElement).getBoundingClientRect();
      const scale = width * ENLARGED_SCALE < window.innerWidth ? ENLARGED_SCALE : DEFAULT_SCALE;
      const scaledHeight = height * scale;
      const scaledTop = top - (scaledHeight / 2 - height / 2);
      const translateY = (((window.innerHeight - scaledHeight) / 2) - scaledTop) / scale;

      return `scale(${scale}) translateY(${translateY}px)`;
    };

    const getTransform = () => {
      if (!ref.current || !scaled) {
        return DEFAULT_TRANSFORM;
      }

      return calculateTransform();
    };

    const setStyles = (zIndex: number) => {
      if (ref.current) {
        Object.assign(ref.current.style, { zIndex, transform: getTransform() });
      }
    };

    if (scaled) {
      setStyles(5);
    } else {
      setTimeout(() => setStyles(1), 250);
    }
  }, [scaled, ref]);

  return {
    scaled,
    ref,
    onSetScale,
    onRemoveScale,
  };
};
