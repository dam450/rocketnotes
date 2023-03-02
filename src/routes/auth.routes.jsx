import { Routes, Route, Navigate } from 'react-router-dom'

import { SignIn } from '@/pages/SignIn'
import { SignUp } from '@/pages/SignUp'



export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />

      {/* qualquer outro valor de rota vai para SignIn  */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  )
}
