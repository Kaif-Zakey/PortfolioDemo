import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "tailwindcss";

function App() {
  const starfieldRef = useRef<HTMLCanvasElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const handleThemeChange = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    // Listen for theme changes
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Initial check
    handleThemeChange();

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = starfieldRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 2.5 + 1.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.8 + 0.3,
      twinkle: Math.random() * 0.03 + 0.02,
    }));

    function draw() {
      if (isDarkMode) {
        // Dark mode: show starfield
        ctx!.fillStyle = "#000008";
        ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

        for (const star of stars) {
          ctx!.save();
          ctx!.globalAlpha = star.alpha;
          ctx!.beginPath();
          ctx!.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
          ctx!.fillStyle = "#ffffff";
          ctx!.shadowColor = "#a78bfa";
          ctx!.shadowBlur = 10;
          ctx!.fill();
          ctx!.restore();

          star.x += star.vx;
          star.y += star.vy;
          star.alpha += star.twinkle;
          if (star.alpha > 1 || star.alpha < 0.2) star.twinkle *= -1;

          if (star.x < 0 || star.x > window.innerWidth) star.vx *= -1;
          if (star.y < 0 || star.y > window.innerHeight) star.vy *= -1;
        }
      } else {
        // Light mode: subtle gradient background
        const gradient = ctx!.createLinearGradient(0, 0, 0, canvas!.height);
        gradient.addColorStop(0, "#f8fafc");
        gradient.addColorStop(1, "#e2e8f0");
        ctx!.fillStyle = gradient;
        ctx!.fillRect(0, 0, canvas!.width, canvas!.height);
      }

      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated Starfield Background */}
      <canvas
        ref={starfieldRef}
        className="fixed inset-0 w-screen h-screen pointer-events-none"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
          backgroundColor: isDarkMode
            ? "#000008"
            : "linear-gradient(to bottom, #f8fafc, #e2e8f0)",
        }}
      />
      <Header isDarkMode={isDarkMode} onThemeToggle={toggleTheme} />
      <main className="flex-grow">
        <Home isDarkMode={isDarkMode} />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
