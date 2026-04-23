import type { SlideData } from '../data';

export const slide06: SlideData = {
  tx: 'slide-r',
  label: '06 Event Loop',
  html: `
    <div class="kicker fade-in"><span class="index">05 / RUNTIME</span><span class="line"></span></div>
    <div class="two-col">
      <div>
        <div class="eyebrow fade-in">FUNDAMENTAL</div>
        <h2 class="heading fade-in">¿Qué aporta el <span class="accent">Event Loop?</span></h2>
        <p class="lead fade-in">JavaScript es <strong>single-threaded</strong>. El event loop es lo que permite que React maneje eventos, timers y fetches sin bloquear la UI.</p>
        <ul class="bullets fade-in stagger" style="margin-top:24px">
          <li><strong>Call Stack</strong> · ejecuta funciones síncronas</li>
          <li><strong>Web APIs</strong> · fetch, setTimeout, DOM events</li>
          <li><strong>Microtask Queue</strong> · promesas (prioridad)</li>
          <li><strong>Task Queue</strong> · setTimeout, clicks, etc.</li>
          <li>React usa esto para <strong>batching</strong> de updates</li>
        </ul>
      </div>
      <div class="fade-in">
        <div class="evloop" id="evloop-diagram">
          <svg viewBox="0 0 400 340" style="width:100%;height:100%">
            <!-- Call stack -->
            <g>
              <rect x="20" y="20" width="140" height="130" rx="8" fill="#151b23" stroke="#2a3340"/>
              <text x="90" y="40" text-anchor="middle" fill="#61dafb" font-family="JetBrains Mono" font-size="11">CALL STACK</text>
              <rect class="el-frame" x="30" y="100" width="120" height="22" rx="3" fill="#1a2129" stroke="#61dafb" opacity="0"><animate attributeName="opacity" values="0;1;1;0" dur="4s" begin="0s" repeatCount="indefinite"/></rect>
              <text class="el-txt" x="90" y="115" text-anchor="middle" fill="#e6edf3" font-family="JetBrains Mono" font-size="10" opacity="0"><animate attributeName="opacity" values="0;1;1;0" dur="4s" begin="0s" repeatCount="indefinite"/>handleClick()</text>
              <rect x="30" y="125" width="120" height="22" rx="3" fill="#1a2129" stroke="#2a3340"/>
              <text x="90" y="140" text-anchor="middle" fill="#8b949e" font-family="JetBrains Mono" font-size="10">main()</text>
            </g>

            <!-- Web APIs -->
            <g>
              <rect x="240" y="20" width="140" height="130" rx="8" fill="#151b23" stroke="#2a3340"/>
              <text x="310" y="40" text-anchor="middle" fill="#61dafb" font-family="JetBrains Mono" font-size="11">WEB APIs</text>
              <circle cx="310" cy="90" r="18" fill="none" stroke="#61dafb" stroke-width="1.5" opacity="0.6"><animate attributeName="r" values="18;26;18" dur="3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.6;0.1;0.6" dur="3s" repeatCount="indefinite"/></circle>
              <text x="310" y="95" text-anchor="middle" fill="#d2a8ff" font-family="JetBrains Mono" font-size="10">fetch()</text>
              <text x="310" y="120" text-anchor="middle" fill="#8b949e" font-family="JetBrains Mono" font-size="9">setTimeout · DOM</text>
            </g>

            <!-- Task queue -->
            <g>
              <rect x="240" y="180" width="140" height="130" rx="8" fill="#151b23" stroke="#2a3340"/>
              <text x="310" y="200" text-anchor="middle" fill="#61dafb" font-family="JetBrains Mono" font-size="11">TASK QUEUE</text>
              <rect x="255" y="220" width="110" height="20" rx="3" fill="#1a2129" stroke="#ffb86c" opacity="0.8"/>
              <text x="310" y="234" text-anchor="middle" fill="#ffb86c" font-family="JetBrains Mono" font-size="9">callback</text>
              <rect x="255" y="245" width="110" height="20" rx="3" fill="#1a2129" stroke="#7ee787" opacity="0.8"/>
              <text x="310" y="259" text-anchor="middle" fill="#7ee787" font-family="JetBrains Mono" font-size="9">microtask</text>
              <text x="310" y="290" text-anchor="middle" fill="#8b949e" font-family="Inter" font-size="9">FIFO</text>
            </g>

            <!-- Event loop circle -->
            <g>
              <circle cx="200" cy="230" r="48" fill="none" stroke="#61dafb" stroke-width="1.5" stroke-dasharray="3 3"/>
              <circle cx="200" cy="182" r="4" fill="#61dafb">
                <animateTransform attributeName="transform" type="rotate" from="0 200 230" to="360 200 230" dur="4s" repeatCount="indefinite"/>
              </circle>
              <text x="200" y="228" text-anchor="middle" fill="#61dafb" font-family="JetBrains Mono" font-size="10">EVENT</text>
              <text x="200" y="242" text-anchor="middle" fill="#61dafb" font-family="JetBrains Mono" font-size="10">LOOP</text>
            </g>

            <!-- Arrows -->
            <path d="M 160 80 Q 200 80 240 80" stroke="#2a3340" stroke-width="1.5" fill="none" stroke-dasharray="4 4"/>
            <path d="M 310 150 Q 310 170 310 180" stroke="#2a3340" stroke-width="1.5" fill="none" stroke-dasharray="4 4"/>
            <path d="M 240 240 Q 220 240 200 240" stroke="#61dafb" stroke-width="1.5" fill="none" marker-end="url(#ar)"/>
            <path d="M 160 180 Q 130 150 90 150" stroke="#61dafb" stroke-width="1.5" fill="none" marker-end="url(#ar)"/>
            <defs>
              <marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#61dafb"/>
              </marker>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  `
};
