"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import ballImage from "../../../../public/asset/images/football.png";

const Ball = () => {
  const ballRef = useRef<HTMLImageElement>(null);
  const [isMoving, setIsMoving] = useState(false);
  const speed = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!ballRef.current) return;

    const ball = ballRef.current;

    const moveBall = () => {
      if (!isMoving || !ball) return;

      const ballRect = ball.getBoundingClientRect();
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // Bounce off the four sides (left, right, top, bottom)
      if (ballRect.left <= 0 || ballRect.right >= screenWidth) {
        speed.current.x *= -1; // Reverse horizontal direction
      }
      if (ballRect.top <= 0 || ballRect.bottom >= screenHeight) {
        speed.current.y *= -1; // Reverse vertical direction
      }

      // Apply friction to slow down gradually
      speed.current.x *= 0.98;
      speed.current.y *= 0.98;

      // Stop when speed is close to zero
      if (Math.abs(speed.current.x) < 0.1 && Math.abs(speed.current.y) < 0.1) {
        speed.current.x = 0;
        speed.current.y = 0;
        setIsMoving(false);
        return;
      }

      // Move the ball
      gsap.to(ball, {
        x: `+=${speed.current.x * 5}`,
        y: `+=${speed.current.y * 5}`,
        duration: 0.05,
        ease: "none",
        onComplete: moveBall,
      });
    };

    if (isMoving) moveBall();

    return () => {
      gsap.killTweensOf(ball);
    };
  }, [isMoving]);

  // Start movement on hover/touch
  const handleStart = () => {
    // if (!isMoving) {
    speed.current = {
      x: (Math.random() - 0.2) * 15,
      y: -(Math.random() - 0.5) * 15,
    }; // Random initial movement
    setIsMoving(true);
    // }
  };

  return (
    <div className="fixed inset-0 flex items-end justify-center">
      <Image
        ref={ballRef}
        src={ballImage}
        alt="ballImage"
        className="absolute bottom-10 w-20 h-20    rounded-full shadow-xl"
        onMouseEnter={handleStart}
        onTouchStart={handleStart}
      />
    </div>
  );
};

export default Ball;
