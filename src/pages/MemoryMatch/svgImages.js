const images = [
	{
		id: 1,
		name: 'Square',
		svgPath: 'M10 10h80v80h-80v-80Z',
		matched: false,
	},
	{
		id: 2,
		name: 'Triangle',
		svgPath: 'M50 10l40 80l-80 0Z',
		matched: false,
	},
	{
		id: 3,
		name: 'Circle',
		svgPath: 'M50 10a1 1 0 0 1 0 80a1 1 0 0 1 0-80Z',
		matched: false,
	},
	{
		id: 4,
		name: 'Diamond',
		svgPath: 'M50 10l30 40l-30 40l-30-40Z',
		matched: false,
	},
	{
		id: 5,
		name: 'Hexagon',
		svgPath: 'M27.5 10l45 0l17.5 40l-17.5 40l-45 0l-17.5-40Z',
		matched: false,
	},
	{
		id: 6,
		name: 'Pentagon',
		svgPath: 'M50 10l40 35l-15 45l-50 0l-15-45Z',
		matched: false,
	},
	{
		id: 7,
		name: 'Octagon',
		svgPath: 'M34 10l32 0l24 24l0 32l-24 24l-32 0l-24-24l0-32Z',
		matched: false,
	},
	{
		id: 8,
		name: 'Plus',
		svgPath: 'M10 40h30v-30h20v30h30v20h-30v30h-20v-30h-30v-20Z',
		matched: false,
	},
	{
		id: 9,
		name: 'Cross',
		svgPath: 'M29 15l21 21l21-21l14 14l-21 21l21 21l-14 14l-21-21l-21 21l-14-14l21-21l-21-21l14-14Z',
		matched: false,
	},
	{
		id: 10,
		name: 'Arrow',
		svgPath: 'M5 50l45-45l0 30l45-10l0 50l-45-10l0 30Z',
		matched: false,
	},
	{
		id: 11,
		name: 'Lightning Bolt',
		svgPath: 'M40 5h41l-28 36h14l-41 54l14-41h-14l14-49Z',
		matched: false,
	},
	{
		id: 12,
		name: 'Heart',
		svgPath: 'M50 20c-45-35-70 15 0 75c70-60 45-110 0-75Z',
		matched: false,
	},
	{
		id: 13,
		name: 'Star',
		svgPath: 'M50 5l12 34l33 0l-27 22l11 34l-29-21l-29 21l11-34l-27-22l33 0Z',
		matched: false,
	},
	{
		id: 14,
		name: 'Moon',
		svgPath: 'M82 7a50 45 0 1 0 0 87a56 51 0 0 1 0-87Z',
		matched: false,
	},
	{
		id: 15,
		name: 'Sun',
		svgPath: 'M67.5 31a2 2 135 0 0-37 37a2 2 135 0 0 37-37zm5 42l10 10m-1-25l13 3m-13-20l13-3m-21-11l10-10m-25 1l3-13m-20 13l-3-13m-11 21l-10-10m1 25l-13-3m13 20l-13 3m21 11l-10 10m25-1l-3 13m20-13l3 13Z',
		matched: false,
	},
	{
		id: 16,
		name: 'Cloud',
		svgPath: 'M86 77h-68a2 2 90 0 1-2-26a18 18 90 0 1 22-18a8 8 90 0 1 44 13a16 16 90 0 1 3 31Z',
		matched: false,
	},
]

export { images }
