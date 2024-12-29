import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div style={{ backgroundColor: '#0A0A0A', color: '#FFFFFF', minHeight: '100vh' }}>
      <Navbar />
    </div>
  );
}

export default App;
