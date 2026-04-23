import { Tesla, Stripe, Spotify, Pinterest } from '../icons/components';

const BASE = import.meta.env.BASE_URL;

interface Company {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const iconStyle = {
  verticalAlign: 'middle',
  marginRight: 6,
  borderRadius: 4,
} as const;

const RasterIcon = ({ src, alt }: { src: string; alt: string }) => (
  <img src={`${BASE}${src}`} alt={alt} width={24} height={24} style={iconStyle} />
);

const SvgIcon = ({ children }: { children: React.ReactNode }) => (
  <span style={{ ...iconStyle, display: 'inline-block', width: 24, height: 24 }}>
    {children}
  </span>
);

const COMPANIES: Company[] = [
  { name: 'Meta', description: 'Facebook · Instagram', icon: <RasterIcon src="companies/meta.png" alt="Meta" /> },
  { name: 'Netflix', description: 'UI de streaming', icon: <RasterIcon src="companies/netflix.ico" alt="Netflix" /> },
  { name: 'Airbnb', description: 'web + mobile', icon: <RasterIcon src="companies/airbnb.ico" alt="Airbnb" /> },
  { name: 'Uber', description: 'eats · driver app', icon: <RasterIcon src="companies/uber.ico" alt="Uber" /> },
  { name: 'Shopify', description: 'admin + storefront', icon: <RasterIcon src="companies/shopify.ico" alt="Shopify" /> },
  { name: 'Discord', description: 'cliente web/desktop', icon: <RasterIcon src="companies/discord.png" alt="Discord" /> },
  { name: 'Microsoft', description: 'Teams · Outlook web', icon: <RasterIcon src="companies/microsoft.ico" alt="Microsoft" /> },
  { name: 'Tesla', description: 'dashboards', icon: <SvgIcon><Tesla width={24} height={24} /></SvgIcon> },
  { name: 'Dropbox', description: 'web app', icon: <RasterIcon src="companies/dropbox.ico" alt="Dropbox" /> },
  { name: 'Stripe', description: 'dashboard · docs', icon: <SvgIcon><Stripe width={24} height={24} /></SvgIcon> },
  { name: 'Spotify', description: 'for developers', icon: <SvgIcon><Spotify width={24} height={24} /></SvgIcon> },
  { name: 'Pinterest', description: 'PWA completa', icon: <SvgIcon><Pinterest width={24} height={24} /></SvgIcon> },
];

export default function Slide13_Companies() {
  return (
    <>
      <div className="kicker fade-in">
        <span className="index">12 / EMPRESAS</span>
        <span className="line"></span>
      </div>
      <div className="eyebrow fade-in">¿QUIÉN LO USA EN PRODUCCIÓN?</div>
      <h2 className="heading fade-in">
        Productos que usas <span className="accent">todos los días</span>.
      </h2>
      <p className="lead fade-in">
        Desde redes sociales hasta fintechs. Si aprendes React, trabajas para la industria.
      </p>

      <div className="companies stagger">
        {COMPANIES.map(({ name, description, icon }) => (
          <div key={name} className="company">
            {icon}
            {name} <span className="what">{description}</span>
          </div>
        ))}
      </div>
    </>
  );
}
