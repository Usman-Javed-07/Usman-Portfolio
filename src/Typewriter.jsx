import React, { useEffect, useState } from 'react';

const Typewriter = ({ text = '', speed = 100, delay = 1500 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  useEffect(() => {
    let typingTimeout;

    const handleTyping = () => {
      const fullText = text;

      if (!isDeleting) {
        if (displayedText.length < fullText.length) {
          setDisplayedText(prev => fullText.substring(0, prev.length + 1));
          setTypingSpeed(speed);
        } else {
          // Pause before deleting
          typingTimeout = setTimeout(() => setIsDeleting(true), delay);
          return;
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(prev => fullText.substring(0, prev.length - 1));
          setTypingSpeed(speed / 1.5);
        } else {
          // Pause before typing again
          typingTimeout = setTimeout(() => setIsDeleting(false), 300);
          return;
        }
      }

      typingTimeout = setTimeout(handleTyping, typingSpeed);
    };

    typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, text, speed, delay, typingSpeed]);

  return (
    <span
      style={{
        borderRight: '2px solid orange',
        whiteSpace: 'nowrap',
        fontFamily: 'monospace',
        paddingRight: '5px',
        transition: 'all 0.1s ease-in-out',
      }}
    >
      {displayedText}
    </span>
  );
};

export default Typewriter;
