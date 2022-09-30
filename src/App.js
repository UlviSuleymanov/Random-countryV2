import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Error from './pages/Error/Error';
import LandingPage from './pages/LandingPage/LandingPage';
import RandomCountryPage from './pages/RandomCountryPage/RandomCountryPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/random-country" element={<RandomCountryPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
