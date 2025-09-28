
import About from './components/About.js';
import { Navbar } from './components/Navbar.js';
import SeanHero from './components/SeanHero.js';
import Skills from './components/Skills.js';
import Work from './components/Work.js';
function App() {
  return (
    <div>
    <Navbar/>
    <SeanHero/>
    <Skills/>
    <About/>
    <Work/>
    </div>
  );
}

export default App
