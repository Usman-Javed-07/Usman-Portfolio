import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './AnimatedSection.css';

const AnimatedSection = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 0.6,
  className = ''
}) => {
  const [ref, isVisible] = useScrollAnimation({ once: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`animated-section ${animation} ${isVisible ? 'visible' : ''} ${className}`}
      style={{
        '--animation-delay': `${delay}s`,
        '--animation-duration': `${duration}s`
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
