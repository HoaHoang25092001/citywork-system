import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/public/Home";
import endPoints from "./routers";
import Login from "./pages/public/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={endPoints.LOGIN} element={<Login />} />

        <Route path={endPoints.PUBLIC} element={<Home />} />

        <Route path={endPoints.ALL} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
