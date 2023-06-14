import { useState } from 'react'

import { Outlet, useLocation } from 'react-router-dom'

import {
	NavbarWrapper,
	StyledMenuIcon,
	StyledNavTitle,
	StyledMenuWrapper,
	StyledMenuList,
	StyledListItem,
} from './styles/Navbar.styled.js'

const navbarOptions = [
	{ name: 'Home', link: '/', title: 'Mini Games' },
	{ name: 'Tic-Tac-Toe', link: '/tic-tac-toe', title: 'Tic-Tac-Toe' },
	{ name: 'Hangman', link: '/hangman', title: 'Hangman' },
	{ name: 'Memory Match', link: '/memory-match', title: 'Memory Match' },
]

export const Navbar = () => {
	const [active, setActive] = useState(false)
	const [showMenu, setShowMenu] = useState(false)

	const pathname = useLocation()

	const handleMenuToggle = () => {
		setShowMenu(!showMenu)
	}

	const handleActiveToggle = () => {
		setActive(!active)
		setShowMenu(!showMenu)
	}

	const RenderTitle = () => {
		if (pathname.pathname === '/') {
			return <StyledNavTitle>MINI GAMES</StyledNavTitle>
		} else {
			return (
				<StyledNavTitle>
					{pathname.pathname.toUpperCase().slice(1)}
				</StyledNavTitle>
			)
		}
	}

	return (
		<>
			<NavbarWrapper>
				<StyledMenuWrapper>
					<StyledMenuIcon onClick={handleMenuToggle} />
					<RenderTitle />
					{showMenu && (
						<StyledMenuList>
							{navbarOptions.map((option, index) => (
								<StyledListItem
									activeClass='active'
									key={index}
									to={option.link}
									onClick={handleActiveToggle}>
									{option.name}
								</StyledListItem>
							))}
						</StyledMenuList>
					)}
				</StyledMenuWrapper>
			</NavbarWrapper>
			<Outlet />
		</>
	)
}
