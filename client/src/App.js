import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './layout/header';
import About from './pages/aboutas/aboutas';
import Contact from './pages/contact/contact';
import Courses from './pages/courses/courses';
import Elements from './pages/elements/elements';
import Home from './pages/home/home';
import News from './pages/news/news';

function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/about as" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/elements" element={<Elements />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/:_id" element={<Details />} /> */}
      </Routes>
    </div>
  );
}

export default App;
