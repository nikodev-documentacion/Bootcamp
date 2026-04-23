import type { SlideData } from '../data';

export const slide03: SlideData = {
  tx: 'slide-r',
  label: '03 Problema',
  html: `
    <div class="kicker fade-in"><span class="index">02 / PROBLEMA</span><span class="line"></span></div>
    <div class="two-col">
      <div>
        <div class="eyebrow fade-in">EL DOLOR ANTES DE REACT</div>
        <h2 class="heading fade-in">Sincronizar <span class="accent">UI ↔ estado</span><br>era un infierno.</h2>
        <p class="lead fade-in">Con jQuery manipulabas el DOM a mano en cada cambio. A más features, más bugs, más spaghetti.</p>
        <ul class="bullets fade-in stagger" style="margin-top:28px">
          <li><strong>Antes:</strong> "cuando pase X → buscar nodo → mutarlo"</li>
          <li><strong>Después:</strong> "la UI es una función del estado"</li>
          <li>React <strong>se encarga</strong> de pintar los cambios</li>
          <li>Menos bugs, más predecible, más testeable</li>
        </ul>
      </div>
      <div class="fade-in">
        <div class="code-block" style="margin-bottom:16px">
          <span class="filename">Antes · jQuery</span>
<span class="tok-c">// Imperativo: mutar el DOM</span>
$(<span class="tok-s">'#counter'</span>).text(count);
$(<span class="tok-s">'#badge'</span>).toggleClass(
<span class="tok-s">'hot'</span>, count &gt; <span class="tok-n">10</span>
);
<span class="tok-c">// ...y 40 líneas más 😵</span>
        </div>
        <div class="code-block">
          <span class="filename">Ahora · React</span>
<span class="tok-c">// Declarativo: describes el resultado</span>
&lt;<span class="tok-t">div</span>&gt;
&lt;<span class="tok-t">span</span>&gt;{count}&lt;/<span class="tok-t">span</span>&gt;
&lt;<span class="tok-t">Badge</span> hot={count &gt; <span class="tok-n">10</span>} /&gt;
&lt;/<span class="tok-t">div</span>&gt;
        </div>
      </div>
    </div>
  `
};
