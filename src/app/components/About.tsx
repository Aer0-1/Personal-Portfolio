import { motion } from 'motion/react';

const pills = [
  { label: 'Python', highlight: true },
  { label: 'JavaScript', highlight: true },
  { label: 'Data Analytics', highlight: false },
  { label: 'Machine Learning', highlight: false },
  { label: 'Full-Stack', highlight: false },
  { label: 'Tableau', highlight: false },
  { label: 'SQL', highlight: true },
];

const timeline = [
  {
    date: 'Nov 2025 – Dec 2025',
    title: 'Data Analyst Intern',
    sub: 'Deloitte · Forage',
    items: ['Analyzed healthcare datasets using Excel', 'Built Tableau dashboards & visual reports', 'Delivered actionable business insights'],
  },
  {
    date: 'Aug 2023 – June 2027',
    title: 'B.Tech Computer Engineering',
    sub: 'C.V. Raman Global University · Bhubaneswar',
    items: ['Specialization in Software Engineering', 'DSA, ML, DBMS, OS, OOP'],
  },
];

export function About() {
  return (
    <section id="about" style={{ padding: '6rem 3rem', maxWidth: 1100, margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div style={sectionLabel}>// 01. about</div>
        <h2 style={sectionTitle}>Who I Am</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}
      >
        {/* Left: text */}
        <div>
          {[
            <>Hey there! I'm <strong style={{ color: 'var(--p-text)' }}>Subham Behera</strong>, a B.Tech Computer Engineering (Software Engineering) undergraduate at <strong style={{ color: 'var(--p-text)' }}>C.V. Raman Global University</strong>, Bhubaneswar. Graduating June 2027.</>,
            <>Deeply interested in <strong style={{ color: 'var(--p-text)' }}>Data Analytics, ML-driven applications</strong>, and crafting clean full-stack web experiences. I love turning ideas into real, deployed products.</>,
            <>Interned at <strong style={{ color: 'var(--p-text)' }}>Deloitte (Forage)</strong> where I analyzed healthcare datasets, built Tableau dashboards, and delivered visual insights to stakeholders.</>,
          ].map((text, i) => (
            <p key={i} style={{ color: 'var(--p-muted)', lineHeight: 1.8, marginBottom: '1.2rem', fontSize: '1.05rem' }}>{text}</p>
          ))}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: '1.5rem' }}>
            {pills.map(p => (
              <span key={p.label} style={{
                fontFamily: "'Space Mono', monospace", fontSize: 12, padding: '6px 14px',
                border: `1px solid ${p.highlight ? 'rgba(61,255,160,0.4)' : 'var(--p-border)'}`,
                borderRadius: 100, color: p.highlight ? 'var(--p-accent)' : 'var(--p-muted)',
              }}>{p.label}</span>
            ))}
          </div>
        </div>

        {/* Right: timeline */}
        <div>
          <div style={{ ...sectionLabel, marginBottom: '1.5rem' }}>// Experience &amp; Education</div>
          <div style={{ position: 'relative', paddingLeft: '2rem' }}>
            <div style={{ position: 'absolute', left: 0, top: 8, bottom: 0, width: 1, background: 'var(--p-border)' }} />
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                style={{ position: 'relative', marginBottom: '2.5rem', paddingLeft: '1.5rem' }}
              >
                <div style={{ position: 'absolute', left: '-2rem', top: 8, width: 8, height: 8, borderRadius: '50%', background: 'var(--p-accent)', boxShadow: '0 0 12px rgba(61,255,160,0.5)' }} />
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: 'var(--p-accent)', marginBottom: 4 }}>{item.date}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--p-text)', marginBottom: 4 }}>{item.title}</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--p-muted)', marginBottom: 8 }}>{item.sub}</div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {item.items.map((li, j) => (
                    <li key={j} style={{ fontSize: '0.9rem', color: 'var(--p-muted)', lineHeight: 1.7, paddingLeft: '1rem', position: 'relative', marginBottom: 4 }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--p-accent)', fontSize: 12 }}>→</span>
                      {li}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
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
