import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GameManager } from "./components";
import React from "react";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:user_id" element={<GameManager />} />
      </Routes>
    </BrowserRouter>
  );
}