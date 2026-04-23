import { VirtualDomTree } from '../icons/components';

export default function Slide07_VirtualDOM() {
  return (
    <>
      <div className="kicker fade-in">
        <span className="index">06 / RENDERIZADO</span>
        <span className="line"></span>
      </div>
      <div className="two-col">
        <div>
          <div className="eyebrow fade-in">ESTRATEGIA</div>
          <h2 className="heading fade-in">
            <span className="accent">Virtual DOM</span>
            <br />+ reconciliación.
          </h2>
          <p className="lead fade-in">
            En lugar de mutar el DOM directamente (costoso), React mantiene una{' '}
            <strong>copia en memoria</strong> y calcula el diff mínimo.
          </p>
          <ul className="bullets fade-in stagger" style={{ marginTop: 24 }}>
            <li><strong>Render:</strong> tu componente devuelve un árbol virtual</li>
            <li><strong>Diff:</strong> compara el nuevo árbol con el anterior</li>
            <li><strong>Commit:</strong> solo aplica los cambios reales al DOM</li>
            <li>Desde React 18: <strong>Fiber + concurrent rendering</strong></li>
          </ul>
        </div>
        <div className="fade-in">
          <div className="vdom-tree">
            <VirtualDomTree />
          </div>
        </div>
      </div>
    </>
  );
}
