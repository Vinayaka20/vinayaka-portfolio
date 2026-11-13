import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;

      dotRef.current.style.left = `${x}px`;
      dotRef.current.style.top = `${y}px`;

      ringRef.current.style.left = `${x}px`;
      ringRef.current.style.top = `${y}px`;
    };

    const handleHover = (e) => {
      const interactive = e.target.closest(
        'a, button, input, textarea, [role="button"], .glass'
      );

      ringRef.current?.classList.toggle('cursor-hover', !!interactive);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('pointerover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('pointerover', handleHover);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className="custom-cursor-ring" />
    </>
  );
}