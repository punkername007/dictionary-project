import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";

export default function Phonetics(props) {
  function handleAudio(event) {
    let audioElement = new AudioContext();
    let audioTrack = new Audio(props.phonetics.audio);
    audioTrack.crossOrigin = "anonymous";
    let source = audioElement.createMediaElementSource(audioTrack);
    source.connect(audioElement.destination);

    audioTrack.play();
  }

  if (props.phonetics) {
    if (props.phonetics.audio) {
      return (
        <div className="Phonetics">
          <FontAwesomeIcon
            icon={faCirclePlay}
            onClick={handleAudio}
            className="icon"
          />
          <p>
            <em>{props.phonetics.text}</em>
          </p>
        </div>
      );
    } else {
      return (
        <div className="Phonetics">
          <p className="phonetic-text">
            <em>{props.phonetics.text}</em>
          </p>
        </div>
      );
    }
  } else {
    return null;
  }
}
