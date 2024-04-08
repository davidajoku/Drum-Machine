import DrumPads from "./DrumPads.jsx";
import { useState, useEffect } from "react";
import sounds from "./assets/sounds";

function App() {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleKeyPress = (e, sounds) => {
    const audio = document.getElementById(e.key.toUpperCase());
    audio.currentTime = 0;
    audio.play();
    document.getElementById("display").innerHTML = audio.parentElement.id;
  };

  return (
    <div>
      <h1>Drum Machine</h1>
      <div id="drum-machine">
        <p id="display">HELLO!</p>
        <p className="logo">MPC909</p>
        <div className="pads">
          {sounds.map((sound) => (
            <DrumPads sound={sound} key={sound.keyTrigger} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
