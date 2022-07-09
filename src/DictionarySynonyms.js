import React from "react";
import "./DictionarySynonyms.css";

export default function DictionarySynonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <div className="DictionarySynonyms">
        <section className="Synonyms">
          <strong>Synonyms:</strong>
        </section>
        {props.synonyms.map(function (synonym, index) {
          return (
            <span key={index}>
              <em>{synonym}</em>
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
