import React from "react";
import DictionaryExample from "./DictionaryExample";
import DictionarySynonyms from "./DictionarySynonyms";
import "./DictionaryMeaning.css";

export default function DictionaryMeaning(props) {
  return (
    <div className="DictionaryMeaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <section className="Definitions">
              <strong>Definition: </strong>
              {definitions.definition}
            </section>
            <br />
            <DictionaryExample example={definitions.examples} />
            <br />
            <DictionarySynonyms synonyms={definitions.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
