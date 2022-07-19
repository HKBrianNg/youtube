import './App.css';
import Home from './component/Home';
import Test from './component/Test';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="test" element={<Test />} />
    </Routes>
  );
}

export default App;
