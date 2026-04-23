interface Hook {
  name: string;
  title: string;
  description: React.ReactNode;
  highlight?: boolean;
}

const HOOKS: Hook[] = [
  { name: 'useState', title: 'Estado local', description: 'Un valor reactivo. Cuando cambia, el componente se re-renderiza.' },
  { name: 'useEffect', title: 'Efectos secundarios', description: 'Fetch, subscripciones, timers. Sincroniza con el mundo exterior.' },
  { name: 'useContext', title: 'Estado compartido', description: 'Pasa datos por el árbol sin prop-drilling.' },
  { name: 'useMemo / useCallback', title: 'Optimización', description: 'Memoriza valores y funciones costosas entre renders.' },
  { name: 'useRef', title: 'Referencias mutables', description: 'Acceso al DOM o valores que persisten sin re-render.' },
  {
    name: 'custom hooks',
    title: 'Tu propia lógica',
    description: (
      <>
        <code>useAuth()</code>, <code>useFetch()</code>, <code>useDebounce()</code>…
        composición pura.
      </>
    ),
    highlight: true,
  },
];

export default function Slide09_Hooks() {
  return (
    <>
      <div className="kicker fade-in">
        <span className="index">08 / HOOKS</span>
        <span className="line"></span>
      </div>
      <div className="eyebrow fade-in">LA GRAN IDEA</div>
      <h2 className="heading fade-in">
        ¿Qué aportan los <span className="accent">Hooks?</span>
      </h2>
      <p className="lead fade-in">
        Permiten <strong>enganchar</strong> estado, ciclo de vida y contexto a
        componentes funcionales. Y lo más importante:{' '}
        <strong>encapsular y reutilizar lógica</strong>.
      </p>

      <div className="three-col stagger">
        {HOOKS.map(({ name, title, description, highlight }) => (
          <div
            key={name}
            className="card"
            style={
              highlight
                ? {
                    borderColor: 'var(--react)',
                    boxShadow: '0 0 24px var(--react-glow)',
                  }
                : undefined
            }
          >
            <div
              className="num"
              style={highlight ? { color: 'var(--accent)' } : undefined}
            >
              {name}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
