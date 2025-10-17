import React, { useEffect, useRef } from 'react';
import './RetroBackground.css';

const RetroBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Simple black background
    const animate = () => {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };
  }, []);

  /* ========== COMMENTED OUT CODE - TO BE RE-ADDED LATER ========== */
  /*
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // City buildings data
    const buildings = [];
    const streetLights = [];
    const dustParticles = [];
    
    // Muted color palette to complement red neon
    const colors = {
      buildingBase: '#0a0a0a',
      buildingDark: '#050505',
      windowOff: '#1a1a1a',
      windowWarm: '#ff4500',
      windowCool: '#4682b4',
      windowBright: '#ffd700',
      windowDim: '#8b4513',
      streetOrange: '#ff6347',
      streetBlue: '#4169e1',
      fog: '#0f0f0f',
      shadows: '#1a1a1a'
    };

    // Generate dust particles
    const generateDust = () => {
      dustParticles.length = 0;
      for (let i = 0; i < 200; i++) {
        dustParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.2,
          size: Math.random() * 2.5 + 0.8,
          opacity: Math.random() * 0.6 + 0.2,
          drift: Math.random() * Math.PI * 2
        });
      }
    };

    // Generate city skyline
    const generateCity = () => {
      buildings.length = 0;
      streetLights.length = 0;

      const windowColors = [
        colors.windowCool, colors.windowWarm, 
        colors.windowBright, colors.windowDim
      ];

      // Background buildings (distant)
      for (let x = 0; x < canvas.width + 200; x += Math.random() * 120 + 80) {
        const building = {
          x: x,
          y: canvas.height * 0.4 + Math.random() * 80,
          width: Math.random() * 80 + 40,
          height: Math.random() * 150 + 80,
          layer: 'background',
          color: colors.buildingDark,
          windows: []
        };
        
        // Add windows to building
        for (let wx = building.x + 10; wx < building.x + building.width - 10; wx += 15) {
          for (let wy = building.y + 20; wy < building.y + building.height - 20; wy += 20) {
            if (Math.random() > 0.75) {
              building.windows.push({
                x: wx,
                y: wy,
                width: 6,
                height: 10,
                lit: Math.random() > 0.8,
                color: windowColors[Math.floor(Math.random() * windowColors.length)],
                flicker: Math.random() * Math.PI * 2,
                intensity: Math.random() * 0.5 + 0.2
              });
            }
          }
        }
        buildings.push(building);
      }

      // Foreground buildings (closer)
      for (let x = 0; x < canvas.width + 150; x += Math.random() * 100 + 60) {
        const building = {
          x: x,
          y: canvas.height * 0.5 + Math.random() * 60,
          width: Math.random() * 100 + 60,
          height: Math.random() * 250 + 120,
          layer: 'foreground',
          color: colors.buildingBase,
          windows: []
        };
        
        // Add windows to building
        for (let wx = building.x + 8; wx < building.x + building.width - 8; wx += 12) {
          for (let wy = building.y + 15; wy < building.y + building.height - 15; wy += 18) {
            if (Math.random() > 0.65) {
              building.windows.push({
                x: wx,
                y: wy,
                width: 5,
                height: 8,
                lit: Math.random() > 0.75,
                color: windowColors[Math.floor(Math.random() * windowColors.length)],
                flicker: Math.random() * Math.PI * 2,
                intensity: Math.random() * 0.6 + 0.3
              });
            }
          }
        }
        buildings.push(building);
      }

      // Street lights (fewer and more subdued)
      for (let x = 150; x < canvas.width; x += Math.random() * 300 + 200) {
        streetLights.push({
          x: x,
          y: canvas.height - 25,
          intensity: Math.random() * 0.4 + 0.3,
          flicker: Math.random() * Math.PI * 2,
          color: Math.random() > 0.6 ? colors.streetBlue : colors.streetOrange
        });
      }
    };

    //generateCity();
    generateDust();

    let animationTime = 0;

    const animate = () => {
      animationTime += 0.008;
      
      // Very dark sky gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#010101');
      gradient.addColorStop(0.3, '#040404');
      gradient.addColorStop(1, '#080808');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle atmospheric layers
      for (let i = 0; i < 2; i++) {
        const fogY = canvas.height * 0.3 + i * 120;
        const fogGradient = ctx.createLinearGradient(0, fogY - 40, 0, fogY + 40);
        fogGradient.addColorStop(0, 'transparent');
        fogGradient.addColorStop(0.5, `${colors.shadows}08`);
        fogGradient.addColorStop(1, 'transparent');
        ctx.fillStyle = fogGradient;
        ctx.fillRect(0, fogY - 40, canvas.width, 80);
      }

      // Draw buildings by layer
      ['background', 'foreground'].forEach(layer => {
        buildings.filter(b => b.layer === layer).forEach(building => {
          // Building silhouette
          ctx.fillStyle = building.color;
          ctx.fillRect(building.x, building.y, building.width, building.height);
          
          // Subtle building edge
          ctx.fillStyle = '#0f0f0f';
          ctx.fillRect(building.x, building.y, 1, building.height);
          
          // Windows with subtle glow
          building.windows.forEach(window => {
            if (window.lit) {
              window.flicker += 0.015 + Math.random() * 0.005;
              const flickerFactor = 0.8 + 0.2 * Math.sin(window.flicker);
              
              // Subtle window glow
              const glowSize = layer === 'background' ? 4 : 6;
              const windowGradient = ctx.createRadialGradient(
                window.x + window.width/2, window.y + window.height/2, 0,
                window.x + window.width/2, window.y + window.height/2, glowSize * 2
              );
              windowGradient.addColorStop(0, `${window.color}30`);
              windowGradient.addColorStop(0.5, `${window.color}15`);
              windowGradient.addColorStop(1, 'transparent');
              ctx.fillStyle = windowGradient;
              ctx.globalAlpha = window.intensity * flickerFactor * 0.7;
              ctx.fillRect(
                window.x - glowSize, 
                window.y - glowSize, 
                window.width + glowSize * 2, 
                window.height + glowSize * 2
              );
              
              // Window core
              ctx.fillStyle = window.color;
              ctx.globalAlpha = window.intensity * flickerFactor * 0.8;
              ctx.fillRect(window.x, window.y, window.width, window.height);
              ctx.globalAlpha = 1;
            } else {
              // Dark window
              ctx.fillStyle = colors.windowOff;
              ctx.fillRect(window.x, window.y, window.width, window.height);
            }
          });
        });
      });

      // Subdued street lights
      streetLights.forEach(light => {
        light.flicker += 0.025;
        const flickerFactor = 0.7 + 0.3 * Math.sin(light.flicker);
        
        // Gentle street light glow
        const lightGradient = ctx.createRadialGradient(
          light.x, light.y, 0,
          light.x, light.y, 60
        );
        lightGradient.addColorStop(0, `${light.color}20`);
        lightGradient.addColorStop(0.4, `${light.color}08`);
        lightGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = lightGradient;
        ctx.globalAlpha = light.intensity * flickerFactor * 0.6;
        ctx.fillRect(light.x - 60, light.y - 60, 120, 120);
        ctx.globalAlpha = 1;
        
        // Small light source
        ctx.fillStyle = light.color;
        ctx.globalAlpha = 0.4;
        ctx.beginPath();
        ctx.arc(light.x, light.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Animate dust particles (more subtle)
      dustParticles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.drift += 0.008;
        
        // Gentle drift
        particle.x += Math.sin(particle.drift) * 0.05;
        particle.y += Math.cos(particle.drift * 0.6) * 0.03;

        // Wrap around screen
        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = canvas.height + 10;
        if (particle.y > canvas.height + 10) particle.y = -10;

        // Draw visible dust particle
        ctx.fillStyle = `rgba(200, 200, 200, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add slight glow to make dust more visible
        if (particle.size > 1.5) {
          ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity * 0.3})`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      // Clear the canvas
      if (canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };
  }, []);
  */
  /* ========== END COMMENTED CODE ========== */

  return (
    <div className="retro-background">
      <canvas ref={canvasRef} className="cityscape-canvas" />
      <div className="film-grain"></div>
      <div className="vignette"></div>
    </div>
  );
};

export default RetroBackground; 