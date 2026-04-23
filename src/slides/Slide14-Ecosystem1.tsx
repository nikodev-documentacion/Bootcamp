interface Chip {
  name: string;
  role?: string;
}

interface Group {
  title: string;
  chips: Chip[];
}

const GROUPS: Group[] = [
  {
    title: '⚡ Meta-frameworks',
    chips: [
      { name: 'Next.js', role: 'SSR · RSC · App Router' },
      { name: 'Remix', role: 'web fundamentals' },
      { name: 'Astro', role: 'islands' },
      { name: 'Vite', role: 'dev server · build' },
    ],
  },
  {
    title: '🧭 Routing',
    chips: [
      { name: 'React Router' },
      { name: 'TanStack Router', role: 'type-safe' },
      { name: 'Next.js App Router' },
    ],
  },
  {
    title: '🧠 Estado global',
    chips: [
      { name: 'Zustand', role: 'minimal' },
      { name: 'Redux Toolkit' },
      { name: 'Jotai', role: 'atómico' },
      { name: 'Valtio' },
    ],
  },
  {
    title: '🌐 Data fetching',
    chips: [
      { name: 'TanStack Query' },
      { name: 'SWR' },
      { name: 'Apollo', role: 'GraphQL' },
      { name: 'tRPC' },
    ],
  },
];

export default function Slide14_Ecosystem1() {
  return (
    <>
      <div className="kicker fade-in">
        <span className="index">13 / ECOSISTEMA — I</span>
        <span className="line"></span>
      </div>
      <div className="eyebrow fade-in">CONCEPTOS QUE DEBES DOMINAR</div>
      <h2 className="heading fade-in">
        El <span className="accent">stack moderno</span> de React.
      </h2>
      <p className="lead fade-in">
        React resuelve la vista. Estas son las piezas que le agregas alrededor para
        construir un producto real.
      </p>

      <div className="eco-grid stagger">
        {GROUPS.map(({ title, chips }) => (
          <div key={title} className="eco-group">
            <h4>{title}</h4>
            <div className="chips">
              {chips.map(({ name, role }) => (
                <span key={name} className="chip">
                  {name}
                  {role && <span className="tag-role">{role}</span>}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
