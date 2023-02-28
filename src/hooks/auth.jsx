import { createContext, useContext, useState, useEffect } from 'react'

import { api } from '@/services/api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {

  const [ data, setData ] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password })
      const { token, user } = response.data

      localStorage.setItem('@rocketnotes:token', token)
      localStorage.setItem('@rocketnotes:user', JSON.stringify(user))

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ token, user })

    } catch (error) {
      if (error.response)
        alert(error.response.data.message)
      else
        alert('Não foi possível autenticar')
    }
  }

  function signOut() {
    const token = localStorage.removeItem('@rocketnotes:token')
    const user = localStorage.removeItem('@rocketnotes:user')

    setData({})
  }

  async function updateProfile({ user, avatarFile }) {
    try {

      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('avatar', avatarFile)

        const response = await api.patch('/users/avatar', fileUploadForm)
        user.avatar = response.data.avatar

      }
      else {
        user.avatar = data.user.avatar
      }


      await api.put('/users', user)
      localStorage.setItem('@rocketnotes:user', JSON.stringify(user))

      setData({ user, token: data.token })
      alert('Perfil atualizado com sucesso')
    } catch (error) {
      if (error.response) alert(error.response.data.message)
      else alert('Não foi possível atualizar o perfil')
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@rocketnotes:token')
    const user = JSON.parse(localStorage.getItem('@rocketnotes:user'))

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ token, user })
    }

  }, [])

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      updateProfile,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
