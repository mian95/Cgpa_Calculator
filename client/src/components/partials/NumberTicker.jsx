import { useEffect, useState, useRef } from "react";

export function NumberTicker({ value, decimalPlaces = 3, className = "" }) {
  const [displayValue, setDisplayValue] = useState(value.toFixed(decimalPlaces));
  const animationRef = useRef(null); // To track animation frames

  useEffect(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current); // Cancel any ongoing animation
    }

    const startValue = parseFloat(displayValue);
    const endValue = value;
    const duration = 2500;
    const startTime = performance.now();

    function animate(timestamp) {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = startValue + (endValue - startValue) * progress;
      setDisplayValue(currentValue.toFixed(decimalPlaces));

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    }

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [value, decimalPlaces]);

  return <span className={className}>{displayValue}</span>;
}
