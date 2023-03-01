import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    --scrollbar-thumb-color: rgba(255, 255, 255, 0.15);
    --scrollbar-thumb-color-hover: rgba(255, 255, 255, 0.2);
    --scrollbar-bg-color: rgba(0, 0, 0, 0);
    --scrollbar-bg-color-hover: rgba(0, 0, 0, 0.1);
  }


  /* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-bg-color);
}

/* Chrome, Edge and Safari */
*::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

::-webkit-scrollbar-corner {
    background-color: var(--scrollbar-bg-color);
}

*::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: var(--scrollbar-bg-color);
  margin-block: 5px;
}

*::-webkit-scrollbar-track:hover {
  background-color: transparent;
  background-color: var(--scrollbar-bg-color-hover);
}

*::-webkit-scrollbar-track:active {
  background-color: transparent;
  background-color: var(--scrollbar-bg-color-hover);
}

*::-webkit-scrollbar-thumb {
  border-radius: 100vw;
  background-clip: content-box;
  background-color: var(--scrollbar-thumb-color);
  border: solid 3px transparent;
  border-right-width: 3px;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: var(--scrollbar-thumb-color-hover);
}

*::-webkit-scrollbar-thumb:active {
  background-color: var(--scrollbar-thumb-color-hover);
}

  body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};
    min-height: 100vh;

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

`
