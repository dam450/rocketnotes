import styled from 'styled-components'
import theme from '../../styles/theme'

/**
 * Header style
 */
export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 80px;

  background: #0f01;
`
