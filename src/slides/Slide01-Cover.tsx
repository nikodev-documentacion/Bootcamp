import { Atom } from '../icons/components';

export default function Slide01_Cover() {
  return (
    <>
      <div className="bg-grid"></div>
      <div className="cover-layout">
        <div>
          <div className="eyebrow fade-in">TECH TALK · 2026</div>
          <h1 className="title fade-in">
            ¿Por qué <span className="accent">aprender</span>
            <br />
            React?
          </h1>
          <p className="lead fade-in">
            La librería que redefinió el desarrollo frontend y que hoy mueve los
            productos digitales más grandes del mundo.
          </p>
          <div className="pills fade-in" style={{ marginTop: 32 }}>
            <span className="pill hot">Declarativa</span>
            <span className="pill hot">Basada en componentes</span>
            <span className="pill hot">Open source</span>
          </div>
        </div>
        <div className="atom fade-in">
          <Atom />
        </div>
      </div>
      <div className="slide-footer">PRESIONA → PARA EMPEZAR</div>
    </>
  );
}
