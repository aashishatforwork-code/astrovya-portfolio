import React, { useEffect, useRef } from 'react';

const StarryBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const starsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();

    // Create stars
    const createStars = () => {
      const numStars = 200;
      const stars = [];

      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          originalRadius: Math.random() * 2 + 0.5,
          hoverRadius: Math.random() * 4 + 3,
          originalOpacity: Math.random() * 0.8 + 0.2,
          vx: (Math.random() - 0.5) * 0.5, // Gentle movement
          vy: (Math.random() - 0.5) * 0.5,
          hue: Math.random() * 60 + 200 // Blue to purple range
        });
      }

      starsRef.current = stars;
    };

    // Draw constellation lines
    const drawConstellations = () => {
      const stars = starsRef.current;
      
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = (120 - distance) / 120 * 0.15;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw constellation lines first (behind stars)
      drawConstellations();

      // Draw and animate stars
      starsRef.current.forEach((star) => {
        // Gentle movement
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Twinkling effect
        const twinkle = Math.sin(time * star.twinkleSpeed) * 0.3;
        star.opacity = star.originalOpacity + twinkle;

        // Hover effect
        const dx = mouseRef.current.x - star.x;
        const dy = mouseRef.current.y - star.y;
        const mouseDistance = Math.sqrt(dx * dx + dy * dy);

        let hoverEffect = 0;
        if (mouseDistance < 100) {
          hoverEffect = (100 - mouseDistance) / 100;
          star.radius = star.originalRadius + (star.hoverRadius - star.originalRadius) * hoverEffect;
          star.opacity = Math.min(1, star.opacity + hoverEffect * 0.6);
        } else {
          star.radius += (star.originalRadius - star.radius) * 0.1; // Smooth return to original size
        }

        // Draw star with glow
        ctx.save();
        
        // Main star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${star.hue}, 70%, 80%, ${star.opacity})`;
        ctx.fill();

        // Glow effect
        if (hoverEffect > 0 || star.radius > 1.5) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2);
          const glowOpacity = star.opacity * 0.2;
          ctx.fillStyle = `hsla(${star.hue}, 70%, 90%, ${glowOpacity})`;
          ctx.fill();
        }

        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Handle mouse movement
    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
    };

    // Handle window resize
    const handleResize = () => {
      resizeCanvas();
      createStars(); // Recreate stars for new dimensions
    };

    // Initialize
    createStars();
    animate(0);

    // Event listeners
    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default StarryBackground;