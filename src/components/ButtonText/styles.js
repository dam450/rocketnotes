import styled from 'styled-components'

export const Container = styled.button`
  padding: 5px;
  margin: 3px;

  font-size: 16px;
  line-height: 21px;
  text-align: center;

  color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};

  background: none;
  border: none;
  border-radius: 10%;

  &:focus-visible {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    outline: 2px solid ${({ theme }) => theme.COLORS.ORANGE};
    outline-offset: 3px;
  }

  &:hover {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    text-decoration: underline;
  }
`