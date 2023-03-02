import { useNavigate } from 'react-router-dom'

import { Container, Profile, Logout } from './styles'

import { useAuth } from '@/hooks/auth'
import { api } from '@/services/api'

import { RiShutDownLine } from 'react-icons/ri'
import avatarPlaceholder from '@/assets/avatar_placeholder.svg'

export function Header() {

  const { signOut, user } = useAuth()

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  const navigate = useNavigate()

  function handleSignOut() {
    signOut()
    navigate('/')
  }

  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarURL} alt={user.name} />
        <div>
          <span>Bem-vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout
        onClick={handleSignOut}
        type="button"
        title="Sair"
        aria-label="Sair"
      >
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
