import { motion } from 'motion/react';

const groups = [
  {
    title: 'Languages',
    items: ['Python', 'JavaScript', 'Java', 'C', 'SQL', 'HTML & CSS'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Tableau', 'Power BI', 'Excel (Advanced)', 'GitHub & Git', 'VS Code / Eclipse', 'Vercel'],
  },
  {
    title: 'Concepts',
    items: ['Machine Learning', 'Data Structures & Algorithms', 'DBMS', 'Object-Oriented Programming', 'Operating Systems', 'UX Design'],
  },
];

export function Skills() {
  return (
    <section id="skills" style={{ padding: '6rem 3rem', maxWidth: 1100, margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div style={sectionLabel}>// 03. skills</div>
        <h2 style={sectionTitle}>Toolkit</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}
      >
        {groups.map((g, i) => (
          <div key={i} style={{ background: 'var(--p-card)', border: '1px solid var(--p-border)', borderRadius: 12, padding: '1.5rem' }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'var(--p-accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              {g.title}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {g.items.map((item, j) => (
                <li key={j} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  fontSize: '0.9rem', color: 'var(--p-muted)',
                  padding: '6px 0',
                  borderBottom: j < g.items.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                }}>
                  <span style={{ color: 'var(--p-accent)', fontSize: 11 }}>▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

const sectionLabel: React.CSSProperties = {
  fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'var(--p-accent)',
  letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem',
};

const sectionTitle: React.CSSProperties = {
  fontFamily: "'Syne', sans-serif",
  fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em',
  color: 'var(--p-text)', marginBottom: '3rem',
};
