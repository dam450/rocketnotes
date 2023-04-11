import { FiX, FiPlus } from 'react-icons/fi'

import { Container } from './styles'
import { forwardRef } from 'react'

export const NoteItem = forwardRef(({ isNew, value, onClick, ...rest }, ref) => {
  return (
    <Container isNew={isNew}>
      <input value={value} {...rest} readOnly={!isNew} ref={ref} />

      <button
        onClick={onClick}
        type="button"
        title={isNew ? 'Adicionar' : 'Remover'}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        {isNew ? <FiPlus size={24} /> : <FiX size={24} />}
      </button>
    </Container>
  )
})
