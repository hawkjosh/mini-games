import styled from 'styled-components'

import { responsive } from '../../../../GlobalStyle.js'

const StyledArrowIcon = styled.svg`
  display: none;

	${responsive.tablet`
    display: block;
    width: 2.5rem;
    transform: rotate(-90deg);
  `}

  ${responsive.laptop`
    display: block;
    width: 3rem;
    transform: rotate(0deg);
  `}
`

export { StyledArrowIcon }
