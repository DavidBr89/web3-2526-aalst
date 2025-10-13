import React, { useState } from "react";
import MyButton from "./MyButton";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);

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
      <MyButton
        onClick={() => {
          // TODO: Voeg enkel cijfer toe als dit nog niet in de array zit
          setFavorites([...favorites, counter]);
        }}>
        Voeg toe aan favorieten
      </MyButton>
      <p>Favorieten: {favorites}</p>
    </div>
  );
};

export default Counter;
