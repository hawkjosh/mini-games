import { createGlobalStyle } from 'styled-components'

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
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
  
  @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap');

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
    font-family: 'Open Sans', sans-serif;
    overflow-x: hidden;
  }
`

export { responsive, GlobalStyle }
