import { forwardRef, memo } from 'react';
import type { SVGProps, Ref } from 'react';

const Vue = (
  { width = 56, height = 56, fill = '#41b883', ...props }: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 261.76 226.69"
    aria-label="Vue"
    ref={ref}
    {...props}
  >
    <path
      d="m161.096.001-30.225 52.351L100.647.001H-.005L130.872 226.688 261.749.001Z"
      fill={fill}
    />
    <path
      d="m161.096.001-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001Z"
      fill="#34495e"
    />
  </svg>
);

export default memo(forwardRef(Vue));
