import styled from 'styled-components'

import { responsive } from '../../../../GlobalStyle.js'

const StyledContainer = styled.div`
	max-width: 90rem;
	position: relative;
	display: grid;
	place-items: center;
	place-content: center;
	column-gap: 1rem;
	margin: 1rem auto;
	grid-template-columns: 100%;
	row-gap: 1rem;
	padding: 0 1rem;

	${responsive.tablet`
    grid-template-columns: 50% 50%;
    row-gap: 1.5rem;
    padding: 0 1.5rem;
  `}

  ${responsive.laptop`
    grid-template-columns: 40% 60%;
    row-gap: 1rem;
    padding: 0 2rem;
  `}
`

const StyledAreaOne = styled.div`
	width: 100%;
	display: grid;
	gap: 1rem;
	grid-column: 1 / 1;
	grid-row: 2 / 3;
	grid-template-columns: repeat(auto-fit, minmax(2.5rem, 1fr));

	${responsive.tablet`
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    grid-template-columns: repeat(auto-fit, minmax(3.5rem, 1fr));
  `}

  ${responsive.laptop`
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    grid-template-columns: repeat(auto-fit, minmax(4.5rem, 1fr));
  `}
`

const StyledAreaOneContent = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	color: hsl(210, 79%, 46%);
	aspect-ratio: 1/1;
	border: 0.15rem solid hsl(214, 100%, 59%);
	border-radius: 0.5rem;
	font-size: 1rem;

  &:hover {
		cursor: pointer;
		box-shadow: -0.25rem 0.25rem 0.5rem hsl(0, 0%, 53%);
	}

	${responsive.tablet`
    font-size: 1.25rem;
  `}

  ${responsive.laptop`
    font-size: 1.75rem;
  `}
`

const StyledAreaTwo = styled.div`
	width: 100%;
	background-color: hsl(0, 0%, 83%);
	border-radius: 0.5rem;
	box-shadow: 0 0 0.75rem hsl(210, 13%, 50%);
	grid-column: 1 / 1;
	grid-row: 3 / 4;

	${responsive.tablet`
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  `}

${responsive.laptop`
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  `}
`

const StyledAreaTwoContent = styled.div`
	font-family: 'Open Sans', sans-serif;
	font-weight: 500;
	text-align: center;
	vertical-align: middle;
	font-size: 1.5rem;
	letter-spacing: 0.125rem;
	margin: 2rem auto;

	${responsive.tablet`
    font-size: 2.5rem;
    letter-spacing: 0.25rem;
    margin: 2.25rem auto;
  `}

	${responsive.laptop`
    font-size: 2.625rem;
    letter-spacing: 0.375rem;
    margin: 2.5rem auto;
  `}
`

const StyledEndMessage = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: hsla(0, 0%, 0%, 0.75);
`

const StyledTextOne = styled.div`
	font-weight: bold;
	font-size: 2.125rem;

	${responsive.tablet`
    font-size: 4rem;
  `}

  ${responsive.laptop`
    font-size: 5.5rem;
  `}
`

const StyledTextTwo = styled.div`
	color: hsl(360, 100%, 100%);
	margin-top: 1rem;
	font-size: 1.5rem;

	${responsive.tablet`
    font-size: 2.5rem;
  `}

  ${responsive.laptop`
    font-size: 3rem;
  `}
`

const StyledButton = styled.button`
	font-family: 'Open Sans', sans-serif;
	font-weight: 500;
	line-height: 1.75;
	letter-spacing: 0.125rem;
	text-transform: uppercase;
	text-decoration: none;
	color: hsl(0, 0%, 100%);
	background-color: hsl(120, 100%, 30%);
	border: 0.25rem solid hsl(0, 0%, 100%);
	border-radius: 0.75rem;
	margin-top: 2.5rem;
	padding: 0.25rem 1rem;
	transition: all 0.25s ease;
	font-size: 1.5rem;

	&:hover {
		cursor: pointer;
		color: hsl(120, 100%, 30%);
		background-color: hsl(0, 0%, 100%);
		border-color: hsl(120, 100%, 30%);
	}

	${responsive.tablet`
    font-size: 2rem;
  `}

  ${responsive.laptop`
    font-size: 2.5rem;
  `}
`

export {
	StyledContainer,
	StyledAreaOne,
	StyledAreaOneContent,
	StyledAreaTwo,
	StyledAreaTwoContent,
	StyledEndMessage,
	StyledTextOne,
	StyledTextTwo,
	StyledButton,
}
