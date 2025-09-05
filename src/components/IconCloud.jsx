import React, { useEffect, useRef, useState } from "react";

export function IconCloud({ images }) {
  const canvasRef = useRef(null);
  const [iconPositions, setIconPositions] = useState([]);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const rotationRef = useRef(rotation);
  const isDraggingRef = useRef(false);
  const lastMousePosRef = useRef({ x: 0, y: 0 });
  const iconCanvasesRef = useRef([]);
  const animationRef = useRef();

  // Load all images
  useEffect(() => {
    iconCanvasesRef.current = images.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });
  }, [images]);

  // Generate icon positions on a sphere
  useEffect(() => {
    const count = images.length;
    const newIcons = [];
    const offset = 2 / count;
    const increment = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < count; i++) {
      const y = i * offset - 1 + offset / 2;
      const r = Math.sqrt(1 - y * y);
      const phi = i * increment;
      const x = Math.cos(phi) * r;
      const z = Math.sin(phi) * r;

      newIcons.push({ x: x * 100, y: y * 100, z: z * 100, id: i });
    }
    setIconPositions(newIcons);
  }, [images]);

  // Handle drag
  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;

    const deltaX = e.clientX - lastMousePosRef.current.x;
    const deltaY = e.clientY - lastMousePosRef.current.y;

    rotationRef.current = {
      x: rotationRef.current.x + deltaY * 0.002,
      y: rotationRef.current.y + deltaX * 0.002,
    };

    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Animate the canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      iconPositions.forEach((icon, i) => {
        const cosX = Math.cos(rotationRef.current.x);
        const sinX = Math.sin(rotationRef.current.x);
        const cosY = Math.cos(rotationRef.current.y);
        const sinY = Math.sin(rotationRef.current.y);

        const rx = icon.x * cosY - icon.z * sinY;
        const rz = icon.x * sinY + icon.z * cosY;
        const ry = icon.y * cosX + rz * sinX;

        const scale = (rz + 200) / 300;

        ctx.save();
        ctx.translate(canvas.width / 2 + rx, canvas.height / 2 + ry);
        ctx.scale(scale, scale);
        ctx.globalAlpha = Math.max(0.3, scale);

        const img = iconCanvasesRef.current[i];
        if (img?.complete) ctx.drawImage(img, -20, -20, 40, 40);

        ctx.restore();
      });

      if (!isDraggingRef.current) {
        rotationRef.current = {
          x: rotationRef.current.x,
          y: rotationRef.current.y + 0.002, // idle spin
        };
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => animationRef.current && cancelAnimationFrame(animationRef.current);
  }, [iconPositions]);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={400}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="rounded-lg cursor-grab"
    />
  );
}
