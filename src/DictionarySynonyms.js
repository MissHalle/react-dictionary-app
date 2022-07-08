import React from "react";

export default function DictionarySynonyms(props) {
  if (props.synonyms) {
    return (
      <div className="DictionarySynonyms">
        {props.synonyms.map(function (synonym, index) {
          return <span key={index}>{synonym}</span>;
        })}
      </div>
    );
  } else {
    return "LOADING..";
  }
}
