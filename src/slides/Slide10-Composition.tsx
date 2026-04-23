export default function Slide10_Composition() {
  return (
    <>
      <div className="kicker fade-in">
        <span className="index">09 / FILOSOFÍA</span>
        <span className="line"></span>
      </div>
      <div className="two-col">
        <div>
          <div className="eyebrow fade-in">PRINCIPIO CLAVE</div>
          <h2 className="heading fade-in">
            <span className="accent">Composición</span>
            <br />
            sobre herencia.
          </h2>
          <p className="lead fade-in">
            En lugar de jerarquías{' '}
            <code style={{ color: 'var(--react)' }}>extends</code> rígidas, React
            construye UI <strong>combinando piezas pequeñas</strong>.
          </p>
          <ul className="bullets fade-in stagger" style={{ marginTop: 24 }}>
            <li><strong>Children:</strong> cualquier componente puede recibir hijos</li>
            <li><strong>Props como slots:</strong> <code>header={'{...}'}</code>, <code>footer={'{...}'}</code></li>
            <li><strong>Render props / HOCs / Hooks</strong> para compartir lógica</li>
            <li>Más <strong>flexible, testeable y mantenible</strong> que la herencia</li>
          </ul>
        </div>
        <div className="fade-in">
          <pre className="code-block">
            <span className="filename">Dialog.jsx — composición</span>
            {'\n'}
            <span className="tok-k">function</span>{' '}
            <span className="tok-f">Dialog</span>({'{ '}
            <span className="tok-p">title</span>,{' '}
            <span className="tok-p">children</span>
            {' }'}) {'{'}
            {'\n  '}
            <span className="tok-k">return</span> ({'\n    '}
            &lt;<span className="tok-t">div</span> className=
            <span className="tok-s">"dialog"</span>&gt;{'\n      '}
            &lt;<span className="tok-t">h2</span>&gt;{'{'}
            <span className="tok-p">title</span>
            {'}'}&lt;/<span className="tok-t">h2</span>&gt;{'\n      '}
            {'{'}
            <span className="tok-p">children</span>
            {'}'} <span className="tok-c">{'/* 🔑 slot abierto */'}</span>
            {'\n    '}
            &lt;/<span className="tok-t">div</span>&gt;{'\n  '});{'\n}'}
            {'\n\n'}
            <span className="tok-c">{'// Cualquiera lo compone a su manera:'}</span>
            {'\n'}
            &lt;<span className="tok-t">Dialog</span> title=
            <span className="tok-s">"Confirmar"</span>&gt;{'\n  '}
            &lt;<span className="tok-t">p</span>&gt;¿Seguro de borrar?&lt;/
            <span className="tok-t">p</span>&gt;{'\n  '}
            &lt;<span className="tok-t">Button</span> danger&gt;Eliminar&lt;/
            <span className="tok-t">Button</span>&gt;{'\n'}
            &lt;/<span className="tok-t">Dialog</span>&gt;
          </pre>
        </div>
      </div>
    </>
  );
}
