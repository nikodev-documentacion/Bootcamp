import { forwardRef, memo } from 'react';
import type { SVGProps, Ref } from 'react';

const Angular = (
  {
    width = 56,
    height = 56,
    fill = '#DD0031',
    ...props
  }: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 250 250"
    aria-hidden="true"
    focusable={false}
    ref={ref}
    {...props}
  >
    <path fill={fill} d="M125 30 31.9 63.2l14.2 123.1L125 230l78.9-43.7 14.2-123.1z" />
    <path fill="#C3002F" d="M125 30v22.2-.1V230l78.9-43.7 14.2-123.1L125 30z" />
    <path fill="#FFF" d="M125 52.1 66.8 182.6h21.7l11.7-29.2h49.4l11.7 29.2H183L125 52.1zm17 83.3h-34l17-40.9 17 40.9z" />
  </svg>
);

export default memo(forwardRef(Angular));
