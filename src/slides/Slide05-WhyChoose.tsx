interface Reason {
  title: string;
  description: string;
}

const REASONS: Reason[] = [
  { title: 'Ecosistema maduro', description: 'Tienes una librería para cada problema. Testeada por millones.' },
  { title: 'Comunidad enorme', description: 'Stack Overflow, Discord, conferencias, cursos. Nunca estás solo.' },
  { title: 'Empleabilidad', description: 'La librería más demandada del mercado frontend.' },
  { title: 'Flexibilidad', description: 'No te obliga a nada. Escoges arquitectura, estado, estilos.' },
  { title: 'Curva amable', description: 'Si sabes JS, sabes React. Sin DSLs ni decoradores raros.' },
  { title: 'Respaldo fuerte', description: 'Meta lo usa en Facebook, Instagram, WhatsApp Web. No muere mañana.' },
];

export default function Slide05_WhyChoose() {
  return (
    <>
      <div className="kicker fade-in">
        <span className="index">04 / DECISIÓN</span>
        <span className="line"></span>
      </div>
      <div className="eyebrow fade-in">TRADE-OFFS</div>
      <h2 className="heading fade-in">
        Entonces, <span className="accent">¿por qué elegirlo?</span>
      </h2>
      <div className="three-col stagger">
        {REASONS.map(({ title, description }, i) => (
          <div key={title} className="card">
            <div className="num">{`// ${String(i + 1).padStart(2, '0')}`}</div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
