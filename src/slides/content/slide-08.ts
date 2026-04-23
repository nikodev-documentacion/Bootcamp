import type { SlideData } from '../data';

export const slide08: SlideData = {
  tx: 'slide-r',
  label: '08 Clases vs Funcional',
  html: `
    <div class="kicker fade-in"><span class="index">07 / EVOLUCIÓN</span><span class="line"></span></div>
    <div class="eyebrow fade-in">REACT 16.8 · 2019</div>
    <h2 class="heading fade-in">De <span style="color:var(--text-muted);text-decoration:line-through">clases</span> a <span class="accent">funciones</span>.</h2>
    <p class="lead fade-in">Las clases funcionaban, pero traían problemas: <strong>lógica duplicada</strong>, <code style="color:var(--react)">this</code> confuso, difícil reutilizar comportamiento y peores optimizaciones.</p>

    <div class="compare fade-in stagger" style="margin-top:32px">
      <div class="panel old">
        <div class="phead"><span>❌</span> <span>ANTES · Clase</span></div>
<pre><span class="tok-k">class</span> <span class="tok-f">Counter</span> <span class="tok-k">extends</span> React.Component {
<span class="tok-f">constructor</span>(<span class="tok-p">props</span>) {
  <span class="tok-k">super</span>(<span class="tok-p">props</span>);
  <span class="tok-k">this</span>.state = { count: <span class="tok-n">0</span> };
  <span class="tok-k">this</span>.add = <span class="tok-k">this</span>.add.bind(<span class="tok-k">this</span>);
}
<span class="tok-f">add</span>() { <span class="tok-k">this</span>.setState({ count: <span class="tok-k">this</span>.state.count + <span class="tok-n">1</span> }); }
<span class="tok-f">render</span>() { <span class="tok-k">return</span> &lt;<span class="tok-t">button</span> onClick={<span class="tok-k">this</span>.add}&gt;{<span class="tok-k">this</span>.state.count}&lt;/<span class="tok-t">button</span>&gt;; }
}</pre>
      </div>
      <div class="panel ok">
        <div class="phead"><span>✓</span> <span>HOY · Función + Hook</span></div>
<pre><span class="tok-k">function</span> <span class="tok-f">Counter</span>() {
<span class="tok-k">const</span> [count, setCount] = <span class="tok-f">useState</span>(<span class="tok-n">0</span>);

<span class="tok-k">return</span> (
  &lt;<span class="tok-t">button</span> onClick={() =&gt; <span class="tok-f">setCount</span>(count + <span class="tok-n">1</span>)}&gt;
    {count}
  &lt;/<span class="tok-t">button</span>&gt;
);
}</pre>
      </div>
    </div>
    <p class="lead fade-in" style="margin-top:24px;font-size:17px">
      <strong style="color:var(--react)">Menos código · sin <code>this</code> · lógica reutilizable · mejor tree-shaking.</strong>
    </p>
  `
};
