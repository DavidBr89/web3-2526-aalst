import React, { useState } from "react";
import Header from "../components/Header";

const AboutPage = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Header />
      <p className="text-4xl font-bold">{counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}>
        Verhoog
      </button>
    </div>
  );
};

export default AboutPage;
