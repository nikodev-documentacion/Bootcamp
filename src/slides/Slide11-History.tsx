interface Event {
  year: string;
  title: string;
  description: string;
}

const TIMELINE: Event[] = [
  { year: '2011', title: 'Prototipo interno — Jordan Walke', description: 'FaxJS: primera versión experimental en Facebook.' },
  { year: '2013 · MAYO', title: 'Open source · JSConf US', description: 'Facebook libera React. Recepción inicial escéptica.' },
  { year: '2015', title: 'React Native', description: 'Mismas ideas para apps nativas iOS/Android.' },
  { year: '2019', title: 'Hooks (16.8)', description: 'Revolución: componentes funcionales con estado.' },
  { year: '2022', title: 'React 18 · Concurrent', description: 'Suspense, transitions, server components (RSC).' },
  { year: '2024 · HOY', title: 'React 19 + Compiler', description: 'Optimización automática, acciones, form API.' },
];

export default function Slide11_History() {
  return (
    <>
      <div className="kicker fade-in">
        <span className="index">10 / HISTORIA</span>
        <span className="line"></span>
      </div>
      <div className="two-col">
        <div>
          <div className="eyebrow fade-in">ORIGEN</div>
          <h2 className="heading fade-in">
            De un hack interno
            <br />a <span className="accent">mover la web</span>.
          </h2>
          <p className="lead fade-in">
            React nació dentro de Facebook para resolver la complejidad del News Feed.
            Hoy lo usan millones de devs.
          </p>
          <div className="pills fade-in" style={{ marginTop: 24 }}>
            <span className="pill hot">Jordan Walke</span>
            <span className="pill">Facebook / Meta</span>
            <span className="pill">MIT License</span>
          </div>
        </div>
        <div className="fade-in" style={{ overflow: 'auto' }}>
          <div className="timeline stagger">
            {TIMELINE.map(({ year, title, description }) => (
              <div key={year} className="timeline-item">
                <div className="yr">{year}</div>
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
