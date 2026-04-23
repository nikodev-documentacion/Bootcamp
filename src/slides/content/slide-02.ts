import type { SlideData } from '../data';

export const slide02: SlideData = {
  tx: 'slide-r',
  label: '02 Que es React',
  html: `
    <div class="kicker fade-in"><span class="index">01 / CONCEPTO</span><span class="line"></span></div>
    <div class="two-col">
      <div>
        <div class="eyebrow fade-in">DEFINICIÓN</div>
        <h2 class="heading fade-in">Es una <span class="accent">librería</span> de JavaScript<br>para construir interfaces.</h2>
        <p class="lead fade-in">Creada por <strong>Meta</strong> en 2013. Enfocada en una sola cosa: <strong>la capa de vista</strong>. Todo lo demás —routing, estado global, fetching— lo eliges tú.</p>
        <ul class="bullets fade-in stagger" style="margin-top:28px">
          <li><strong>Declarativa</strong> · describes qué ver, no cómo pintarlo</li>
          <li><strong>Componentes</strong> · bloques reutilizables con su propio estado</li>
          <li><strong>Unidireccional</strong> · el dato fluye de padres a hijos</li>
          <li><strong>Agnóstica</strong> · web, mobile (RN), TV, VR…</li>
        </ul>
      </div>
      <div class="fade-in">
        <div class="code-block">
          <span class="filename">App.jsx</span>
<span class="tok-k">function</span> <span class="tok-f">Welcome</span>({ <span class="tok-p">name</span> }) {
<span class="tok-k">return</span> (
  &lt;<span class="tok-t">div</span> className=<span class="tok-s">"hello"</span>&gt;
    &lt;<span class="tok-t">h1</span>&gt;Hola, {<span class="tok-p">name</span>}&lt;/<span class="tok-t">h1</span>&gt;
  &lt;/<span class="tok-t">div</span>&gt;
);
}

<span class="tok-c">// Eso es todo. Un componente.</span>
<span class="tok-c">// Función → UI.</span>
        </div>
      </div>
    </div>
  `
};
