import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

import { MenuIcon } from '../MenuIcon.jsx'

import { responsive } from '../../../../GlobalStyle.js'

const NavbarWrapper = styled.nav`
	position: relative;
	width: 100%;
	height: auto;
	min-height: 4rem;
	background: hsl(210, 79%, 46%);
	padding: 1.5rem 1rem;
	box-shadow: 0 0.5rem 0.75rem 0.125rem hsla(210, 79%, 46%, 0.25);
`
const StyledMenuWrapper = styled.div`
	position: relative;
	height: 100%;
	min-height: 4rem;
`

const StyledMenuIcon = styled(MenuIcon)`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	width: 1.625rem;
	fill: white;
	cursor: pointer;
	z-index: 1;

	${responsive.tablet`
    width: 2.5rem;
  `}

	${responsive.laptop`
    width: 3rem;
  `}
`

const StyledNavTitle = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	text-align: center;
	color: white;
	font-size: 2rem;

	${responsive.tablet`
    font-size: 3rem;
  `}

	${responsive.laptop`
    font-size: 4rem;
  `}
`

const StyledMenuList = styled.div`
	position: absolute;
	top: 95%;
	left: 0.5%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	background: white;
	border-radius: 0.25rem;
	box-shadow: 0px 5px 5px -3px hsla(0, 0%, 0%, 0.2),
		0px 8px 10px 1px hsla(0, 0%, 0%, 0.14),
		0px 3px 14px 2px hsla(0, 0%, 0%, 0.12);
	overflow-y: scroll;
	z-index: 1;
	scrollbar-width: none;

	${responsive.tablet`
    top: 97.5%;
  `}

	${responsive.laptop`
    top: 100%;
  `}
`

const StyledListItem = styled(NavLink)`
	text-decoration: none;
	transition: 0.2s;
	color: hsl(210, 79%, 46%);
	font-weight: 400;
	font-size: 1.125rem;
	width: 100%;
	padding: 0.75rem 1.25rem;

	&.${(props) => props.activeClass} {
		font-weight: 700;
		background: hsla(210, 79%, 46%, 0.2);
	}

	&:hover {
		background: hsla(210, 79%, 46%, 0.1);
	}

	${responsive.tablet`
    font-size: 1.25rem;
  `}

	${responsive.laptop`
    font-size: 1.375rem;
  `}
`

export {
	NavbarWrapper,
	StyledMenuIcon,
	StyledNavTitle,
	StyledMenuWrapper,
	StyledMenuList,
	StyledListItem,
}
