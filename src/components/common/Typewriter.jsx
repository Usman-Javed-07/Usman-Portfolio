import { useEffect, useState, useRef } from 'react';
import './Typewriter.css';

const Typewriter = ({ texts = [], speed = 60, deleteSpeed = 30, delay = 2500 }) => {
  const [displayedChars, setDisplayedChars] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const charsRef = useRef([]);
  const isDeletingRef = useRef(false);
  const loopIndexRef = useRef(0);
  const isPausedRef = useRef(false);

  useEffect(() => {
    if (texts.length === 0) return;

    let timeoutId;

    const type = () => {
      const currentText = texts[loopIndexRef.current % texts.length];

      if (isPausedRef.current) return;

      if (!isDeletingRef.current) {
        // Typing
        if (charsRef.current.length < currentText.length) {
          const nextChar = currentText[charsRef.current.length];
          const newChars = [...charsRef.current, { char: nextChar, key: Date.now() + Math.random() }];
          charsRef.current = newChars;
          setDisplayedChars(newChars);

          const variance = Math.random() * 40 - 20;
          timeoutId = setTimeout(type, speed + variance);
        } else {
          // Finished typing, pause before deleting
          isPausedRef.current = true;
          setIsPaused(true);

          timeoutId = setTimeout(() => {
            isPausedRef.current = false;
            setIsPaused(false);
            isDeletingRef.current = true;
            setIsDeleting(true);
            type();
          }, delay);
        }
      } else {
        // Deleting
        if (charsRef.current.length > 0) {
          const newChars = charsRef.current.slice(0, -1);
          charsRef.current = newChars;
          setDisplayedChars(newChars);

          const variance = Math.random() * 20 - 10;
          timeoutId = setTimeout(type, deleteSpeed + variance);
        } else {
          // Finished deleting, move to next text
          isDeletingRef.current = false;
          setIsDeleting(false);
          loopIndexRef.current = (loopIndexRef.current + 1) % texts.length;
          setLoopIndex(loopIndexRef.current);

          timeoutId = setTimeout(type, speed);
        }
      }
    };

    // Start typing
    timeoutId = setTimeout(type, 500);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [texts, speed, deleteSpeed, delay]);

  return (
    <span className="typewriter-wrapper">
      <span className="typewriter-container">
        {displayedChars.map((item, index) => (
          <span
            key={item.key}
            className="typewriter-char"
            style={{
              animationDelay: `${index * 0.03}s`
            }}
          >
            {item.char}
          </span>
        ))}
        <span className={`typewriter-cursor ${isPaused ? 'paused' : ''}`}></span>
      </span>
    </span>
  );
};

export default Typewriter;
