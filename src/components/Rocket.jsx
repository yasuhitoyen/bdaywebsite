import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { rocket } from "./Lyrics"; // Adjust the path to your image file

const RocketAnimation = () => {
  const { scrollYProgress } = useViewportScroll();

  // Adjust the input range to start the animation as soon as possible
  const x = useTransform(
    scrollYProgress,
    [0, 1], // Start immediately in the scroll progress
    [window.innerWidth, -window.innerWidth / 2] // Reduce the movement range
  );
  const y = useTransform(
    scrollYProgress,
    [0, 1], // Start immediately in the scroll progress
    [window.innerHeight, -window.innerHeight / 2] // Reduce the movement range
  );
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -75]); // Rotate 75 degrees to the left

  return (
    <motion.img
      src={rocket}
      className="absolute w-[200px]"
      style={{ x, y, rotate }}
      transition={{
        duration: 2, // Increase the duration for a slower animation
        ease: "linear",
      }}
    />
  );
};

export default RocketAnimation;
