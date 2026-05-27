import { useEffect, useState } from 'react';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleRestart = () => {
    window.dispatchEvent(new Event('cloudserver:restart'));
  };

  return (
    <button
      type="button"
      className={`restart-fab${visible ? '' : ' restart-fab--hidden'}`}
      onClick={handleRestart}
      aria-label="Restart animations"
      title="Press R to restart"
    >
      <span className="restart-fab-icon">
        <i className="fa-solid fa-rotate-left"></i>
      </span>
      <span className="restart-fab-text">
        <span className="restart-fab-text-main">Restart</span>
        <span className="restart-fab-text-key">R</span>
      </span>
    </button>
  );
}
