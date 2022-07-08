import React from "react";
import DictionarySynonyms from "./DictionarySynonyms";

export default function DictionaryMeaning(props) {
  return (
    <div className="DictionaryMeaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <strong>Definition: </strong>
                  {definition.definition}
                </div>
                <br />
                <div className="col-4">
                  <strong>Example: </strong>
                  <em>{definition.example}</em>
                </div>
                <div className="col-4">
                  <DictionarySynonyms synonyms={definition.synonyms} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
