import { motion } from 'motion/react';

export function GitHub() {
  return (
    <section id="github" style={{
      background: 'var(--p-bg2)',
      borderTop: '1px solid var(--p-border)', borderBottom: '1px solid var(--p-border)',
      padding: '5rem 3rem',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div style={sectionLabel}>// 05. github</div>
          <h2 style={sectionTitle}>GitHub Activity</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}
        >
          {[
            'https://github-readme-stats.vercel.app/api?username=Aer0-1&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0f151e&title_color=3dffa0&icon_color=00c8ff&text_color=6b7a90',
            'https://streak-stats.demolab.com/?user=Aer0-1&theme=tokyonight&hide_border=true&background=0f151e&ring=3dffa0&fire=ffd060&currStreakLabel=3dffa0',
            'https://github-readme-stats.vercel.app/api/top-langs/?username=Aer0-1&layout=compact&theme=tokyonight&hide_border=true&bg_color=0f151e&title_color=3dffa0&text_color=6b7a90',
          ].map((src, i) => (
            <div key={i} style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid var(--p-border)' }}>
              <img src={src} alt="GitHub Stats" loading="lazy" style={{ width: '100%', display: 'block' }} />
            </div>
          ))}
        </motion.div>
      </div>
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
  color: 'var(--p-text)', marginBottom: '2rem',
};
