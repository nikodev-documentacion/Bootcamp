import type { SlideData } from '../data';

export const slide12: SlideData = {
  tx: 'zoom',
  label: '12 Comunidad',
  html: `
    <div class="kicker fade-in"><span class="index">11 / COMUNIDAD</span><span class="line"></span></div>
    <div class="eyebrow fade-in">NÚMEROS QUE IMPORTAN</div>
    <h2 class="heading fade-in">La comunidad <span class="accent">más grande</span> del frontend.</h2>
    <p class="lead fade-in">React no es solo una librería: es un <strong>estándar de facto</strong> con un ecosistema autosostenible.</p>

    <div class="stats stagger">
      <div class="stat">
        <div class="num">230K+</div>
        <div class="lbl">GitHub stars · top 5 repos JS</div>
      </div>
      <div class="stat">
        <div class="num">25M</div>
        <div class="lbl">Descargas npm / semana</div>
      </div>
      <div class="stat">
        <div class="num">#1</div>
        <div class="lbl">Librería más usada · Stack Overflow Survey</div>
      </div>
      <div class="stat">
        <div class="num">1500+</div>
        <div class="lbl">Contribuidores activos</div>
      </div>
    </div>
    <p class="lead fade-in" style="margin-top:40px;font-size:16px;color:var(--text-muted)">
      React Conf · React Summit · React India · React Day Berlin · React Madrid · Reactiflux (Discord 200K+)…<br>
      Cualquier duda que tengas, <strong style="color:var(--react)">alguien ya la resolvió</strong>.
    </p>
  `
};
