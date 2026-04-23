interface Stat {
  num: string;
  label: string;
}

const STATS: Stat[] = [
  { num: '230K+', label: 'GitHub stars · top 5 repos JS' },
  { num: '25M', label: 'Descargas npm / semana' },
  { num: '#1', label: 'Librería más usada · Stack Overflow Survey' },
  { num: '1500+', label: 'Contribuidores activos' },
];

export default function Slide12_Community() {
  return (
    <>
      <div className="kicker fade-in">
        <span className="index">11 / COMUNIDAD</span>
        <span className="line"></span>
      </div>
      <div className="eyebrow fade-in">NÚMEROS QUE IMPORTAN</div>
      <h2 className="heading fade-in">
        La comunidad <span className="accent">más grande</span> del frontend.
      </h2>
      <p className="lead fade-in">
        React no es solo una librería: es un <strong>estándar de facto</strong> con un
        ecosistema autosostenible.
      </p>

      <div className="stats stagger">
        {STATS.map(({ num, label }) => (
          <div key={num} className="stat">
            <div className="num">{num}</div>
            <div className="lbl">{label}</div>
          </div>
        ))}
      </div>
      <p
        className="lead fade-in"
        style={{ marginTop: 40, fontSize: 16, color: 'var(--text-muted)' }}
      >
        React Conf · React Summit · React India · React Day Berlin · React Madrid ·
        Reactiflux (Discord 200K+)…
        <br />
        Cualquier duda que tengas,{' '}
        <strong style={{ color: 'var(--react)' }}>alguien ya la resolvió</strong>.
      </p>
    </>
  );
}
