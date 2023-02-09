import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';
import Courses from './components/courses';
import About from './components/about';
import Reviews from './components/Reviews';
import Notes from './components/notes';
import ModelTest from './components/modelTest';
import Transformation from './components/transformation';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/notes" element={<Notes />}></Route>
          <Route path="/transformation" element={<Transformation />}></Route>
          <Route path="/modelTest" element={<ModelTest />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/reviews" element={<Reviews />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
