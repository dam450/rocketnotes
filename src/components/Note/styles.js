import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border: none;
  border-radius: 10px;
  padding: 16px 22px;

  margin-bottom: 16px;

  > h2 {
    flex: 1;
    text-align: left;
    font-size: 24px;
    margin-bottom: 24px;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;

  }
`