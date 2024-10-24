import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./containers/Register";
import Login from "./containers/Login";
import Navbar from "./components/Navbar";
import Contact from "./containers/Contact";
import InfoContac from "./containers/InfoContac";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ navbar" element={<Navbar />} />
        <Route path="/ login" element={<Login />} />
        <Route path="/ contact" element={<Contact />} />
        <Route path="/ register" element={<Register />} />
        <Route path="/ info" element={<InfoContac />} />

        <Route index path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
