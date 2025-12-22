import React from 'react';

// Main App Component
function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '1.6' }}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <h1>My Portfolio</h1>
        <div>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#projects" style={styles.navLink}>Projects</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" style={styles.hero}>
        <h2>Hi, I'm [Your Name]</h2>
        <p>A Full-Stack Developer specializing in React and modern web technologies.</p>
        <button style={styles.button}>View My Work</button>
      </header>

      {/* Projects Section */}
      <section id="projects" style={styles.section}>
        <h3>Featured Projects</h3>
        <div style={styles.grid}>
          <ProjectCard title="Project One" description="A cool React app." link="#" />
          <ProjectCard title="Project Two" description="An e-commerce site." link="#" />
          <ProjectCard title="Project Three" description="A weather dashboard." link="#" />
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" style={styles.footer}>
        <h3>Get In Touch</h3>
        <p>Email: yourname@example.com</p>
        <p>© 2025 [Your Name]</p>
      </footer>
    </div>
  );
}

// Sub-component for Project Cards
const ProjectCard = ({ title, description, link }) => (
  <div style={styles.card}>
    <h4>{title}</h4>
    <p>{description}</p>
    <a href={link} style={{ color: '#007bff' }}>View GitHub</a>
  </div>
);

// Basic inline styles (Use Tailwind CSS for a 2025 modern look!)
const styles = {
  nav: { display: 'flex', justifyContent: 'space-between', padding: '1rem 5%', background: '#f8f9fa', borderBottom: '1px solid #ddd' },
  navLink: { margin: '0 10px', textDecoration: 'none', color: '#333' },
  hero: { padding: '100px 5%', textAlign: 'center', background: '#e9ecef' },
  section: { padding: '50px 5%' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' },
  card: { padding: '20px', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'center' },
  button: { padding: '10px 20px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' },
  footer: { padding: '30px 5%', textAlign: 'center', background: '#343a40', color: '#fff' }
};

export default App;

