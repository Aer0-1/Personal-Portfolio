import { motion } from 'motion/react';

const stats = [
  { num: '424', label: 'Total Contributions' },
  { num: '64', label: 'Commits Last Year' },
  { num: '5+', label: 'Projects Deployed' },
  { num: '5', label: 'Certifications' },
];

export function Stats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      style={{
        background: 'var(--p-bg2)',
        borderTop: '1px solid var(--p-border)', borderBottom: '1px solid var(--p-border)',
        padding: '2rem 3rem', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 0,
      }}
    >
      {stats.map((s, i) => (
        <div key={i} style={{
          flex: 1, minWidth: 140, maxWidth: 200, textAlign: 'center', padding: '0 2rem',
          borderRight: i < stats.length - 1 ? '1px solid var(--p-border)' : 'none',
        }}>
          <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '2.2rem', fontWeight: 800, color: 'var(--p-accent)', display: 'block', letterSpacing: '-0.03em' }}>
            {s.num}
          </span>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'var(--p-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            {s.label}
          </span>
        </div>
      ))}
    </motion.div>
  );
}
