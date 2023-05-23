import turnZeroImg from './images/turnZeroImg.svg'
import turnOneImg from './images/turnOneImg.svg'
import turnTwoImg from './images/turnTwoImg.svg'
import turnThreeImg from './images/turnThreeImg.svg'
import turnFourImg from './images/turnFourImg.svg'
import turnFiveImg from './images/turnFiveImg.svg'
import turnSixImg from './images/turnSixImg.svg'
import turnSevenImg from './images/turnSevenImg.svg'
import turnEightImg from './images/turnEightImg.svg'

const hangmanContainerSX = {
	gridTemplateColumns: {
		mobile: '100%',
		tablet: '50% 50%',
		laptop: '40% 60%',
	},
	rowGap: {
		mobile: '1rem',
		tablet: '1.5rem',
		laptop: '1rem',
	},
	paddingX: {
		mobile: '1rem',
		tablet: '1.5rem',
		laptop: '2rem',
	},
}

const hangmanImgSX = {
	gridColumn: {
		mobile: '1 / 1',
		tablet: '1 / 2',
		laptop: '1 / 2',
	},
	gridRow: {
		mobile: '1 / 2',
		tablet: '1 / 2',
		laptop: '1 / 3',
	},
	width: {
		mobile: '70%',
		tablet: '100%',
		laptop: '100%',
	},
	maxWidth: {
		mobile: '25rem',
		tablet: '30rem',
		laptop: '35rem',
	},
}

const alphaBtnsAreaSX = {
	gridColumn: {
		mobile: '1 / 1',
		tablet: '2 / 3',
		laptop: '2 / 3',
	},
	gridRow: {
		mobile: '2 / 3',
		tablet: '1 / 2',
		laptop: '2 / 3',
	},
	gridTemplateColumns: {
		mobile: 'repeat(auto-fit, minmax(2.5rem, 1fr))',
		tablet: 'repeat(auto-fit, minmax(3.5rem, 1fr))',
		laptop: 'repeat(auto-fit, minmax(4.5rem, 1fr))',
	},
}

const alphaBtnSX = {
	fontSize: {
		mobile: '1rem',
		tablet: '1.25rem',
		laptop: '1.75rem',
	},
}

const playAreaSX = {
	gridColumn: {
		mobile: '1 / 1',
		tablet: '1 / 3',
		laptop: '2 / 3',
	},
	gridRow: {
		mobile: '3 / 4',
		tablet: '2 / 3',
		laptop: '1 / 2',
	},
}

const hiddenWordSX = {
	fontFamily: '"Open Sans", sans-serif',
	fontWeight: '500',
	textAlign: 'center',
	verticalAlign: 'middle',
	marginY: {
		mobile: '2rem',
		tablet: '2.25rem',
		laptop: '2.5rem',
	},
	fontSize: {
		mobile: '1.5rem',
		tablet: '2.5rem',
		laptop: '2.625rem',
	},
	letterSpacing: {
		mobile: '0.125',
		tablet: '0.25rem',
		laptop: '0.375rem',
	},
}

const finishMessageSX = {
	width: {
		mobile: '95%',
		tablet: '90%',
		laptop: '90%',
	},
	height: {
		mobile: '95%',
		tablet: '90%',
		laptop: '90%',
	},
}

const finishMessageTxt1SX = {
	fontSize: {
		mobile: '2.125rem',
		tablet: '4rem',
		laptop: '5.5rem',
	},
}

const finishMessageTxt2SX = {
	fontSize: {
		mobile: '1.5rem',
		tablet: '2.5rem',
		laptop: '3rem',
	},
}

const resetBtnSX = {
	width: {
		mobile: '50%',
		tablet: '37.5%',
		laptop: '25%',
	},
	fontSize: {
		mobile: '1.5rem',
		tablet: '2rem',
		laptop: '2.5rem',
	},
}

const alphabet = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
]

const wordOptions = [
	'maintenance',
	'emotion',
	'childhood',
	'dirt',
	'garbage',
	'basket',
	'player',
	'solution',
	'politics',
	'orange',
	'virus',
	'driver',
	'fishing',
	'pizza',
	'bread',
	'drawer',
	'moment',
	'paper',
	'resolution',
	'tea',
	'control',
	'potato',
	'hearing',
	'television',
	'assumption',
	'sir',
	'leadership',
	'midnight',
	'feedback',
	'technology',
	'temperature',
	'economics',
	'setting',
	'message',
	'penalty',
	'university',
	'army',
	'teacher',
	'way',
	'insect',
	'database',
	'software',
	'opinion',
	'connection',
	'historian',
	'strategy',
	'bird',
	'safety',
	'responsibility',
	'photo',
]

const images = [
	turnZeroImg,
	turnOneImg,
	turnTwoImg,
	turnThreeImg,
	turnFourImg,
	turnFiveImg,
	turnSixImg,
	turnSevenImg,
	turnEightImg,
]

export {
	hangmanContainerSX,
	hangmanImgSX,
	alphaBtnsAreaSX,
	alphaBtnSX,
	playAreaSX,
	hiddenWordSX,
	finishMessageSX,
	finishMessageTxt1SX,
	finishMessageTxt2SX,
	resetBtnSX,
	alphabet,
	wordOptions,
	images,
}
