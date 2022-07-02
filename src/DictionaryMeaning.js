import React from "react";

export default function DictionaryMeaning(props) {
  return (
    <div className="DictionaryMeaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <hr />
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
