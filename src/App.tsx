import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ backgroundColor: '#0A0A0A', color: '#FFFFFF', minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
