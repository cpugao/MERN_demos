// import nameTheVariable from "moduleName";

import React from "react";
import styles from "./SingleQuote.module.css";

// props is an object that is passed in FROM THE PARENT
const SingleQuote = (props) => {
  // console.log(props);

  const inlineStyles = { color: props.quote.color };

  return (
    <div>
      <q style={inlineStyles} className={`${styles.italic} ${styles.bold}`}>
        {props.quote.text}
      </q>{" "}
      - <span>{props.quote.author}</span>
    </div>
  );
};

export default SingleQuote;
