import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BuyPage from "./routes/BuyPage";
import SellPage from "./routes/SellPage";
import UserPage from "./routes/UserPage";
import NavBar from "./components/shared/NavBar";

function App() {
  return (
    <div className="App">
      <div style={{ minHeight: "100vh" }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/*" element={<BuyPage />} />
          <Route path="/add" element={<SellPage />} />
          <Route path="/user/*" element={<UserPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
