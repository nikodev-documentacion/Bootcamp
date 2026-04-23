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
    title: '🎨 Styling',
    chips: [
      { name: 'Tailwind CSS' },
      { name: 'CSS Modules' },
      { name: 'styled-components' },
      { name: 'shadcn/ui' },
      { name: 'Radix UI' },
    ],
  },
  {
    title: '📝 Formularios y validación',
    chips: [
      { name: 'React Hook Form' },
      { name: 'Formik' },
      { name: 'Zod', role: 'schemas' },
    ],
  },
  {
    title: '🧪 Testing',
    chips: [
      { name: 'Vitest · Jest' },
      { name: 'Testing Library' },
      { name: 'Playwright', role: 'e2e' },
      { name: 'Storybook' },
    ],
  },
  {
    title: '📱 Más allá del navegador',
    chips: [
      { name: 'React Native', role: 'iOS · Android' },
      { name: 'Expo' },
      { name: 'React Three Fiber', role: '3D' },
      { name: 'Framer Motion', role: 'animación' },
    ],
  },
];

export default function Slide15_Ecosystem2() {
  return (
    <>
      <div className="kicker fade-in">
        <span className="index">14 / ECOSISTEMA — II</span>
        <span className="line"></span>
      </div>
      <div className="eyebrow fade-in">LAS PIEZAS QUE COMPLETAN EL ROMPECABEZAS</div>
      <h2 className="heading fade-in">
        Estilos, forms, tests y <span className="accent">más allá de la web</span>.
      </h2>

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
