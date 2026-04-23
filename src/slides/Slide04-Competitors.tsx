import { ReactLogo, Angular, Vue, Svelte } from '../icons/components';

interface Competitor {
  name: string;
  year: string;
  description: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

const COMPETITORS: Competitor[] = [
  {
    name: 'React',
    year: '2013 · Meta',
    description: 'Librería minimalista. Tú eliges el resto del stack.',
    icon: <ReactLogo />,
    highlight: true,
  },
  {
    name: 'Angular',
    year: '2016 · Google',
    description: 'Framework completo y opinado. TypeScript, DI, RxJS.',
    icon: <Angular />,
  },
  {
    name: 'Vue',
    year: '2014 · Evan You',
    description: 'Balance entre React y Angular. SFC + reactividad.',
    icon: <Vue />,
  },
  {
    name: 'Svelte',
    year: '2016 · Rich Harris',
    description: 'Compilador. Sin virtual DOM. Bundle pequeño.',
    icon: <Svelte />,
  },
];

const OTHER_ALTERNATIVES = ['SolidJS', 'Qwik', 'Preact', 'Lit'];

export default function Slide04_Competitors() {
  return (
    <>
      <div className="kicker fade-in">
        <span className="index">03 / MERCADO</span>
        <span className="line"></span>
      </div>
      <div className="eyebrow fade-in">CONTEXTO</div>
      <h2 className="heading fade-in">
        No está solo. <span className="accent">¿Contra quién compite?</span>
      </h2>
      <p className="lead fade-in">
        Cada uno resuelve el problema con su propia filosofía. Conocerlos te ayuda a
        entender por qué React es como es.
      </p>

      <div className="vs-grid stagger">
        {COMPETITORS.map(({ name, year, description, icon, highlight }) => (
          <div key={name} className={`vs-card${highlight ? ' is-react' : ''}`}>
            <div className="vs-icon">{icon}</div>
            <h3>{name}</h3>
            <div className="year">{year}</div>
            <p>{description}</p>
          </div>
        ))}
      </div>

      <p className="lead fade-in" style={{ marginTop: 40, fontSize: 16 }}>
        También:{' '}
        {OTHER_ALTERNATIVES.map((alt, i) => (
          <span key={alt} className="tag" style={i > 0 ? { marginLeft: 8 } : undefined}>
            <span className="dot"></span>
            {alt}
          </span>
        ))}
      </p>
    </>
  );
}
