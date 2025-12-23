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
      <header id="about" className="Hero">
        <h2>Hi, I'm James!</h2>
        <p>A scientific software developer specializing in Machine Learning and Computational Methods.</p>
        <p>Currently, I'm working as a Software Engineering Intern at OPENLANE, building React / Next.js applications for vehicle remarketing.</p>
        <a href="https://github.com/james-mctighe">
          <button>View My Work</button>
        </a>
      </header>

      {/* Projects Section */}
      <section id="projects">
        <h3>Featured Projects</h3>
        <div className="grid">
          <Projects />
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" >
        <h3>Get In Touch</h3>
        <p>Email: james.mctighe97@gmail.com</p>
        <p>© 2025 James McTighe</p>
      </footer>
    </div>
  );
}

export default App;

