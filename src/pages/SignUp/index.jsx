import { useState } from 'react'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'

import { api } from '@/services/api'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container, Form, Background } from './styles'

export function SignUp() {

  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const navigate = useNavigate()

  function handleSignUp( e ) {
    console.log(name, email, password)

    if (!name || !email || !password) {
      return alert('Preencha todos os campos')
    }

    api.post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso!')
        navigate('/')
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Não foi possível cadastrar o usuário')
        }
      })
  }

  return (
    <Container>
      <Background />

      <Form>
        <h1>Rocketnotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          autoComplete="new-password"
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link to="/">Voltar para o login</Link>
      </Form>
    </Container>
  )
}
