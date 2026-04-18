import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { SlideData } from '../slides/data';
import ComposeButton from './ComposeButton';

interface Props {
  slide: SlideData;
}

/**
 * Closing slide (slide 17). Renders the raw HTML payload, then portals the
 * real React <ComposeButton /> into the #compose-button-mount placeholder
 * inside that markup. The button toggles the atom's assembly animation.
 */
export default function ClosingSlide({ slide }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // After the HTML is rendered, locate the mount point.
    const node = containerRef.current?.querySelector<HTMLElement>('#compose-button-mount');
    setMountNode(node ?? null);
  }, [slide.html]);

  const handleToggle = (pressed: boolean) => {
    const atom = containerRef.current?.querySelector<HTMLElement>('#closing-atom');
    if (!atom) return;
    if (pressed) {
      // Replay assembly: clone, strip .assemble, then re-add on next frame
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
    <div ref={containerRef} style={{ display: 'contents' }}>
      <div dangerouslySetInnerHTML={{ __html: slide.html }} />
      {mountNode && createPortal(<ComposeButton onToggle={handleToggle} />, mountNode)}
    </div>
  );
}
