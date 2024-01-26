import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <ul>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <li>- {definition.definition}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
