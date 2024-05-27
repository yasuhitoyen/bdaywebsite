import Rocket from "./Rocket";
import Slideshow from "./Slidwshow";
import React, { useRef, useEffect, useState } from "react";
import Riddle from "./Riddle";
import {
  motion,
  useInView,
  Variants,
  useAnimation,
  useScroll,
  useTransform,
} from "framer-motion";
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
  starrysky,
  lyricsData,
  space,
  rocket,
  ocean,
  sky,
  boat,
  bg,
} from "./Lyrics";

const fonts = [
  "DM Serif Display",
  "Indie Flower",
  "Jacquard 12 Charted",
  "Jacquard 24",
  "Jacquarda Bastarda 9 Charted",
  "Jersey 10",
  "Poetsen One",
  "Titan One",
];

// Card component for images
interface CardProps {
  image: string;
  hueA: number;
  hueB: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 2.5,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

function Card({ image, hueA, hueB }: CardProps) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card" variants={cardVariants}>
        <img
          src={image}
          className="w-[300px] rounded-[20%] border-[15px] border-white"
          alt="img1"
        ></img>
      </motion.div>
    </motion.div>
  );
}

// Main LyricsSection component

const LyricsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px", // Adjust to match the middle of the screen
    once: true, // Only trigger once
  });
  const directionInitLyric = "100vw"; // Ensure this is a valid initial value for x

  return (
    <div className="flex flex-col overflow-x-hidden items-center">

      <LyricItem1 lyric={lyricsData[0].lyric} index={1}></LyricItem1>
      <Slideshow image={nightcity} size={500} tog={1000} />
      <LyricItem2 lyric="ff"></LyricItem2>
      <LyricItem3 lyric="ff"></LyricItem3>
      <LyricItem4 lyric="finner"></LyricItem4>
      <LyricItem5 lyric={""} />
      <div className="h-[400px] bg-black"></div>
      <div className="h-[400px] w-full bg-gradient-to-b from-black to-white"></div>
      <Riddle />
    </div>
  );
};

const LyricItem1 = ({ lyric, image, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px", // Adjust to match the middle of the screen
    once: true, // Only trigger once
  });

  const directionInitLyric =
    index % 2 === 0 ? "translateX(-100vw)" : "translateX(100vw)";

  return (
    <div
      ref={ref}
      className="h-[450px] my-[100px] p-5 flex flex-row items-center  justify-center overflow-x-hidden  w-[1000px] "
      style={{ position: "relative" }}
    >
      <motion.div
        style={{ transform: directionInitLyric }} // Start off-screen horizontally
        animate={
          isInView
            ? { opacity: 1, x: 0, transform: "translateX(0)" }
            : { opacity: 0, transform: directionInitLyric }
        } // Animate into view
        transition={{
          duration: 1.5,
          ease: [0.3, 0.2, 0.2, 1], // Fast start and slow ending cubic-bezier easing function
        }}
      >
        <div className="flex flex-col items-center mr-5 space-y-5">
          <h4
            className="font-light text-3xl font-sans"
            style={{ transform: "rotate(-1deg)" }}
          >
            its been such a long time
          </h4>
          <h4
            className="fon`t-light text-3xl font-sans font-semibold"
            style={{ transform: "rotate(1deg)" }}
          >
            since i set foot in the club
          </h4>
          <br />
          <br />
          <h4
            className="font-light text-3xl font-sans"
            style={{ transform: "rotate(-1deg)" }}
          >
            i really hate this shit dont i
          </h4>
          <h4
            className="font-light text-3xl font-sans font-semibold"
            style={{ transform: "rotate(2deg)" }}
          >
            i hate feeling rushed, girl can i just be honest ?
          </h4>
        </div>
      </motion.div>
      <Card image={image1} hueA={200} hueB={300} />
    </div>
  );
};

const LyricItem2 = ({ lyric, image, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px", // Adjust to match the middle of the screen
    once: true, // Only trigger once
  });

  const directionInitLyric =
    index % 2 === 0 ? "translateX(-100vw)" : "translateX(100vw)";
  const controls = useAnimation();

  return (
    <div
      ref={ref}
      className="h-[900px] mt-[50px] p-5 flex flex-row items-center justify-center overflow-hidden w-[100vw] "
      style={{
        position: "relative",
      }}
    >
      <motion.img
        className="absolute top-[-400px] left-0"
        src={starrysky}
        alt="Starry Sky"
        initial={{ y: 0 }}
        animate={{
          y: [0, -20, 0, 20, 0], // Create a smooth sinusoidal motion
        }}
        transition={{
          repeat: Infinity,
          duration: 8, // Longer duration for a smoother transition
          ease: [0.42, 0, 0.58, 1], // Custom bezier curve for smoother easing
        }}
      />

      <motion.div
        style={{ transform: directionInitLyric }} // Start off-screen horizontally
        animate={
          isInView
            ? { opacity: 1, x: 0, transform: "translateX(0)" }
            : { opacity: 0, transform: directionInitLyric }
        } // Animate into view
        transition={{
          duration: 1.5,
          ease: [0.3, 0.2, 0.2, 1], // Fast start and slow ending cubic-bezier easing function
        }}
      >
        <Card image={image6} hueA={200} hueB={300} />
      </motion.div>
      <motion.div
        style={{ transform: directionInitLyric }} // Start off-screen horizontally
        animate={
          isInView
            ? { opacity: 1, x: 0, transform: "translateX(0)" }
            : { opacity: 0, transform: directionInitLyric }
        } // Animate into view
        transition={{
          duration: 1.5,
          ease: [0.3, 0.2, 0.2, 1], // Fast start and slow ending cubic-bezier easing function
        }}
      >
        <div className="flex flex-col items-center ml-5 space-y-5">
          <h4
            className="font-light text-3xl font-indie-flower bg-black bg-opacity-40"
            style={{ transform: "rotate(1deg)" }}
          >
            i dont feel like talkin unless its bout me
          </h4>
          <h4
            className="font-light text-3xl font-indie-flower bg-black bg-opacity-40"
            style={{ transform: "rotate(-1deg)" }}
          >
            or philosophy
          </h4>
          <br />
          <br />
          <h4
            className="font-light text-3xl font-indie-flower bg-black bg-opacity-40"
            style={{ transform: "rotate(1deg)" }}
          >
            can we just get down to business
          </h4>
          <h4
            className="font-light text-3xl font-indie-flower bg-black bg-opacity-40"
            style={{ transform: "rotate(-2deg)" }}
          >
            and when were both finished then well have a reason to speak
          </h4>
          <h4
            className="font-light text-3xl font-indie-flower bg-black bg-opacity-40"
            style={{ transform: "rotate(-1deg)" }}
          >
            then you can open up to me girl
          </h4>
          <h4
            className="font-light text-3xl font-indie-flower bg-black bg-opacity-40"
            style={{ transform: "rotate(-1deg)" }}
          >
            let me plant my seed girl, let me fill your needs girl
          </h4>
          <h4
            className="font-light text-3xl font-indie-flower bg-black bg-opacity-40"
            style={{ transform: "rotate(-1deg)" }}
          >
            open up to me, open up to me
          </h4>
        </div>
      </motion.div>
    </div>
  );
};

const LyricItem3 = ({ lyric, image, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px", // Adjust to match the middle of the screen
    once: true, // Only trigger once
  });

  const directionInitLyric =
    index % 2 === 0 ? "translateX(-100vw)" : "translateX(100vw)";
  const controls = useAnimation();

  return (
    <div
      ref={ref}
      className="h-[1300px]  p-5 flex flex-row items-center justify-center overflow-hidden w-[100vw] "
      style={{
        position: "relative",
      }}
    >
<motion.img
  className="absolute top-[100px] left-0 w-[3800px] rounded-full"
  src={space}
  alt="Starry Sky"
  initial={{ y: 0 }}
  animate={{
    rotate: [0, 1600], // Rotate 10 full circles to slow it down
  }}
  transition={{
    rotate: {
      repeat: Infinity,
      duration: 120, // Significantly increase the duration
      ease: "linear", // Use linear easing for smooth continuous rotation
    },
  }}
/>
      <Rocket></Rocket>
      <motion.div
        style={{ transform: directionInitLyric }} // Start off-screen horizontally
        animate={
          isInView
            ? { opacity: 1, x: 0, transform: "translateX(0)" }
            : { opacity: 0, transform: directionInitLyric }
        } // Animate into view
        transition={{
          duration: 1.5,
          ease: [0.3, 0.2, 0.2, 1], // Fast start and slow ending cubic-bezier easing function
        }}
      >
        <Card image={image52} hueA={200} hueB={300} />
      </motion.div>
      <motion.div
        style={{ transform: directionInitLyric }} // Start off-screen horizontally
        animate={
          isInView
            ? { opacity: 1, x: 0, transform: "translateX(0)" }
            : { opacity: 0, transform: directionInitLyric }
        } // Animate into view
        transition={{
          duration: 1.5,
          ease: [0.3, 0.2, 0.2, 1], // Fast start and slow ending cubic-bezier easing function
        }}
      >
        <div className="flex flex-col items-center ml-5 space-y-5">
          <h4
            className="font-light text-3xl bg-black bg-opacity-25 rounded-xl font-jacquarda-bastarda"
            style={{ transform: "rotate(1deg)" }}
          >
            the piano that i fuck you on
          </h4>
          <h4
            className="font-light text-3xl bg-black bg-opacity-25 rounded-xl font-jacquarda-bastarda"
            style={{ transform: "rotate(-1deg)" }}
          >
            same one that on which i write these songs for you
          </h4>
          <h4
            className="font-light text-3xl bg-black bg-opacity-25 rounded-xl font-jacquarda-bastarda"
            style={{ transform: "rotate(1deg)" }}
          >
            theyre one in the same, that goes for us too, id give you my name
          </h4>
          <h4
            className="font-light text-3xl bg-black bg-opacity-25 rounded-xl font-jacquarda-bastarda"
            style={{ transform: "rotate(-2deg)" }}
          >
            the bed on which i lay to sleep and lay with you and lay in deep
          </h4>
          <h4
            className="font-light text-3xl bg-black bg-opacity-25 rounded-xl font-jacquarda-bastarda"
            style={{ transform: "rotate(-1deg)" }}
          >
            there aint no difference, this case there isnt that goes for us,
            too, i know youre listenin
          </h4>
        </div>
      </motion.div>
    </div>
  );
};

const LyricItem4 = ({ lyric, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-20% 0px -20% 0px", // Adjust to match the desired scroll position
    once: true, // Only trigger once
  });

  const directionInitLyric = "translateY(-100vh)";
  const directionInitImage =
    index % 2 === 0 ? "translateX(-100vw)" : "translateX(100vw)";
  const { scrollYProgress } = useScroll();
  const boatX = useTransform(scrollYProgress, [0, 1], [0, 500]); // Adjust the range as needed

  return (
    <div
      ref={ref}
      className="h-[800px] my-[100px] p-5 flex flex-row items-center justify-center overflow-hidden w-[100vw] "
      style={{
        position: "relative",
      }}
    >
      <motion.img
        src={boat}
        className="absolute z-10"
        style={{
          top: "50%",
          left: "50%",
          x: boatX,
          scale: 0.16,
          translateX: "-150%",
          translateY: "-45%",
        }}
        animate={{
          rotate: [0, -7, 0, 7, 0], // Swaying rotation effect
        }}
        transition={{
          rotate: {
            duration: 2, // Duration for the swaying motion
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />
      <div className="absolute top-0 w-[400vw] flex">
        <motion.img
          className="w-[100vw]"
          src={sky}
          alt="Sky"
          animate={{
            x: ["0%", "100%"],
          }}
          transition={{
            duration: 60, // Adjust duration to control the speed
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.img
          className="w-[100vw]"
          src={sky}
          alt="Sky"
          animate={{
            x: ["0%", "100%"],
          }}
          transition={{
            duration: 60, // Adjust duration to control the speed
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.img
          className="w-[100vw]"
          src={sky}
          alt="Sky"
          animate={{
            x: ["0%", "100%"],
          }}
          transition={{
            duration: 60, // Adjust duration to control the speed
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.img
          className="w-[100vw]"
          src={sky}
          alt="Sky"
          animate={{
            x: ["0%", "100%"],
          }}
          transition={{
            duration: 60, // Adjust duration to control the speed
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      {/* Ocean Container */}
      <div className="absolute top-[460px] w-[400vw] flex">
        <motion.img
          className="w-[100vw]"
          src={ocean}
          alt="Ocean"
          animate={{
            x: ["0%", "-100%"],
            y: ["-1.3%"], // Slight up and down motion

          }}
          transition={{
            x: {
              duration: 60, // Adjust duration to control the horizontal speed
              repeat: Infinity,
              ease: "linear",
            },
            y: {
              duration: 4, // Adjust duration for vertical motion
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
        <motion.img
          className="w-[100vw]"
          src={ocean}
          alt="Ocean"
          animate={{
            x: ["0%", "-100%"],
            y: ["-1.3%"], // Slight up and down motion
          }}
          transition={{
            x: {
              duration: 60, // Adjust duration to control the horizontal speed
              repeat: Infinity,
              ease: "linear",
            },
            y: {
              duration: 4, // Adjust duration for vertical motion
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
        <motion.img
          className="w-[100vw]"
          src={ocean}
          alt="Ocean"
          animate={{
            x: ["0%", "-100%"],
            y: ["-1.3%"], // Slight up and down motion
          }}
          transition={{
            x: {
              duration: 60, // Adjust duration to control the horizontal speed
              repeat: Infinity,
              ease: "linear",
            },
            y: {
              duration: 4, // Adjust duration for vertical motion
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
        <motion.img
          className="w-[100vw]"
          src={ocean}
          alt="Ocean"
          animate={{
            x: ["0%", "-100%"],
            y: ["-1.3%"], // Slight up and down motion
          }}
          transition={{
            x: {
              duration: 60, // Adjust duration to control the horizontal speed
              repeat: Infinity,
              ease: "linear",
            },
            y: {
              duration: 4, // Adjust duration for vertical motion
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      </div>
      <motion.div
        style={{ transform: directionInitImage }} // Start off-screen horizontally
        animate={
          isInView
            ? { opacity: 1, x: 0, transform: "translateX(0)" }
            : { opacity: 0, transform: directionInitImage }
        } // Animate into view
        transition={{
          duration: 1.5,
          ease: [0.3, 0.2, 0.2, 1], // Fast start and slow ending cubic-bezier easing function
          delay: 0.2, // Delay the animation start
        }}
      >
        <Card image={image41} hueA={200} hueB={300} />
      </motion.div>
      <motion.div
        style={{ transform: directionInitLyric }} // Start off-screen vertically
        animate={
          isInView
            ? { opacity: 1, y: 0, transform: "translateY(0)" }
            : { opacity: 0, transform: directionInitLyric }
        } // Animate into view
        transition={{
          duration: 1.5,
          ease: [0.3, 0.2, 0.2, 1], // Fast start and slow ending cubic-bezier easing function
          delay: 0.3, // Delay the animation start
        }}
      >
        <div className="flex flex-col items-center ml-5 space-y-5 z-20">
          <h4
            className="font-light text-3xl bg-black rounded-3xl px-4 font-thin bg-opacity-45"
            style={{ transform: "rotate(1deg)" }}
          >
            sometimes it feels like i don't really care
          </h4>
          <h4
            className="font-light text-3xl bg-black rounded-3xl px-4 font-thin bg-opacity-45"
            style={{ transform: "rotate(-1deg)" }}
          >
            one day you'll see, but in the meantime
          </h4>
          <br />
          <br />
          <h4
            className="font-light text-3xl bg-black rounded-3xl px-4 font-thin bg-opacity-45"
            style={{ transform: "rotate(1deg)" }}
          >
            just trust that i'm there
          </h4>
          <h4
            className="font-light text-3xl bg-black rounded-3xl px-4 font-thin bg-opacity-45"
            style={{ transform: "rotate(-2deg)" }}
          >
            just trust that i love you
          </h4>
          <h4
            className="font-light text-3xl bg-black rounded-3xl px-4 font-thin bg-opacity-45"
            style={{ transform: "rotate(1deg)" }}
          >
            just trust that i care
          </h4>
          <h4
            className="font-light text-3xl bg-black rounded-3xl px-4 font-thin bg-opacity-45"
            style={{ transform: "rotate(-1deg)" }}
          >
            trust that i need you to always be there
          </h4>
          <h4
            className="font-light text-3xl bg-black rounded-3xl px-4 font-thin bg-opacity-45"
            style={{ transform: "rotate(2deg)" }}
          >
            trust that you know me well enough to know
          </h4>
          <h4
            className="font-light text-3xl bg-black rounded-3xl px-4 font-thin bg-opacity-45"
            style={{ transform: "rotate(-2deg)" }}
          >
            i'm the high priest but you put on the show
          </h4>
        </div>
      </motion.div>
      <motion.div
        style={{ transform: "translateY(-100vh)" }} // Start off-screen vertically
        animate={
          isInView
            ? { opacity: 1, y: 0, transform: "translateY(0)" }
            : { opacity: 0, transform: "translateY(-100vh)" }
        } // Animate into view
        transition={{
          duration: 1.5,
          ease: [0.3, 0.2, 0.2, 1], // Fast start and slow ending cubic-bezier easing function
          delay: 0.4, // Delay the animation start
        }}
      >
        <Card image={image42} hueA={200} hueB={300} />
      </motion.div>
    </div>
  );
};

const LyricItem5 = ({ lyric, image, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px", // Adjust to match the middle of the screen
    once: true, // Only trigger once
  });

  const directionInitLyric =
    index % 2 === 0 ? "translateX(-100vw)" : "translateX(100vw)";
  const controls = useAnimation();

  return (
    <div
      ref={ref}
      className="h-[1000px]  p-5 flex flex-row items-center justify-center overflow-hidden w-[100vw] "
      style={{
        position: "relative",
      }}
    >
      <motion.img
        className="absolute top-[0px] left-0 w-[1600px]"
        src={bg}
        alt="Starry Sky"
        initial={{ y: 0 }}
        animate={{
          rotate: [0, 10, 0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 16, // Adjust the total duration for slower animation
          times: [0, 0.25, 0.5, 0.75, 1], // Control timing for each keyframe
          ease: "easeInOut", // Use easeInOut for smooth transitions
        }}
      />
      <motion.div
        style={{ transform: directionInitLyric }} // Start off-screen horizontally
        animate={
          isInView
            ? { opacity: 1, x: 0, transform: "translateX(0)" }
            : { opacity: 0, transform: directionInitLyric }
        } // Animate into view
        transition={{
          duration: 1.5,
          ease: [0.3, 0.2, 0.2, 1], // Fast start and slow ending cubic-bezier easing function
        }}
      >
        <Card image={image3} hueA={200} hueB={300} />
      </motion.div>
      <motion.div
        style={{ transform: directionInitLyric }} // Start off-screen horizontally
        animate={
          isInView
            ? { opacity: 1, x: 0, transform: "translateX(0)" }
            : { opacity: 0, transform: directionInitLyric }
        } // Animate into view
        transition={{
          duration: 1.5,
          ease: [0.3, 0.2, 0.2, 1], // Fast start and slow ending cubic-bezier easing function
        }}
      >
        <div className="flex flex-col items-center ml-5 space-y-5">
          <h4
            className="font-light text-3xl bg-black bg-opacity-25 rounded-xl font-jacquard-24"
            style={{ transform: "rotate(1deg)" }}
          >
            then you can open up to me, girl
          </h4>
          <h4
            className="font-light text-3xl bg-black bg-opacity-25 rounded-xl font-jacquard-24"
            style={{ transform: "rotate(-1deg)" }}
          >
            let me plant my seed, girl
          </h4>
          <h4
            className="font-light text-3xl bg-black bg-opacity-25 rounded-xl font-jacquard-24"
            style={{ transform: "rotate(1deg)" }}
          >
            let me fill your needs, girl
          </h4>
          <h4
            className="font-light text-3xl bg-black bg-opacity-25 rounded-xl font-jacquard-24"
            style={{ transform: "rotate(-2deg)" }}
          >
            open up to me, open up to me
          </h4>
          <h4 className=" absolute top-[400px] font-bold font-mono bg-black bg-opacity-60 rounded-full px-3">keep scrolling for a surprise</h4>
        </div>
      </motion.div>
    </div>
  );
};
export default LyricsSection;
