import type { SlideData } from '../data';

export const slide07: SlideData = {
  tx: 'zoom',
  label: '07 Virtual DOM',
  html: `
    <div class="kicker fade-in"><span class="index">06 / RENDERIZADO</span><span class="line"></span></div>
    <div class="two-col">
      <div>
        <div class="eyebrow fade-in">ESTRATEGIA</div>
        <h2 class="heading fade-in"><span class="accent">Virtual DOM</span><br>+ reconciliación.</h2>
        <p class="lead fade-in">En lugar de mutar el DOM directamente (costoso), React mantiene una <strong>copia en memoria</strong> y calcula el diff mínimo.</p>
        <ul class="bullets fade-in stagger" style="margin-top:24px">
          <li><strong>Render:</strong> tu componente devuelve un árbol virtual</li>
          <li><strong>Diff:</strong> compara el nuevo árbol con el anterior</li>
          <li><strong>Commit:</strong> solo aplica los cambios reales al DOM</li>
          <li>Desde React 18: <strong>Fiber + concurrent rendering</strong></li>
        </ul>
      </div>
      <div class="fade-in">
        <div class="vdom-tree">
          <svg viewBox="0 0 500 500" style="width:100%;height:100%">
            <!-- Connections -->
            <g stroke="#2a3340" stroke-width="1.5" fill="none">
              <path d="M 250 80 L 130 180"/>
              <path d="M 250 80 L 370 180"/>
              <path d="M 130 220 L 60 320"/>
              <path d="M 130 220 L 200 320"/>
              <path d="M 370 220 L 300 320"/>
              <path d="M 370 220 L 440 320"/>
              <path d="M 440 360 L 380 440"/>
              <path d="M 440 360 L 500 440"/>
            </g>

            <!-- Root -->
            <g>
              <rect x="200" y="50" width="100" height="40" rx="6" fill="#1a2129" stroke="#61dafb" stroke-width="2"/>
              <text x="250" y="75" text-anchor="middle" fill="#61dafb" font-family="JetBrains Mono" font-size="13">&lt;App/&gt;</text>
            </g>

            <!-- Level 2 -->
            <g>
              <rect x="80" y="180" width="100" height="40" rx="6" fill="#1a2129" stroke="#2a3340"/>
              <text x="130" y="205" text-anchor="middle" fill="#e6edf3" font-family="JetBrains Mono" font-size="12">&lt;Header/&gt;</text>
            </g>
            <g>
              <rect x="320" y="180" width="100" height="40" rx="6" fill="#1a2129" stroke="#2a3340"/>
              <text x="370" y="205" text-anchor="middle" fill="#e6edf3" font-family="JetBrains Mono" font-size="12">&lt;Main/&gt;</text>
            </g>

            <!-- Level 3 -->
            <g>
              <rect x="15" y="320" width="90" height="40" rx="6" fill="#1a2129" stroke="#2a3340"/>
              <text x="60" y="345" text-anchor="middle" fill="#8b949e" font-family="JetBrains Mono" font-size="11">&lt;Logo/&gt;</text>
            </g>
            <g>
              <rect x="155" y="320" width="90" height="40" rx="6" fill="#1a2129" stroke="#2a3340"/>
              <text x="200" y="345" text-anchor="middle" fill="#8b949e" font-family="JetBrains Mono" font-size="11">&lt;Nav/&gt;</text>
            </g>
            <g>
              <rect x="255" y="320" width="90" height="40" rx="6" fill="#1a2129" stroke="#2a3340"/>
              <text x="300" y="345" text-anchor="middle" fill="#8b949e" font-family="JetBrains Mono" font-size="11">&lt;List/&gt;</text>
            </g>
            <!-- Changed node -->
            <g>
              <rect x="395" y="320" width="90" height="40" rx="6" fill="#1a2129" stroke="#61dafb" stroke-width="2">
                <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite"/>
              </rect>
              <text x="440" y="345" text-anchor="middle" fill="#61dafb" font-family="JetBrains Mono" font-size="11">&lt;Counter/&gt;</text>
              <circle cx="480" cy="325" r="6" fill="#61dafb">
                <animate attributeName="r" values="6;10;6" dur="1.5s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/>
              </circle>
            </g>

            <!-- Level 4 changed children -->
            <g>
              <rect x="335" y="440" width="90" height="36" rx="6" fill="#1a2129" stroke="#61dafb" stroke-width="1.5">
                <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="2s" begin="0.3s" repeatCount="indefinite"/>
              </rect>
              <text x="380" y="463" text-anchor="middle" fill="#61dafb" font-family="JetBrains Mono" font-size="10">&lt;span&gt;42&lt;/&gt;</text>
            </g>
            <g>
              <rect x="455" y="440" width="90" height="36" rx="6" fill="#1a2129" stroke="#2a3340"/>
              <text x="500" y="463" text-anchor="middle" fill="#8b949e" font-family="JetBrains Mono" font-size="10">&lt;button/&gt;</text>
            </g>

            <!-- Legend -->
            <g transform="translate(20, 20)">
              <circle cx="6" cy="6" r="4" fill="#61dafb"/>
              <text x="16" y="10" fill="#8b949e" font-family="JetBrains Mono" font-size="10">nodos actualizados</text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  `
};
