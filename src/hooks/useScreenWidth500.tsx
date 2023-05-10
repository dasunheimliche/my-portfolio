import { useState, useEffect } from 'react';

const useScreenWidth = () => {
  const [isScreenBelow500px, setIsScreenBelow500px] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenBelow500px(window.innerWidth <= 500);
    };

    const updateScreenSize = () => {
      setIsScreenBelow500px(window.innerWidth <= 500);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      updateScreenSize();
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return isScreenBelow500px;
};

export default useScreenWidth;