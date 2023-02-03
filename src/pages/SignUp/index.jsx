import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container, Form, Background } from './styles'

export function SignUp() {
  return (
    <Container>
      <Background />

      <Form>
        <h1>Rocketnotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Crie sua conta</h2>
        <Input placeholder="Nome" icon={FiUser} />
        <Input placeholder="E-mail" icon={FiMail} />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          autoComplete="new-password"
        />
        <Button title="Cadastrar" />
        <Link to="/" >Voltar para o login</Link>
      </Form>
    </Container>
  )
}
