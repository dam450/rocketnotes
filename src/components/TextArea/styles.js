import styled from 'styled-components'

export const Container = styled.textarea`
  resize: none;

  width: 100%;
  min-height: 150px;

  padding: 12px;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border: none;

  margin-block: 8px;
  border-radius: 10px;

  &:placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`