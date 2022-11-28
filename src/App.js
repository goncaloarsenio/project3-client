import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Partners from './pages/Partners'
import Article from './pages/Article';
import Footer from './components/Footer';
import CreateArticle from './pages/CreateArticle.jsx'

function App() {
  return (
    <div className="App">
  <Navbar/>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/partners" element={<Partners/>}/>
  <Route path="/articles" element={<Article/>}/>
  <Route path="/create-article" element={<CreateArticle />}></Route>
  
  
  </Routes>
  <Footer/>
    </div>
  );
}

export default App;
