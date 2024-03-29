import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>
        <em>{props.meaning.partOfSpeech}</em>
      </h3>
      <ul>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <li>
                {""} {definition.definition}
              </li>
            </div>
          );
        })}
      </ul>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
