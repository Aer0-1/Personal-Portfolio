import { motion } from 'motion/react';

const certs = [
  { icon: '🎨', name: 'UX Design', org: 'Google' },
  { icon: '📋', name: 'Project Management', org: 'Google' },
  { icon: '📊', name: 'Data Analytics', org: 'Deloitte · Forage' },
  { icon: '🐍', name: 'Python Programming', org: 'GeeksforGeeks' },
  { icon: '🌐', name: 'Full Stack Web Dev', org: 'InternsElite' },
];

export function Achievements() {
  return (
    <section id="certs" style={{ padding: '6rem 3rem', maxWidth: 1100, margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div style={sectionLabel}>// 04. certifications</div>
        <h2 style={sectionTitle}>Credentials</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}
      >
        {certs.map((c, i) => (
          <CertCard key={i} cert={c} />
        ))}
      </motion.div>
    </section>
  );
}

function CertCard({ cert }: { cert: typeof certs[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--p-card)',
        border: `1px solid ${hovered ? 'rgba(61,255,160,0.35)' : 'var(--p-border)'}`,
        borderRadius: 10, padding: '1.2rem 1.5rem',
        display: 'flex', alignItems: 'center', gap: '1rem',
        transition: 'border-color 0.2s',
      }}
    >
      <div style={{
        width: 40, height: 40, borderRadius: 8, flexShrink: 0,
        background: 'rgba(61,255,160,0.08)', border: '1px solid rgba(61,255,160,0.15)',
        display: 'grid', placeItems: 'center', fontSize: 18,
      }}>
        {cert.icon}
      </div>
      <div>
        <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--p-text)', marginBottom: 2 }}>{cert.name}</div>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'var(--p-muted)' }}>{cert.org}</div>
      </div>
    </div>
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
