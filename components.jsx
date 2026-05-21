// Shared primitives: Icons (lucide-style inline SVG), buttons, animation wrappers

const { useEffect, useRef, useState } = React;

// ============== ICONS (inline lucide SVGs) ==============
const IconBase = ({ children, size = 20, className = '', strokeWidth = 1.75 }) =>
<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth={strokeWidth}
  strokeLinecap="round"
  strokeLinejoin="round"
  className={className} style={{ stroke: "rgb(0, 0, 0)" }}>
  
    {children}
  </svg>;


const IconScissors = (p) => <IconBase {...p}><circle cx="6" cy="6" r="3" /><path d="M8.12 8.12 12 12" /><path d="M20 4 8.12 15.88" /><circle cx="6" cy="18" r="3" /><path d="M14.8 14.8 20 20" /></IconBase>;
const IconRuler = (p) => <IconBase {...p}><path d="M21.3 8.7 8.7 21.3a2.41 2.41 0 0 1-3.4 0l-2.6-2.6a2.41 2.41 0 0 1 0-3.4L15.3 2.7a2.41 2.41 0 0 1 3.4 0l2.6 2.6a2.41 2.41 0 0 1 0 3.4Z" /><path d="m7.5 10.5 2 2" /><path d="m10.5 7.5 2 2" /><path d="m13.5 4.5 2 2" /><path d="m4.5 13.5 2 2" /></IconBase>;
const IconUser = (p) => <IconBase {...p}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></IconBase>;
const IconCheckCircle = (p) => <IconBase {...p}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></IconBase>;
const IconCheck = (p) => <IconBase {...p}><path d="M20 6 9 17l-5-5" /></IconBase>;
const IconArrowRight = (p) => <IconBase {...p}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></IconBase>;
const IconArrowDown = (p) => <IconBase {...p}><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></IconBase>;
const IconStar = (p) => <IconBase {...p}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></IconBase>;
const IconZap = (p) => <IconBase {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></IconBase>;
const IconShield = (p) => <IconBase {...p}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /></IconBase>;
const IconMenu = (p) => <IconBase {...p}><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></IconBase>;
const IconX = (p) => <IconBase {...p}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></IconBase>;
const IconPlus = (p) => <IconBase {...p}><path d="M12 5v14" /><path d="M5 12h14" /></IconBase>;
const IconMinus = (p) => <IconBase {...p}><path d="M5 12h14" /></IconBase>;
const IconMessageCircle = (p) => <IconBase {...p}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></IconBase>;
const IconBook = (p) => <IconBase {...p}><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></IconBase>;
const IconUsers = (p) => <IconBase {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></IconBase>;
const IconCalendar = (p) => <IconBase {...p}><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" /></IconBase>;
const IconFire = (p) => <IconBase {...p}><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" /></IconBase>;
const IconWhatsApp = (p) => <IconBase {...p}><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></IconBase>;

// ============== FADE UP WRAPPER ==============
function FadeUp({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={`fade-up ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </Tag>);

}

// ============== PRIMITIVES ==============
function GoldButton({ children, href = '#bundle', className = '', size = 'md', onClick }) {
  const sizeCls = size === 'lg' ?
  'px-7 py-4 text-base' :
  size === 'xl' ?
  'px-8 py-5 text-lg' :
  'px-5 py-3 text-sm';
  return (
    <a href={href} onClick={onClick}
    className={`btn-gold inline-flex items-center justify-center gap-2 rounded-[8px] font-semibold ${sizeCls} ${className}`}>
      {children}
    </a>);

}

function OutlineButton({ children, href = '#', className = '', size = 'md' }) {
  const sizeCls = size === 'lg' ? 'px-6 py-4 text-base' : 'px-5 py-3 text-sm';
  return (
    <a href={href}
    className={`btn-gold-outline inline-flex items-center justify-center gap-2 rounded-[8px] font-semibold bg-transparent ${sizeCls} ${className}`}>
      {children}
    </a>);

}

function Pill({ children, tone = 'gold', className = '' }) {
  const toneCls = tone === 'gold' ?
  'bg-gold/10 text-gold border-gold/25' :
  tone === 'red' ?
  'bg-red/10 text-red border-red/30' :
  'bg-white/5 text-text-secondary border-border-2';
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] uppercase tracking-[0.14em] font-medium ${toneCls} ${className}`}>
      {children}
    </span>);

}

// Placeholder slot — striped + monospace label
function Placeholder({ label = 'Placeholder', className = '', tall = false, ratio }) {
  const ratioStyle = ratio ? { aspectRatio: ratio } : null;
  return (
    <div
      className={`placeholder-stripes border border-border rounded-[8px] flex items-center justify-center text-text-muted font-mono text-xs ${className}`}
      style={ratioStyle}>
      
      <span className="px-3 py-1 bg-bg/70 rounded">{label}</span>
    </div>);

}

Object.assign(window, {
  FadeUp, GoldButton, OutlineButton, Pill, Placeholder,
  IconScissors, IconRuler, IconUser, IconCheckCircle, IconCheck,
  IconArrowRight, IconArrowDown, IconStar, IconZap, IconShield,
  IconMenu, IconX, IconPlus, IconMinus, IconMessageCircle,
  IconBook, IconUsers, IconCalendar, IconFire, IconWhatsApp
});