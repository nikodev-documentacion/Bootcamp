import type { SlideData } from '../data';

export const slide01: SlideData = {
  tx: 'fade',
  label: '01 Portada',
  html: `
    <div class="bg-grid"></div>
    <div class="cover-layout">
      <div>
        <div class="eyebrow fade-in">TECH TALK · 2026</div>
        <h1 class="title fade-in">¿Por qué <span class="accent">aprender</span><br>React?</h1>
        <p class="lead fade-in">La librería que redefinió el desarrollo frontend y que hoy mueve los productos digitales más grandes del mundo.</p>
        <div class="pills fade-in" style="margin-top:32px">
          <span class="pill hot">Declarativa</span>
          <span class="pill hot">Basada en componentes</span>
          <span class="pill hot">Open source</span>
        </div>
      </div>
      <div class="atom fade-in">
        <svg viewBox="-100 -100 200 200">
          <g class="atom-ring-1"><ellipse class="atom-orbit" cx="0" cy="0" rx="75" ry="28"/></g>
          <g class="atom-ring-2"><ellipse class="atom-orbit" cx="0" cy="0" rx="75" ry="28" transform="rotate(60)"/></g>
          <g class="atom-ring-3"><ellipse class="atom-orbit" cx="0" cy="0" rx="75" ry="28" transform="rotate(-60)"/></g>
          <circle class="atom-core" cx="0" cy="0" r="8"/>
        </svg>
      </div>
    </div>
    <div class="slide-footer">PRESIONA → PARA EMPEZAR</div>
  `
};
