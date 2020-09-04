import React, { useState } from "react";
import SingleQuote from "./SingleQuote";

// props is an object that is passed in FROM THE PARENT
const QuoteList = (props) => {
  const [quotes, setQuotes] = useState([]);
  // above array destructure syntax is equivalent to this:
  // const states = useState(props.quotes);
  // const quotes = states[0];
  // const setQuotes = states[1];

  const [author, setAuthor] = useState("");
  const [quoteText, setQuoteText] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleDelete = (delIdx) => {
    // never update state DIRECTLY, only through the provided function
    // if state is an array or object, the set state function will only update if passed a NEW array / object

    const filteredQuotes = quotes.filter((quote, i) => {
      return delIdx !== i;
    });

    setQuotes(filteredQuotes);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // because a quote has an author to go along with it, we need to store the info together, as an object
    const newQuote = {
      // shorthand can be used when the key name and the var name match
      author,
      // long-form
      // author: author,
      text: quoteText,
      color: selectedColor, // replace this with value of an input box
    };

    // when setting new state for an array or object, MUST pass in a NEW array or object or else it WONT update

    setQuotes([...quotes, newQuote]);
  };

  // if we didn't use .map we would have to do something like this
  const getListOfSingleQuotes = () => {
    const newArr = [];

    for (let i = 0; i < quotes.length; i++) {
      const quote = quotes[i];

      newArr.push(
        <div key={i}>
          <SingleQuote quote={quote} />
          <button
            onClick={(event) => {
              handleDelete(i);
            }}
          >
            Delete
          </button>
          <hr />
        </div>
      );
    }

    return newArr;
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div>
          <label>Author: </label>
          <input
            onChange={(event) => {
              setAuthor(event.target.value);
            }}
            type="text"
          />
        </div>
        <div>
          <label>Quote: </label>
          <input
            onChange={(event) => {
              setQuoteText(event.target.value);
            }}
            type="text"
          />
        </div>
        <div>
          <label>Quote Color: </label>
          <input
            onChange={(event) => {
              setSelectedColor(event.target.value);
            }}
            type="text"
          />
        </div>
        <button>Submit</button>
      </form>
      <hr />

      {/* {getListOfSingleQuotes()} */}

      {quotes.map((quote, i) => {
        return (
          <div key={i}>
            <SingleQuote quote={quote} />
            <button
              onClick={(event) => {
                handleDelete(i);
              }}
            >
              Delete
            </button>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default QuoteList;
