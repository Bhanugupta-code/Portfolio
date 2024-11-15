import React, { useState, useEffect } from 'react';

const TextChange = () => {
  const text = ["Hi, I'm Bhanu Gupta", "I'm a Frontend Web Developer", "I'm dedicated to my work"];
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [forward, setForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the displayed text
      setCurrentText(text[index].substring(0, endValue));

      // Move forward or backward in the text based on the direction
      if (forward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }

      // Reverse direction when reaching the end of the current text
      if (endValue >= text[index].length + 10) {
        setForward(false);
      }

      // Move to the next text after shrinking
      if (endValue < 1 && !forward) {
        setForward(true);
        setIndex((prev) => (prev + 1) % text.length);
        setEndValue(0); // Reset for the new text
      }
    }, 70);

    return () => clearInterval(intervalId);
  }, [endValue, forward, index]);

  return (
    <div className='transition ease duration-300'>
      {currentText}
    </div>
  );
};

export default TextChange;
