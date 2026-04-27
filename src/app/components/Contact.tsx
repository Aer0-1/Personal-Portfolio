import { motion } from 'motion/react';

export function Contact() {
  return (
    <section id="contact" style={{ padding: '6rem 3rem', maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div style={{ ...sectionLabel, textAlign: 'center' }}>// 06. contact</div>
        <h2 style={sectionTitle}>Let's Connect</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
        style={{
          background: 'var(--p-card)', border: '1px solid var(--p-border)',
          borderRadius: 16, padding: '3rem', position: 'relative', overflow: 'hidden',
        }}
      >
        {/* Glow */}
        <div style={{
          position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)',
          width: 300, height: 200,
          background: 'radial-gradient(ellipse, rgba(61,255,160,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <p style={{ color: 'var(--p-muted)', maxWidth: 480, margin: '0 auto' }}>
          Open to internships, collaborations, and interesting projects. Feel free to reach out!
        </p>

        <a href="mailto:802subhambehera@gmail.com" style={{
          fontSize: 'clamp(1.2rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--p-accent)',
          textDecoration: 'none', letterSpacing: '-0.01em',
          borderBottom: '2px solid rgba(61,255,160,0.3)', paddingBottom: 4,
          display: 'inline-block', margin: '1.5rem 0 2rem',
        }}>
          802subhambehera@gmail.com
        </a>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { label: 'GitHub ↗', href: 'https://github.com/Aer0-1' },
            { label: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/subham-behera-aer0/' },
            { label: 'Twitter ↗', href: 'https://x.com/behera_sub82176' },
          ].map(link => (
            <GhostLink key={link.label} {...link} />
          ))}
          <a href="/SubhamBeheraCV.pdf" download style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--p-accent)', color: '#080b10',
            fontFamily: "'Space Mono', monospace", fontSize: 13, fontWeight: 700,
            padding: '12px 24px', borderRadius: 6, textDecoration: 'none', letterSpacing: '0.04em',
          }}>
            Download CV ↓
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function GhostLink({ label, href }: { label: string; href: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex', alignItems: 'center',
        border: `1px solid ${hovered ? 'var(--p-accent)' : 'var(--p-border)'}`,
        color: hovered ? 'var(--p-accent)' : 'var(--p-text)',
        fontFamily: "'Space Mono', monospace", fontSize: 13,
        padding: '12px 24px', borderRadius: 6, textDecoration: 'none', letterSpacing: '0.04em',
        transition: 'border-color 0.2s, color 0.2s',
      }}
    >
      {label}
    </a>
  );
}

import { useState } from 'react';

const sectionLabel: React.CSSProperties = {
  fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'var(--p-accent)',
  letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem',
};

const sectionTitle: React.CSSProperties = {
  fontFamily: "'Syne', sans-serif",
  fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em',
  color: 'var(--p-text)', marginBottom: '3rem',
};
