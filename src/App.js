import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./renderer/pages/Login";
import Dashboard from "./renderer/pages/Dashboard";
import SalesMenu from  "./renderer/pages/Sales/SalesMenu"
import POS from "./renderer/pages/Sales/Sales"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/salesMenu" element={<SalesMenu />} />
        <Route path="/sales/new" element={<POS />} />
      </Routes>
    </Router>
  );
}

export default App;
