import { useRef } from 'react';

export function useSwipeNavigation({ onSwipeLeft, onSwipeRight }) {
  const startX = useRef(0);

  function onTouchStart(event) {
    startX.current = event.touches[0].clientX;
  }

  function onTouchEnd(event) {
    const endX = event.changedTouches[0].clientX;
    const delta = endX - startX.current;

    if (delta > 80) {
      onSwipeRight?.();
    }

    if (delta < -80) {
      onSwipeLeft?.();
    }
  }

  return {
    onTouchStart,
    onTouchEnd
  };
}
