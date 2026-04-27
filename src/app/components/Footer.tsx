export function Footer() {
  return (
    <footer style={{
      textAlign: 'center', padding: '2rem',
      fontFamily: "'Space Mono', monospace", fontSize: 12, color: 'var(--p-muted)',
      borderTop: '1px solid var(--p-border)',
    }}>
      <p>
        Built with ❤️ by <span style={{ color: 'var(--p-accent)' }}>Subham Behera</span> · Bhubaneswar, Odisha · 2025
      </p>
    </footer>
  );
}
