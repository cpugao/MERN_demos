import React, { useState } from "react";
import SingleQuote from "./SingleQuote";

// props is an object that is passed in FROM THE PARENT
const QuoteList = (props) => {
  const [quotes, setQuotes] = useState(props.quotes);
  // above array destructure syntax is equivalent to this:
  // const states = useState(props.quotes);
  // const quotes = states[0];
  // const setQuotes = states[1];

  const handleDelete = (delIdx) => {
    // never update state DIRECTLY, only through the provided function
    // if state is an array or object, the set state function will only update if passed a NEW array / object

    const filteredQuotes = quotes.filter((quote, i) => {
      return delIdx !== i;
    });

    setQuotes(filteredQuotes);
  };

  return (
    <div style={{ border: "1px solid green" }}>
      {quotes.map((quote, i) => {
        return (
          <div key={i}>
            <SingleQuote>{quote}</SingleQuote>
            <button
              onClick={(event) => {
                handleDelete(i);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default QuoteList;
