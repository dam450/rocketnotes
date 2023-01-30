import { Container, Profile, Logout } from './styles'
import { RiShutDownLine } from 'react-icons/ri'

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/dam450.png" alt="foto do usuário" />
        <div>
          <span>Bem-vindo</span>
          <strong>Evandro Damaso</strong>
        </div>
      </Profile>
      <Logout type="button" title="Sair" aria-label="Sair">
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
