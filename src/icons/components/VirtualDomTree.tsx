import { forwardRef, memo } from 'react';
import type { SVGProps, Ref } from 'react';

const VirtualDomTree = (
  { width = '100%', height = '100%', ...props }: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 500 500"
    aria-hidden="true"
    focusable={false}
    ref={ref}
    {...props}
  >
    <g stroke="#2a3340" strokeWidth={1.5} fill="none">
      <path d="M 250 80 L 130 180" />
      <path d="M 250 80 L 370 180" />
      <path d="M 130 220 L 60 320" />
      <path d="M 130 220 L 200 320" />
      <path d="M 370 220 L 300 320" />
      <path d="M 370 220 L 440 320" />
      <path d="M 440 360 L 380 440" />
      <path d="M 440 360 L 500 440" />
    </g>

    <g>
      <rect x={200} y={50} width={100} height={40} rx={6} fill="#1a2129" stroke="#61dafb" strokeWidth={2} />
      <text x={250} y={75} textAnchor="middle" fill="#61dafb" fontFamily="JetBrains Mono" fontSize={13}>
        {'<App/>'}
      </text>
    </g>

    <g>
      <rect x={80} y={180} width={100} height={40} rx={6} fill="#1a2129" stroke="#2a3340" />
      <text x={130} y={205} textAnchor="middle" fill="#e6edf3" fontFamily="JetBrains Mono" fontSize={12}>
        {'<Header/>'}
      </text>
    </g>
    <g>
      <rect x={320} y={180} width={100} height={40} rx={6} fill="#1a2129" stroke="#2a3340" />
      <text x={370} y={205} textAnchor="middle" fill="#e6edf3" fontFamily="JetBrains Mono" fontSize={12}>
        {'<Main/>'}
      </text>
    </g>

    <g>
      <rect x={15} y={320} width={90} height={40} rx={6} fill="#1a2129" stroke="#2a3340" />
      <text x={60} y={345} textAnchor="middle" fill="#8b949e" fontFamily="JetBrains Mono" fontSize={11}>
        {'<Logo/>'}
      </text>
    </g>
    <g>
      <rect x={155} y={320} width={90} height={40} rx={6} fill="#1a2129" stroke="#2a3340" />
      <text x={200} y={345} textAnchor="middle" fill="#8b949e" fontFamily="JetBrains Mono" fontSize={11}>
        {'<Nav/>'}
      </text>
    </g>
    <g>
      <rect x={255} y={320} width={90} height={40} rx={6} fill="#1a2129" stroke="#2a3340" />
      <text x={300} y={345} textAnchor="middle" fill="#8b949e" fontFamily="JetBrains Mono" fontSize={11}>
        {'<List/>'}
      </text>
    </g>

    <g>
      <rect x={395} y={320} width={90} height={40} rx={6} fill="#1a2129" stroke="#61dafb" strokeWidth={2}>
        <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
      </rect>
      <text x={440} y={345} textAnchor="middle" fill="#61dafb" fontFamily="JetBrains Mono" fontSize={11}>
        {'<Counter/>'}
      </text>
      <circle cx={480} cy={325} r={6} fill="#61dafb">
        <animate attributeName="r" values="6;10;6" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
      </circle>
    </g>

    <g>
      <rect x={335} y={440} width={90} height={36} rx={6} fill="#1a2129" stroke="#61dafb" strokeWidth={1.5}>
        <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="2s" begin="0.3s" repeatCount="indefinite" />
      </rect>
      <text x={380} y={463} textAnchor="middle" fill="#61dafb" fontFamily="JetBrains Mono" fontSize={10}>
        {'<span>42</>'}
      </text>
    </g>
    <g>
      <rect x={455} y={440} width={90} height={36} rx={6} fill="#1a2129" stroke="#2a3340" />
      <text x={500} y={463} textAnchor="middle" fill="#8b949e" fontFamily="JetBrains Mono" fontSize={10}>
        {'<button/>'}
      </text>
    </g>

    <g transform="translate(20, 20)">
      <circle cx={6} cy={6} r={4} fill="#61dafb" />
      <text x={16} y={10} fill="#8b949e" fontFamily="JetBrains Mono" fontSize={10}>
        nodos actualizados
      </text>
    </g>
  </svg>
);

export default memo(forwardRef(VirtualDomTree));
