import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./containers/Register";
import Login from "./containers/Login";
import Navbar from "./components/Navbar";
import Contact from "./containers/Contact";
import Search from "./components/Search";
import Services from "./containers/Services";
import InfoContac from "./containers/InfoContac";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ login" element={<Login />} />
        <Route path="/ search" element={<><Navbar /><Search /></>} />
        <Route path="/ contact" element={<><Navbar /><Contact /></>} />
        <Route path="/ register" element={<Register />} />
        <Route path="/ services" element={<><Navbar /><Services /></>} />
        <Route path="/ infocontac" element={<><Navbar /><InfoContac /></>} />
        <Route index path="/" element={<><Navbar /><Search /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
