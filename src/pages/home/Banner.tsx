"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Banner() {
  const [index, setIndex] = useState(0);
  const images = [
    "/assets/images/banner/asset1.png",
    "/assets/images/banner/asset2.png",
  ];

  // Auto-change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2  h-[100vh] ">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="text-4xl sm:text-7xl font-bold">Rinshad M</div>
        <div className="text-sm sm:text-xl">Physical Trainer</div>
      </div>
      <div className="flex w-full h-full justify-center items-center ">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute"
          >
            <Image
              src={images[index]}
              alt="slider"
              width={400}
              height={400}
              className="h-full w-auto opacity-80 drop-shadow-2xl"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-10 sm:bottom-60 flex space-x-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1 w-10  ${
                i === index ? "bg-white" : "bg-gray-500 opacity-50"
              } transition-all duration-300`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
