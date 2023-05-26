import * as React from 'react'

import { Box, Paper } from '@mui/material'

import { sx } from './testpageSX.js'

export const TestPage = () => {
	const [count, setCount] = React.useState(0)

	const handleInc = () => {
		setCount((prevCount) => (prevCount += 1))
	}

	const handleDec = () => {
		setCount((prevCount) => (prevCount -= 1))
	}

	const handleReset = () => {
		setCount(0)
	}

	return (
		<Box sx={sx.container}>
			<Paper
				sx={sx.container.card}
				elevation={15}>
				<Box sx={sx.container.card.cardHeader}>
					<Box sx={sx.container.card.cardHeader.txt}>Button Counter</Box>
				</Box>
				<Box sx={sx.container.card.cardBody}>
					<Box
						sx={sx.container.card.cardBody.countBtn}
						onClick={handleInc}>
						<Box sx={sx.container.card.cardBody.countBtn.txt}>➕</Box>
					</Box>
					<Box
						sx={sx.container.card.cardBody.countBtn}
						onClick={handleDec}>
						<Box sx={sx.container.card.cardBody.countBtn.txt}>➖</Box>
					</Box>
					<Box sx={sx.container.card.cardBody.countBadge}>
						<Box sx={sx.container.card.cardBody.countBadge.txt}>
							Count = {count}
						</Box>
					</Box>
				</Box>
				<Box sx={sx.container.card.cardFooter}>
					<Box
						sx={sx.container.card.cardFooter.resetBtn}
						onClick={handleReset}>
						<Box sx={sx.container.card.cardFooter.resetBtn.txt}>Reset</Box>
					</Box>
				</Box>
			</Paper>
		</Box>
	)
}
