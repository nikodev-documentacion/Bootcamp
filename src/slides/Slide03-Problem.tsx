export default function Slide03_Problem() {
  return (
    <>
      <div className="kicker fade-in">
        <span className="index">02 / PROBLEMA</span>
        <span className="line"></span>
      </div>
      <div className="two-col">
        <div>
          <div className="eyebrow fade-in">EL DOLOR ANTES DE REACT</div>
          <h2 className="heading fade-in">
            Sincronizar <span className="accent">UI ↔ estado</span>
            <br />
            era un infierno.
          </h2>
          <p className="lead fade-in">
            Con jQuery manipulabas el DOM a mano en cada cambio. A más features, más
            bugs, más spaghetti.
          </p>
          <ul className="bullets fade-in stagger" style={{ marginTop: 28 }}>
            <li><strong>Antes:</strong> "cuando pase X → buscar nodo → mutarlo"</li>
            <li><strong>Después:</strong> "la UI es una función del estado"</li>
            <li>React <strong>se encarga</strong> de pintar los cambios</li>
            <li>Menos bugs, más predecible, más testeable</li>
          </ul>
        </div>
        <div className="fade-in">
          <pre className="code-block" style={{ marginBottom: 16 }}>
            <span className="filename">Antes · jQuery</span>
            {'\n'}
            <span className="tok-c">{'// Imperativo: mutar el DOM'}</span>
            {'\n'}
            $(<span className="tok-s">'#counter'</span>).text(count);{'\n'}
            $(<span className="tok-s">'#badge'</span>).toggleClass({'\n  '}
            <span className="tok-s">'hot'</span>, count &gt;{' '}
            <span className="tok-n">10</span>
            {'\n'});
            {'\n'}
            <span className="tok-c">{'// ...y 40 líneas más 😵'}</span>
          </pre>
          <pre className="code-block">
            <span className="filename">Ahora · React</span>
            {'\n'}
            <span className="tok-c">{'// Declarativo: describes el resultado'}</span>
            {'\n'}
            &lt;<span className="tok-t">div</span>&gt;{'\n  '}
            &lt;<span className="tok-t">span</span>&gt;{'{count}'}&lt;/
            <span className="tok-t">span</span>&gt;{'\n  '}
            &lt;<span className="tok-t">Badge</span> hot={'{count > '}
            <span className="tok-n">10</span>
            {'}'} /&gt;{'\n'}
            &lt;/<span className="tok-t">div</span>&gt;
          </pre>
        </div>
      </div>
    </>
  );
}
