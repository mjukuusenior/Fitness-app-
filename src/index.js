import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Workouts from "./pages/Workouts";
import Nutrition from "./pages/Nutrition";
import Progress from "./pages/Progress";

function App() {
  return (
    <Router>
      <nav style={{ display: "flex", gap: "10px", padding: "10px", background: "#eee" }}>
        <Link to="/">Home</Link>
        <Link to="/workouts">Workouts</Link>
        <Link to="/nutrition">Nutrition</Link>
        <Link to="/progress">Progress</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);