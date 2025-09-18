import React, { useState, useEffect } from "react";

const StarField: React.FC = () => {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      delay: number;
      duration: number;
    }>
  >([]);

  useEffect(() => {
    const generateParticles = () => {
      const particleArray = [];
      for (let i = 0; i < 25; i++) {
        particleArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 8,
          duration: Math.random() * 10 + 15,
        });
      }
      setParticles(particleArray);
    };

    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 h-screen overflow-hidden pointer-events-none z-0">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 animate-gradient"></div>

      {/* Subtle mesh pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern
              id="mesh"
              x="0"
              y="0"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)" />
              <line
                x1="25"
                y1="0"
                x2="25"
                y2="50"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="0.5"
              />
              <line
                x1="0"
                y1="25"
                x2="50"
                y2="25"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mesh)" />
        </svg>
      </div>

      {/* Floating particles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) translateX(0px) scale(1);
              opacity: 0.1;
            }
            33% {
              transform: translateY(-10px) translateX(5px) scale(1.05);
              opacity: 0.15;
            }
            66% {
              transform: translateY(5px) translateX(-5px) scale(0.95);
              opacity: 0.08;
            }
          }

          @keyframes gradient {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          .animate-gradient {
            background-size: 400% 400%;
            animation: gradient 20s ease infinite;
          }

          .particle-float {
            animation: float var(--duration) ease-in-out infinite var(--delay);
          }
        `,
        }}
      />

      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full particle-float"
          style={
            {
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)`,
              "--duration": `${particle.duration}s`,
              "--delay": `${particle.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5"></div>
    </div>
  );
};

export default StarField;
