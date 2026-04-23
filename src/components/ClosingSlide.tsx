import { useState } from 'react';
import { NextJs, Remix, Qwik, AtomClosing } from '../icons/components';

interface Framework {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const FRAMEWORKS: Framework[] = [
  { name: 'Next.js', description: 'Vercel · SSR, RSC, App Router', icon: <NextJs /> },
  { name: 'Remix', description: 'Shopify · web fundamentals', icon: <Remix /> },
  { name: 'Qwik', description: 'Builder.io · resumability, 0 hydration', icon: <Qwik /> },
  {
    name: 'TanStack Start',
    description: 'Tanner Linsley · full-stack + type-safe',
    icon: <img src={`${import.meta.env.BASE_URL}frameworks/tanstack.png`} alt="TanStack" width={48} height={48} />,
  },
];

/**
 * Closing slide (17). Pure JSX. The `.assemble` CSS animation is restarted on
 * each click by bumping `playCount`, which is used as the wrapper's `key` to
 * force a remount.
 */
export default function ClosingSlide() {
  const [playCount, setPlayCount] = useState(0);
  const pressed = playCount > 0 && playCount % 2 === 1;

  return (
    <>
      <div className="bg-grid"></div>
      <div className="closing">
        <div className="closing-top fade-in">
          <div className="eyebrow">EL STACK MODERNO EMPIEZA AQUÍ</div>
          <h2 className="heading" style={{ marginBottom: 8 }}>
            Elige tu <span className="accent">meta-framework</span>.
          </h2>
          <p className="lead" style={{ fontSize: 'clamp(15px,1.3vw,18px)' }}>
            React es la vista; estos son los frameworks que construyen productos reales encima.
          </p>
        </div>

        <div className="mf-row stagger">
          {FRAMEWORKS.map(({ name, description, icon }) => (
            <div key={name} className="mf-card">
              <div className="mf-icon">{icon}</div>
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>

        <div className="closing-final fade-in">
          <div
            key={playCount}
            className={`closing-atom${pressed ? ' assemble' : ''}`}
            id="closing-atom"
            title="Click para reconstruir"
          >
            <AtomClosing />
          </div>
          <div className="closing-quote">
            <button
              id="compose-btn"
              className={`compose-btn${pressed ? ' is-pressed' : ''}`}
              type="button"
              aria-pressed={pressed}
              onClick={() => setPlayCount((c) => c + 1)}
            >
              <span className="compose-word">compone</span>
              <span className="compose-react">React</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
