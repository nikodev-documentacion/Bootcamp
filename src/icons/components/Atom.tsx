import { forwardRef, memo } from 'react';
import type { SVGProps, Ref } from 'react';

const Atom = (
  { width = '100%', height = '100%', ...props }: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="-100 -100 200 200"
    aria-hidden="true"
    focusable={false}
    ref={ref}
    {...props}
  >
    <g className="atom-ring-1">
      <ellipse className="atom-orbit" cx={0} cy={0} rx={75} ry={28} />
    </g>
    <g className="atom-ring-2">
      <ellipse className="atom-orbit" cx={0} cy={0} rx={75} ry={28} transform="rotate(60)" />
    </g>
    <g className="atom-ring-3">
      <ellipse className="atom-orbit" cx={0} cy={0} rx={75} ry={28} transform="rotate(-60)" />
    </g>
    <circle className="atom-core" cx={0} cy={0} r={8} />
  </svg>
);

export default memo(forwardRef(Atom));
