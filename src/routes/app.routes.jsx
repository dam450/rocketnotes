import { Routes, Route, Navigate } from 'react-router-dom'

import { New } from '@/pages/New'
import { Home } from '@/pages/Home'
import { Profile } from '@/pages/Profile'
import { Details } from '@/pages/Details'
import { ErrorPage } from '@/pages/ErrorPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={'/home'} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />

      <Route path="*" element={<Navigate to={'/notfound'} replace/>} />
      <Route path="/notfound" element={<ErrorPage />} />
    </Routes>
  )
}
