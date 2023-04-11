import { useRef, useState } from 'react'
import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

import { useAuth } from '@/hooks/auth'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container, Form, Background } from './styles'

export function SignIn() {

  const [email, setEmail] = useState('')
  const [ password, setPassword ] = useState('')

  const submitBtn = useRef()

  const { signIn } = useAuth()

  function handleSignIn(e) {
    e.preventDefault()

    if (!email || !password) {
      console.count('toast')
      return toast.error('Por favor, preencha e-mail e senha!')
    }

    const toastLoading = toast.loading('Aguarde...')
    submitBtn.current.disabled = true

    signIn({ email, password })
      .then(() => {
        toast.dismiss(toastLoading)
        submitBtn.current.disabled = false
      })


  }

  return (
    <Container>
      <Form>
        <h1>Rocketnotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button
          title="Entrar"
          type="submit"
          onClick={handleSignIn}
          ref={submitBtn}
        />

        <Link to="/register">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  )
}
