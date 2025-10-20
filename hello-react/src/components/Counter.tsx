import React, { useState } from "react";
import MyButton from "./MyButton";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);

  const student = {
    fName: "John",
  };

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
          // Voeg enkel cijfer toe als dit nog niet in de array zit
          if (!favorites.includes(counter)) {
            setFavorites([...favorites, counter]);
          }
        }}>
        Voeg toe aan favorieten
      </MyButton>
      <p>Favorieten: {favorites.join(", ")}</p>
      <p>{student.fName}</p>
    </div>
  );
};

export default Counter;
