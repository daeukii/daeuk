import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Perfume from './pages/Perfume/Perfume';
import Body from './pages/Body/Body';
import Candle from './pages/Candle/Candle';
import Grooming from './pages/Grooming/Grooming';
import Mbti from './pages/MBTI/Mbti';
import BackToTopText from './components/ScrollButton/BackToTopText';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
    <BackToTopText />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/perfume" element={<Perfume />} />
          <Route path="/body" element={<Body />} />
          <Route path="/candle" element={<Candle />} />
          <Route path="/grooming" element={<Grooming />} />
          <Route path="/Mbti" element={<Mbti />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;