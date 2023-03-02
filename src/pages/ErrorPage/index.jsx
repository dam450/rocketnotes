// import { useRouteError } from 'react-router-dom'

import { Container } from './styles'

export function ErrorPage() {
  // const error = useRouteError()
  // console.error(error)

  return (
    <Container id="error-page">
      <h1>Oops!</h1>
      <p>Desculpe, ocorreu um erro inesperado.</p>
      <p>
        {/* <i>{error.statusText || error.message}</i> */}
      </p>
    </Container>
  )
}
