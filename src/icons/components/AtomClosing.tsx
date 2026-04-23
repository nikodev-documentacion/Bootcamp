import { forwardRef, memo } from 'react';
import type { SVGProps, Ref } from 'react';

const AtomClosing = (
  { width = '100%', height = '100%', fill = '#61dafb', ...props }: SVGProps<SVGSVGElement>,
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
    <g className="ca-ring ca-ring-1">
      <ellipse className="atom-orbit" cx={0} cy={0} rx={75} ry={28} />
    </g>
    <g className="ca-ring ca-ring-2">
      <ellipse className="atom-orbit" cx={0} cy={0} rx={75} ry={28} transform="rotate(60)" />
    </g>
    <g className="ca-ring ca-ring-3">
      <ellipse className="atom-orbit" cx={0} cy={0} rx={75} ry={28} transform="rotate(-60)" />
    </g>
    <circle className="ca-core" cx={0} cy={0} r={8} fill={fill} />
    <circle className="ca-particle p1" cx={0} cy={0} r={3} fill={fill} />
    <circle className="ca-particle p2" cx={0} cy={0} r={3} fill={fill} />
    <circle className="ca-particle p3" cx={0} cy={0} r={3} fill={fill} />
    <circle className="ca-particle p4" cx={0} cy={0} r={3} fill={fill} />
  </svg>
);

export default memo(forwardRef(AtomClosing));
