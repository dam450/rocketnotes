import styled from 'styled-components'

export const Container = styled.button`
  padding: 5px;
  margin: 3px;

  font-size: 16px;
  line-height: 21px;
  text-align: center;

  color: ${({ theme }) => theme.COLORS.ORANGE };
  
  background: none;
  border: none;

  &:focus{
    outline: auto;
  }
`