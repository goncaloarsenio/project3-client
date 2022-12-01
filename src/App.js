import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Partners from "./pages/Partners";
import Article from "./pages/Article";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CreateArticle from "./pages/CreateArticle.jsx";
import EditArticle from "./pages/EditArticle.jsx";
import Profile from './pages/Profile'
import ExampleArticle from "./components/ExampleArticle";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import ArticleDetails from "./components/ArticleDetails";
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
    <Helmet>
                <meta charSet="utf-8" />
                <title>Job Coach</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="JobCoach" />
            </Helmet>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses/>}> </Route>
        <Route path="/partners" element={<Partners />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-article" element={<CreateArticle />}></Route>
        <Route path="/edit-article/:id" element={<EditArticle />}></Route>
        <Route path="/profile/:id" element={<Profile/>}> </Route>
        <Route path="/ex-article" element={<ExampleArticle />}></Route>
        <Route path="/course/:id" element={<CourseDetails/>}> </Route>
        <Route path="/article/:id" element={<ArticleDetails/>}> </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
