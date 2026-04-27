import { motion } from 'motion/react';
import { useState } from 'react';

const projects = [
  {
    num: '01', title: 'Odisha Tourism', link: 'https://odisha-tourism-fullstack.vercel.app/',
    desc: 'A responsive full-stack tourism website showcasing the beauty of Odisha. Deployed on Vercel with clean UI and smooth navigation.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
  },
  {
    num: '02', title: 'Skyline Weather App', link: 'https://skyline-weather-app.vercel.app/',
    desc: 'Real-time weather application with live API integration, dynamic visuals that adapt to conditions, and a clean modern interface.',
    tags: ['JavaScript', 'Weather API', 'CSS'],
  },
  {
    num: '03', title: 'CampusTick', link: 'https://campustick.vercel.app/',
    desc: 'Led the Frontend team to build a campus task & event management platform. Focused on intuitive UI/UX design and responsive layouts.',
    tags: ['Frontend Lead', 'UI/UX', 'Team Project'],
  },
  {
    num: '04', title: 'Traffic Simulation System', link: null,
    desc: 'A 4-way traffic intersection simulator built with Python & Pygame. Features realistic signal logic, multithreading, and collision-free vehicle movement.',
    tags: ['Python', 'Pygame', 'Multithreading'],
  },
  {
    num: '05', title: 'Health Data Analysis', link: null,
    desc: 'Internship project analyzing healthcare datasets. Built Excel-based data pipelines and Tableau dashboards to surface clinical and operational insights.',
    tags: ['Excel', 'Tableau', 'Data Viz', 'Deloitte'],
  },
];

export function Projects() {
  return (
    <section id="projects" style={{ padding: '6rem 3rem', maxWidth: 1100, margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div style={sectionLabel}>// 02. projects</div>
        <h2 style={sectionTitle}>What I've Built</h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} />
        ))}

        {/* More coming soon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: projects.length * 0.08 }}
          style={{ ...cardBase, borderStyle: 'dashed', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', minHeight: 200 }}
        >
          <div style={{ color: 'var(--p-muted)', fontSize: '2rem', marginBottom: '1rem' }}>+</div>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--p-muted)', marginBottom: '0.6rem' }}>More Coming Soon</div>
          <div style={{ fontSize: '0.82rem', color: 'var(--p-muted)' }}>Always building. Check GitHub for latest work.</div>
          <a href="https://github.com/Aer0-1" target="_blank" rel="noopener noreferrer"
            style={{ marginTop: '1rem', ...btnGhost, fontSize: 12, padding: '8px 18px' }}>
            View GitHub ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        ...cardBase,
        borderColor: hovered ? 'rgba(61,255,160,0.3)' : 'var(--p-border)',
        transform: hovered ? 'translateY(-4px)' : 'none',
        transition: 'border-color 0.3s, transform 0.3s',
      }}
    >
      {/* Top gradient line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: 'linear-gradient(90deg, var(--p-accent), var(--p-accent2))',
        opacity: hovered ? 1 : 0, transition: 'opacity 0.3s',
      }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'rgba(61,255,160,0.4)', letterSpacing: '0.08em' }}>{project.num}</span>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: 'var(--p-accent2)', textDecoration: 'none', opacity: 0.7 }}>
            ↗ Live
          </a>
        )}
      </div>
      <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--p-text)', marginBottom: '0.6rem' }}>{project.title}</div>
      <div style={{ fontSize: '0.88rem', color: 'var(--p-muted)', lineHeight: 1.6, marginBottom: '1.2rem' }}>{project.desc}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {project.tags.map(t => (
          <span key={t} style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, padding: '3px 10px', background: 'rgba(61,255,160,0.06)', color: 'var(--p-accent)', borderRadius: 4, border: '1px solid rgba(61,255,160,0.15)' }}>
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

const cardBase: React.CSSProperties = {
  background: 'var(--p-card)', border: '1px solid var(--p-border)',
  borderRadius: 12, padding: '1.5rem', position: 'relative', overflow: 'hidden',
};

const btnGhost: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center',
  border: '1px solid var(--p-border)', color: 'var(--p-text)',
  fontFamily: "'Space Mono', monospace", fontSize: 13,
  padding: '12px 24px', borderRadius: 6, textDecoration: 'none', letterSpacing: '0.04em',
};

const sectionLabel: React.CSSProperties = {
  fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'var(--p-accent)',
  letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem',
};

const sectionTitle: React.CSSProperties = {
  fontFamily: "'Syne', sans-serif",
  fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em',
  color: 'var(--p-text)', marginBottom: '3rem',
};
