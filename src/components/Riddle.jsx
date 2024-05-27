import React, { useState } from "react";
import { teemo } from "./Lyrics";
import { motion } from "framer-motion";

const Riddle = () => {
  const [answer, setAnswer] = useState("");
  const [correct, setCorrect] = useState(false);
  const [inputStyle, setInputStyle] = useState("border-gray-300");

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (answer.toLowerCase() === "teemo") {
        setCorrect(true);
      } else {
        setInputStyle("border-red-500");
      }
    }
  };

  return (
    <div className="h-screen w-full bg-white text-black flex items-center justify-center">
      {!correct ? (
        <div className="text-center p-4">
          <h4 className="mb-4">
            In the forest, shadows play,
            <br />
            A tiny figure finds his way.
            <br />
            Silent steps, both night and day,
            <br />
            With a grin, he joins the fray.
            <br />
            <br />
            In the bushes, hard to see,
            <br />
            Invisibility is key.
            <br />
            Enemies beware, or they’ll regret,
            <br />
            A nimble foe you won't forget.
            <br />
            <br />
            A riddle now for you to see,
            <br />
            In these lines, who might he be?
            <br />
            Guess his name, his legacy,
            <br />
            What am I? Who is he?
            <br />
          </h4>
          <motion.input
            type="text"
            value={answer}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            placeholder="Press Enter to Submit"
            className={`border-2 ${inputStyle} rounded-lg p-2 w-full max-w-md mx-auto text-center bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
            whileFocus={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      ) : (
        <div className="text-center p-4 relative">
          <img className="absolute w-[400px] top-[-100px] left-[300px]" src={teemo} alt="Teemo" />
          <h2 className="text-2xl font-bold">Happy Birthday Nigger!</h2>
          <p className="mt-2 text-lg">League giftcard code: 9085334299</p>
        </div>
      )}
    </div>
  );
};

export default Riddle;
