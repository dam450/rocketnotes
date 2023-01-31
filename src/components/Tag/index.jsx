import { Container } from './styles'

export function Tag({ title }) {
  
  return (
    <Container>
      {title || 'tag'}
    </Container>
  )
}