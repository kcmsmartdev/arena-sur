"use client";

import { useEffect, useRef } from "react";

type WaveBackgroundProps = {

  color?: string;

  lines?: number;
  className?: string;
};

export default function WaveBackground({
  color = "56, 189, 248",
  lines = 16,
  className = "",
}: WaveBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let w = 0;
    let h = 0;
    let raf = 0;

    // Cada línea tiene su propia frecuencia, velocidad y destello
    const layers = Array.from({ length: lines }, (_, i) => ({
      t: i / Math.max(lines - 1, 1), // 0 = arriba, 1 = abajo
      freq: 0.0015 + Math.random() * 0.002,
      speed: 0.25 + Math.random() * 0.35,
      phase: Math.random() * Math.PI * 2,
      glintSpeed: 0.05 + Math.random() * 0.1,
      glintOffset: Math.random(),
    }));

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      for (const l of layers) {
        // Las líneas se concentran y se hacen más grandes hacia abajo
        const baseY = h * (0.3 + 0.62 * l.t);
        const amp = 4 + 22 * l.t;

        const path = new Path2D();
        for (let x = 0; x <= w + 8; x += 8) {
          const y =
            baseY +
            Math.sin(x * l.freq + time * l.speed + l.phase) * amp +
            Math.sin(x * l.freq * 2.3 - time * l.speed * 0.7) * amp * 0.35;
          if (x === 0) path.moveTo(x, y);
          else path.lineTo(x, y);
        }

        // Línea base: tenue arriba, más fuerte abajo
        const alpha = 0.04 + 0.4 * Math.pow(l.t, 1.6);
        ctx.lineWidth = 1;
        ctx.strokeStyle = `rgba(${color}, ${alpha})`;
        ctx.stroke(path);

        // Destello que recorre la ola de lado a lado
        const gw = w * 0.90;
        const gx = ((l.glintOffset + time * l.glintSpeed) % 1) * (w + gw * 2) - gw;
        const g = ctx.createLinearGradient(gx, 0, gx + gw, 0);
        g.addColorStop(0, `rgba(${color}, 0)`);
        g.addColorStop(0.5, `rgba(255, 255, 255, ${0.15 + 0.7 * l.t})`);
        g.addColorStop(1, `rgba(${color}, 0)`);
        ctx.lineWidth = 1.5 + 1.5 * l.t;
        ctx.strokeStyle = g;
        ctx.stroke(path);
      }
    };

    const loop = (now: number) => {
      draw(now / 1000);
      raf = requestAnimationFrame(loop);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    if (reduceMotion.matches) {
      draw(2); // un solo cuadro estático
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [color, lines]);

  const fade = "linear-gradient(to bottom, transparent 0%, black 85%)";

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 bottom-0 h-1/2 z-20 ${className}`}
      style={{ maskImage: fade, WebkitMaskImage: fade }}
    >
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
}