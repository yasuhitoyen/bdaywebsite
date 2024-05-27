import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  image1,
  image2,
  image3,
  image41,
  image42,
  image51,
  image52,
  image6,
  nightcity,
  lyricsData,
} from "./Lyrics";

const Slideshow = (props) => {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, document.body.scrollHeight], [0, -1 * props.tog]); // Adjust the second array value based on the total width of images combined

  return (
    <div className="flex flex-col overflow-x-hidden space-y-[60%] items-center border-b-2">
      <div className="bg-green-800 flex flex-row w-full overflow-hidden">
        <motion.div
          className="flex flex-row"
          style={{ x }}
        >
          <img src={props.image} alt="props.image" className={`w-[${props.size}px] h-[500px]`}/>
          <img src={props.image} alt="props.image" className={`w-[${props.size}px] h-[500px]`} />
          <img src={props.image} alt="props.image" className={`w-[${props.size}px] h-[500px]`} />
          <img src={props.image} alt="props.image" className={`w-[${props.size}px] h-[500px]`} />
          <img src={props.image} alt="props.image" className={`w-[${props.size}px] h-[500px]`} />
          <img src={props.image} alt="props.image" className={`w-[${props.size}px] h-[500px]`} />
          <img src={props.image} alt="props.image" className={`w-[${props.size}px] h-[500px]`} />
          <img src={props.image} alt="props.image" className={`w-[${props.size}px] h-[500px]`} />
          <img src={props.image} alt="props.image" className={`w-[${props.size}px] h-[500px]`} />
          <img src={props.image} alt="props.image" className={`w-[${props.size}px] h-[500px]`} />
          <img src={props.image} alt="props.image" className={`w-[${props.size}px] h-[500px]`} />
          <img src={props.image} alt="props.image" className={`w-[${props.size}px] h-[500px]`} />
        </motion.div>
      </div>
    </div>
  );
};

export default Slideshow;
