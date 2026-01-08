import { useEffect, useState } from 'react';
import './PageLoader.css';

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="page-loader">
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      <div className="loader-container">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="btn-close"></span>
              <span className="btn-minimize"></span>
              <span className="btn-maximize"></span>
            </div>
            <div className="terminal-title">portfolio.dev</div>
          </div>

          <div className="terminal-body">
            <div className="code-line">
              <span className="prompt">$</span>
              <span className="command">npm run dev</span>
            </div>

            <div className="code-line loading-line">
              <span className="loading-text">
                <span className="char">L</span>
                <span className="char">o</span>
                <span className="char">a</span>
                <span className="char">d</span>
                <span className="char">i</span>
                <span className="char">n</span>
                <span className="char">g</span>
                <span className="dots">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </span>
              </span>
            </div>

            <div className="developer-name">
              <span className="bracket">&lt;</span>
              <span className="name">Usman Javed</span>
              <span className="bracket">/&gt;</span>
            </div>

            <div className="progress-container">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }}></div>
              </div>
              <div className="progress-text">{progress}%</div>
            </div>
          </div>
        </div>

        <div className="glitch-overlay"></div>
      </div>
    </div>
  );
};

export default PageLoader;
