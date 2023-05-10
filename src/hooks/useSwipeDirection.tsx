import { useState, useEffect } from 'react';

function useSwipeDirection() {
    const [swipeDirection, setSwipeDirection] = useState<any>(null);

    useEffect(() => {
      let startX: any;
      let startY: any;
  
      function handleTouchStart(event:any) {
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
      }
  
      function handleTouchEnd(event:any) {
        const diffX = event.changedTouches[0].clientX - startX;
        const diffY = event.changedTouches[0].clientY - startY;
  
        if (Math.abs(diffX) > Math.abs(diffY) && diffX > 0) {
          setSwipeDirection(true); 
        } else if (Math.abs(diffX) > Math.abs(diffY) && diffX < 0) {
          setSwipeDirection(false); 
        }
      }
  
      window.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchend', handleTouchEnd);
  
      return () => {
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchend', handleTouchEnd);
      };
    }, []);
  
    return swipeDirection;
}

export default useSwipeDirection;

// import { useState, useEffect } from 'react';

// function useSwipeDirection() {
//   const [swipeDirection, setSwipeDirection] = useState<any>(null);

//   useEffect(() => {
//     let startX: any;
//     let startY: any;

//     function handleTouchStart(event: any) {
//       startX = event.touches[0].clientX;
//       startY = event.touches[0].clientY;
//     }

//     function handleTouchEnd(event: any) {
//       const diffX = event.changedTouches[0].clientX - startX;
//       const diffY = event.changedTouches[0].clientY - startY;

//       if (Math.abs(diffY) > Math.abs(diffX)) {
//         return swipeDirection
//       }

//       console.log("DIF EN X", Math.abs(diffX))
//       console.log("DIFF EN Y", Math.abs(diffY))

//       if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 30) {
//         setSwipeDirection(true); 
//       } else if (Math.abs(diffX) < Math.abs(diffY) && Math.abs(diffY) > 30) {
//         setSwipeDirection(false); 
//       }
//     }

//     window.addEventListener('touchstart', handleTouchStart);
//     window.addEventListener('touchend', handleTouchEnd);

//     return () => {
//       window.removeEventListener('touchstart', handleTouchStart);
//       window.removeEventListener('touchend', handleTouchEnd);
//     };
//   }, []);

//   return swipeDirection;
// }

// export default useSwipeDirection;