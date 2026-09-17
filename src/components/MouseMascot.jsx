import { useEffect, useRef } from 'react';

const getDirection = (x, y, deadZone) => {
  if (Math.hypot(x, y) < deadZone) return 'center';

  const angle = (Math.atan2(y, x) * 180) / Math.PI;

  if (angle >= -22.5 && angle < 22.5) return 'right';
  if (angle >= 22.5 && angle < 67.5) return 'lower-right';
  if (angle >= 67.5 && angle < 112.5) return 'down';
  if (angle >= 112.5 && angle < 157.5) return 'lower-left';
  if (angle >= 157.5 || angle < -157.5) return 'left';
  if (angle >= -157.5 && angle < -112.5) return 'upper-left';
  if (angle >= -112.5 && angle < -67.5) return 'up';
  return 'upper-right';
};

const MouseMascot = () => {
  const mascotRef = useRef(null);

  useEffect(() => {
    const mascot = mascotRef.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const onPointerMove = (event) => {
      const bounds = mascot.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;
      const deadZone = Math.max(54, bounds.width * 0.18);
      const direction = getDirection(event.clientX - centerX, event.clientY - centerY, deadZone);

      if (mascot.dataset.direction !== direction) {
        mascot.dataset.direction = direction;
      }
    };

    const onPointerLeave = () => {
      mascot.dataset.direction = 'center';
    };

    if (!reducedMotion) {
      window.addEventListener('pointermove', onPointerMove, { passive: true });
      document.documentElement.addEventListener('mouseleave', onPointerLeave);
    }

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      document.documentElement.removeEventListener('mouseleave', onPointerLeave);
    };
  }, []);

  return (
    <div ref={mascotRef} className="mascot" data-direction="center">
      <div className="mascot-orbit mascot-orbit-one" aria-hidden="true" />
      <div className="mascot-orbit mascot-orbit-two" aria-hidden="true" />
      <div className="mascot-glow" aria-hidden="true" />
      <div
        className="mascot-sprite"
        role="img"
        aria-label="Interactive illustrated portrait of Moamen following the cursor"
      />
      <div className="mascot-shadow" aria-hidden="true" />
    </div>
  );
};

export default MouseMascot;
