
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    display: inline-flex;
    justify-content: start;
    flex-wrap: wrap;
    gap: 8px;

    div {
      width: fit-content;
      max-width: 200px;
    }
  }
`

export const Form = styled.form`
  max-width: 550px;
  margin: 38px auto;

  > header {
    
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 36px;

    h1 {
      font-size: 36px;
    }

    a {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

`
  