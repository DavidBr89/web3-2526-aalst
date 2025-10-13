import React, { useState } from "react";
import MyButton from "./MyButton";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>{counter}</p>
      <MyButton
        onClick={() => {
          setCounter(counter - 1);
          console.log(counter);
        }}>
        -
      </MyButton>
      <MyButton
        onClick={() => {
          // Asynchrone uitvoering - Component rerendert na updaten van uw state
          setCounter(counter + 1);
          console.log(counter);
        }}>
        +
      </MyButton>
      <MyButton onClick={() => {}}>Voeg toe aan favorieten</MyButton>
      <p>Favorieten: {...}</p>
    </div>
  );
};

export default Counter;
