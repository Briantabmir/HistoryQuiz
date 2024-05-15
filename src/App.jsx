import React, { useRef, useEffect } from 'react';
import { HistoryQuiz } from './components/HistoryQuiz';

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <div className="min-h-screen bg-cover bg-center overflow-hidden relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
        ref={videoRef}
      >
        <source src="/src/assets/img/fondoHistoria.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <h1 className='text-zinc-800 font-mono text-7xl font-extrabold text-center mb-10'>History Quiz Game</h1>
        <HistoryQuiz />
      </div>
    </div>
  );
}

export default App;
