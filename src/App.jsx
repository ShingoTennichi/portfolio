import './App.css';
import AboutMe from './pages/AboutMe';
import LP from './pages/LandingPage';
import Navigation from './components/Navigation';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
    return (
        <div className='container'>
            <div className='background'></div>
            <Navigation />
            <LP />
            <Projects />
            <Skills />
            <AboutMe />
        </div>
    );
}

export default App;

