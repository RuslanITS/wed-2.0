import { useEffect, useState } from 'react';

export const useScrollPosition = (threshold = 20): boolean => {
  const [isPastThreshold, setIsPastThreshold] = useState(false);

  useEffect(() => {
    const updatePosition = (): void => {
      setIsPastThreshold(window.scrollY > threshold);
    };

    updatePosition();
    window.addEventListener('scroll', updatePosition, { passive: true });

    return () => window.removeEventListener('scroll', updatePosition);
  }, [threshold]);

  return isPastThreshold;
};
