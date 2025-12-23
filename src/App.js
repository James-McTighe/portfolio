import Projects from "./components/Projects";
import './App.css';
// Main App Component
function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '1.6' }}>
      {/* Navigation */}
      <nav className="App-header">
        <h1>James McTighe M.S.</h1>
      </nav>

      {/* About Section */}
      <header id="about" style={styles.hero}>
        <h2>Hi, I'm James!</h2>
        <p>A scientific software develop specilizing in Machine Learning and Computational Methods.</p>
        <p>Currently, I'm working as a Software Engineering Intern at OPENLANE, building a React / Next.js application for vehicle remarketing.</p>
        <a href="https://github.com/james-mctighe">
          <button style={styles.button}>View My Work</button>
        </a>
      </header>

      {/* Projects Section */}
      <section id="projects" style={styles.section}>
        <h3>Featured Projects</h3>
        <div style={styles.grid}>
          <Projects />
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" style={styles.footer}>
        <h3>Get In Touch</h3>
        <p>Email: james.mctighe97@gmail.com</p>
        <p>© 2025 James McTighe</p>
      </footer>
    </div>
  );
}


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

