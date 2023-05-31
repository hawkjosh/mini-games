import styled from 'styled-components'
import { respondTo } from './_respondTo.js'

const StyledArrowIcon = styled.svg`
	${respondTo.mobile`
    display: none;
  `}

	${respondTo.tablet`
    display: block;
    width: 2.5rem;
    transform: rotate(-90deg);
  `}

  ${respondTo.laptop`
    display: block;
    width: 3rem;
    transform: rotate(0deg);
  `}
`

export {
	StyledArrowIcon,
}
