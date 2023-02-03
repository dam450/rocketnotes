import { Link } from 'react-router-dom'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

import { Avatar, Container, Form } from './styles'

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft size={24} />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="./img/avatar.svg" alt="foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" accept="image/png, image/jpeg" />
          </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          autoComplete="given-name"
        />
        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          autoComplete="email"
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          autoComplete="current-password"
        />
        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          autoComplete="new-password"
        />

        <Button title="Salvar" />
      </Form>
    </Container>
  )
}
