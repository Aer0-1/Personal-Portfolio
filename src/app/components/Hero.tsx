import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '6rem 3rem 4rem', position: 'relative', overflow: 'hidden' }}>
      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(61,255,160,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(61,255,160,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black, transparent)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black, transparent)',
      }} />
      {/* Glow */}
      <div style={{
        position: 'absolute', width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(61,255,160,0.06) 0%, transparent 70%)',
        top: '50%', left: '50%', transform: 'translate(-50%, -60%)', pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', textAlign: 'center', maxWidth: 820 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontFamily: "'Space Mono', monospace", fontSize: 12, color: 'var(--p-accent)',
            border: '1px solid rgba(61,255,160,0.25)', padding: '6px 14px',
            borderRadius: 100, marginBottom: '2rem', letterSpacing: '0.06em',
          }}
        >
          <motion.span
            animate={{ opacity: [1, 0.4, 1], scale: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--p-accent)', display: 'inline-block' }}
          />
          Available for Internships &amp; Opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(3rem, 8vw, 6.5rem)', fontWeight: 800, lineHeight: 1,
            letterSpacing: '-0.03em', marginBottom: '1rem',
            background: 'linear-gradient(135deg, #e8edf5 0%, #6b7a90 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}
        >
          Subham<br />
          <span style={{ background: 'linear-gradient(135deg, #3dffa0 0%, #00c8ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Behera
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          style={{ fontSize: '1.1rem', color: 'var(--p-muted)', maxWidth: 520, margin: '0 auto 2.5rem', fontWeight: 400 }}
        >
          B.Tech Computer Engineering student passionate about Data Analytics, Full-Stack Development &amp; ML systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="#projects" style={btnPrimary}>View Projects ↓</a>
          <a href="/SubhamBeheraCV.pdf" download style={btnPrimary}>Resume ↓</a>
          <a href="https://github.com/Aer0-1" target="_blank" rel="noopener noreferrer" style={btnGhost}
            onMouseEnter={e => Object.assign(e.currentTarget.style, btnGhostHover)}
            onMouseLeave={e => Object.assign(e.currentTarget.style, btnGhost)}>
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/in/subham-behera-aer0/" target="_blank" rel="noopener noreferrer" style={btnGhost}
            onMouseEnter={e => Object.assign(e.currentTarget.style, btnGhostHover)}
            onMouseLeave={e => Object.assign(e.currentTarget.style, btnGhost)}>
            LinkedIn ↗
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'var(--p-muted)', letterSpacing: '0.1em' }}>SCROLL</span>
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }}
          style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--p-accent), transparent)' }}
        />
      </div>
    </section>
  );
}

const btnPrimary: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 8,
  background: 'var(--p-accent)', color: '#080b10',
  fontFamily: "'Space Mono', monospace", fontSize: 13, fontWeight: 700,
  padding: '12px 24px', borderRadius: 6, textDecoration: 'none', letterSpacing: '0.04em',
  transition: 'transform 0.2s, box-shadow 0.2s',
};

const btnGhost: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 8,
  border: '1px solid var(--p-border)', color: 'var(--p-text)',
  fontFamily: "'Space Mono', monospace", fontSize: 13,
  padding: '12px 24px', borderRadius: 6, textDecoration: 'none', letterSpacing: '0.04em',
  transition: 'border-color 0.2s, color 0.2s',
};

const btnGhostHover: React.CSSProperties = {
  ...btnGhost,
  borderColor: 'var(--p-accent)', color: 'var(--p-accent)',
};
