import type { SlideData } from '../data';

export const slide16: SlideData = {
  tx: 'zoom',
  label: '16 IA vs aprender',
  html: `
    <div class="bg-grid"></div>
    <div class="kicker fade-in"><span class="index">15 / REFLEXIÓN</span><span class="line"></span></div>
    <div class="eyebrow fade-in">LA PREGUNTA INCÓMODA</div>
    <h2 class="heading fade-in">Si la <span class="accent">IA</span> ya escribe React…<br><span style="color:var(--text-muted)">¿para qué aprenderlo?</span></h2>

    <div class="reflex-grid stagger" style="margin-top:36px">
      <div class="reflex-card">
        <div class="reflex-num">01</div>
        <h3>La IA acelera a quien <em>ya sabe</em></h3>
        <p>Si no entiendes el código, no sabes si está bien. Debuggear sin base es adivinar. <strong>La IA multiplica tu nivel, no lo crea.</strong></p>
      </div>
      <div class="reflex-card">
        <div class="reflex-num">02</div>
        <h3>Tú decides la arquitectura</h3>
        <p>La IA genera componentes. Tú decides qué componentes, qué estado, qué flujo. <strong>Las decisiones siguen siendo humanas.</strong></p>
      </div>
      <div class="reflex-card">
        <div class="reflex-num">03</div>
        <h3>El criterio no se genera</h3>
        <p>Saber cuándo usar <code>useMemo</code>, cuándo componer, cuándo separar. <strong>Eso es lo que te contratan.</strong> La IA escribe; tú juzgas.</p>
      </div>
      <div class="reflex-card">
        <div class="reflex-num">04</div>
        <h3>Entender = libertad</h3>
        <p>Cuando la IA se equivoca —y lo hace— solo quien entiende React puede corregirla. <strong>Sin base, eres rehén de la herramienta.</strong></p>
      </div>
    </div>

    <p class="lead fade-in" style="margin-top:36px;font-size:clamp(18px,1.8vw,26px);max-width:1100px;line-height:1.45">
      <span style="color:var(--react);font-family:'JetBrains Mono',monospace;font-size:0.8em">❝</span>
      No aprendes React para competir con la IA.<br>
      <strong style="color:var(--react)">Aprendes React para usar la IA como un senior, no como un prompt.</strong>
      <span style="color:var(--react);font-family:'JetBrains Mono',monospace;font-size:0.8em">❞</span>
    </p>
  `
};
