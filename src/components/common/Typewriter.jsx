import { useEffect, useState } from 'react';

const Typewriter = ({ texts = [], speed = 100, delay = 1500 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  useEffect(() => {
    let typingTimeout;

    const fullText = texts[loopIndex % texts.length];

    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedText.length < fullText.length) {
          setDisplayedText(prev => fullText.substring(0, prev.length + 1));
          setTypingSpeed(speed);
        } else {
          typingTimeout = setTimeout(() => setIsDeleting(true), delay);
          return;
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(prev => fullText.substring(0, prev.length - 1));
          setTypingSpeed(speed / 1.5);
        } else {
          setIsDeleting(false);
          setLoopIndex(prev => prev + 1);
        }
      }

      typingTimeout = setTimeout(handleTyping, typingSpeed);
    };

    typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, loopIndex, texts, speed, delay, typingSpeed]);

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
