import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import AboutSection from './components/About';
import EducationSection from './components/Education';

function App() {
  return (
    <div style={{ backgroundColor: '#0A0A0A', color: '#FFFFFF', minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <Footer />
    </div>
  );
}

export default App;
