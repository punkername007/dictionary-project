import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import Photos from "./Photos";

export default function Results(props) {
  if (props.result) {
    return (
      <div className="Results">
        <h2>{props.result.word}</h2>
        <Phonetics phonetics={props.result.phonetics[0]} />
        <div className="results-container">
          <div>
            {props.result.meanings.map(function (meaning, index) {
              return (
                <div key={index} className="part-of-speech">
                  <Meaning meaning={meaning} />
                </div>
              );
            })}
          </div>
          <div className="photos-container">
            <Photos photos={props.photos} />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
