import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Notes from './components/notes';
import ModelTest from './components/modelTest';
import Transformation from './components/transformation';
import Tense from './components/tense';
import Wh from './components/wh';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/notes" element={<Notes />}></Route>
          <Route path="/transformation" element={<Transformation />}></Route>
          <Route path="/modelTest" element={<ModelTest />}></Route>
          <Route path="/tense" element={<Tense />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/wh" element={<Wh />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
