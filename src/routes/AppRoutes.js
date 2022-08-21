import React from "react";
import { Route, Routes } from "react-router-dom";


import Dashboard from "../pages/Dashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />

      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
