import type { SlideData } from '../data';

export const slide11: SlideData = {
  tx: 'up',
  label: '11 Historia',
  html: `
    <div class="kicker fade-in"><span class="index">10 / HISTORIA</span><span class="line"></span></div>
    <div class="two-col">
      <div>
        <div class="eyebrow fade-in">ORIGEN</div>
        <h2 class="heading fade-in">De un hack interno<br>a <span class="accent">mover la web</span>.</h2>
        <p class="lead fade-in">React nació dentro de Facebook para resolver la complejidad del News Feed. Hoy lo usan millones de devs.</p>
        <div class="pills fade-in" style="margin-top:24px">
          <span class="pill hot">Jordan Walke</span>
          <span class="pill">Facebook / Meta</span>
          <span class="pill">MIT License</span>
        </div>
      </div>
      <div class="fade-in" style="overflow:auto">
        <div class="timeline stagger">
          <div class="timeline-item">
            <div class="yr">2011</div>
            <h4>Prototipo interno — Jordan Walke</h4>
            <p>FaxJS: primera versión experimental en Facebook.</p>
          </div>
          <div class="timeline-item">
            <div class="yr">2013 · MAYO</div>
            <h4>Open source · JSConf US</h4>
            <p>Facebook libera React. Recepción inicial escéptica.</p>
          </div>
          <div class="timeline-item">
            <div class="yr">2015</div>
            <h4>React Native</h4>
            <p>Mismas ideas para apps nativas iOS/Android.</p>
          </div>
          <div class="timeline-item">
            <div class="yr">2019</div>
            <h4>Hooks (16.8)</h4>
            <p>Revolución: componentes funcionales con estado.</p>
          </div>
          <div class="timeline-item">
            <div class="yr">2022</div>
            <h4>React 18 · Concurrent</h4>
            <p>Suspense, transitions, server components (RSC).</p>
          </div>
          <div class="timeline-item">
            <div class="yr">2024 · HOY</div>
            <h4>React 19 + Compiler</h4>
            <p>Optimización automática, acciones, form API.</p>
          </div>
        </div>
      </div>
    </div>
  `
};
