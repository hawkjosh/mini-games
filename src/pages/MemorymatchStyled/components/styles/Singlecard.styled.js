import styled from 'styled-components'

const StyledCard = styled.div`
	position: relative;
	border-radius: 1rem;
	cursor: grab;
	background-color: transparent;
	z-index: 0;
`

const StyledFront = styled.div`
	width: 100%;
	aspect-ratio: 1/1;
	background-color: hsl(360, 100%, 100%);
	border-radius: 1rem;
	position: absolute;
	display: flex;
	place-content: center;
	box-shadow: 0 0.25rem 0.25rem -0.25rem hsla(0, 0%, 0%, 0.2),
		0 0.5rem 0.5rem -0.25rem hsla(0, 0%, 0%, 0.2),
		0 0.25rem 0.5rem 0.25rem hsla(0, 0%, 0%, 0.2);
	transition: all 0.25s ease-out;
`

const StyledBack = styled.div`
	width: 100%;
	aspect-ratio: 1/1;
	background-image: linear-gradient(
		to bottom right,
		hsl(211, 100%, 25%),
		hsl(211, 100%, 50%),
		hsl(211, 100%, 35%)
	);
	background-size: 100%;
	border-radius: 1rem;
	box-shadow: 0 0.25rem 0.25rem -0.25rem hsla(0, 0%, 0%, 0.2),
		0 0.5rem 0.5rem -0.25rem hsla(0, 0%, 0%, 0.2),
		0 0.25rem 0.5rem 0.25rem hsla(0, 0%, 0%, 0.2);
	transition: all 0.25s ease-out;
`

export { StyledCard, StyledFront, StyledBack }
