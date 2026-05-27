import { useState, useEffect } from 'react';
import HeroIllustration from '../HeroIllustration';

const WORDS = ['Performance', 'Security', 'Growth'];

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [exitIdx, setExitIdx]       = useState(-1);
  const [isReset, setIsReset]       = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      const next = (currentIdx + 1) % WORDS.length;
      const resetting = currentIdx === WORDS.length - 1;

      setExitIdx(currentIdx);
      setIsReset(resetting);
      setCurrentIdx(next);

      setTimeout(() => {
        setExitIdx(-1);
        setIsReset(false);
      }, 600);
    }, 1700);

    return () => clearInterval(id);
  }, [currentIdx]);

  const getWordClass = (idx) => {
    if (idx === currentIdx) {
      return isReset ? 'animated-word enter-from-top' : 'animated-word enter';
    }
    if (idx === exitIdx) {
      return isReset ? 'animated-word exit-down' : 'animated-word exit-up';
    }
    return 'animated-word';
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>
          Enhance Your Cloud<br />
          Infrastructure for<br />
          Greater{' '}
          <span className="word-box" aria-live="polite" aria-atomic="true">
            {WORDS.map((word, idx) => (
              <span
                key={word}
                className={getWordClass(idx)}
                aria-hidden={idx !== currentIdx}
              >
                {word}
              </span>
            ))}
          </span>
        </h1>

        <p>
          Streamline your operations with secure cloud hosting, scalable
          infrastructure, advanced monitoring tools, and reliable support
          designed to help your business grow faster.
        </p>

        <div className="hero-buttons">
          <a href="#about" className="btn-hero-outline">Learn More</a>
          <button type="button" className="btn-hero-primary" aria-label="Get Started">
            <span className="arrow-circle">
              <img src="/Arrow%20icon.png" alt="" />
            </span>
            Get Started
          </button>
        </div>
      </div>

      <div className="hero-image-container">
        <HeroIllustration />
      </div>
    </section>
  );
}
