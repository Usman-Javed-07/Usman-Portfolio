import { useEffect, useState } from 'react';
import './Typewriter.css';

const Typewriter = ({ texts = [], speed = 80, deleteSpeed = 40, delay = 2000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (texts.length === 0) return;

    const currentText = texts[loopIndex % texts.length];

    const getRandomSpeed = (baseSpeed) => {
      return baseSpeed + Math.random() * 30;
    };

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setDisplayedText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        if (charIndex > 0) {
          setDisplayedText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setLoopIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : getRandomSpeed(speed));

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, loopIndex, texts, speed, deleteSpeed, delay]);

  return (
    <span className="typewriter-container">
      <span className="typewriter-text">{displayedText}</span>
      <span className="typewriter-cursor"></span>
    </span>
  );
};

export default Typewriter;
