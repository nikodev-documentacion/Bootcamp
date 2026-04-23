import { forwardRef, memo } from 'react';
import type { SVGProps, Ref } from 'react';

const ChevronRight = (
  { width = 16, height = 16, stroke = 'currentColor', ...props }: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    focusable={false}
    ref={ref}
    {...props}
  >
    <path
      d="M6 4L10 8L6 12"
      stroke={stroke}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default memo(forwardRef(ChevronRight));
