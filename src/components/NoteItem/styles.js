import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  place-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.BACKGROUND_900};

  margin-bottom: 8px;
  border-radius: 10px;
  padding: 0 20px;

  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : `none`};

  > input {
    height: 56px;
    width: 100%;

    color: ${({ theme }) => theme.COLORS.WHITE};

    font-family: 'Roboto, sans-serif';
    font-style: normal;
    font-size: 16px;

    background: transparent;
    border: none;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > button {
    background: none;
    border: none;
    height: 22px;
    width: 22px;
    border-radius: 5px;

    &:focus-visible {
      outline: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }


`
