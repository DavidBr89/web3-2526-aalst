import React, { useState } from "react";

const AboutPage = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="p-4">
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
