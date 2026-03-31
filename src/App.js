import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import Calendar from './components/Calendar';
import Footer from './components/Footer';
import Admin from './components/Admin';

function HomePage() {
  return (
    <>
      <Hero />
      <MissionVision />
      <Calendar />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
