export default function Slide02_WhatIsReact() {
  return (
    <>
      <div className="kicker fade-in">
        <span className="index">01 / CONCEPTO</span>
        <span className="line"></span>
      </div>
      <div className="two-col">
        <div>
          <div className="eyebrow fade-in">DEFINICIÓN</div>
          <h2 className="heading fade-in">
            Es una <span className="accent">librería</span> de JavaScript
            <br />
            para construir interfaces.
          </h2>
          <p className="lead fade-in">
            Creada por <strong>Meta</strong> en 2013. Enfocada en una sola cosa:{' '}
            <strong>la capa de vista</strong>. Todo lo demás —routing, estado global,
            fetching— lo eliges tú.
          </p>
          <ul className="bullets fade-in stagger" style={{ marginTop: 28 }}>
            <li><strong>Declarativa</strong> · describes qué ver, no cómo pintarlo</li>
            <li><strong>Componentes</strong> · bloques reutilizables con su propio estado</li>
            <li><strong>Unidireccional</strong> · el dato fluye de padres a hijos</li>
            <li><strong>Agnóstica</strong> · web, mobile (RN), TV, VR…</li>
          </ul>
        </div>
        <div className="fade-in">
          <pre className="code-block">
            <span className="filename">App.jsx</span>
            {'\n'}
            <span className="tok-k">function</span>{' '}
            <span className="tok-f">Welcome</span>({'{ '}
            <span className="tok-p">name</span>
            {' }'}) {'{'}
            {'\n  '}
            <span className="tok-k">return</span> ({'\n    '}
            &lt;<span className="tok-t">div</span> className=
            <span className="tok-s">"hello"</span>&gt;{'\n      '}
            &lt;<span className="tok-t">h1</span>&gt;Hola, {'{'}
            <span className="tok-p">name</span>
            {'}'}&lt;/<span className="tok-t">h1</span>&gt;{'\n    '}
            &lt;/<span className="tok-t">div</span>&gt;{'\n  '});{'\n'}
            {'}'}
            {'\n\n'}
            <span className="tok-c">{'// Eso es todo. Un componente.'}</span>
            {'\n'}
            <span className="tok-c">{'// Función → UI.'}</span>
          </pre>
        </div>
      </div>
    </>
  );
}
