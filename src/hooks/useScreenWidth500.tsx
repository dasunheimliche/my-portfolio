import { useState, useEffect } from 'react';

const useScreenWidth = () => {
  const [isScreenBelow500px, setIsScreenBelow500px] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenBelow500px(window.innerWidth <= 500);
    };

    window.addEventListener('resize', handleResize);

    // Limpia el listener cuando el componente es desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isScreenBelow500px;
};

export default useScreenWidth;