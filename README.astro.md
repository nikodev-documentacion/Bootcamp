# ¿Por qué aprender React? · React Curso 2026

Presentación interactiva sobre React construida con **Astro 5 + React 19 + Tailwind CSS**.

17 slides con navegación por teclado y click, toggle de layout mobile, y un botón final interactivo con `useState` que anima el ensamble del átomo de React.

---

## 🚀 Stack

- **[Astro 5](https://astro.build/)** — SSG con islas de React
- **[React 19](https://react.dev/)** — Componentes funcionales + hooks
- **[Tailwind CSS](https://tailwindcss.com/)** — Utilidades (+ CSS global custom para animaciones complejas)
- **TypeScript** (modo relajado, `strict: false`)
- **GitHub Actions** — Deploy automático a GitHub Pages

---

## 📦 Desarrollo local

```bash
# 1. Clonar el repo
git clone https://github.com/YOUR-USERNAME/React-curso-2026.git
cd React-curso-2026

# 2. Instalar dependencias
npm install

# 3. Dev server (http://localhost:4321)
npm run dev

# 4. Build de producción
npm run build

# 5. Preview del build
npm run preview
```

---

## 🗂️ Estructura

```
src/
├── components/
│   ├── Deck.tsx           ← Navegador principal (SPA, keyboard, mobile)
│   ├── Slide.tsx          ← Render genérico de un slide
│   ├── ClosingSlide.tsx   ← Slide 17 con botón interactivo (portal React)
│   └── ComposeButton.tsx  ← Botón "Compone React" — useState toggle
├── slides/
│   ├── data.ts            ← SLIDES_DATA (contenido de los 17 slides)
│   ├── Slide01-Cover.tsx
│   ├── Slide02-WhatIsReact.tsx
│   └── ... (17 archivos total)
├── layouts/
│   └── Layout.astro       ← Shell HTML + fuentes + global CSS
├── pages/
│   └── index.astro        ← Punto de entrada (monta <Deck client:load />)
└── styles/
    └── global.css         ← Estilos del deck (portado del legacy)
```

### Cómo agregar un slide

1. Agregá una entrada nueva al array `SLIDES_DATA` en `src/slides/data.ts` con `tx`, `label` y `html`.
2. Creá `src/slides/Slide18-MiSlide.tsx` que retorne `<Slide slide={SLIDES_DATA[17]} />`.
3. Importalo y agregalo al array `SLIDE_COMPONENTS` en `src/components/Deck.tsx`.

### Cómo modificar el botón interactivo

Está en `src/components/ComposeButton.tsx`. Usa `useState` + estilos inline (sin depender de clases externas). Aceptará un callback `onToggle(pressed)` para reaccionar al cambio de estado.

---

## 🌐 Deploy en GitHub Pages

### Paso 1 — Crear el repo

```bash
git init
git add .
git commit -m "Initial commit: Astro + React deck"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/React-curso-2026.git
git push -u origin main
```

### Paso 2 — Activar GitHub Pages

1. Andá a **Settings → Pages** de tu repo
2. En **Source** elegí **GitHub Actions**
3. En el próximo push a `main`, el workflow `deploy.yml` se ejecuta automáticamente

### Paso 3 — Ajustar la base URL

Si tu repo no se llama exactamente `React-curso-2026`, editá `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://TU-USUARIO.github.io',
  base: '/NOMBRE-DEL-REPO/',   // ← cambiá esto
  // ...
});
```

Y en `.github/workflows/deploy.yml`, el env var `PUBLIC_BASE_PATH`.

Tu deck estará en: `https://TU-USUARIO.github.io/React-curso-2026/`

---

## ⌨️ Controles

| Tecla         | Acción                    |
|---------------|---------------------------|
| `←` / `PgUp`  | Slide anterior            |
| `→` / `Space` | Slide siguiente           |
| `Home`        | Ir al primer slide        |
| `End`         | Ir al último slide        |
| `F`           | Toggle pantalla completa  |

En mobile (≤768px), todos los slides se apilan verticalmente para scroll natural.

La posición actual se guarda en `localStorage` (key: `react-curso-2026:current-slide`).

---

## 📄 Licencia

MIT
