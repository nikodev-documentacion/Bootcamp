export default function Slide08_ClassesToFunctions() {
  return (
    <>
      <div className="kicker fade-in">
        <span className="index">07 / EVOLUCIÓN</span>
        <span className="line"></span>
      </div>
      <div className="eyebrow fade-in">REACT 16.8 · 2019</div>
      <h2 className="heading fade-in">
        De{' '}
        <span style={{ color: 'var(--text-muted)', textDecoration: 'line-through' }}>
          clases
        </span>{' '}
        a <span className="accent">funciones</span>.
      </h2>
      <p className="lead fade-in">
        Las clases funcionaban, pero traían problemas:{' '}
        <strong>lógica duplicada</strong>,{' '}
        <code style={{ color: 'var(--react)' }}>this</code> confuso, difícil reutilizar
        comportamiento y peores optimizaciones.
      </p>

      <div className="compare fade-in stagger" style={{ marginTop: 32 }}>
        <div className="panel old">
          <div className="phead">
            <span>❌</span> <span>ANTES · Clase</span>
          </div>
          <pre>
            <span className="tok-k">class</span>{' '}
            <span className="tok-f">Counter</span>{' '}
            <span className="tok-k">extends</span> React.Component {'{'}
            {'\n  '}
            <span className="tok-f">constructor</span>(
            <span className="tok-p">props</span>) {'{'}
            {'\n    '}
            <span className="tok-k">super</span>(
            <span className="tok-p">props</span>);
            {'\n    '}
            <span className="tok-k">this</span>.state = {'{ count: '}
            <span className="tok-n">0</span>
            {' };'}
            {'\n    '}
            <span className="tok-k">this</span>.add ={' '}
            <span className="tok-k">this</span>.add.bind(
            <span className="tok-k">this</span>);
            {'\n  }\n  '}
            <span className="tok-f">add</span>() {'{ '}
            <span className="tok-k">this</span>.setState({'{ count: '}
            <span className="tok-k">this</span>.state.count +{' '}
            <span className="tok-n">1</span>
            {' });'} {'}'}
            {'\n  '}
            <span className="tok-f">render</span>() {'{ '}
            <span className="tok-k">return</span> &lt;
            <span className="tok-t">button</span> onClick={'{'}
            <span className="tok-k">this</span>.add{'}'}&gt;{'{'}
            <span className="tok-k">this</span>.state.count{'}'}&lt;/
            <span className="tok-t">button</span>&gt;; {'}'}
            {'\n}'}
          </pre>
        </div>
        <div className="panel ok">
          <div className="phead">
            <span>✓</span> <span>HOY · Función + Hook</span>
          </div>
          <pre>
            <span className="tok-k">function</span>{' '}
            <span className="tok-f">Counter</span>() {'{'}
            {'\n  '}
            <span className="tok-k">const</span> [count, setCount] ={' '}
            <span className="tok-f">useState</span>(
            <span className="tok-n">0</span>);
            {'\n\n  '}
            <span className="tok-k">return</span> ({'\n    '}
            &lt;<span className="tok-t">button</span> onClick=
            {'{() => '}
            <span className="tok-f">setCount</span>(count +{' '}
            <span className="tok-n">1</span>){'}'}&gt;{'\n      '}
            {'{count}'}
            {'\n    '}
            &lt;/<span className="tok-t">button</span>&gt;{'\n  '});{'\n}'}
          </pre>
        </div>
      </div>
      <p className="lead fade-in" style={{ marginTop: 24, fontSize: 17 }}>
        <strong style={{ color: 'var(--react)' }}>
          Menos código · sin <code>this</code> · lógica reutilizable · mejor
          tree-shaking.
        </strong>
      </p>
    </>
  );
}
