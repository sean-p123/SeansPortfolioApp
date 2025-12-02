import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import About from './components/About.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import { Navbar } from './components/Navbar.js';
import SeanHero from './components/SeanHero.js';
import Skills from './components/Skills.js';
function App() {
    return (_jsxs("div", { children: [_jsx(Navbar, {}), _jsx(SeanHero, {}), _jsx(Skills, {}), _jsx(About, {}), _jsx(Contact, {}), _jsx(Footer, {})] }));
}
export default App;
