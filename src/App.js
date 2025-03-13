import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./renderer/pages/Login";
import Dashboard from "./renderer/pages/Dashboard"; // Nueva ventana del punto de venta


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
