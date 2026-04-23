import type { SlideData } from '../data';

export const slide14: SlideData = {
  tx: 'up',
  label: '14 Ecosistema 1',
  html: `
    <div class="kicker fade-in"><span class="index">13 / ECOSISTEMA — I</span><span class="line"></span></div>
    <div class="eyebrow fade-in">CONCEPTOS QUE DEBES DOMINAR</div>
    <h2 class="heading fade-in">El <span class="accent">stack moderno</span> de React.</h2>
    <p class="lead fade-in">React resuelve la vista. Estas son las piezas que le agregas alrededor para construir un producto real.</p>

    <div class="eco-grid stagger">
      <div class="eco-group">
        <h4>⚡ Meta-frameworks</h4>
        <div class="chips">
          <span class="chip">Next.js <span class="tag-role">SSR · RSC · App Router</span></span>
          <span class="chip">Remix <span class="tag-role">web fundamentals</span></span>
          <span class="chip">Astro <span class="tag-role">islands</span></span>
          <span class="chip">Vite <span class="tag-role">dev server · build</span></span>
        </div>
      </div>
      <div class="eco-group">
        <h4>🧭 Routing</h4>
        <div class="chips">
          <span class="chip">React Router</span>
          <span class="chip">TanStack Router <span class="tag-role">type-safe</span></span>
          <span class="chip">Next.js App Router</span>
        </div>
      </div>
      <div class="eco-group">
        <h4>🧠 Estado global</h4>
        <div class="chips">
          <span class="chip">Zustand <span class="tag-role">minimal</span></span>
          <span class="chip">Redux Toolkit</span>
          <span class="chip">Jotai <span class="tag-role">atómico</span></span>
          <span class="chip">Valtio</span>
        </div>
      </div>
      <div class="eco-group">
        <h4>🌐 Data fetching</h4>
        <div class="chips">
          <span class="chip">TanStack Query</span>
          <span class="chip">SWR</span>
          <span class="chip">Apollo <span class="tag-role">GraphQL</span></span>
          <span class="chip">tRPC</span>
        </div>
      </div>
    </div>
  `
};
