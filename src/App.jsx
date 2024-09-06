import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./pages/create/Create";
import Edit from "./pages/edit/Edit";
import Product from "./pages/product/Product";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/edit" element={<Edit/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/create" element={<Create/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
