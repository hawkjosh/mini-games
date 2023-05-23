const tictactoeContainerSX = {
	gridTemplateColumns: {
		mobile: '1fr',
		tablet: '1fr',
		laptop: '40% 60%',
	},
	gap: {
		mobile: '2.5rem',
		tablet: '1.5rem',
		laptop: '0.75rem',
	},
	paddingX: {
		mobile: '1rem',
		tablet: '1.5rem',
		laptop: '2rem',
	},
}

const winningMessageTxtSX = {
	fontSize: {
		mobile: '4rem',
		tablet: '6rem',
		laptop: '8rem',
	},
}

const playAgainBtnSX = {
	fontSize: {
		mobile: '1.5rem',
		tablet: '2rem',
		laptop: '3rem',
	},
	fontFamily: '"Fredoka", sans-serif',
	color: 'white',
	bgcolor: 'green',
	border: '0.125rem solid white',
	borderRadius: '0.75rem',
	marginTop: '2.5rem',
	padding: '0.25rem 1rem',
	'&:hover': {
		color: 'green',
		bgcolor: 'white',
	},
}

export { tictactoeContainerSX, winningMessageTxtSX, playAgainBtnSX }
