import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';
import PlayBar from './components/PlayBar';
import LyricsSection from './components/LyricsSection';
import './App.css';

const App = () => {
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const audio = new Howl({
      src: ['open-up.mp3'], // Path to "OPEN UP" song in the public directory
      loop: true,
    });
    setSound(audio);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white flex-col flex items-center w-full h-[7900px]">
      <div className='h-[100vh] flex items-start'>
        <h4 className=' font-bold text-xl mt-[200px]'>instructions: make window full scren, in ONE MINUTE press play and scroll down (slowly, match the song)</h4>
      </div>
      <LyricsSection />
      {sound && <PlayBar sound={sound} />}
    </div>
  );
};

export default App;
