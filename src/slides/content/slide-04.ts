import type { SlideData } from '../data';

export const slide04: SlideData = {
  tx: 'up',
  label: '04 Competidores',
  html: `
    <div class="kicker fade-in"><span class="index">03 / MERCADO</span><span class="line"></span></div>
    <div class="eyebrow fade-in">CONTEXTO</div>
    <h2 class="heading fade-in">No está solo. <span class="accent">¿Contra quién compite?</span></h2>
    <p class="lead fade-in">Cada uno resuelve el problema con su propia filosofía. Conocerlos te ayuda a entender por qué React es como es.</p>
    <div class="vs-grid stagger">
      <div class="vs-card is-react">
        <div class="vs-icon"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgdmlld0JveD0iLTExLjUgLTEwLjIzMTc0IDIzIDIwLjQ2MzQ4Ij48Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iMi4wNSIgZmlsbD0iIzYxREFGQiIvPjxnIHN0cm9rZT0iIzYxREFGQiIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIj48ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiLz48ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPjxlbGxpcHNlIHJ4PSIxMSIgcnk9IjQuMiIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwKSIvPjwvZz48L3N2Zz4=" alt="React" /></div>
        <h3>React</h3>
        <div class="year">2013 · Meta</div>
        <p>Librería minimalista. Tú eliges el resto del stack.</p>
      </div>
      <div class="vs-card">
        <div class="vs-icon"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgdmlld0JveD0iMCAwIDI1MCAyNTAiPjxwb2x5Z29uIGZpbGw9IiNERDAwMzEiIHBvaW50cz0iMTI1LDMwIDEyNSwzMCAxMjUsMzAgMzEuOSw2My4yIDQ2LjEsMTg2LjMgMTI1LDIzMCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiIvPjxwb2x5Z29uIGZpbGw9IiNDMzAwMkYiIHBvaW50cz0iMTI1LDMwIDEyNSw1Mi4yIDEyNSw1Mi4xIDEyNSwxNTMuNCAxMjUsMTUzLjQgMTI1LDIzMCAxMjUsMjMwIDIwMy45LDE4Ni4zIDIxOC4xLDYzLjIgMTI1LDMwIi8+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSw1Mi4xTDY2LjgsMTgyLjZoMGgyMS43aDBsMTEuNy0yOS4yaDQ5LjRsMTEuNywyOS4yaDBoMjEuN2gwTDEyNSw1Mi4xTDEyNSw1Mi4xTDEyNSw1Mi4xTDEyNSw1Mi4xTDEyNSw1Mi4xeiBNMTQyLDEzNS40SDEwOGwxNy00MC45TDE0MiwxMzUuNHoiLz48L3N2Zz4=" alt="Angular" /></div>
        <h3>Angular</h3>
        <div class="year">2016 · Google</div>
        <p>Framework completo y opinado. TypeScript, DI, RxJS.</p>
      </div>
      <div class="vs-card">
        <div class="vs-icon"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgdmlld0JveD0iMCAwIDI2MS43NiAyMjYuNjkiPjxwYXRoIGQ9Im0xNjEuMDk2LjAwMS0zMC4yMjUgNTIuMzUxTDEwMC42NDcuMDAxSC0uMDA1TDEzMC44NzIgMjI2LjY4OCAyNjEuNzQ5LjAwMVoiIGZpbGw9IiM0MWI4ODMiLz48cGF0aCBkPSJtMTYxLjA5Ni4wMDEtMzAuMjI1IDUyLjM1MUwxMDAuNjQ3LjAwMUg1Mi4zNDZsNzguNTI2IDEzNi4wMUwyMDkuMzk4LjAwMVoiIGZpbGw9IiMzNDQ5NWUiLz48L3N2Zz4=" alt="Vue" /></div>
        <h3>Vue</h3>
        <div class="year">2014 · Evan You</div>
        <p>Balance entre React y Angular. SFC + reactividad.</p>
      </div>
      <div class="vs-card">
        <div class="vs-icon"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgdmlld0JveD0iMCAwIDk4LjEgMTE4Ij48cGF0aCBkPSJNOTEuOCAxNS42QzgwLjktLjEgNTkuMi00LjcgNDMuNiA1LjJMMTYuMSAyMi44QzguNiAyNy41IDMuNCAzNS4yIDEuOSA0My45Yy0xLjMgNy4zLS4yIDE0LjggMy4zIDIxLjMtMi40IDMuNi00IDcuNi00LjcgMTEuOC0xLjYgOC45LjUgMTggNS43IDI1LjMgMTEgMTUuNyAzMi42IDIwLjMgNDguMiAxMC40bDI3LjUtMTcuNWM3LjUtNC43IDEyLjctMTIuNCAxNC4yLTIxLjEgMS4zLTcuMy4yLTE0LjgtMy4zLTIxLjMgMi40LTMuNiA0LTcuNiA0LjctMTEuOCAxLjctOS0uNC0xOC4xLTUuNy0yNS40IiBmaWxsPSIjZmYzZTAwIi8+PHBhdGggZD0iTTQwLjkgMTAzLjljLTguOSAyLjMtMTguMi0xLjItMjMuNC04LjctMy4yLTQuNC00LjQtOS45LTMuNS0xNS4zLjItLjkuNC0xLjcuNi0yLjZsLjUtMS42IDEuNCAxYzMuMyAyLjQgNi45IDQuMiAxMC44IDUuNGwxIC4zLS4xIDFjLS4xIDEuNC4zIDIuOSAxLjEgNC4xIDEuNiAyLjMgNC40IDMuNCA3LjEgMi43LjYtLjIgMS4yLS40IDEuNy0uN0w2NS42IDcyYzEuNC0uOSAyLjMtMi4yIDIuNi0zLjguMy0xLjYtLjEtMy4zLTEtNC42LTEuNi0yLjMtNC40LTMuMy03LjEtMi42LS42LjItMS4yLjQtMS43LjdsLTEwLjUgNi43Yy0xLjcgMS4xLTMuNiAxLjktNS42IDIuNC04LjkgMi4zLTE4LjItMS4yLTIzLjQtOC43LTMuMS00LjQtNC40LTkuOS0zLjQtMTUuMy45LTUuMiA0LjEtOS45IDguNi0xMi43bDI3LjUtMTcuNWMxLjctMS4xIDMuNi0xLjkgNS42LTIuNSA4LjktMi4zIDE4LjIgMS4yIDIzLjQgOC43IDMuMiA0LjQgNC40IDkuOSAzLjUgMTUuMy0uMi45LS40IDEuNy0uNyAyLjZsLS41IDEuNi0xLjQtMWMtMy4zLTIuNC02LjktNC4yLTEwLjgtNS40bC0xLS4zLjEtMWMuMS0xLjQtLjMtMi45LTEuMS00LjEtMS42LTIuMy00LjQtMy4zLTcuMS0yLjYtLjYuMi0xLjIuNC0xLjcuN0wzMi40IDQ2Yy0xLjQuOS0yLjMgMi4yLTIuNiAzLjhzLjEgMy4zIDEgNC42YzEuNiAyLjMgNC40IDMuMyA3LjEgMi42LjYtLjIgMS4yLS40IDEuNy0uN2wxMC41LTYuN2MxLjctMS4xIDMuNi0xLjkgNS42LTIuNSA4LjktMi4zIDE4LjIgMS4yIDIzLjQgOC43IDMuMiA0LjQgNC40IDkuOSAzLjUgMTUuMy0uOSA1LjItNC4xIDkuOS04LjYgMTIuN2wtMjcuNSAxNy41Yy0xLjcgMS4xLTMuNiAxLjktNS42IDIuNSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==" alt="Svelte" /></div>
        <h3>Svelte</h3>
        <div class="year">2016 · Rich Harris</div>
        <p>Compilador. Sin virtual DOM. Bundle pequeño.</p>
      </div>
    </div>
    <p class="lead fade-in" style="margin-top:40px;font-size:16px">
      También: <span class="tag"><span class="dot"></span>SolidJS</span>
      <span class="tag" style="margin-left:8px"><span class="dot"></span>Qwik</span>
      <span class="tag" style="margin-left:8px"><span class="dot"></span>Preact</span>
      <span class="tag" style="margin-left:8px"><span class="dot"></span>Lit</span>
    </p>
  `
};
