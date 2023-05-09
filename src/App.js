import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import Perfume from './pages/Perfume/Perfume';
import Body from './pages/Body/Body';
import Candle from './pages/Candle/Candle';
import Grooming from './pages/Grooming/Grooming';
import Mbti from './pages/MBTI/Mbti';
import BackToTopText from './components/ScrollButton/BackToTopText';
import Announcement from './Announcement';
import Login from './pages/Login/Login';
import Recommend from './pages/Recommend/Recommend';
import Register from './pages/Register/Register';
import PostMain from './pages/Ddd/PostMain';
import PostView from './pages/Ddd/PostView';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
      <Announcement/>
    <BackToTopText />
        <Header/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/perfume" element={<Perfume />} />
          <Route path="/body" element={<Body />} />
          <Route path="/candle" element={<Candle />} />
          <Route path="/grooming" element={<Grooming />} />
          <Route path="/Mbti" element={<Mbti />} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/PostMain" element={<PostMain/>}/>
          <Route path="/Recommend" element={<Recommend/>}/>
          <Route exact path='/postView/:no' component={PostView} />
        <Route exact path='/' component={PostMain} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;