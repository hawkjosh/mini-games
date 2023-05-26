const sx = {
	container: {
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '0 auto',

		card: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			gap: '2.5rem',
			'@media (max-width: 1279px)': {
				gap: '2rem',
			},
			'@media (max-width: 767px)': {
				gap: '1.5rem',
			},
			bgcolor: 'lightgray',
			border: '0.25rem solid yellow',
			borderRadius: '1.5rem',
			padding: '4rem',
			'@media (max-width: 1279px)': {
				padding: '3rem',
			},
			'@media (max-width: 767px)': {
				padding: '2rem',
			},

			cardHeader: {
				display: 'flex',
				placeContent: 'center',

				txt: {
					fontSize: '3rem',
					'@media (max-width: 1279px)': {
						fontSize: '2.5rem',
					},
					'@media (max-width: 767px)': {
						fontSize: '2rem',
					},
					fontWeight: 'bold',
					textDecoration: 'underline',
					color: 'hsl(250, 25%, 46%)',
				},
			},

			cardBody: {
				width: '100%',
				display: 'flex',
				placeContent: 'center',
				gap: '2.25rem',
				'@media (max-width: 1279px)': {
					gap: '1.5rem',
				},
				'@media (max-width: 767px)': {
					gap: '0.75rem',
				},

				countBtn: {
					display: 'flex',
					placeItems: 'center',
					border: '0.25rem solid hsl(250, 25%, 46%)',
					borderRadius: '1rem',
					bgcolor: 'white',
					padding: '0.5rem 1rem',
					'@media (max-width: 1279px)': {
						padding: '0.375rem 0.75rem',
					},
					'@media (max-width: 767px)': {
						padding: '0.25rem 0.5rem',
					},
					cursor: 'pointer',

					txt: {
						fontSize: '2.5rem',
						'@media (max-width: 1279px)': {
							fontSize: '2.25rem',
						},
						'@media (max-width: 767px)': {
							fontSize: '2rem',
						},
						fontWeight: 'bold',
					},
				},

				countBadge: {
					borderRadius: '1rem',
					border: '0.25rem solid white',
					bgcolor: 'hsl(250, 25%, 46%)',
					padding: '1rem',
					'@media (max-width: 1279px)': {
						padding: '0.75rem',
					},
					'@media (max-width: 767px)': {
						padding: '0.5rem',
					},
					pointerEvents: 'none',

					txt: {
						fontSize: '2.5rem',
						'@media (max-width: 1279px)': {
							fontSize: '2rem',
						},
						'@media (max-width: 767px)': {
							fontSize: '1.5rem',
						},
						fontWeight: 'bold',
						color: 'white',
						textAlign: 'center',
					},
				},
			},
			cardFooter: {
				display: 'flex',
				placeContent: 'center',

				resetBtn: {
					display: 'flex',
					placeItems: 'center',
					color: 'hsl(250, 25%, 46%)',
					border: '0.25rem solid hsl(250, 25%, 46%)',
					borderRadius: '1rem',
					bgcolor: 'white',
					padding: '0.5rem 1rem',
					cursor: 'pointer',
					transition: 'all 0.375s ease',
					'&:hover': {
						color: 'white',
						bgcolor: 'hsl(250, 25%, 46%)',
						borderColor: 'white',
					},

					txt: {
						fontSize: '2rem',
						'@media (max-width: 1279px)': {
							fontSize: '1.75rem',
						},
						'@media (max-width: 767px)': {
							fontSize: '1.5rem',
						},
						fontWeight: 'bold',
						textTransform: 'uppercase',
						transition: 'all 0.375s ease',
					},
				},
			},
		},
	},
}

export { sx }
