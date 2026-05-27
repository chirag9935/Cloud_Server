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
  .hi-group7-right  { top: 35%; right: 3%;   width: 70px; }
  .hi-cloud-bl      { left: 30%; top: 87%;  width: 69px; }
  .hi-cloud-tr      { left: 78%; top: 3%;   width: 69px; }
  .hi-wave-bottom   { left: 24%; bottom: 1%; width: 19px; }

  @keyframes hiFarRight   { from{opacity:0;transform:translateX(60px)}       to{opacity:1;transform:translateX(0)} }
  @keyframes hiFarDiagTR  { from{opacity:0;transform:translate(85px,-65px)}   to{opacity:1;transform:translate(0,0)} }
  @keyframes hiFarUp      { from{opacity:0;transform:translateY(88px)}        to{opacity:1;transform:translateY(0)} }
  @keyframes hiFromTop    { from{opacity:0;transform:translateY(-44px)}       to{opacity:1;transform:translateY(0)} }
  @keyframes hiMidUp      { from{opacity:0;transform:translateY(60px)}        to{opacity:1;transform:translateY(0)} }
  @keyframes hiShortUp    { from{opacity:0;transform:translateY(22px)}        to{opacity:1;transform:translateY(0)} }
  

  .hi-a { animation: hiFarRight   1.05s cubic-bezier(0.22,0.85,0.28,1) 0.12s both; }
  .hi-b { animation: hiFromTop  1.05s cubic-bezier(0.22,0.85,0.28,1) 0.12s both; }
  .hi-c { animation: hiFarUp      1.05s cubic-bezier(0.22,0.85,0.28,1) 0.12s both; }
  .hi-d { animation: hiMidUp      1.05s cubic-bezier(0.22,0.85,0.28,1) 0.12s both; }
  .hi-e { animation: hiShortUp    1.05s cubic-bezier(0.22,0.85,0.28,1) 0.12s both; }

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
          <div className="hi-elem hi-d" style={{ top: '81%', right: '24%' }}>
            <img src="/Group.png" alt="Server" width="48" />
          </div>

          {/* Bottom-left server stack */}
          <div className="hi-elem hi-c" style={{ bottom: '6%', left: '2%' }}>
            <img src="/Group (2).png" alt="Server Stack" width="102" />
          </div>

          {/* Bottom-left wave sparks */}
          <div className="hi-elem hi-c" style={{ bottom: '28%', left: '1%' }}>
            <img src="/Group_dots.png" alt="Server Wave" width="41" />
          </div>

          {/* Right cloud group */}
          <div className="hi-elem hi-a hi-group7-right">
            <img src="/Group 7.png" alt="Cloud" width="72" />
          </div>

          {/* Bottom-left cloud */}
          <div className="hi-elem hi-d hi-cloud-bl">
            <img src="/Vector.png" alt="Cloud" width="69" />
          </div>

          {/* Bottom wave sparks */}
          <div className="hi-elem hi-c hi-wave-bottom">
            <img src="/Group (1).png" alt="Wave" width="19" />
          </div>

          {/* Top-right cloud */}
          <div className="hi-elem hi-b hi-cloud-tr">
            <img src="/Vector.png" alt="Cloud" width="69" />
          </div>
        </div>
      )}
    </div>
  );
}
