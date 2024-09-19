import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./containers/Register";
import Login from "./containers/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/ register" element={<Register />} />
        <Route path="/ login" element={<Login />} />
        <Route path="/ navbar" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
