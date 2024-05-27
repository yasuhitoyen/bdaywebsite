import React, { useState, useEffect, useRef } from 'react';
import { Howl } from 'howler';
import { motion } from 'framer-motion';

const PlayBar = ({ sound }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressBarRef = useRef(null);

  useEffect(() => {
    sound.on('end', () => {
      setIsPlaying(false);
    });

    const updateProgress = () => {
      const seek = sound.seek();
      const duration = sound.duration();
      setProgress((seek / duration) * 100);
    };

    if (isPlaying) {
      const interval = setInterval(updateProgress, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, sound]);

  const togglePlayPause = () => {
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressClick = (e) => {
    const boundingRect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - boundingRect.left;
    const newTime = (clickX / boundingRect.width) * sound.duration();
    sound.seek(newTime);
    setProgress((clickX / boundingRect.width) * 100);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex flex-col items-center z-40">
      <div
        ref={progressBarRef}
        className="relative w-full h-2 bg-gray-600 cursor-pointer"
        onClick={handleProgressClick}
      >
        <motion.div
          className="absolute top-0 left-0 h-2 bg-white rounded-3xl"
          style={{ width: `${progress}%` }}
          initial={{ width: 0 }}
          animate={{ width: progress + '%' }}
        />
      </div>
      <button onClick={togglePlayPause} className="text-xl mt-2">
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default PlayBar;
