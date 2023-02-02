import { FiX, FiPlus } from 'react-icons/fi'

import { Container } from './styles'

export function NoteItem({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input value={value} {...rest} readOnly={!isNew} />

      <button
        onClick={onClick}
        type="button"
        title={isNew ? 'Adicionar' : 'Remover'}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}
