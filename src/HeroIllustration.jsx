import { useEffect, useState, useCallback, useRef } from 'react';

const ILLUS_CSS = `
  .hi-wrap {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .hi-static-shell {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  .hi-center-img {
    display: block;
    width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 24px 48px rgba(0,0,0,0.55));
    position: relative;
    z-index: 2;
  }

  .hi-elem {
    position: absolute;
    z-index: 3;
    pointer-events: none;
  }

  .hi-cube-right    { top: 22%; right: 5%;  width: 80px; }
  .hi-stack-bl      { left: 1%; bottom: 7%; width: 102px; }
  .hi-group7-right  { top: 35%; right: 0;   width: 70px; }
  .hi-cloud-bl      { left: 30%; top: 90%;  width: 69px; }
  .hi-cloud-tr      { left: 78%; top: 2%;   width: 69px; }
  .hi-wave-bottom   { left: 25%; bottom: 2%;width: 19px; }

  @keyframes hiFromRight  { from{opacity:0;transform:translateX(82px) } to{opacity:1;transform:translateX(0)       }}
  @keyframes hiFromBottom { from{opacity:0;transform:translateY(34px)  } to{opacity:1;transform:translateY(0)       }}
  @keyframes hiFromTR     { from{opacity:0;transform:translate(34px,-34px)} to{opacity:1;transform:translate(0,0)   }}
  @keyframes hiFromTop    { from{opacity:0;transform:translateY(-34px)  } to{opacity:1;transform:translateY(0)       }}

  .hi-entry-right  { animation: hiFromRight  1.2s cubic-bezier(0.22,0.85,0.28,1) both; }
  .hi-entry-bottom { animation: hiFromBottom 1.2s cubic-bezier(0.22,0.85,0.28,1) both; }
  .hi-entry-tr     { animation: hiFromTR     1.2s cubic-bezier(0.22,0.85,0.28,1) both; }
  .hi-entry-top    { animation: hiFromTop    1.2s cubic-bezier(0.22,0.85,0.28,1) both; }

  .hi-sync { animation-delay: 0.18s; }
`;

export default function HeroIllustration({ style, className }) {
  const [animKey, setAnimKey] = useState(1);
  const restartTimerRef = useRef(null);
  const isRestartingRef = useRef(false);

  useEffect(() => {
    const styleId = 'hi-illustration-styles';
    if (!document.getElementById(styleId)) {
      const tag = document.createElement('style');
      tag.id = styleId;
      tag.textContent = ILLUS_CSS;
      document.head.appendChild(tag);
    }
  }, []);

  const handleRestart = useCallback(() => {
    if (isRestartingRef.current) return;
    isRestartingRef.current = true;

    // Clear any pending timer
    clearTimeout(restartTimerRef.current);

    // Scroll to top first
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Reset animation key to unmount elements
    setAnimKey(0);

    // After scroll settles, re-mount with new key
    restartTimerRef.current = setTimeout(() => {
      setAnimKey(k => k + 1);
      isRestartingRef.current = false;
    }, 700);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.key === 'r' || e.key === 'R') && !e.ctrlKey && !e.metaKey && !e.altKey) {
        handleRestart();
      }
    };
    const onRestart = () => handleRestart();

    window.addEventListener('keydown', onKey);
    window.addEventListener('cloudserver:restart', onRestart);

    return () => {
      clearTimeout(restartTimerRef.current);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('cloudserver:restart', onRestart);
    };
  }, [handleRestart]);

  const show = animKey > 0;

  return (
    <div className={`hi-wrap ${className || ''}`} style={style}>
      <style>{ILLUS_CSS}</style>

      <div className="hi-static-shell">
        <img
          src="/main.png"
          alt="Cloud Infrastructure Illustration"
          className="hi-center-img"
        />
      </div>

      {show && (
        <div key={animKey}>
          {/* Bottom-right server cube */}
          <div className="hi-elem hi-entry-bottom hi-sync" style={{ top: '80%', right: '20%' }}>
            <img src="/Group.png" alt="Server" width="48"
              style={{ filter: 'drop-shadow(0 6px 16px rgba(37,99,235,0.55))' }} />
          </div>

          {/* Bottom-left server stack */}
          <div className="hi-elem hi-entry-bottom hi-sync" style={{ bottom: '10%', left: '-4%' }}>
            <img src="/Group (2).png" alt="Server Stack" width="102"
              style={{ filter: 'drop-shadow(0 8px 20px rgba(37,99,235,0.50))' }} />
          </div>

          {/* Right cloud group */}
          <div className="hi-elem hi-entry-right hi-sync hi-group7-right">
            <img src="/Group 7.png" alt="Cloud" width="72"
              style={{ filter: 'drop-shadow(0 4px 12px rgba(255,255,255,0.25))' }} />
          </div>

          {/* Bottom-left cloud */}
          <div className="hi-elem hi-entry-bottom hi-sync hi-cloud-bl">
            <img src="/Vector.png" alt="Cloud" width="69"
              style={{ filter: 'drop-shadow(0 4px 10px rgba(255,255,255,0.22))' }} />
          </div>

          {/* Bottom wave sparks */}
          <div className="hi-elem hi-entry-bottom hi-sync hi-wave-bottom">
            <img src="/Group (1).png" alt="Wave" width="19"
              style={{ filter: 'drop-shadow(0 4px 10px rgba(255,255,255,0.18))' }} />
          </div>

          {/* Top-right cloud */}
          <div className="hi-elem hi-entry-top hi-sync hi-cloud-tr">
            <img src="/Vector.png" alt="Cloud" width="69"
              style={{ filter: 'drop-shadow(0 4px 10px rgba(255,255,255,0.22))' }} />
          </div>
        </div>
      )}
    </div>
  );
}
