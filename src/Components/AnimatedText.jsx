import { useState, useEffect } from "react";
import "./AnimatedText.css";

const AnimatedText = ({ words, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsVisible(true);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className="animated-text-container">
      <span className={`animated-word ${isVisible ? "active" : ""}`}>
        {words[currentIndex]}
      </span>
    </span>
  );
};

export default AnimatedText;
