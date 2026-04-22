import { useEffect, useRef } from 'react';
import type { SlideData } from '../slides/data';

interface Props {
  slide: SlideData;
}

/**
 * Closing slide (slide 17). Renders the raw HTML payload and wires up the
 * #compose-btn click handler via document-level delegation, so the event is
 * caught regardless of any overlapping element (e.g. the atom SVG above it).
 */
export default function ClosingSlide({ slide }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onDocClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t?.closest?.('#compose-btn')) return;
      const btn = container.querySelector<HTMLButtonElement>('#compose-btn');
      if (!btn) return;
      const pressed = btn.classList.toggle('is-pressed');
      btn.setAttribute('aria-pressed', String(pressed));
      const atom = container.querySelector<HTMLElement>('#closing-atom');
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

    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, [slide.html]);

  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: slide.html }} />;
}
