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
  const [selectedColor, setSelectedColor] = useState("black");

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
      color: selectedColor,
      isSelected: false,
    };

    // when setting new state for an array or object, MUST pass in a NEW array or object or else it WONT update

    setQuotes([...quotes, newQuote]);

    // in order for these updates to the state to change the input boxes, the input boxes must have a value attribute tied to these state variables
    setQuoteText("");
    setAuthor("");
    setSelectedColor("black");
  };

  const selectQuote = (selectedIdx) => {
    // before updating the quote, make a copy so we don't mutate state directly
    const copiedQuote = { ...quotes[selectedIdx] };
    copiedQuote.isSelected = !copiedQuote.isSelected;

    // before updating quotes list, make a copy so we don't mutate state directly
    const copiedQuotes = [...quotes];
    copiedQuotes[selectedIdx] = copiedQuote;

    setQuotes(copiedQuotes);
  };

  // if we didn't use .map we would have to do something like this
  const buildListOfSingleQuotes = () => {
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
            value={author}
          />
        </div>
        <div>
          <label>Quote: </label>
          <input
            onChange={(event) => {
              setQuoteText(event.target.value);
            }}
            type="text"
            value={quoteText}
          />
        </div>
        <div>
          <label>Quote Color: </label>
          <select
            onChange={(event) => {
              setSelectedColor(event.target.value);
            }}
            value={selectedColor}
          >
            <option value="black">black</option>
            <option value="#800000">dark red</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
      <hr />

      {/* {getListOfSingleQuotes()} */}

      {quotes.map((quote, i) => {
        const quoteStyles = {
          marginBottom: "10px",
        };

        if (quote.isSelected) {
          quoteStyles.border = "1px solid red";
          quoteStyles.boxShadow = "10px 5px 5px black";
        }
        console.log(quoteStyles);

        return (
          <div key={i} style={quoteStyles}>
            <div
              onClick={(event) => {
                selectQuote(i);
              }}
            >
              <SingleQuote quote={quote} />
            </div>
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
