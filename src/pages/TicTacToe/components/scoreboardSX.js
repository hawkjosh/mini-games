const scoreContainerSX = {
	flexDirection: {
		mobile: 'row',
		tablet: 'row',
		laptop: 'column',
	},
	gap: {
		mobile: '2rem',
		tablet: '3rem',
		laptop: '4rem',
	},
}

const scoreWrapperSX = {
	flexDirection: {
		tablet: 'row',
		laptop: 'column',
	},
	gap: {
		tablet: '1.25rem',
		laptop: '1.75rem',
	},
}

const scoreSX = {
	fontSize: {
		mobile: '1.25rem',
		tablet: '1.75rem',
		laptop: '2.5rem',
	},
	letterSpacing: {
		mobile: '0.125rem',
		tablet: '0.25rem',
		laptop: '0.625rem',
	},
	gap: {
		mobile: '0.5rem',
		tablet: '0.75rem',
		laptop: '1rem',
	},
	padding: {
		mobile: '0.5rem',
		tablet: '0.75rem',
		laptop: '1rem',
	},
}

const arrowIconSX = {
	display: {
		mobile: 'none',
		tablet: 'block',
		laptop: 'block',
	},
	fontSize: {
		tablet: '2.5rem',
		laptop: '3rem',
	},
	transform: {
		tablet: 'rotate(-90deg)',
		laptop: 'rotate(0deg)',
	},
}

const resetBtnSX = {
	fontSize: {
		mobile: '1rem',
		tablet: '1.125rem',
		laptop: '1.25rem',
	},
	bgcolor: 'gray',
	padding: {
		mobile: '0.125rem 0.25rem',
		tablet: '0.25rem 0.375rem',
		laptop: '0.375rem 0.5rem',
	},
	'&:hover': { bgcolor: 'green' },
}

export {
	scoreContainerSX,
	scoreWrapperSX,
	scoreSX,
	arrowIconSX,
	resetBtnSX,
}
