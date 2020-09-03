import React, { useState } from "react";

const ValidationForm = (props) => {
  const [age, setAge] = useState("");
  const [isAgeValid, setIsAgeValid] = useState(true);

  const ageErrMsg = "You can't buy alcohol yet because you are under 21.";

  const checkAge = (event) => {
    const newAge = event.target.value;

    setAge(newAge);

    if (newAge >= 21) {
      setIsAgeValid(true);
    } else {
      setIsAgeValid(false);
    }
  };

  return (
    <form>
      <div>
        <label>Age</label>
        <input
          onChange={(event) => {
            checkAge(event);
          }}
          type="number"
        />
        {!isAgeValid && <span style={{ color: "red" }}>{ageErrMsg}</span>}
      </div>
    </form>
  );
};

export default ValidationForm;
