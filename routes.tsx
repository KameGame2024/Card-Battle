import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GameManager } from "./components";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:user_id" element={<GameManager />} />
        <Route path="/" element={<GameManager />}></Route>
      </Routes>
    </BrowserRouter>
  );
}