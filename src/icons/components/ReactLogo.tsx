import { forwardRef, memo } from 'react';
import type { SVGProps, Ref } from 'react';

const ReactLogo = (
  { width = 56, height = 56, fill = '#61DAFB', ...props }: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="-11.5 -10.23174 23 20.46348"
    aria-label="React"
    ref={ref}
    {...props}
  >
    <circle cx={0} cy={0} r={2.05} fill={fill} />
    <g stroke={fill} strokeWidth={1} fill="none">
      <ellipse rx={11} ry={4.2} />
      <ellipse rx={11} ry={4.2} transform="rotate(60)" />
      <ellipse rx={11} ry={4.2} transform="rotate(120)" />
    </g>
  </svg>
);

export default memo(forwardRef(ReactLogo));
