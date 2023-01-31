import styled from 'styled-components'


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content;
    overflow-y: auto;
    padding-top: 64px;
  }
`

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 12px;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};

      &:hover {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
      }
    }
  }
`

export const Content = styled.div`
  max-width: 550px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: end;
  }

  > h1 {
    font-weight: 500;
    font-size: 36px;
    line-height: 47px;
    margin-bottom: 16px;
    padding-top: 64px;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    font-size: 16px;
    font-family: Roboto, sans-serif;
    line-height: 19px;
    text-align: justify;
    margin-bottom: 8px;
  }

  > button:last-child {
    margin: 120px 0 88px;
  }
`
