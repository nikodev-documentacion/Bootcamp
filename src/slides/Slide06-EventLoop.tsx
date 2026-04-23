import { EventLoop } from '../icons/components';

export default function Slide06_EventLoop() {
  return (
    <>
      <div className="kicker fade-in">
        <span className="index">05 / RUNTIME</span>
        <span className="line"></span>
      </div>
      <div className="two-col">
        <div>
          <div className="eyebrow fade-in">FUNDAMENTAL</div>
          <h2 className="heading fade-in">
            ¿Qué aporta el <span className="accent">Event Loop?</span>
          </h2>
          <p className="lead fade-in">
            JavaScript es <strong>single-threaded</strong>. El event loop es lo que
            permite que React maneje eventos, timers y fetches sin bloquear la UI.
          </p>
          <ul className="bullets fade-in stagger" style={{ marginTop: 24 }}>
            <li><strong>Call Stack</strong> · ejecuta funciones síncronas</li>
            <li><strong>Web APIs</strong> · fetch, setTimeout, DOM events</li>
            <li><strong>Microtask Queue</strong> · promesas (prioridad)</li>
            <li><strong>Task Queue</strong> · setTimeout, clicks, etc.</li>
            <li>React usa esto para <strong>batching</strong> de updates</li>
          </ul>
        </div>
        <div className="fade-in">
          <div className="evloop" id="evloop-diagram">
            <EventLoop />
          </div>
        </div>
      </div>
    </>
  );
}
