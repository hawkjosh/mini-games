import { Link } from 'react-router-dom'

import { MLBLogo } from './MLBLogo.jsx'
import { NFLLogo } from './NFLLogo.jsx'

import {
	StyledMenu,
	StyledTitle,
	StyledItemsGroup,
	StyledItem,
	StyledBonus,
	styledLink,
	styledLinkImg,
} from './styles/Levelselection.styled.js'

const levelOptions = [
	{
		value: 'Easy',
		color: 'hsl(123, 46%, 34%)',
	},
	{
		value: 'Medium',
		color: 'hsl(27, 98%, 47%)',
	},
	{
		value: 'Hard',
		color: 'hsl(0, 65%, 51%)',
	},
]

export const Levelselection = ({ onSelectOption }) => {
	const handleLevelSelect = (e) => {
		onSelectOption(e.target.value)
	}

	return (
		<StyledMenu>
			<StyledTitle>Select Difficulty Level:</StyledTitle>
			<StyledItemsGroup>
				{levelOptions.map((option, index) => (
					<StyledItem
						style={{ color: option.color }}
						key={index}
						value={option.value}
						onClick={handleLevelSelect}>
						{option.value}
					</StyledItem>
				))}
			</StyledItemsGroup>
			<StyledBonus>
				<a
					href='https://hawkjosh-memory-match.onrender.com/'
					target='_blank'
					rel='noreferrer'
					style={styledLink}>
					<MLBLogo style={styledLinkImg} />
					<NFLLogo style={styledLinkImg} />
				</a>
			</StyledBonus>
		</StyledMenu>
	)
}
