import { createGlobalStyle, css } from 'styled-components'

const CustomStyles = css`
	--font-family: 'Open Sans', sans-serif;
`

const breakpoints = {
	mobile: '20rem',
	tablet: '48rem',
	laptop: '80rem',
}

const responsive = Object.keys(breakpoints).reduce((acc, label) => {
	acc[label] = (...args) => `
		@media (min-width: ${breakpoints[label]}) {
			${args.join('')}
		}
	`
	return acc
}, {})

const GlobalStyle = createGlobalStyle`
  ${CustomStyles}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *::-webkit-scrollbar {
    display: none;
  }

  html {
    height: 100%;
    scrollbar-width: none;
  }

  body {
    width: 100%;
    min-height: 100vh;
    font-family: var(--font-family);
    overflow-x: hidden;
  }
`

export { responsive, GlobalStyle }
