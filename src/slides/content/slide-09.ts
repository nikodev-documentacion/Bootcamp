import type { SlideData } from '../data';

export const slide09: SlideData = {
  tx: 'zoom',
  label: '09 Hooks',
  html: `
    <div class="kicker fade-in"><span class="index">08 / HOOKS</span><span class="line"></span></div>
    <div class="eyebrow fade-in">LA GRAN IDEA</div>
    <h2 class="heading fade-in">¿Qué aportan los <span class="accent">Hooks?</span></h2>
    <p class="lead fade-in">Permiten <strong>enganchar</strong> estado, ciclo de vida y contexto a componentes funcionales. Y lo más importante: <strong>encapsular y reutilizar lógica</strong>.</p>

    <div class="three-col stagger">
      <div class="card">
        <div class="num">useState</div>
        <h3>Estado local</h3>
        <p>Un valor reactivo. Cuando cambia, el componente se re-renderiza.</p>
      </div>
      <div class="card">
        <div class="num">useEffect</div>
        <h3>Efectos secundarios</h3>
        <p>Fetch, subscripciones, timers. Sincroniza con el mundo exterior.</p>
      </div>
      <div class="card">
        <div class="num">useContext</div>
        <h3>Estado compartido</h3>
        <p>Pasa datos por el árbol sin prop-drilling.</p>
      </div>
      <div class="card">
        <div class="num">useMemo / useCallback</div>
        <h3>Optimización</h3>
        <p>Memoriza valores y funciones costosas entre renders.</p>
      </div>
      <div class="card">
        <div class="num">useRef</div>
        <h3>Referencias mutables</h3>
        <p>Acceso al DOM o valores que persisten sin re-render.</p>
      </div>
      <div class="card" style="border-color:var(--react);box-shadow:0 0 24px var(--react-glow)">
        <div class="num" style="color:var(--accent)">custom hooks</div>
        <h3>Tu propia lógica</h3>
        <p><code>useAuth()</code>, <code>useFetch()</code>, <code>useDebounce()</code>… composición pura.</p>
      </div>
    </div>
  `
};
