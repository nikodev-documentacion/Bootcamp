import { useState } from 'react';

/**
 * Botón "Compone React" — toggle presionado/despresionado con useState.
 * Estilos inline para evitar cualquier override de CSS externo.
 * El cambio visual es obvio: se hunde, fondo más oscuro, borde cyan iluminado.
 */
export default function ComposeButton({ onToggle }: { onToggle?: (pressed: boolean) => void }) {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    const next = !isPressed;
    setIsPressed(next);
    onToggle?.(next);
  };

  // Base styles (both states share these)
  const baseStyle: React.CSSProperties = {
    fontFamily: "'Space Grotesk', 'Inter', sans-serif",
    fontSize: 'clamp(32px, 4.5vw, 64px)',
    fontWeight: 800,
    lineHeight: 1,
    letterSpacing: '-0.02em',
    padding: '18px 32px',
    borderRadius: 14,
    cursor: 'pointer',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    touchAction: 'manipulation',
    transition: 'transform 0.1s ease, box-shadow 0.1s ease, background 0.2s ease, border-color 0.2s ease, color 0.2s ease',
    display: 'inline-block',
  };

  // State-dependent styles — obvious visual difference
  const stateStyle: React.CSSProperties = isPressed
    ? {
        background: '#0a0a0a',
        border: '2px solid #00c8ff',
        color: '#00c8ff',
        transform: 'translateY(4px)',
        boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.5), 0 0 24px rgba(0, 200, 255, 0.35)',
        textShadow: '0 0 18px rgba(0, 200, 255, 0.9)',
      }
    : {
        background: '#0f1a22',
        border: '2px solid rgba(97, 218, 251, 0.35)',
        color: '#e6edf3',
        transform: 'translateY(0)',
        boxShadow: '0 6px 0 #000, 0 8px 18px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
        textShadow: 'none',
      };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={isPressed}
      style={{ ...baseStyle, ...stateStyle }}
    >
      Compone React
    </button>
  );
}
