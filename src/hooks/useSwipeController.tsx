"use client";

import { useState, useEffect } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { url } from "@/utils/utils";

function useSwipeController(
  segment: string | null,
  navigator: AppRouterInstance
) {
  const [swipeDirection, setSwipeDirection] = useState<any>(null);

  useEffect(() => {
    setSwipeDirection(null);
  }, [segment]);

  useEffect(() => {
    let startX: any;
    let startY: any;

    function handleTouchStart(event: any) {
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
    }

    function handleTouchEnd(event: any) {
      const diffX = event.changedTouches[0].clientX - startX;
      const diffY = event.changedTouches[0].clientY - startY;

      if (Math.abs(diffX) > Math.abs(diffY) && diffX > 0) {
        setSwipeDirection(true);
      } else if (Math.abs(diffX) > Math.abs(diffY) && diffX < 0) {
        setSwipeDirection(false);
      }
    }

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  useEffect(() => {
    if (swipeDirection === null) {
      return;
    }

    if (segment === url.home) {
      if (swipeDirection === true) {
        return;
      }
      navigator.push(url.skills);
    }

    if (segment === url.skills) {
      if (swipeDirection === true) {
        navigator.push(url.home);
        return;
      }
      navigator.push(url.zahir);
    }

    if (segment === url.zahir) {
      if (swipeDirection === true) {
        navigator.push(url.skills);
        return;
      }
      navigator.push(url.promptify);
    }

    if (segment === url.promptify) {
      if (swipeDirection === true) {
        navigator.push(url.zahir);
        return;
      }
      navigator.push(url.words_batle);
    }

    if (segment === url.words_batle) {
      if (swipeDirection === true) {
        navigator.push(url.promptify);
        return;
      }
      navigator.push(url.portfolio);
    }

    if (segment === url.portfolio) {
      if (swipeDirection === true) {
        navigator.push(url.words_batle);
        return;
      }
      navigator.push(url.contact);
    }

    if (segment === url.contact) {
      if (swipeDirection === true) {
        navigator.push(url.portfolio);
        return;
      }
      return;
    }
  }, [swipeDirection]);
}

export default useSwipeController;
