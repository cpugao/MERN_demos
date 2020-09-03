// import nameTheVariable from "moduleName";

import React from "react";
import styles from "./SingleQuote.module.css";

// props is an object that is passed in FROM THE PARENT
const SingleQuote = (props) => {
  console.log(props);

  return <q className={`${styles.italic} ${styles.bold}`}>{props.children}</q>;
};

export default SingleQuote;
