import React from "react";
import DictionaryMeaning from "./DictionaryMeaning";

export default function DictionaryResults(props) {
  console.log(props.results);

  if (props.results) {
    return (
      <div className="DictionaryResults">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <DictionaryMeaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}