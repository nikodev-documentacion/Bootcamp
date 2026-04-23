import type { SlideData } from '../data';

export const slide15: SlideData = {
  tx: 'up',
  label: '15 Ecosistema 2',
  html: `
    <div class="kicker fade-in"><span class="index">14 / ECOSISTEMA — II</span><span class="line"></span></div>
    <div class="eyebrow fade-in">LAS PIEZAS QUE COMPLETAN EL ROMPECABEZAS</div>
    <h2 class="heading fade-in">Estilos, forms, tests y <span class="accent">más allá de la web</span>.</h2>

    <div class="eco-grid stagger">
      <div class="eco-group">
        <h4>🎨 Styling</h4>
        <div class="chips">
          <span class="chip">Tailwind CSS</span>
          <span class="chip">CSS Modules</span>
          <span class="chip">styled-components</span>
          <span class="chip">shadcn/ui</span>
          <span class="chip">Radix UI</span>
        </div>
      </div>
      <div class="eco-group">
        <h4>📝 Formularios y validación</h4>
        <div class="chips">
          <span class="chip">React Hook Form</span>
          <span class="chip">Formik</span>
          <span class="chip">Zod <span class="tag-role">schemas</span></span>
        </div>
      </div>
      <div class="eco-group">
        <h4>🧪 Testing</h4>
        <div class="chips">
          <span class="chip">Vitest · Jest</span>
          <span class="chip">Testing Library</span>
          <span class="chip">Playwright <span class="tag-role">e2e</span></span>
          <span class="chip">Storybook</span>
        </div>
      </div>
      <div class="eco-group">
        <h4>📱 Más allá del navegador</h4>
        <div class="chips">
          <span class="chip">React Native <span class="tag-role">iOS · Android</span></span>
          <span class="chip">Expo</span>
          <span class="chip">React Three Fiber <span class="tag-role">3D</span></span>
          <span class="chip">Framer Motion <span class="tag-role">animación</span></span>
        </div>
      </div>
    </div>
  `
};
