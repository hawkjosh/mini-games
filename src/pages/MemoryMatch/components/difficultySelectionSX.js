const difficultyOptions = [
	{
		value: 'Easy',
		color: 'success',
	},
	{
		value: 'Medium',
		color: 'info',
	},
	{
		value: 'Hard',
		color: 'warning',
	},
	{
		value: 'Extreme',
		color: 'error',
	},
]

const difficultyMenuSX = {
	width: {
		mobile: '100%',
		tablet: '95%',
		laptop: '90%',
	},
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '1rem',
	border: '0.25rem solid hsl(210, 79%, 46%)',
	borderRadius: '1rem',
	padding: {
		mobile: '1rem',
		tablet: '1.25rem',
		laptop: '1.5rem',
	},
}

const difficultyMenuTitleSX = {
	fontSize: {
		mobile: '1.5rem',
		tablet: '2rem',
		laptop: '2.5rem',
	},
	fontWeight: '500',
	color: 'hsl(210, 79%, 46%)',
}

const difficultyMenuItemSX = {
	fontSize: '2rem',
}

export {
	difficultyOptions,
	difficultyMenuSX,
	difficultyMenuTitleSX,
	difficultyMenuItemSX,
}
