import React, { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const glowRef = useRef(null);
  const cursorCoords = useRef({ x: 0, y: 0 });
  const glowCoords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only enable on fine pointers (desktop)
    const isMobile = !window.matchMedia('(pointer: fine)').matches;
    if (isMobile) return;

    setIsVisible(true);

    const onMouseMove = (e) => {
      cursorCoords.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      // Find closest interactive element
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.classList.contains('clickable') ||
        target.closest('.clickable') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.getAttribute('role') === 'button';

      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    // Damped smoothing animation for the outer glow ring
    let animationFrameId;
    const updateGlow = () => {
      const ease = 0.15; // Interpolation factor
      
      const dx = cursorCoords.current.x - glowCoords.current.x;
      const dy = cursorCoords.current.y - glowCoords.current.y;
      
      glowCoords.current.x += dx * ease;
      glowCoords.current.y += dy * ease;
      
      if (glowRef.current) {
        glowRef.current.style.left = `${glowCoords.current.x}px`;
        glowRef.current.style.top = `${glowCoords.current.y}px`;
      }
      
      animationFrameId = requestAnimationFrame(updateGlow);
    };
    updateGlow();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div 
        className="cursor-dot hidden md:block" 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${isHovered ? 'scale(1.5)' : 'scale(1)'}`,
          backgroundColor: isHovered ? '#ffffff' : '#ff004f'
        }}
      />
      <div 
        ref={glowRef}
        className="cursor-glow hidden md:block" 
        style={{ 
          width: isHovered ? '70px' : '40px',
          height: isHovered ? '70px' : '40px',
          borderColor: isHovered ? '#ffffff' : '#ff004f',
          backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 0, 79, 0.02)',
          boxShadow: isHovered ? '0 0 20px rgba(255, 255, 255, 0.3)' : '0 0 15px rgba(255, 0, 79, 0.3)'
        }}
      />
    </>
  );
};

export default CustomCursor;
