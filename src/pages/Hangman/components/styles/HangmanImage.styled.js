import styled from 'styled-components'

import { responsive } from '../../../../GlobalStyle.js'

const StyledImage = styled.svg`
	${responsive.mobile`
    grid-column: 1 / 1;
    grid-row: 1 / 2;
    width: 70%;
    max-width: 25rem;
  `}

	${responsive.tablet`
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    width: 100%;
    max-width: 30rem;
  `}

  ${responsive.laptop`
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    width: 100%;
    max-width: 35rem;
  `}
`

export { StyledImage }
