import { Link } from 'react-router-dom'

import styled from 'styled-components'

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
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 9px;

  > img {
    height: 56px;
    width: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;

    span {
      font-style: normal;
      font-size: 14px;
      line-height: 18px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`

export const Logout = styled.button`
  background: none;
  border: none;
  border-radius: 10%;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 36px;
  }

  &:hover {
    > svg {
      color: ${({ theme }) => theme.COLORS.ORANGE};
    }
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.COLORS.ORANGE};
    outline-offset: 4px;

    > svg {
      color: ${({ theme }) => theme.COLORS.ORANGE};
    }
  }
`
