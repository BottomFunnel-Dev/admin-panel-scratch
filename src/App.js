import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import Errror from "./components/Errror";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./components/Signup";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
