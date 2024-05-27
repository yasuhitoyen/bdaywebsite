import React from 'react';
import { motion } from 'framer-motion';
import useIntersection from '../hooks/useIntersection';

const TestItem = ({ text, index }) => {
  const [ref, isIntersecting] = useIntersection({
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="my-40 p-5 w-full flex flex-col items-center"
      initial={{ opacity: 0, y: index % 2 === 0 ? '-100vh' : '100vh' }} // Start off-screen vertically
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}} // Animate into view
      transition={{ duration: 1.5 }}
    >
      <p className="text-3xl mb-4">{text}</p>
    </motion.div>
  );
};

export default TestItem;
