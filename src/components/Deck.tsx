import { useEffect, useState, useCallback, useMemo } from 'react';
import { SLIDES_DATA } from '../slides/data';
import { ChevronLeft, ChevronRight } from '../icons/components';
import Slide01_Cover from '../slides/Slide01-Cover';
import Slide02_WhatIsReact from '../slides/Slide02-WhatIsReact';
import Slide03_Problem from '../slides/Slide03-Problem';
import Slide04_Competitors from '../slides/Slide04-Competitors';
import Slide05_WhyChoose from '../slides/Slide05-WhyChoose';
import Slide06_EventLoop from '../slides/Slide06-EventLoop';
import Slide07_VirtualDOM from '../slides/Slide07-VirtualDOM';
import Slide08_ClassesToFunctions from '../slides/Slide08-ClassesToFunctions';
import Slide09_Hooks from '../slides/Slide09-Hooks';
import Slide10_Composition from '../slides/Slide10-Composition';
import Slide11_History from '../slides/Slide11-History';
import Slide12_Community from '../slides/Slide12-Community';
import Slide13_Companies from '../slides/Slide13-Companies';
import Slide14_Ecosystem1 from '../slides/Slide14-Ecosystem1';
import Slide15_Ecosystem2 from '../slides/Slide15-Ecosystem2';
import Slide16_AIReflection from '../slides/Slide16-AIReflection';
import Slide17_Closing from '../slides/Slide17-Closing';

const SLIDE_COMPONENTS = [
  Slide01_Cover, Slide02_WhatIsReact, Slide03_Problem, Slide04_Competitors,
  Slide05_WhyChoose, Slide06_EventLoop, Slide07_VirtualDOM, Slide08_ClassesToFunctions,
  Slide09_Hooks, Slide10_Composition, Slide11_History, Slide12_Community,
  Slide13_Companies, Slide14_Ecosystem1, Slide15_Ecosystem2, Slide16_AIReflection,
  Slide17_Closing,
];

const STORAGE_KEY = 'react-curso-2026:current-slide';

/**
 * Deck — SPA-style slide navigator.
 * - Each slide is a React component mapped to SLIDES_DATA by index
 * - Keyboard nav (← →), arrow buttons, mobile stacks all slides vertically
 * - Persists position in localStorage
 */
export default function Deck() {
  const total = SLIDE_COMPONENTS.length;

  // Start at 0 on both server and client, then restore from localStorage after
  // hydration to avoid SSR/CSR mismatch.
  const [current, setCurrent] = useState<number>(0);
  const [hydrated, setHydrated] = useState<boolean>(false);

  useEffect(() => {
    try {
      const stored = Number(window.localStorage.getItem(STORAGE_KEY));
      if (Number.isFinite(stored) && stored >= 0 && stored < total) {
        setCurrent(stored);
      }
    } catch {}
    setHydrated(true);
  }, [total]);

  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Mobile detection + keep body class in sync
  useEffect(() => {
    const check = () => {
      const mobile = window.matchMedia('(max-width: 768px)').matches;
      setIsMobile(mobile);
      document.body.classList.toggle('mobile', mobile);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Persist current slide — only after hydration, so we don't overwrite
  // the stored value with the initial SSR 0 before we've read it.
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, String(current));
    } catch {}
  }, [current, hydrated]);

  const goTo = useCallback(
    (i: number) => setCurrent((_) => Math.max(0, Math.min(total - 1, i))),
    [total]
  );
  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Keyboard navigation
  useEffect(() => {
    if (isMobile) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prev();
      } else if (e.key === 'f' || e.key === 'F') {
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen?.();
      } else if (e.key === 'Home') {
        goTo(0);
      } else if (e.key === 'End') {
        goTo(total - 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMobile, next, prev, goTo, total]);

  const progressPct = useMemo(() => ((current + 1) / total) * 100, [current, total]);

  return (
    <>
      {/* Progress bar */}
      <div className="progress" style={{ width: `${progressPct}%` }} />

      {/* HUD */}
      <div className="hud hud-top">
        <span className="brand-dot" />
        <span>REACT.JS</span>
        <span style={{ color: 'var(--text-muted)' }}>·</span>
        <span>¿POR QUÉ APRENDERLO?</span>
      </div>

      {/* Nav arrows (desktop only) */}
      <button className="nav-arrow left" onClick={prev} aria-label="Anterior">
        <ChevronLeft />
      </button>
      <button className="nav-arrow right" onClick={next} aria-label="Siguiente">
        <ChevronRight />
      </button>

      {/* Counter */}
      <div className="hud-counter">
        <b>{String(current + 1).padStart(2, '0')}</b> / <span>{String(total).padStart(2, '0')}</span>
      </div>

      {/* Help */}
      <div className="help">
        <kbd>←</kbd> <kbd>→</kbd> navegar · <kbd>F</kbd> fullscreen
      </div>

      {/* Deck */}
      <div id="deck">
        {SLIDE_COMPONENTS.map((SlideComp, i) => {
          const meta = SLIDES_DATA[i];
          const isActive = i === current;
          return (
            <section
              key={i}
              className={`slide tx-${meta.tx}${isActive ? ' active' : ''}`}
              data-screen-label={meta.label}
              aria-hidden={!isActive && !isMobile}
            >
              <SlideComp />
            </section>
          );
        })}
      </div>
    </>
  );
}
