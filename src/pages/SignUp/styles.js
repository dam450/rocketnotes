import styled from 'styled-components'
import backgroundImg from '../../assets/bg-sign.png'

export const Container = styled.div`
  height: 100vh;
  
  display: flex;
  align-items: stretch;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a:last-child {
    margin-top: 80px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }


`

export const Background = styled.div`
  flex: 1;
  background: linear-gradient(-90deg, #312e38, #312e3866),
    url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  /* opacity: 0.2;  */
`