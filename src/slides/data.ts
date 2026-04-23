// Slide metadata (transition + label). Content lives in the JSX slide components.
export type SlideTx = 'fade' | 'slide-r' | 'slide-l' | 'zoom' | 'up';

export interface SlideData {
  tx: SlideTx;
  label: string;
}

import { slide01 } from './content/slide-01';
import { slide02 } from './content/slide-02';
import { slide03 } from './content/slide-03';
import { slide04 } from './content/slide-04';
import { slide05 } from './content/slide-05';
import { slide06 } from './content/slide-06';
import { slide07 } from './content/slide-07';
import { slide08 } from './content/slide-08';
import { slide09 } from './content/slide-09';
import { slide10 } from './content/slide-10';
import { slide11 } from './content/slide-11';
import { slide12 } from './content/slide-12';
import { slide13 } from './content/slide-13';
import { slide14 } from './content/slide-14';
import { slide15 } from './content/slide-15';
import { slide16 } from './content/slide-16';
import { slide17 } from './content/slide-17';

export const SLIDES_DATA: SlideData[] = [
  slide01, slide02, slide03, slide04, slide05, slide06,
  slide07, slide08, slide09, slide10, slide11, slide12,
  slide13, slide14, slide15, slide16, slide17,
];
