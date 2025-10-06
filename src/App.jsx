import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Pages/About/About';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
    </Routes>
  );
}

export default App;