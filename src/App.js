import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./renderer/pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
