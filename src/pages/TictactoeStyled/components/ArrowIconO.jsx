import { StyledArrowIcon } from './styles/Arrowicon.styled.js'

export const ArrowIconO = ({ ...props }) => {
	return (
		<StyledArrowIcon
			viewBox='0 0 22 22'
			{...props}>
			<path d='M11 3c4.41 0 8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8m0-2c-5.52 0-10 4.48-10 10s4.48 10 10 10s10-4.48 10-10s-4.48-10-10-10zm1 10v-4h-2v4h-3l4 4l4-4h-3z' />
		</StyledArrowIcon>
	)
}
