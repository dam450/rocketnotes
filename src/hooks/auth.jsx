import { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'

import { api } from '@/services/api'
import { Jwt } from '@/utils/Jwt'

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
        //alert(error.response.data.message)
        toast.error(error.response.data.message)
      else
        //alert('Não foi possível autenticar')
        toast.error('Não foi possível autenticar')
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

      await api.put('/users', user)

      delete user.password
      delete user.new_password

      localStorage.setItem('@rocketnotes:user', JSON.stringify(user))

      setData({ user, token: data.token })
      toast.success('Perfil atualizado com sucesso')
    } catch (error) {
      if (error.response) toast.error(error.response.data.message)
      else toast.error('Não foi possível atualizar o perfil!')
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@rocketnotes:token')
    const user = JSON.parse(localStorage.getItem('@rocketnotes:user'))

    if (token && user) {
      const jwtToken = new Jwt(token)
      if (jwtToken.isExpired()) {
        signOut()
      }

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
