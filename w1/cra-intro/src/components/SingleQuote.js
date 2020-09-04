// import nameTheVariable from "moduleName";

import React from "react";
import styles from "./SingleQuote.module.css";

// props is an object that is passed in FROM THE PARENT
const SingleQuote = (props) => {
  console.log(props);

  return (
    <div>
      <q
        style={{ color: props.quote.color }}
        className={`${styles.italic} ${styles.bold}`}
      >
        {props.quote.text}
      </q>{" "}
      - <span>{props.quote.author}</span>
    </div>
  );
};

export default SingleQuote;
