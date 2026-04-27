import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const links = ['About', 'Projects', 'Skills', 'Contact'];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '1rem 3rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        backdropFilter: 'blur(12px)',
        background: 'rgba(8,11,16,0.85)',
        borderBottom: '1px solid var(--p-border)',
      }}
    >
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: 'var(--p-accent)', letterSpacing: '0.08em' }}>
        // subham.dev
      </span>

      {/* Desktop links */}
      <div className="hidden sm:flex" style={{ gap: '2rem' }}>
        {links.map(l => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: 'var(--p-muted)', textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--p-accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--p-muted)')}
          >
            {l}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button className="sm:hidden" onClick={() => setOpen(o => !o)} style={{ background: 'none', border: 'none', color: 'var(--p-accent)', cursor: 'pointer' }}>
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'absolute', top: '100%', left: 0, right: 0,
              background: 'rgba(8,11,16,0.97)', borderBottom: '1px solid var(--p-border)',
              display: 'flex', flexDirection: 'column', padding: '1rem 1.5rem', gap: '1rem',
            }}
          >
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
                style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: 'var(--p-muted)', textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                {l}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
