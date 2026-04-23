import { forwardRef, memo } from 'react';
import type { SVGProps, Ref } from 'react';

const EventLoop = (
  { width = '100%', height = '100%', ...props }: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 400 340"
    aria-hidden="true"
    focusable={false}
    ref={ref}
    {...props}
  >
    <g>
      <rect x={20} y={20} width={140} height={130} rx={8} fill="#151b23" stroke="#2a3340" />
      <text x={90} y={40} textAnchor="middle" fill="#61dafb" fontFamily="JetBrains Mono" fontSize={11}>
        CALL STACK
      </text>
      <rect className="el-frame" x={30} y={100} width={120} height={22} rx={3} fill="#1a2129" stroke="#61dafb" opacity={0}>
        <animate attributeName="opacity" values="0;1;1;0" dur="4s" begin="0s" repeatCount="indefinite" />
      </rect>
      <text className="el-txt" x={90} y={115} textAnchor="middle" fill="#e6edf3" fontFamily="JetBrains Mono" fontSize={10} opacity={0}>
        <animate attributeName="opacity" values="0;1;1;0" dur="4s" begin="0s" repeatCount="indefinite" />
        handleClick()
      </text>
      <rect x={30} y={125} width={120} height={22} rx={3} fill="#1a2129" stroke="#2a3340" />
      <text x={90} y={140} textAnchor="middle" fill="#8b949e" fontFamily="JetBrains Mono" fontSize={10}>
        main()
      </text>
    </g>

    <g>
      <rect x={240} y={20} width={140} height={130} rx={8} fill="#151b23" stroke="#2a3340" />
      <text x={310} y={40} textAnchor="middle" fill="#61dafb" fontFamily="JetBrains Mono" fontSize={11}>
        WEB APIs
      </text>
      <circle cx={310} cy={90} r={18} fill="none" stroke="#61dafb" strokeWidth={1.5} opacity={0.6}>
        <animate attributeName="r" values="18;26;18" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0.1;0.6" dur="3s" repeatCount="indefinite" />
      </circle>
      <text x={310} y={95} textAnchor="middle" fill="#d2a8ff" fontFamily="JetBrains Mono" fontSize={10}>
        fetch()
      </text>
      <text x={310} y={120} textAnchor="middle" fill="#8b949e" fontFamily="JetBrains Mono" fontSize={9}>
        setTimeout · DOM
      </text>
    </g>

    <g>
      <rect x={240} y={180} width={140} height={130} rx={8} fill="#151b23" stroke="#2a3340" />
      <text x={310} y={200} textAnchor="middle" fill="#61dafb" fontFamily="JetBrains Mono" fontSize={11}>
        TASK QUEUE
      </text>
      <rect x={255} y={220} width={110} height={20} rx={3} fill="#1a2129" stroke="#ffb86c" opacity={0.8} />
      <text x={310} y={234} textAnchor="middle" fill="#ffb86c" fontFamily="JetBrains Mono" fontSize={9}>
        callback
      </text>
      <rect x={255} y={245} width={110} height={20} rx={3} fill="#1a2129" stroke="#7ee787" opacity={0.8} />
      <text x={310} y={259} textAnchor="middle" fill="#7ee787" fontFamily="JetBrains Mono" fontSize={9}>
        microtask
      </text>
      <text x={310} y={290} textAnchor="middle" fill="#8b949e" fontFamily="Inter" fontSize={9}>
        FIFO
      </text>
    </g>

    <g>
      <circle cx={200} cy={230} r={48} fill="none" stroke="#61dafb" strokeWidth={1.5} strokeDasharray="3 3" />
      <circle cx={200} cy={182} r={4} fill="#61dafb">
        <animateTransform attributeName="transform" type="rotate" from="0 200 230" to="360 200 230" dur="4s" repeatCount="indefinite" />
      </circle>
      <text x={200} y={228} textAnchor="middle" fill="#61dafb" fontFamily="JetBrains Mono" fontSize={10}>
        EVENT
      </text>
      <text x={200} y={242} textAnchor="middle" fill="#61dafb" fontFamily="JetBrains Mono" fontSize={10}>
        LOOP
      </text>
    </g>

    <path d="M 160 80 Q 200 80 240 80" stroke="#2a3340" strokeWidth={1.5} fill="none" strokeDasharray="4 4" />
    <path d="M 310 150 Q 310 170 310 180" stroke="#2a3340" strokeWidth={1.5} fill="none" strokeDasharray="4 4" />
    <path d="M 240 240 Q 220 240 200 240" stroke="#61dafb" strokeWidth={1.5} fill="none" markerEnd="url(#ar)" />
    <path d="M 160 180 Q 130 150 90 150" stroke="#61dafb" strokeWidth={1.5} fill="none" markerEnd="url(#ar)" />
    <defs>
      <marker id="ar" viewBox="0 0 10 10" refX={8} refY={5} markerWidth={6} markerHeight={6} orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#61dafb" />
      </marker>
    </defs>
  </svg>
);

export default memo(forwardRef(EventLoop));
