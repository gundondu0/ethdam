// components/BeachAnimation.tsx
"use client";
import React, { useEffect, useRef } from "react";

const BeachAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      x: number;
      y: number;
      speed: number;
      direction: number;
      lifeSpan: number;
      life: number;
      width: number;
      widthLeft: number;
      isStem: boolean;
      curve: number;
      leafInterval: number;
      onComplete?: (particle: Particle) => void;

      constructor(
        x: number,
        y: number,
        speed: number,
        direction: number,
        lifeSpan: number,
        width: number,
        curve: number,
        onComplete?: (particle: Particle) => void
      ) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.direction = direction;
        this.lifeSpan = lifeSpan;
        this.life = lifeSpan;
        this.width = width;
        this.widthLeft = width;
        this.isStem = false;
        this.curve = curve;
        this.leafInterval = 5;
        this.onComplete = onComplete;
      }
    }

    let particles: Particle[] = [];

    const initialise = () => {
      canvas.width = document.body.clientWidth;
      canvas.height = document.body.clientHeight;

      const trunk = new Particle(
        1100,
        canvas.height * 0.8,
        2,
        -100,
        350,
        12,
        0.2,
        addPalmLeaves
      );
      particles.push(trunk);

      window.requestAnimationFrame(onRequestAnimationFrame);
    };

    const update = () => {
      particles.forEach((particle) => {
        particle.direction += Math.random() * particle.curve;
        particle.x +=
          Math.cos((particle.direction * -Math.PI) / 180) * particle.speed;
        particle.y +=
          Math.sin((particle.direction * Math.PI) / 180) * particle.speed;
        particle.widthLeft =
          (particle.lifeSpan / particle.life) * particle.width;
        particle.widthLeft = Math.max(particle.widthLeft, 0.3);
        particle.lifeSpan -= particle.speed;
        particle.leafInterval--;
        if (particle.leafInterval < 0 && particle.isStem) {
          addLeafBlade(particle, 1);
          addLeafBlade(particle, -1);
          particle.leafInterval = 2;
        }
        if (particle.lifeSpan <= 0 && particle.onComplete) {
          particle.onComplete(particle);
        }
      });
      particles = particles.filter((p) => p.lifeSpan > 0);
    };

    const addPalmLeaves = (particle: any) => {
      for (let i = 0; i < 13; i++) {
        const direction = Math.random() * 360;
        const curve = direction > 90 && direction < 270 ? -1 : 1;
        const palmLeaf = new Particle(
          particle.x,
          particle.y,
          1 + Math.random() * 2,
          direction,
          Math.random() * 100 + 100,
          2,
          curve
        );
        palmLeaf.isStem = true;
        particles.push(palmLeaf);
      }
    };

    const addLeafBlade = (particle: any, side: any) => {
      const lifeAdjustment =
        Math.abs(Math.abs(0.5 - particle.lifeSpan / particle.life) - 0.5) * 2;
      const leafBlade = new Particle(
        particle.x,
        particle.y,
        0.8 + Math.random(),
        particle.direction + 70 * side,
        particle.life * lifeAdjustment * 0.3,
        2 * lifeAdjustment + 0.4,
        -1
      );
      particles.push(leafBlade);
    };

    const drawParticles = () => {
      particles.forEach((particle) => {
        ctx.fillStyle = "#209029";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.widthLeft, 0, Math.PI);
        ctx.fill();
      });
    };

    const draw = () => {
      drawParticles();
    };

    const onRequestAnimationFrame = () => {
      update();
      draw();
      window.requestAnimationFrame(onRequestAnimationFrame);
    };

    initialise();
  }, []);

  return (
    <>
      <div className="sea"></div>
      <div className="sun"></div>
      <canvas ref={canvasRef} className="canvas"></canvas>
    </>
  );
};

export default BeachAnimation;
