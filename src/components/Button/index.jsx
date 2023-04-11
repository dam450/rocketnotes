import { forwardRef } from 'react'
import { Container } from './styles'

export const Button = forwardRef(({ title, ...rest }, ref) => {
  return (
    <Container type="button" {...rest} ref={ref}>
      {title}
    </Container>
  )
})
