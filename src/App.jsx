import { Routes, Route } from "react-router-dom";
import AboutPage from './Pages/About/About';
import AssignProject from "./Pages/Hire/AssingProject";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />
      <Route path="/Hire" element= {<AssignProject/>} />
    </Routes>
  );
}

export default App;