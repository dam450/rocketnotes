import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import avatarPlaceholder from '@/assets/avatar_placeholder.svg'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

import { Avatar, Container, Form } from './styles'
import { useAuth } from '@/hooks/auth'

import { api } from '@/services/api'
import { toast } from 'react-hot-toast'

export function Profile() {

  const { user, updateProfile } = useAuth()

  const [ name, setName ] = useState(user.name)
  const [ email, setEmail ] = useState(user.email)
  const [ password, setPassword ] = useState('')
  const [ newPassword, setNewPassword ] = useState('')

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const [avatar, setAvatar] = useState(avatarURL)
  const [ avatarFile, setAvatarFile ] = useState(null)

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }


  async function handleUserUpdate() {
    const userNewInfo = {
      name,
      email,
      password,
      new_password: newPassword
    }

    const userUpdated = Object.assign(user, userNewInfo)

    const toastLoading = toast.loading('Atualizando perfil...')
    await updateProfile({ user: userUpdated, avatarFile })
      .then(() => {
        toast.dismiss(toastLoading)
      })

    setPassword('')
    setNewPassword('')
  }

  async function handleChangeAvatar(event) {
    const [ file ] = event.target.files
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }


  return (
    <Container>
      <header>
        <button onClick={handleBack}>
          <FiArrowLeft size={24} />
        </button>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input
              onChange={handleChangeAvatar}
              type="file" id="avatar" accept="image/png, image/jpeg" />
          </label>
        </Avatar>
        <Input
          onChange={e => setName(e.target.value)}
          value={name}
          placeholder="Nome"
          type="text"
          icon={FiUser}
          autoComplete="given-name"
        />
        <Input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          autoComplete="email"
        />

        <Input
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          autoComplete="current-password"
        />
        <Input
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          autoComplete="new-password"
        />

        <Button title="Salvar" onClick={handleUserUpdate} />
      </Form>
    </Container>
  )
}
