import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from "./components/First";
import Second from "./components/Second";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<First />}></Route>
        <Route path="/2" element={<Second />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
