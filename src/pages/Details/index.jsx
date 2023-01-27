import { Container } from './styles'

import { Button } from '../../components/Button'

export function Details() {
  return (
    <Container>
      <h1>Rocketnotes</h1>
      <p>Anote seus ideias.</p>
      <Button title='Entrar'/>
      <Button title='Cadastrar'/>
      <Button title='Voltar'/>

    </Container>
  )
}

//export default () => (<>Rocketnotes</>)
