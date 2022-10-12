import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Single from "./Single";
import Auction from "./Auction";

const MainRoutes = () => {
  return (
    <Routes>
    
      <Route path="/" element={<Home />} />;
      <Route path="/auction" element={<Auction />} />

      <Route path="/auction/:id" element={<Single/> } />
    
    </Routes>
  );
};

export default MainRoutes;