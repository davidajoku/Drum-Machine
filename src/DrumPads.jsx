import React, { useState, useEffect } from "react";
import sounds from "./assets/sounds";

const DrumPads = ({ sound }) => {
  const playAudio = () => {
    const audio = document.getElementById(sound.keyTrigger);
    audio.currentTime = 0;
    audio.play();
    document.getElementById("display").innerHTML = audio.parentElement.id;
  };

  return (
    <div className="drum-pad" id={sound.id} onClick={playAudio}>
      <audio className="clip" id={sound.keyTrigger} src={sound.url} />
      {sound.keyTrigger}
    </div>
  );
};

export default DrumPads;
