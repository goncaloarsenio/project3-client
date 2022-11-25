import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Partners from './pages/Partners'
import Article from './pages/Article';

function App() {
  return (
    <div className="App">
  <Navbar/>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/partners" element={<Partners/>}/>
  <Route path="/articles" element={<Article/>}/>
  
  </Routes>
    </div>
  );
}

export default App;
