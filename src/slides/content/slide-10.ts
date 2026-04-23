import type { SlideData } from '../data';

export const slide10: SlideData = {
  tx: 'slide-r',
  label: '10 Composicion',
  html: `
    <div class="kicker fade-in"><span class="index">09 / FILOSOFÍA</span><span class="line"></span></div>
    <div class="two-col">
      <div>
        <div class="eyebrow fade-in">PRINCIPIO CLAVE</div>
        <h2 class="heading fade-in"><span class="accent">Composición</span><br>sobre herencia.</h2>
        <p class="lead fade-in">En lugar de jerarquías <code style="color:var(--react)">extends</code> rígidas, React construye UI <strong>combinando piezas pequeñas</strong>.</p>
        <ul class="bullets fade-in stagger" style="margin-top:24px">
          <li><strong>Children:</strong> cualquier componente puede recibir hijos</li>
          <li><strong>Props como slots:</strong> <code>header={...}</code>, <code>footer={...}</code></li>
          <li><strong>Render props / HOCs / Hooks</strong> para compartir lógica</li>
          <li>Más <strong>flexible, testeable y mantenible</strong> que la herencia</li>
        </ul>
      </div>
      <div class="fade-in">
        <div class="code-block">
          <span class="filename">Dialog.jsx — composición</span>
<span class="tok-k">function</span> <span class="tok-f">Dialog</span>({ <span class="tok-p">title</span>, <span class="tok-p">children</span> }) {
<span class="tok-k">return</span> (
  &lt;<span class="tok-t">div</span> className=<span class="tok-s">"dialog"</span>&gt;
    &lt;<span class="tok-t">h2</span>&gt;{<span class="tok-p">title</span>}&lt;/<span class="tok-t">h2</span>&gt;
    {<span class="tok-p">children</span>}  <span class="tok-c">{/* 🔑 slot abierto */}</span>
  &lt;/<span class="tok-t">div</span>&gt;
);
}

<span class="tok-c">// Cualquiera lo compone a su manera:</span>
&lt;<span class="tok-t">Dialog</span> title=<span class="tok-s">"Confirmar"</span>&gt;
&lt;<span class="tok-t">p</span>&gt;¿Seguro de borrar?&lt;/<span class="tok-t">p</span>&gt;
&lt;<span class="tok-t">Button</span> danger&gt;Eliminar&lt;/<span class="tok-t">Button</span>&gt;
&lt;/<span class="tok-t">Dialog</span>&gt;
        </div>
      </div>
    </div>
  `
};
