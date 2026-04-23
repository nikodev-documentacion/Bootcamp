interface Reflection {
  num: string;
  title: React.ReactNode;
  body: React.ReactNode;
}

const REFLECTIONS: Reflection[] = [
  {
    num: '01',
    title: (
      <>
        La IA acelera a quien <em>ya sabe</em>
      </>
    ),
    body: (
      <>
        Si no entiendes el código, no sabes si está bien. Debuggear sin base es adivinar.{' '}
        <strong>La IA multiplica tu nivel, no lo crea.</strong>
      </>
    ),
  },
  {
    num: '02',
    title: 'Tú decides la arquitectura',
    body: (
      <>
        La IA genera componentes. Tú decides qué componentes, qué estado, qué flujo.{' '}
        <strong>Las decisiones siguen siendo humanas.</strong>
      </>
    ),
  },
  {
    num: '03',
    title: 'El criterio no se genera',
    body: (
      <>
        Saber cuándo usar <code>useMemo</code>, cuándo componer, cuándo separar.{' '}
        <strong>Eso es lo que te contratan.</strong> La IA escribe; tú juzgas.
      </>
    ),
  },
  {
    num: '04',
    title: 'Entender = libertad',
    body: (
      <>
        Cuando la IA se equivoca —y lo hace— solo quien entiende React puede corregirla.{' '}
        <strong>Sin base, eres rehén de la herramienta.</strong>
      </>
    ),
  },
];

export default function Slide16_AIReflection() {
  return (
    <>
      <div className="bg-grid"></div>
      <div className="kicker fade-in">
        <span className="index">15 / REFLEXIÓN</span>
        <span className="line"></span>
      </div>
      <div className="eyebrow fade-in">LA PREGUNTA INCÓMODA</div>
      <h2 className="heading fade-in">
        Si la <span className="accent">IA</span> ya escribe React…
        <br />
        <span style={{ color: 'var(--text-muted)' }}>¿para qué aprenderlo?</span>
      </h2>

      <div className="reflex-grid stagger" style={{ marginTop: 36 }}>
        {REFLECTIONS.map(({ num, title, body }) => (
          <div key={num} className="reflex-card">
            <div className="reflex-num">{num}</div>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </div>

      <p
        className="lead fade-in"
        style={{
          marginTop: 36,
          fontSize: 'clamp(18px,1.8vw,26px)',
          maxWidth: 1100,
          lineHeight: 1.45,
        }}
      >
        <span
          style={{
            color: 'var(--react)',
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: '0.8em',
          }}
        >
          ❝
        </span>
        No aprendes React para competir con la IA.
        <br />
        <strong style={{ color: 'var(--react)' }}>
          Aprendes React para usar la IA como un senior, no como un prompt.
        </strong>
        <span
          style={{
            color: 'var(--react)',
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: '0.8em',
          }}
        >
          ❞
        </span>
      </p>
    </>
  );
}
