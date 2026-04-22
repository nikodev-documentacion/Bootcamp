import { useState } from 'react';
import { createPortal } from 'react-dom';
import type { SlideData } from '../slides/data';
import ComposeButton from './ComposeButton';

interface Props {
  slide: SlideData;
}

/**
 * Closing slide (slide 17). Renders the raw HTML payload, then portals the
 * real React <ComposeButton /> into the #compose-button-mount placeholder.
 * The button toggles the atom's assembly animation.
 */
export default function ClosingSlide({ slide }: Props) {
  const [root, setRoot] = useState<HTMLDivElement | null>(null);
  const mountNode = root?.querySelector<HTMLElement>('#compose-button-mount') ?? null;

  const handleToggle = (pressed: boolean) => {
    const atom = root?.querySelector<HTMLElement>('#closing-atom');
    if (!atom) return;
    if (pressed) {
      const parent = atom.parentNode;
      if (!parent) return;
      const clone = atom.cloneNode(true) as HTMLElement;
      clone.classList.remove('assemble');
      parent.replaceChild(clone, atom);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => clone.classList.add('assemble'));
      });
    } else {
      atom.classList.remove('assemble');
    }
  };

  return (
    <>
      <div ref={setRoot} dangerouslySetInnerHTML={{ __html: slide.html }} />
      {/* DEBUG: render the button in a fixed spot so we can tell if React is
          mounting this component at all. Remove once portal is confirmed. */}
      <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999 }}>
        <ComposeButton onToggle={handleToggle} />
      </div>
      {mountNode && createPortal(<ComposeButton onToggle={handleToggle} />, mountNode)}
    </>
  );
}
