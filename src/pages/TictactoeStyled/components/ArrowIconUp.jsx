import { StyledArrowIcon } from './styles/Arrowicon.styled.js'

export const ArrowIconUp = ({ ...props }) => {
	return (
		<StyledArrowIcon
			viewBox='0 0 22 22'
			{...props}>
			<path d='M11 19c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0 2c5.52 0 10-4.48 10-10s-4.48-10-10-10s-10 4.48-10 10s4.48 10 10 10zm-1-10v4h2v-4h3l-4-4l-4 4h3z' />
		</StyledArrowIcon>
	)
}
