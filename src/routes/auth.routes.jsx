import { Routes, Route, Navigate } from "react-router-dom";

import { SignIn } from "@/pages/SignIn";
import { SignUp } from "@/pages/SignUp";

const user = JSON.parse(localStorage.getItem("@rocketnotes:user"));

console.log("user:", user);

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />

      {/* qualquer rota não autenticada vai para SignIn  */}
      {!user && <Route path="*" element={<Navigate to="/" />} />}
    </Routes>
  );
}
