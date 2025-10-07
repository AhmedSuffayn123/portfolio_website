import { Routes, Route } from "react-router-dom";
import AboutPage from './Pages/About/About';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />
    </Routes>
  );
}

export default App;