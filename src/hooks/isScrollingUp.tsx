"use client";

import { useState, useEffect } from "react";

function useScrollDirection(elementRef: any) {
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (element.scrollTop > element.lastScrollTop) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      element.lastScrollTop = element.scrollTop;
    };

    const element = elementRef.current;
    element.lastScrollTop = 0;
    element.addEventListener("scroll", handleScroll);
    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, [elementRef]);

  return isScrollingDown;
}

export default useScrollDirection;
