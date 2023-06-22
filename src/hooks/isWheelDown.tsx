import { useEffect, useState } from 'react';

const useScrollDirection = (): boolean => {
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
    };

    const handleTouchStart = (event:any) => {
        const startY = event.touches[0].clientY;
  
        const handleTouchMove = (event:any) => {
          const currentY = event.touches[0].clientY;
          setScrollingDown(currentY < startY);
        };
  
        const handleTouchEnd = () => {
            // setScrollingDown(false);
          window.removeEventListener('touchmove', handleTouchMove);
          window.removeEventListener('touchend', handleTouchEnd);
        };
  
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleTouchEnd);
    };

    window.addEventListener('wheel', handleWheel);
    window.addEventListener('touchstart', handleTouchStart);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return scrollingDown;
};

export default useScrollDirection;
