import type { SlideData } from '../slides/data';

interface Props {
  slide: SlideData;
}

/**
 * Generic slide component — renders the raw HTML payload.
 * Used for slides 1–16; slide 17 uses its own ClosingSlide component
 * because it contains an interactive React button.
 */
export default function Slide({ slide }: Props) {
  return <div dangerouslySetInnerHTML={{ __html: slide.html }} />;
}
