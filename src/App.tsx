import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Landing from "./Landing";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Analytics from "./Analytics";
import Admin from "./Admin";

const App: React.FC = () => {
  return (
    <>
      <h1>React Router</h1>

      <Navigation />

      <Routes>
        <Route index element={<Landing />} />
        <Route path="landing" element={<Landing />} />
        <Route path="home" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="admin" element={<Admin />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </>
  );
};

export default App;
