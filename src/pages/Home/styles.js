import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;

  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas:
    'brand header'
    'menu search'
    'menu content'
    'newnote content';

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`

export const Brand = styled.div`
  grid-area: brand;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > h1 {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }
`

export const Menu = styled.ul`
  grid-area: menu;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  padding-top: 64px;

  > li {
    text-align: center;
  }
`

export const Search = styled.div`
  grid-area: search;
  padding: 64px 64px 0;
`

export const Content = styled.div`
  grid-area: content;
  background-color: yellow;
`

export const NewNote = styled.button`
  grid-area: newnote;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  font-size: 20px;
  line-height: 26px;
  border: none;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  justify-content: center;

  &:focus-visible {
    outline: ${({ theme }) => theme.COLORS.BACKGROUND_900} solid 2px;
    outline-offset: -5px;
  }

  > svg {
    margin-right: 8px;
  }
`