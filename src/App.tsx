import { motion } from 'framer-motion';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <div className="app">
      {/* Navigation with animation */}
      <motion.nav
        className="nav"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <a href="#hero">Գլխավոր</a>
        <a href="#about">Իմ մասին</a>
        <a href="#projects">Նախագծեր</a>
        <a href="#contact">Կապ</a>
      </motion.nav>

      {/* Sections */}
      <Hero/>
      <About />
      <Projects />
      <Contact />

      {/* Footer */}
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p>&copy; {new Date().getFullYear()} Աշխեն Սուքիասյան. Բոլոր իրավունքները պաշտպանված են:</p>
      </motion.footer>
    </div>
  );
}

export default App;